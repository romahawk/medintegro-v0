"use client"

import { Suspense } from "react"
import { PageHeader } from "@/components/page-header"
import { Container } from "@/components/container"
import { CTASection } from "@/components/cta-section"
import { EquipmentCatalog } from "@/components/equipment/equipment-catalog"
import { useLanguage } from "@/lib/i18n"

export default function EquipmentPage() {
  const { locale } = useLanguage()

  const copy = {
    label: {
      en: "Equipment",
      ua: "Обладнання",
    },
    title: {
      en: "OR systems, surgical infrastructure, and specialist clinical equipment",
      ua: "OR-системи, хірургічна інфраструктура та спеціалізоване клінічне обладнання",
    },
    description: {
      en: "This catalog is built around the systems that shape operating rooms and surgical environments first, then extends into the supporting infrastructure needed for dependable clinical delivery.",
      ua: "Цей каталог побудований навколо систем, які насамперед формують операційні та хірургічні середовища, а далі розширюється на допоміжну інфраструктуру, потрібну для надійного клінічного запуску.",
    },
  }

  return (
    <>
      <PageHeader
        label={copy.label[locale]}
        title={copy.title[locale]}
        description={copy.description[locale]}
      />
      <section className="py-16 md:py-24">
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
