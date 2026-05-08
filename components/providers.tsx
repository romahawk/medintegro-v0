"use client"

import type { ReactNode } from "react"
import { LanguageProvider, useLanguage } from "@/lib/i18n"
import { ThemeProvider } from "@/lib/theme"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

function AppShell({ children }: { children: ReactNode }) {
  const { mounted } = useLanguage()

  return (
    <div
      className="flex min-h-screen flex-col"
      style={{ opacity: mounted ? 1 : 0, transition: "opacity 150ms ease-in" }}
    >
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppShell>{children}</AppShell>
      </LanguageProvider>
    </ThemeProvider>
  )
}
