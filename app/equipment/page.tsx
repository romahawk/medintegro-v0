"use client"

import { PageHeader } from "@/components/page-header"
import { Container } from "@/components/container"
import { CTASection } from "@/components/cta-section"
import { EquipmentCatalog } from "@/components/equipment/equipment-catalog"
import { useLanguage } from "@/lib/i18n"

export default function EquipmentPage() {
  const { t } = useLanguage()

  return (
    <>
      <PageHeader
        label={t("equipment.label")}
        title={t("equipment.title")}
        description={t("equipment.subtitle")}
      />
      <section className="py-16 md:py-24">
        <Container>
          <EquipmentCatalog />
        </Container>
      </section>
      <CTASection />
    </>
  )
}
