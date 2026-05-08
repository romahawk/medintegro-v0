"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Lightbulb, Monitor, Network, Wind, type LucideIcon } from "lucide-react"
import { Container } from "@/components/container"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"

const systemPillars: {
  title: { en: string; ua: string }
  description: { en: string; ua: string }
  icon: LucideIcon
}[] = [
  {
    title: { en: "OR integration platforms", ua: "Платформи OR integration" },
    description: {
      en: "Centralized control for video, routing, documentation, and in-room workflow coordination.",
      ua: "Централізоване керування відео, маршрутизацією, документацією та координацією процесів у межах приміщення.",
    },
    icon: Network,
  },
  {
    title: { en: "Surgical lights", ua: "Хірургічне освітлення" },
    description: {
      en: "Procedure-ready lighting layouts matched to the room geometry, clinical specialty, and equipment plan.",
      ua: "Схеми освітлення для процедур, узгоджені з геометрією приміщення, клінічним профілем і планом оснащення.",
    },
    icon: Lightbulb,
  },
  {
    title: { en: "Medical gas systems", ua: "Системи медичних газів" },
    description: {
      en: "Reliable gas supply points and infrastructure aligned with surgical, anaesthesia, and intensive care workflows.",
      ua: "Надійні точки подачі газів та інфраструктура, узгоджені з хірургічними, анестезіологічними та інтенсивними клінічними процесами.",
    },
    icon: Wind,
  },
  {
    title: {
      en: "Displays and supporting equipment",
      ua: "Дисплеї та допоміжне обладнання",
    },
    description: {
      en: "Surgical visualization, pendants, and related room systems integrated into a practical clinical setup.",
      ua: "Хірургічна візуалізація, консолі та пов'язані кімнатні системи, інтегровані в практичне клінічне середовище.",
    },
    icon: Monitor,
  },
]

export function OrIntegrationFocus() {
  const { locale } = useLanguage()
  const copy = {
    label: {
      en: "Flagship Expertise",
      ua: "Ключова експертиза",
    },
    title: {
      en: "OR integration is the core of the Medintegro offer",
      ua: "Інтеграція операційних є ядром пропозиції Medintegro",
    },
    description: {
      en: "We do not approach operating rooms as isolated products. We coordinate the systems that make a surgical environment function as one dependable clinical workspace.",
      ua: "Ми не сприймаємо операційну як набір окремих продуктів. Ми координуємо системи, які перетворюють хірургічне середовище на єдиний надійний клінічний простір.",
    },
    imageAlt: {
      en: "Integrated surgical environment with displays, lighting, and coordinated clinical systems",
      ua: "Інтегроване хірургічне середовище з дисплеями, освітленням і скоординованими клінічними системами",
    },
    buyersTitle: {
      en: "What buyers need from an OR integration partner",
      ua: "Що замовникам потрібно від партнера з інтеграції операційних",
    },
    buyersDescription: {
      en: "Hospitals, clinics, contractors, and manufacturers need more than supply. They need room logic, cross-system compatibility, commissioning discipline, and a team that can translate clinical requirements into a working operating room.",
      ua: "Лікарням, клінікам, підрядникам і виробникам потрібно більше, ніж постачання. Їм потрібні логіка приміщення, сумісність між системами, дисципліна пусконалагодження та команда, яка може перетворити клінічні вимоги на працюючу операційну.",
    },
    bullets: {
      en: [
        "Integrated planning across lights, gas points, displays, and room workflow.",
        "Multi-brand coordination that reduces installation friction and handover risk.",
        "Support for new OR builds, surgical-suite upgrades, and modernization phases.",
      ],
      ua: [
        "Інтегроване планування освітлення, газових точок, дисплеїв і логіки роботи приміщення.",
        "Мультибрендова координація, яка зменшує складність монтажу та ризики під час передачі в експлуатацію.",
        "Підтримка нових операційних, модернізації хірургічних блоків і етапів оновлення.",
      ],
    },
    primaryCta: {
      en: "Explore OR Solutions",
      ua: "Переглянути рішення для операційних",
    },
    secondaryCta: {
      en: "Discuss an OR Project",
      ua: "Обговорити проєкт операційної",
    },
  }

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-card/40" />
      <div className="absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionHeader
              align="left"
              label={copy.label[locale]}
              title={copy.title[locale]}
              description={copy.description[locale]}
              className="mb-8"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {systemPillars.map((pillar) => (
                <article
                  key={pillar.title.en}
                  className="glass rounded-xl border border-border/60 p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_18px_50px_-24px_rgba(6,182,212,0.45)]"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg border border-primary/20 bg-primary/10 p-2 text-primary">
                      <pillar.icon className="h-4 w-4" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base font-semibold text-foreground">
                        {pillar.title[locale]}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {pillar.description[locale]}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="glass overflow-hidden rounded-2xl border border-border/60">
            <div className="relative aspect-16/11 overflow-hidden">
              <Image
                src="/images/company/or-integration.jpg?v=20260508"
                alt={copy.imageAlt[locale]}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
            </div>
            <div className="space-y-5 p-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  {copy.buyersTitle[locale]}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {copy.buyersDescription[locale]}
                </p>
              </div>

              <ul className="grid gap-3 text-sm leading-relaxed text-muted-foreground">
                {copy.bullets[locale].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <Button asChild className="rounded-xl">
                  <Link href="/solutions">
                    {copy.primaryCta[locale]}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-xl border-border/60">
                  <Link href="/contact">{copy.secondaryCta[locale]}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
