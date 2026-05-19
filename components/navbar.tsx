"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"
import { useTheme } from "@/lib/theme"
import { Logo } from "@/components/logo"

const navKeys = [
  { href: "/", key: "nav.home" },
  { href: "/solutions", key: "nav.services" },
  { href: "/equipment", key: "nav.equipment" },
  { href: "/projects", key: "nav.projects" },
  { href: "/partners", key: "nav.partners" },
  { href: "/about", key: "nav.about" },
  { href: "/contact", key: "nav.contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { locale, setLocale, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  function handleLocaleToggle() {
    const nextLocale = locale === "en" ? "ua" : "en"
    setLocale(nextLocale)

    if (pathname === "/en" && nextLocale === "ua") {
      router.push("/")
      return
    }

    if (pathname === "/" && nextLocale === "en") {
      router.push("/en")
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border/50 bg-background/80 backdrop-blur-xl"
          : "border-transparent bg-background/50 backdrop-blur-sm"
      )}
    >
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Medintegro Home">
          <Logo className="h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {navKeys.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  pathname === link.href || (link.href === "/" && pathname === "/en")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {t(link.key)}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-primary" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          {/* Language toggle */}
          <button
            onClick={handleLocaleToggle}
            className="rounded-lg border border-border px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            {locale === "en" ? "UA" : "EN"}
          </button>
          <Button asChild size="sm" className="glow-cyan gap-1.5 rounded-lg">
            <Link href="/contact">{t("nav.getQuote")}</Link>
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-lg border border-border p-1.5 text-muted-foreground"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={handleLocaleToggle}
            className="rounded-lg border border-border px-2 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            {locale === "en" ? "UA" : "EN"}
          </button>
          <button
            className="inline-flex items-center justify-center rounded-lg p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border/50 bg-background/95 px-6 pb-6 pt-2 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-1">
            {navKeys.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    pathname === link.href || (link.href === "/" && pathname === "/en")
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {t(link.key)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Button asChild className="w-full rounded-lg" size="sm">
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                {t("nav.getQuote")}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
