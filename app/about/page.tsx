"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { Container } from "@/components/container"
import { CTASection } from "@/components/cta-section"
import { SectionHeader } from "@/components/section-header"
import { useLanguage } from "@/lib/i18n"

const values = [
  {
    title: {
      en: "OR integration first",
      ua: "Насамперед інтеграція операційних",
    },
    desc: {
      en: "Medintegro is built around operating room integration, surgical lighting, medical gas systems, and the infrastructure logic that makes a surgical room work in practice.",
      ua: "Medintegro побудована навколо інтеграції операційних, хірургічного освітлення, систем медичних газів та логіки інфраструктури, яка забезпечує реальну роботу хірургічного приміщення.",
    },
  },
  {
    title: {
      en: "Vendor-neutral room design",
      ua: "Вендор-нейтральний підхід до приміщення",
    },
    desc: {
      en: "We can combine room systems from different manufacturers because our OR integration approach is vendor neutral and compatible with most global equipment brands.",
      ua: "Ми можемо поєднувати системи приміщення від різних виробників, тому що наш підхід до OR integration є вендор-нейтральним і сумісним з більшістю світових брендів обладнання.",
    },
  },
  {
    title: {
      en: "Project-side execution credibility",
      ua: "Надійність реалізації на стороні проєкту",
    },
    desc: {
      en: "We support hospitals, clinics, contractors, and partners where room requirements, system compatibility, commissioning, and handover all need disciplined coordination.",
      ua: "Ми підтримуємо лікарні, клініки, підрядників і партнерів там, де вимоги до приміщення, сумісність систем, пусконалагодження та передача в експлуатацію потребують дисциплінованої координації.",
    },
  },
  {
    title: {
      en: "Long-term clinical support",
      ua: "Довгострокова клінічна підтримка",
    },
    desc: {
      en: "Service coordination, modernization planning, documentation, and future upgrades remain part of the relationship after launch.",
      ua: "Координація сервісу, планування модернізації, документація та майбутні оновлення залишаються частиною взаємодії після запуску.",
    },
  },
]

const proofBlocks = [
  {
    title: {
      en: "What we specialize in",
      ua: "У чому ми спеціалізуємося",
    },
    desc: {
      en: "Integrated operating rooms, surgical lighting systems, medical gas infrastructure, surgical displays, and the supporting room systems that shape dependable clinical environments.",
      ua: "Інтегровані операційні, системи хірургічного освітлення, інфраструктура медичних газів, хірургічні дисплеї та допоміжні кімнатні системи, які формують надійне клінічне середовище.",
    },
  },
  {
    title: {
      en: "Where we add the most value",
      ua: "Де ми даємо найбільшу цінність",
    },
    desc: {
      en: "Projects with multiple systems, multiple brands, and multiple stakeholders where surgical room performance depends on coordination, compatibility, and execution discipline.",
      ua: "Проєкти з кількома системами, кількома брендами та кількома учасниками, де ефективність хірургічного приміщення залежить від координації, сумісності та дисципліни реалізації.",
    },
  },
  {
    title: {
      en: "How buyers use us",
      ua: "Як нас залучають замовники",
    },
    desc: {
      en: "As an OR integration specialist for new builds, operating-suite upgrades, room modernization programs, and partner-led healthcare projects that need a credible local technical and commercial interface.",
      ua: "Як фахівця з OR integration для нових об'єктів, модернізації хірургічних блоків, програм оновлення приміщень і партнерських медичних проєктів, яким потрібен надійний локальний технічний і комерційний інтерфейс.",
    },
  },
]

