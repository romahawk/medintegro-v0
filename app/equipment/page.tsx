"use client"

import { Suspense } from "react"
import Image from "next/image"
import { Container } from "@/components/container"
import { CTASection } from "@/components/cta-section"
import { EquipmentCatalog } from "@/components/equipment/equipment-catalog"
import { useLanguage } from "@/lib/i18n"

export default function EquipmentPage() {
  const { locale, t } = useLanguage()

  const copy = {
    title: {
      en: "OR Integration Equipment",
      ua: "Обладнання для інтеграції операційних",
    },
    description: {
      en: "Browse our OR integration systems, surgical infrastructure, and specialist equipment from world-leading manufacturers.",
      ua: "Перегляньте наші системи для інтеграції операційних, хірургічну інфраструктуру та спеціалізоване обладнання від провідних світових виробників.",
    },
  }

  return (
    <>
      <section className="relative flex min-h-svh flex-col overflow-hidden border-b border-border/50">
        <div className="absolute inset-0">
          <Image
            src="/images/company/hero-or.jpg?v=20260507"
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

        <Container className="relative z-10 pb-12 pt-28">
          <div className="max-w-3xl pb-10">
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              {t("equipment.label")}
            </span>
            <h1 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {copy.title[locale]}
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
              {copy.description[locale]}
            </p>
          </div>

          <Suspense fallback={null}>
            <EquipmentCatalog />
          </Suspense>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
