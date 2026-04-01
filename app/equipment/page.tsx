"use client"

import { Suspense } from "react"
import { PageHeader } from "@/components/page-header"
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
      <PageHeader
        label={t("equipment.label")}
        title={copy.title[locale]}
        description={copy.description[locale]}
      />
      <section className="py-10 md:py-14">
        <Container>
          <Suspense fallback={null}>
            <EquipmentCatalog />
          </Suspense>
        </Container>
      </section>
      <CTASection />
    </>
  )
}
