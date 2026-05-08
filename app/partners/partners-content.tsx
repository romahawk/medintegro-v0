"use client"

import Image from "next/image"
import { CheckCircle2, Globe2, Handshake, Hospital, Shield, ShieldCheck } from "lucide-react"
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

export function PartnersContent() {
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
      <section className="relative flex min-h-svh items-center overflow-hidden border-b border-border/50">
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

        <Container className="relative z-10 py-24">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              {copy.header.label[locale]}
            </span>
            <h1 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {copy.header.title[locale]}
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              {copy.header.description[locale]}
            </p>
          </div>

          <div className="mt-12">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              {locale === "en" ? "Exclusive distributor for Ukraine" : "Ексклюзивний дистриб'ютор в Україні"}
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <div className="glass flex h-20 items-center rounded-xl border border-border/60 px-6">
                <Image
                  src="/images/partners/surgiris.png"
                  alt="Surgiris"
                  width={180}
                  height={56}
                  className="h-14 w-auto object-contain"
                />
              </div>
              <div className="glass flex h-20 items-center rounded-xl border border-border/60 px-6">
                <Image
                  src="/images/partners/SurgiMedia_blue_solid.svg"
                  alt="Surgimedia"
                  width={192}
                  height={29}
                  className="h-8 w-auto object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

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

              {/* Exclusive */}
              <article className="glass rounded-xl border border-border/60 p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                    {locale === "en" ? "Exclusive in Ukraine" : "Ексклюзивно в Україні"}
                  </span>
                  <div className="shrink-0 rounded-xl border border-primary/20 bg-primary/10 p-2.5 text-primary">
                    <Shield className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-5">
                  <div className="flex h-14 items-center rounded-lg border border-border/50 bg-white px-4 dark:bg-white/10">
                    <Image
                      src="/images/partners/surgiris.png"
                      alt="Surgiris"
                      width={160}
                      height={50}
                      className="h-10 w-auto object-contain dark:brightness-0 dark:invert"
                    />
                  </div>
                  <div className="flex h-14 items-center rounded-lg border border-border/50 bg-white px-4 dark:bg-white/10">
                    <Image
                      src="/images/partners/SurgiMedia_blue_solid.svg"
                      alt="SurgiMedia"
                      width={192}
                      height={29}
                      className="h-7 w-auto object-contain"
                      unoptimized
                    />
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {locale === "en"
                    ? "Exclusive distributor position for Ukraine across OR integration and related surgical infrastructure solutions."
                    : "Статус ексклюзивного дистриб'ютора в Україні для рішень з OR integration і пов'язаної хірургічної інфраструктури."}
                </p>
              </article>

              {/* Official */}
              <article className="glass rounded-xl border border-border/60 p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                    {locale === "en" ? "Official in Ukraine" : "Офіційно в Україні"}
                  </span>
                  <div className="shrink-0 rounded-xl border border-primary/20 bg-primary/10 p-2.5 text-primary">
                    <Shield className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <div className="flex h-24 items-center justify-center overflow-hidden rounded-lg border border-border/50 bg-white px-3 dark:bg-white/10">
                      <Image src="/images/partners/inmed-light.png" alt="Inmed" width={240} height={96} className="h-16 w-auto object-contain dark:hidden" />
                      <Image src="/images/partners/inmed-dark.png" alt="Inmed" width={240} height={96} className="hidden h-16 w-auto object-contain dark:block" />
                    </div>
                    <p className="px-1 text-xs leading-relaxed text-muted-foreground">
                      {locale === "en"
                        ? "Medical gas delivery systems, pipeline infrastructure, and clinical gas periphery."
                        : "Системи подачі медичних газів, трубопровідна інфраструктура та периферія."}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex h-24 items-center justify-center overflow-hidden rounded-lg border border-border/50 bg-white px-3 dark:bg-white/10">
                      <Image src="/images/partners/beacon-light.png" alt="Beacon" width={240} height={96} className="h-20 w-auto object-contain dark:hidden" />
                      <Image src="/images/partners/beacon-dark.png" alt="Beacon" width={240} height={96} className="hidden h-20 w-auto object-contain dark:block" />
                    </div>
                    <p className="px-1 text-xs leading-relaxed text-muted-foreground">
                      {locale === "en"
                        ? "High-performance 4K surgical monitors for endoscopy and open surgery."
                        : "Високопродуктивні 4K хірургічні монітори для ендоскопії та відкритих операцій."}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex h-24 items-center justify-center overflow-hidden rounded-lg border border-border/50 bg-white px-3 dark:bg-white/10">
                      <Image src="/images/partners/FSN-light.png" alt="FSN Medical Technologies" width={240} height={96} className="h-20 w-auto object-contain dark:hidden" />
                      <Image src="/images/partners/FSN-dark.png" alt="FSN Medical Technologies" width={240} height={96} className="hidden h-20 w-auto object-contain dark:block" />
                    </div>
                    <p className="px-1 text-xs leading-relaxed text-muted-foreground">
                      {locale === "en"
                        ? "Full-range surgical displays from FHD to 4K Mini-LED, OLED, and large-format OR monitors."
                        : "Повний спектр хірургічних дисплеїв від FHD до 4K Mini-LED, OLED і великоформатних OR-моніторів."}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex h-24 items-center justify-center overflow-hidden rounded-lg border border-border/50 bg-white px-3 dark:bg-white/10">
                      <Image src="/images/partners/ergomounts-light.png" alt="ErgoMounts" width={240} height={96} className="h-20 w-auto object-contain dark:hidden" />
                      <Image src="/images/partners/ergomounts-dark.png" alt="ErgoMounts" width={240} height={96} className="hidden h-20 w-auto object-contain dark:block" />
                    </div>
                    <p className="px-1 text-xs leading-relaxed text-muted-foreground">
                      {locale === "en"
                        ? "Ceiling, wall, and articulated mounting systems for surgical displays in OR environments."
                        : "Стельові, настінні та шарнірні системи кріплення дисплеїв для операційних."}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {locale === "en"
                    ? "Official distributor relationships covering medical infrastructure, surgical displays, monitor mounts, and supporting clinical systems."
                    : "Офіційні дистриб'юторські відносини у сфері медичної інфраструктури, хірургічних дисплеїв, систем кріплення моніторів і допоміжних клінічних систем."}
                </p>
              </article>

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
