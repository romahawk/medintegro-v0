"use client"

import { PageHeader } from "@/components/page-header"
import { Container } from "@/components/container"
import { CTASection } from "@/components/cta-section"
import { Package, Monitor, Wrench, GraduationCap, Search, ClipboardList } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const serviceItems = [
  { icon: Package, titleKey: "service.1.title", descKey: "service.1.desc" },
  { icon: Monitor, titleKey: "service.2.title", descKey: "service.2.desc" },
  { icon: ClipboardList, titleKey: "service.3.title", descKey: "service.3.desc" },
  { icon: Wrench, titleKey: "service.4.title", descKey: "service.4.desc" },
  { icon: Search, titleKey: "service.5.title", descKey: "service.5.desc" },
  { icon: GraduationCap, titleKey: "service.6.title", descKey: "service.6.desc" },
]

export default function ServicesPage() {
  const { t } = useLanguage()

  return (
    <>
      <PageHeader
        label={t("services.label")}
        title={t("services.title")}
        description={t("services.subtitle")}
      />
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceItems.map((service) => (
              <article
                key={service.titleKey}
                className="glass glass-hover glow-cyan-hover group flex flex-col gap-4 rounded-xl p-6 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-lg font-semibold text-foreground">{t(service.titleKey)}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{t(service.descKey)}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  )
}