export default function AboutPage() {
  const { locale } = useLanguage()
  const copy = {
    header: {
      label: {
        en: "About Us",
        ua: "Про компанію",
      },
      title: {
        en: "OR integration expertise backed by project delivery discipline",
        ua: "Експертиза з інтеграції операційних, підкріплена дисципліною проєктної реалізації",
      },
      description: {
        en: "Medintegro is positioned as an operating room integration and surgical infrastructure specialist, with broader clinical project capability growing outward from that core expertise.",
        ua: "Medintegro позиціонується як фахівець з інтеграції операційних і хірургічної інфраструктури, а ширші клінічні можливості зростають саме з цієї ключової експертизи.",
      },
    },
    introLabel: {
      en: "What We Do",
      ua: "Що ми робимо",
    },
    introTitle: {
      en: "We help turn surgical room requirements into working operating environments",
      ua: "Ми допомагаємо перетворювати вимоги до хірургічних приміщень на працюючі операційні середовища",
    },
    introBody1: {
      en: "Our role is not to act as a simple reseller. We align operating room integration, surgical lights, medical gas infrastructure, displays, and supporting room systems into one practical delivery path that hospitals, contractors, and partners can trust.",
      ua: "Наша роль не зводиться до простого ресейлу. Ми узгоджуємо інтеграцію операційної, хірургічне освітлення, інфраструктуру медичних газів, дисплеї та допоміжні кімнатні системи в один практичний шлях реалізації, якому можуть довіряти лікарні, підрядники та партнери.",
    },
    introBody2: {
      en: "That specialist OR focus is the center of the company. Wider clinic and hospital project support matters, but it is strongest when it grows from a surgical infrastructure package rather than from generic supply.",
      ua: "Саме цей фокус на операційних є центром компанії. Ширша підтримка проєктів для клінік і лікарень важлива, але вона найсильніша тоді, коли зростає з пакета хірургічної інфраструктури, а не з загального постачання.",
    },
    imageAlt: {
      en: "Integrated operating room environment",
      ua: "Інтегроване середовище операційної",
    },
    specialistLabel: {
      en: "Specialist Position",
      ua: "Спеціалізація",
    },
    specialistTitle: {
      en: "Why Medintegro is strongest in OR and surgical infrastructure projects",
      ua: "Чому Medintegro найсильніша саме в проєктах операційних і хірургічної інфраструктури",
    },
    specialistDescription: {
      en: "Buyers bring us in when room logic, brand compatibility, infrastructure planning, and commissioning quality matter as much as the equipment list itself.",
      ua: "Нас залучають тоді, коли логіка приміщення, сумісність брендів, планування інфраструктури та якість пусконалагодження важать не менше, ніж сам перелік обладнання.",
    },
    trustLabel: {
      en: "Why Buyers Trust Us",
      ua: "Чому нам довіряють",
    },
    trustTitle: {
      en: "What strengthens buyer and partner confidence",
      ua: "Що підсилює довіру замовників і партнерів",
    },
  }

  return (
    <>
      <PageHeader
        label={copy.header.label[locale]}
        title={copy.header.title[locale]}
        description={copy.header.description[locale]}
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-5">
              <span className="w-fit rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                {copy.introLabel[locale]}
              </span>
              <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {copy.introTitle[locale]}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {copy.introBody1[locale]}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {copy.introBody2[locale]}
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl glow-cyan">
              <Image
                src="/images/company/or-integration.jpg"
                alt={copy.imageAlt[locale]}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent" />
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-card/50" />
        <div className="absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-primary/30 to-transparent" />

        <Container className="relative">
          <SectionHeader
            label={copy.specialistLabel[locale]}
            title={copy.specialistTitle[locale]}
            description={copy.specialistDescription[locale]}
          />
          <div className="grid gap-5 md:grid-cols-3">
            {proofBlocks.map((block) => (
              <article key={block.title.en} className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground">{block.title[locale]}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {block.desc[locale]}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader
            label={copy.trustLabel[locale]}
            title={copy.trustTitle[locale]}
          />
          <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
            {values.map((val) => (
              <div
                key={val.title.en}
                className="glass glass-hover glow-cyan-hover flex items-start gap-4 rounded-xl p-5 transition-all duration-300"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{val.title[locale]}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {val.desc[locale]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
