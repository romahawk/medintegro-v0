"use client"

import { createContext, useContext, useState, useEffect, useLayoutEffect, useCallback, type ReactNode } from "react"
import { usePathname } from "next/navigation"
import { translations } from "./translations"
import { HOME_SEO, PAGE_SEO } from "./seo"

export type Locale = "en" | "ua"
type StoredLocale = "en" | "uk"

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  mounted: boolean
}

const LanguageContext = createContext<LanguageContextType | null>(null)
const LANGUAGE_STORAGE_KEY = "medintegro-language"
const LEGACY_LANGUAGE_STORAGE_KEY = "medintegro-locale"
// Titles come from the same registry the server metadata is built from, so the
// browser tab always matches the language and route rendered on screen.
const HOME_TITLES: Record<Locale, string> = {
  en: HOME_SEO.en.title,
  ua: HOME_SEO.uk.title,
}

// English titles for routes that only have Ukrainian copy in the SEO registry.
const EN_PAGE_TITLES: Record<string, string> = {
  "/equipment/or-lighting": "Surgical Lights & LED Operating Room Lighting | Medintegro",
}
const PAGE_TITLE_KEYS = [
  { path: "/solutions", key: "nav.services" },
  { path: "/services", key: "nav.services" },
  { path: "/equipment", key: "nav.equipment" },
  { path: "/projects", key: "nav.projects" },
  { path: "/partners", key: "nav.partners" },
  { path: "/about", key: "nav.about" },
  { path: "/contact", key: "nav.contact" },
]

function toLocale(value: string | null): Locale | null {
  if (value === "en") return "en"
  if (value === "uk" || value === "ua") return "ua"
  return null
}

function toStoredLocale(locale: Locale): StoredLocale {
  return locale === "ua" ? "uk" : "en"
}

function detectPreferredLanguage(): Locale {
  const saved = toLocale(localStorage.getItem(LANGUAGE_STORAGE_KEY))
  if (saved) return saved

  const legacy = toLocale(localStorage.getItem(LEGACY_LANGUAGE_STORAGE_KEY))
  if (legacy) return legacy

  const languages =
    navigator.languages?.length && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language]

  const hasUkrainian = languages.some((lang) => lang.toLowerCase().startsWith("uk"))

  return hasUkrainian ? "ua" : "en"
}

function storeLanguagePreference(locale: Locale) {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, toStoredLocale(locale))
  localStorage.removeItem(LEGACY_LANGUAGE_STORAGE_KEY)
}

function getDocumentTitle(pathname: string, locale: Locale, translate: (key: string) => string) {
  if (pathname === "/" || pathname === "/en") return HOME_TITLES[locale]

  if (locale === "en") {
    const englishTitle = EN_PAGE_TITLES[pathname]
    if (englishTitle) return englishTitle
  } else {
    const ukrainianTitle = PAGE_SEO[pathname]?.title
    if (ukrainianTitle) return ukrainianTitle
  }

  const match = PAGE_TITLE_KEYS.find(({ path }) => pathname === path || pathname.startsWith(`${path}/`))
  if (!match) return HOME_TITLES[locale]

  return `${translate(match.key)} | Medintegro`
}

function syncDocumentLanguage(pathname: string, locale: Locale, translate: (key: string) => string) {
  document.documentElement.lang = locale === "ua" ? "uk" : "en"
  document.title = getDocumentTitle(pathname, locale, translate)
}

/**
 * Language a given route is published in. Ukrainian is the canonical content
 * language for the whole site; /en is the only English URL.
 */
function routeLocale(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ua"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  // Seeded from the route so the server-rendered HTML - what a crawler sees -
  // is always in the language that URL is published in. User preference is
  // applied afterwards, in the effect below, and only on bilingual routes.
  const [locale, setLocaleState] = useState<Locale>(() => routeLocale(pathname))
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (routeLocale(pathname) === "en") {
      setLocaleState("en")
      storeLanguagePreference("en")
      setMounted(true)
      return
    }

    setLocaleState(detectPreferredLanguage())
    setMounted(true)
  }, [pathname])

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
    storeLanguagePreference(l)
  }, [])

  const t = useCallback(
    (key: string): string => {
      const entry = translations[key]
      if (!entry) return key
      return entry[locale] || entry.en || key
    },
    [locale]
  )

  useLayoutEffect(() => {
    if (!mounted) return
    syncDocumentLanguage(pathname, locale, t)

    const animationFrame = window.requestAnimationFrame(() => {
      syncDocumentLanguage(pathname, locale, t)
    })
    const timeout = window.setTimeout(() => {
      syncDocumentLanguage(pathname, locale, t)
    }, 0)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.clearTimeout(timeout)
    }
  }, [locale, mounted, pathname, t])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used within LanguageProvider")
  return context
}
