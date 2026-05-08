"use client"

import { Container } from "@/components/container"
import { useLanguage } from "@/lib/i18n"

export function Trust() {
  const { locale } = useLanguage()
  const stats = [
    {
      value: "50+",
      label: {
        en: "clinical projects and room packages supported",
        ua: "клінічних проєктів і пакетів оснащення приміщень",
      },
    },
    {
      value: "15+",
      label: {
        en: "years in medical technology and project delivery",
        ua: "років у медичних технологіях і проєктній реалізації",
      },
    },
    {
      value: "10+",
      label: {
        en: "manufacturers and technology partners",
        ua: "виробників і технологічних партнерів",
      },
    },
    {
      value: "24/7",
      label: {
        en: "service coordination and support availability",
        ua: "координація сервісу та доступність підтримки",
      },
    },
  ]

  const proofPoints = [
    {
      en: "OR integration expertise that aligns surgical displays, lighting, medical gas infrastructure, and supporting clinical systems into one reliable room environment.",
      ua: "Експертиза з інтеграції операційних, яка поєднує хірургічні дисплеї, освітлення, інфраструктуру медичних газів і допоміжні клінічні системи в одне надійне середовище приміщення.",
    },
    {
      en: "Structured for new operating room builds, surgical-suite upgrades, and multi-brand hospital projects that require commissioning and handover discipline.",
      ua: "Підхід, розрахований на нові операційні, модернізацію хірургічних блоків і мультибрендові лікарняні проєкти, де важливі дисципліна пусконалагодження та передача в експлуатацію.",
    },
    {
      en: "Built for hospitals, private clinics, contractors, and manufacturers that need a technically credible local integration partner rather than a simple reseller.",
      ua: "Підхід для лікарень, приватних клінік, підрядників і виробників, яким потрібен технічно переконливий локальний інтеграційний партнер, а не простий реселер.",
    },
  ]

  const brands = ["Surgiris", "Surgimedia", "Inmed", "Beacon", "FSN", "Ergomounts"]
  const copy = {
    trustTitle: {
      en: "Why OR buyers trust Medintegro",
      ua: "Чому замовники операційних довіряють Medintegro",
    },
    brandsTitle: {
      en: "Representative brands and technologies",
      ua: "Представлені бренди та технології",
    },
    brandsDescription: {
      en: "Our integration solutions are vendor-neutral, built on an open architecture that connects equipment from various manufacturers into one synergic surgical workflow.",
      ua: "Наші інтеграційні рішення є вендорно-нейтральними — побудовані на відкритій архітектурі, яка поєднує обладнання різних виробників в один синергічний хірургічний процес.",
    },
  }

  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-0 bg-mesh" />

      <Container className="relative">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label.en} className="flex flex-col items-center gap-2 text-center">
              <span className="text-4xl font-bold tracking-tight text-primary md:text-5xl">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">{stat.label[locale]}</span>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <div className="glass rounded-xl p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              {copy.trustTitle[locale]}
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {proofPoints.map((point) => (
                <p key={point.en} className="text-sm leading-relaxed text-muted-foreground">
                  {point[locale]}
                </p>
              ))}
            </div>
          </div>
          <div className="glass rounded-xl p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              {copy.brandsTitle[locale]}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="rounded-full border border-border/60 bg-background/40 px-3 py-1.5 text-sm text-foreground"
                >
                  {brand}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {copy.brandsDescription[locale]}
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
