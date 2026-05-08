"use client"

import Image from "next/image"
import { Container } from "@/components/container"
import { ContactForm } from "@/components/contact/contact-form"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export default function ContactPage() {
  const { t } = useLanguage()

  const contactDetails = [
    { icon: Mail, labelKey: "contact.info.email.label", value: "info@medintegro.com" },
    { icon: Phone, labelKey: "contact.info.phone.label", value: "+380 44 123 4567" },
    { icon: MapPin, labelKey: "contact.info.address.label", valueKey: "contact.info.address" },
    { icon: Clock, labelKey: "contact.info.hours.label", valueKey: "contact.info.hours" },
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
                  {detail.value === "info@medintegro.com" ? (
                    <a href="mailto:info@medintegro.com" className="mt-0.5 block text-sm text-foreground transition-colors hover:text-primary">
                      info@medintegro.com
                    </a>
                  ) : detail.value === "+380 44 123 4567" ? (
                    <a href="tel:+380441234567" className="mt-0.5 block text-sm text-foreground transition-colors hover:text-primary">
                      +380 44 123 4567
                    </a>
                  ) : (
                    <p className="mt-0.5 text-sm text-foreground">
                      {detail.valueKey ? t(detail.valueKey) : detail.value}
                    </p>
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
