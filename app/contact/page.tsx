"use client"

import { PageHeader } from "@/components/page-header"
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
    <>
      <PageHeader
        label={t("contact.label")}
        title={t("contact.title")}
        description={t("contact.subtitle")}
      />
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            {/* Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact info sidebar */}
            <aside>
              <h2 className="mb-6 text-lg font-semibold text-foreground">{t("contact.info.title")}</h2>
              <div className="glass glow-cyan flex flex-col gap-6 rounded-xl p-6">
                {contactDetails.map((detail) => (
                  <div key={detail.labelKey} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                      <detail.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {t(detail.labelKey)}
                      </p>
                      {detail.value === "info@medintegro.com" ? (
                        <a
                          href="mailto:info@medintegro.com"
                          className="mt-1 block text-sm text-foreground transition-colors hover:text-primary"
                        >
                          info@medintegro.com
                        </a>
                      ) : detail.value === "+380 44 123 4567" ? (
                        <a
                          href="tel:+380441234567"
                          className="mt-1 block text-sm text-foreground transition-colors hover:text-primary"
                        >
                          +380 44 123 4567
                        </a>
                      ) : (
                        <p className="mt-1 text-sm text-foreground">
                          {detail.valueKey ? t(detail.valueKey) : detail.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  )
}
