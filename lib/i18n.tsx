"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import { translations } from "./translations"

export type Locale = "en" | "ua"

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  mounted: boolean
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ua")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("medintegro-locale") as Locale | null
    if (stored === "en" || stored === "ua") {
      setLocaleState(stored)
    }
    setMounted(true)
  }, [])

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
    localStorage.setItem("medintegro-locale", l)
  }, [])

  const t = useCallback(
    (key: string): string => {
      const entry = translations[key]
      if (!entry) return key
      return entry[locale] || entry.en || key
    },
    [locale]
  )

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
