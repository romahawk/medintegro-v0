"use client"

import { CheckCircle2, Globe2, Handshake, Hospital, Shield, ShieldCheck } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { Container } from "@/components/container"
import { CTASection } from "@/components/cta-section"
import { useLanguage } from "@/lib/i18n"

const cards = [
  {
    icon: Handshake,
    title: {
      en: "For manufacturers",
      ua: "Для виробників",
    },
    desc: {
      en: "Local technical and commercial support for OR integration, surgical infrastructure, qualification, project coordination, and buyer trust in the Ukrainian market.",
      ua: "Локальна технічна та комерційна підтримка для OR integration, хірургічної інфраструктури, кваліфікації, координації проєктів і формування довіри замовника на українському ринку.",
    },
  },
  {
    icon: Hospital,
    title: {
      en: "For contractors",
      ua: "Для підрядників",
    },
    desc: {
      en: "Specialist support on operating rooms, surgical room interfaces, medical gas infrastructure, and room-system coordination inside healthcare builds and upgrades.",
      ua: "Спеціалізована підтримка щодо операційних, інтерфейсів хірургічних приміщень, інфраструктури медичних газів і координації кімнатних систем у межах медичних будівництв та модернізацій.",
    },
  },
  {
    icon: Globe2,
    title: {
      en: "For international partners",
      ua: "Для міжнародних партнерів",
    },
    desc: {
      en: "A local OR integration partner that can support customer communication, room planning, implementation coordination, and post-launch credibility.",
      ua: "Локальний партнер з OR integration, який може підтримати комунікацію із замовником, планування приміщень, координацію реалізації та довіру після запуску.",
    },
  },
  {
    icon: ShieldCheck,
    title: {
      en: "For long-term collaboration",
      ua: "Для довгострокової співпраці",
    },
    desc: {
      en: "Documentation, commissioning support, service coordination, and modernization planning that help protect partner reputation after delivery.",
      ua: "Документація, підтримка пусконалагодження, координація сервісу та планування модернізації, які допомагають захищати репутацію партнера після реалізації.",
    },
  },
]

const distributorships = [
  {
    label: {
      en: "Exclusive in Ukraine",
      ua: "Ексклюзивно в Україні",
    },
    title: {
      en: "Surgiris and Surgimedia",
      ua: "Surgiris та Surgimedia",
    },
    desc: {
      en: "Exclusive distributor position for Ukraine across OR integration and related surgical infrastructure solutions.",
      ua: "Статус ексклюзивного дистриб'ютора в Україні для рішень з OR integration і пов'язаної хірургічної інфраструктури.",
    },
  },
  {
    label: {
      en: "Official in Ukraine",
      ua: "Офіційно в Україні",
    },
    title: {
      en: "Inmed, Beacon, and FSN",
      ua: "Inmed, Beacon та FSN",
    },
    desc: {
      en: "Official distributor relationships covering medical infrastructure, surgical displays, and supporting clinical systems.",
      ua: "Офіційні дистриб'юторські відносини у сфері медичної інфраструктури, хірургічних дисплеїв і допоміжних клінічних систем.",
    },
  },
]

const integrationProof = {
  en: [
    "Vendor-neutral OR integration systems compatible with most global equipment brands.",
    "Able to coordinate room systems, infrastructure interfaces, and partner delivery steps around one surgical environment.",
  ],
  ua: [
    "Вендор-нейтральні системи OR integration, сумісні з більшістю глобальних брендів обладнання.",
    "Здатність координувати кімнатні системи, інтерфейси інфраструктури та партнерські етапи постачання навколо одного хірургічного середовища.",
  ],
}

export default function PartnersPage() {
  const { locale } = useLanguage()
  const copy = {
    header: {
      label: {
        en: "Partnerships",
        ua: "Партнерства",
      },
      title: {
        en: "OR integration partnerships for manufacturers, contractors, and specialist suppliers",
        ua: "Партнерства з OR integration для виробників, підрядників і спеціалізованих постачальників",
      },
      description: {
        en: "Medintegro acts as a local OR integration and surgical infrastructure partner for brands, distributors, and project teams that need a credible commercial and technical presence in Ukraine.",
        ua: "Medintegro виступає локальним партнером з OR integration та хірургічної інфраструктури для брендів, дистриб'юторів і проєктних команд, яким потрібна надійна комерційна й технічна присутність в Україні.",
      },
    },
    distributionTitle: {
      en: "Distribution status and integration position",
      ua: "Статус дистрибуції та інтеграційна позиція",
    },
    practicalLabel: {
      en: "What this means in practice",
      ua: "Що це означає на практиці",
    },
    vendorNeutralTitle: {
      en: "Vendor-neutral OR integration",
      ua: "Вендор-нейтральна OR integration",
    },
    practicalBody1: {
      en: "We can represent specific brands where distribution status is defined, while still designing OR integration systems in a vendor-neutral way when the room requires a broader combination of technologies.",
      ua: "Ми можемо представляти конкретні бренди там, де визначено дистриб'юторський статус, і водночас проєктувати системи OR integration у вендор-нейтральний спосіб, коли приміщення потребує ширшого поєднання технологій.",
    },
    practicalBody2: {
      en: "That gives partners a local route to technically credible room delivery without forcing the project into a single-brand limitation.",
      ua: "Це дає партнерам локальний шлях до технічно переконливої реалізації приміщення без жорсткого обмеження проєкту одним брендом.",
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
          <div className="grid gap-5 md:grid-cols-2">
            {cards.map((card) => (
              <article
                key={card.title.en}
                className="glass glass-hover glow-cyan-hover rounded-xl p-6 transition-all duration-300"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                  <card.icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-lg font-semibold text-foreground">{card.title[locale]}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.desc[locale]}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-y border-border/50 py-20 md:py-24">
        <div className="absolute inset-0 bg-card/40" />
        <Container className="relative">
          <h2 className="max-w-3xl text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {copy.distributionTitle[locale]}
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.3fr_1fr]">
            <div className="grid gap-4">
              {distributorships.map((item) => (
                <article key={item.title.en} className="glass rounded-xl border border-border/60 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                        {item.label[locale]}
                      </span>
                      <h3 className="mt-4 text-lg font-semibold text-foreground">
                        {item.title[locale]}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.desc[locale]}
                      </p>
                    </div>
                    <div className="rounded-xl border border-primary/20 bg-primary/10 p-2.5 text-primary">
                      <Shield className="h-5 w-5" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="glass rounded-xl p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                {copy.practicalLabel[locale]}
              </p>
              <div className="mt-4 rounded-xl border border-border/50 bg-background/35 p-4">
                <div className="mb-3 flex items-center gap-2 text-foreground">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <p className="text-sm font-semibold">{copy.vendorNeutralTitle[locale]}</p>
                </div>
                <ul className="space-y-3">
                  {integrationProof[locale].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>{copy.practicalBody1[locale]}</p>
                <p>{copy.practicalBody2[locale]}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
