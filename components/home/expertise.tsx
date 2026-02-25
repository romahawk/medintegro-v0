"use client"

import Image from "next/image"
import { Container } from "@/components/container"
import { SectionHeader } from "@/components/section-header"
import { useLanguage } from "@/lib/i18n"

const expertiseItems = [
  {
    titleKey: "expertise.supply.title",
    descKey: "expertise.supply.desc",
    image: "/images/equipment-supply.jpg",
  },
  {
    titleKey: "expertise.integration.title",
    descKey: "expertise.integration.desc",
    image: "/images/or-integration.jpg",
  },
  {
    titleKey: "expertise.maintenance.title",
    descKey: "expertise.maintenance.desc",
    image: "/images/maintenance.jpg",
  },
  {
    titleKey: "expertise.turnkey.title",
    descKey: "expertise.turnkey.desc",
    image: "/images/turnkey.jpg",
  },
]

export function Expertise() {
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader
          label={t("expertise.label")}
          title={t("expertise.title")}
          description={t("expertise.description")}
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {expertiseItems.map((item) => (
            <article
              key={item.titleKey}
              className="glass glass-hover glow-cyan-hover group flex flex-col overflow-hidden rounded-xl transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={t(item.titleKey)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="flex flex-col gap-2 p-5">
                <h3 className="text-base font-semibold text-foreground">{t(item.titleKey)}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t(item.descKey)}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
