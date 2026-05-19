"use client"

import { createContext, useContext, useState, useEffect, useLayoutEffect, useCallback, type ReactNode } from "react"
import { usePathname } from "next/navigation"
import { translations } from "./translations"

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
const HOME_TITLES: Record<Locale, string> = {
  en: "Medintegro | Operating Room & Medical Systems Integration",
  ua: "Medintegro | Інтеграція операційних та медичних систем",
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

  const match = PAGE_TITLE_KEYS.find(({ path }) => pathname === path || pathname.startsWith(`${path}/`))
  if (!match) return HOME_TITLES[locale]

  return `${translate(match.key)} | Medintegro`
}

function syncDocumentLanguage(pathname: string, locale: Locale, translate: (key: string) => string) {
  document.documentElement.lang = locale === "ua" ? "uk" : "en"
  document.title = getDocumentTitle(pathname, locale, translate)
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [locale, setLocaleState] = useState<Locale>("ua")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (pathname === "/en" || pathname.startsWith("/en/")) {
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
