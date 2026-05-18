"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  type ReactNode,
} from "react"
import { useLanguage } from "@/lib/i18n"
import { useTheme } from "@/lib/theme"

declare global {
  interface Window {
    $crisp?: Array<unknown>
    CRISP_WEBSITE_ID?: string
    CRISP_RUNTIME_CONFIG?: {
      locale?: string
    }
  }
}

interface CrispContextValue {
  enabled: boolean
  openChat: () => void
}

const CrispContext = createContext<CrispContextValue | null>(null)
const CRISP_SCRIPT_ID = "crisp-chat-script"

function queueCrispCommand(command: unknown[]) {
  if (typeof window === "undefined") return
  window.$crisp = window.$crisp || []
  window.$crisp.push(command)
}

export function CrispProvider({ children }: { children: ReactNode }) {
  const { locale: activeLocale } = useLanguage()
  const { theme } = useTheme()
  const hasInjectedScript = useRef(false)

  const websiteId = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID?.trim()
  const provider = process.env.NEXT_PUBLIC_CHAT_PROVIDER?.trim().toLowerCase() || "crisp"
  const widgetEnabled = process.env.NEXT_PUBLIC_CHAT_WIDGET_ENABLED === "true"
  const enabled = Boolean(websiteId && provider === "crisp" && widgetEnabled)
  const locale = activeLocale === "en" ? "en" : "uk"

  useEffect(() => {
    if (!enabled || hasInjectedScript.current || typeof window === "undefined") return

    window.$crisp = window.$crisp || []
    window.CRISP_WEBSITE_ID = websiteId
    window.CRISP_RUNTIME_CONFIG = { locale }

    const script = document.createElement("script")
    script.id = CRISP_SCRIPT_ID
    script.src = "https://client.crisp.chat/l.js"
    script.async = true
    script.onload = () => {
      queueCrispCommand(["config", "color:mode", [theme === "light" ? "light" : "dark"]])
      queueCrispCommand(["do", "chat:hide"])
    }

    document.head.appendChild(script)
    hasInjectedScript.current = true

    return () => {
      script.onload = null
    }
  }, [enabled, locale, theme, websiteId])

  useEffect(() => {
    if (!enabled || typeof window === "undefined") return

    window.CRISP_RUNTIME_CONFIG = {
      ...(window.CRISP_RUNTIME_CONFIG || {}),
      locale,
    }

    queueCrispCommand(["config", "color:mode", [theme === "light" ? "light" : "dark"]])
    queueCrispCommand(["do", "chat:hide"])
  }, [enabled, locale, theme])

  const openChat = useCallback(() => {
    if (!enabled) return

    queueCrispCommand(["config", "color:mode", [theme === "light" ? "light" : "dark"]])
    queueCrispCommand(["do", "chat:show"])
    queueCrispCommand(["do", "chat:open"])
  }, [enabled, theme])

  const value = useMemo(
    () => ({
      enabled,
      openChat,
    }),
    [enabled, openChat]
  )

  return <CrispContext.Provider value={value}>{children}</CrispContext.Provider>
}

export function useCrispChat() {
  const context = useContext(CrispContext)
  if (!context) throw new Error("useCrispChat must be used within CrispProvider")
  return context
}
