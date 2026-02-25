"use client"

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { Logo } from "@/components/logo"

export function Footer() {
  const { t } = useLanguage()

  const solutionLinks = [
    { href: "/equipment", key: "nav.equipment" },
    { href: "/services", key: "nav.services" },
    { href: "/projects", key: "nav.projects" },
  ]

  const companyLinks = [
    { href: "/about", key: "nav.about" },
    { href: "/contact", key: "nav.contact" },
  ]

  return (
    <footer className="border-t border-border/50 bg-card">
      <div className="mx-auto max-w-[1280px] px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5" aria-label="Medintegro Home">
              <Logo className="h-7 w-auto" />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t("footer.description")}
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">{t("footer.solutions")}</h3>
            <ul className="flex flex-col gap-2.5">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">{t("footer.company")}</h3>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">{t("contact.info.title")}</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">info@medintegro.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">+380 44 123 4567</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">{t("contact.info.address")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border/50 pt-6">
          <p className="text-center text-xs text-muted-foreground">
            {"\u00A9"} {new Date().getFullYear()} Medintegro. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
