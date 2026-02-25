"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"

export type Theme = "dark" | "light"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark")

  useEffect(() => {
    const stored = localStorage.getItem("medintegro-theme") as Theme | null
    if (stored === "light" || stored === "dark") {
      setThemeState(stored)
      applyThemeClass(stored)
    }
  }, [])

  const applyThemeClass = (t: Theme) => {
    document.documentElement.classList.toggle("dark", t === "dark")
    document.documentElement.classList.toggle("light", t === "light")
  }

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t)
    localStorage.setItem("medintegro-theme", t)
    applyThemeClass(t)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === "dark" ? "light" : "dark"
      localStorage.setItem("medintegro-theme", next)
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
