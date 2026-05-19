"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"

export type Theme = "dark" | "light"
type ThemePreference = Theme | "system"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)
const THEME_STORAGE_KEY = "medintegro-theme"

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function getStoredThemePreference(): ThemePreference | null {
  const stored = localStorage.getItem(THEME_STORAGE_KEY)
  return stored === "light" || stored === "dark" || stored === "system" ? stored : null
}

function resolveThemePreference(): Theme {
  const stored = getStoredThemePreference()
  if (stored === "light" || stored === "dark") return stored
  return getSystemTheme()
}

function applyThemeClass(t: Theme) {
  document.documentElement.classList.toggle("dark", t === "dark")
  document.documentElement.classList.toggle("light", t === "light")
  document.documentElement.style.colorScheme = t
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark")

  useEffect(() => {
    const resolvedTheme = resolveThemePreference()
    setThemeState(resolvedTheme)
    applyThemeClass(resolvedTheme)
  }, [])

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const handleSystemThemeChange = () => {
      const stored = getStoredThemePreference()
      if (!stored || stored === "system") {
        const nextTheme = getSystemTheme()
        setThemeState(nextTheme)
        applyThemeClass(nextTheme)
      }
    }

    media.addEventListener("change", handleSystemThemeChange)
    return () => media.removeEventListener("change", handleSystemThemeChange)
  }, [])

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t)
    localStorage.setItem(THEME_STORAGE_KEY, t)
    applyThemeClass(t)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === "dark" ? "light" : "dark"
      localStorage.setItem(THEME_STORAGE_KEY, next)
      applyThemeClass(next)
      return next
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("useTheme must be used within ThemeProvider")
  return context
}
