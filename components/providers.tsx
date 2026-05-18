"use client"

import type { ReactNode } from "react"
import { CrispProvider } from "@/components/chat/crisp-provider"
import { SupportLauncher } from "@/components/chat/support-launcher"
import { LanguageProvider, useLanguage } from "@/lib/i18n"
import { ThemeProvider } from "@/lib/theme"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

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
      <SupportLauncher />
    </div>
  )
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <CrispProvider>
          <AppShell>{children}</AppShell>
        </CrispProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}
