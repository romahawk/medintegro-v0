"use client"

import Image from "next/image"
import { Container } from "@/components/container"
import { ContactForm } from "@/components/contact/contact-form"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { CONTACT } from "@/lib/contact"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function ContactContent() {
  const { t, locale } = useLanguage()

  const contactDetails = [
    { icon: Mail, labelKey: "contact.info.email.label", type: "email" as const },
    { icon: Phone, labelKey: "contact.info.phone.label", type: "phone" as const },
    { icon: MapPin, labelKey: "contact.info.address.label", type: "address" as const },
    { icon: Clock, labelKey: "contact.info.hours.label", type: "hours" as const },
  ]

  return (
    <section className="relative flex min-h-svh items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/company/hero-or.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-32 bottom-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <Container className="relative z-10 flex flex-col gap-10 py-24">

        {/* Top: full-width heading */}
        <div className="flex flex-col gap-3">
          <span className="w-fit rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            {t("contact.label")}
          </span>
          <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {t("contact.title")}
          </h1>
          <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            {t("contact.subtitle")}
          </p>
        </div>

        {/* Bottom: contact info + form */}
        <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-start">

          {/* Contact info */}
          <div className="glass glow-cyan flex flex-col gap-5 rounded-xl p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              {t("contact.info.title")}
            </p>
            {contactDetails.map((detail) => (
              <div key={detail.labelKey} className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                  <detail.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t(detail.labelKey)}
                  </p>

                  {detail.type === "email" && (
                    <a href={`mailto:${CONTACT.email}`} className="mt-0.5 block text-sm text-foreground transition-colors hover:text-primary">
                      {CONTACT.email}
                    </a>
                  )}

                  {detail.type === "phone" && (
                    <div className="mt-0.5 flex flex-col gap-1.5">
                      <a href={`tel:${CONTACT.phoneTel}`} className="text-sm text-foreground transition-colors hover:text-primary">
                        {CONTACT.phoneDisplay}
                      </a>
                      <a
                        href={CONTACT.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#25D366] transition-opacity hover:opacity-80"
                      >
                        <WhatsAppIcon className="h-3.5 w-3.5" />
                        {locale === "ua" ? "Написати в WhatsApp" : "Message in WhatsApp"}
                      </a>
                    </div>
                  )}

                  {detail.type === "address" && (
                    <p className="mt-0.5 text-sm text-foreground">{t("contact.info.address")}</p>
                  )}

                  {detail.type === "hours" && (
                    <p className="mt-0.5 text-sm text-foreground">{t("contact.info.hours")}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="glass rounded-2xl border border-border/60 p-6 md:p-8">
            <ContactForm />
          </div>

        </div>
      </Container>
    </section>
  )
}
