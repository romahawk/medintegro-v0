"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Monitor, Network, Settings2 } from "lucide-react"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import type { IntegratedOrProduct } from "@/lib/integrated-or-products"
import { useLanguage } from "@/lib/i18n"
import { getLocalizedIntegratedOrProduct } from "@/lib/equipment-detail-localizations"

const copy = {
  en: {
    equipment: "Equipment",
    category: "Integrated OR",
    back: "Back to Equipment",
    quote: "Request Quote",
    overviewNav: "Overview",
    capabilitiesNav: "Capabilities",
    deploymentNav: "Deployment",
    overviewHeading: "Overview",
    highlightsHeading: "Key Highlights",
    capabilitiesHeading: "Core capabilities for everyday OR workflows",
    deploymentHeading: "Adaptive deployment options",
    deploymentIntro: (name: string) =>
      `${name} can be installed in multiple physical formats to match different room sizes, workflows, and operational requirements.`,
    exploreOther: "Explore other Integrated OR solutions",
    bottomTitle: "Need integration support for this solution?",
    bottomText:
      "We can design the room workflow, align the infrastructure, and deliver full deployment with commissioning and training.",
  },
  ua: {
    equipment: "Обладнання",
    category: "Інтегрована операційна",
    back: "Назад до обладнання",
    quote: "Отримати пропозицію",
    overviewNav: "Огляд",
    capabilitiesNav: "Можливості",
    deploymentNav: "Впровадження",
    overviewHeading: "Огляд",
    highlightsHeading: "Ключові переваги",
    capabilitiesHeading: "Ключові можливості для щоденної роботи операційної",
    deploymentHeading: "Варіанти впровадження",
    deploymentIntro: (name: string) =>
      `${name} може встановлюватися в різних фізичних конфігураціях відповідно до розміру приміщення, сценарію роботи та операційних вимог.`,
    exploreOther: "Переглянути інші рішення для інтегрованої операційної",
    bottomTitle: "Потрібна підтримка з інтеграцією цього рішення?",
    bottomText:
      "Ми можемо спроєктувати робочий сценарій операційної, узгодити інфраструктуру та забезпечити повне впровадження з пусконалагодженням і навчанням.",
  },
} as const

type Props = {
  product: IntegratedOrProduct
  products: IntegratedOrProduct[]
  hasDetailedLayout: boolean
  prevProduct: IntegratedOrProduct | null
  nextProduct: IntegratedOrProduct | null
  heroImages: {
    main: { src: string; alt: string }
    secondary1: { src: string; alt: string }
    secondary2: { src: string; alt: string }
  }
  deploymentImages: { src: string; alt: string }[]
}

export function IntegratedOrProductContent({
  product,
  products,
  hasDetailedLayout,
  prevProduct,
  nextProduct,
  heroImages,
  deploymentImages,
}: Props) {
  const { locale } = useLanguage()
  const t = copy[locale]
  const localizedProduct = getLocalizedIntegratedOrProduct(product, locale)

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/50 py-16 md:py-20">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 bg-grid opacity-30" />

        <Container className="relative">
          <nav className="mb-4 flex flex-wrap items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Link href="/equipment" className="transition-colors hover:text-primary">
              {t.equipment}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span>{t.category}</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">{localizedProduct.name}</span>
          </nav>

          <Link
            href="/equipment"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.back}
          </Link>

          {hasDetailedLayout ? (
            <div className="grid items-start gap-8 lg:grid-cols-2">
              <div>
                <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                  {t.category}
                </span>
                <h1 className="max-w-4xl text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                  {localizedProduct.name}
                </h1>
                <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                  {localizedProduct.heroTitle}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  {localizedProduct.heroSubtitle}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg" className="gap-2 rounded-xl glow-cyan">
                    <Link href="/contact">
                      {t.quote}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="mt-6 hidden flex-wrap gap-2 md:flex">
                  <a href="#overview" className="rounded-full border border-border/60 bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">{t.overviewNav}</a>
                  <a href="#capabilities" className="rounded-full border border-border/60 bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">{t.capabilitiesNav}</a>
                  <a href="#deployment" className="rounded-full border border-border/60 bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">{t.deploymentNav}</a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-xl border border-border/40">
                  <Image src={heroImages.main.src} alt={heroImages.main.alt} fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border/40">
                  <Image src={heroImages.secondary1.src} alt={heroImages.secondary1.alt} fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border/40">
                  <Image src={heroImages.secondary2.src} alt={heroImages.secondary2.alt} fill className="object-cover" />
                </div>
              </div>
            </div>
          ) : (
            <>
              <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                {t.category}
              </span>
              <h1 className="max-w-4xl text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {localizedProduct.name}
              </h1>
              <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                {localizedProduct.shortDescription}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="gap-2 rounded-xl glow-cyan">
                  <Link href="/contact">
                    {t.quote}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </>
          )}
        </Container>
      </section>

      {hasDetailedLayout ? (
        <>
          <section id="overview" className="py-16 md:py-24">
            <Container>
              <div className="grid gap-6 lg:grid-cols-3">
                <article className="glass rounded-xl p-6 lg:col-span-2">
                  <h2 className="text-xl font-semibold text-foreground md:text-2xl">{t.overviewHeading}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {localizedProduct.overview}
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {(localizedProduct.valuePoints ?? []).map((point) => (
                      <div key={point} className="rounded-lg border border-border/50 bg-background/40 p-3">
                        <p className="text-sm leading-relaxed text-muted-foreground">{point}</p>
                      </div>
                    ))}
                  </div>
                </article>
                <article className="glass rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-foreground">{t.highlightsHeading}</h2>
                  <ul className="mt-4 space-y-3">
                    {localizedProduct.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </Container>
          </section>

          <section id="capabilities" className="relative overflow-hidden border-y border-border/50 py-16 md:py-24">
            <div className="absolute inset-0 bg-card/40" />
            <Container className="relative">
              <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {t.capabilitiesHeading}
              </h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {(localizedProduct.capabilityItems ?? []).map((item, index) => (
                  <article key={item.title} className="glass glass-hover rounded-xl p-6 transition-all duration-300">
                    <div className="mb-3 inline-flex rounded-lg border border-primary/30 bg-primary/10 p-2 text-primary">
                      {index % 3 === 0 ? <Network className="h-4 w-4" /> : index % 3 === 1 ? <Monitor className="h-4 w-4" /> : <Settings2 className="h-4 w-4" />}
                    </div>
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </article>
                ))}
              </div>
            </Container>
          </section>

          <section id="deployment" className="py-16 md:py-24">
            <Container>
              <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {t.deploymentHeading}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {t.deploymentIntro(localizedProduct.name)}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {(localizedProduct.deploymentItems ?? []).map((item, index) => (
                  <article key={item.title} className="glass rounded-xl p-4">
                    <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-lg border border-border/40">
                      <Image
                        src={deploymentImages[index]?.src ?? deploymentImages[0].src}
                        alt={deploymentImages[index]?.alt ?? item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </article>
                ))}
              </div>
            </Container>
          </section>
        </>
      ) : (
        <section className="py-16 md:py-24">
          <Container>
            <div className="grid gap-6 lg:grid-cols-3">
              <article className="glass rounded-xl p-6 lg:col-span-2">
                <h2 className="text-xl font-semibold text-foreground md:text-2xl">{t.overviewHeading}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {localizedProduct.overview}
                </p>
              </article>
              <article className="glass rounded-xl p-6">
                <h2 className="text-xl font-semibold text-foreground">{t.highlightsHeading}</h2>
                <ul className="mt-4 space-y-3">
                  {localizedProduct.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </Container>
        </section>
      )}

      <section className="relative overflow-hidden border-y border-border/50 py-10">
        <Container className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-sm text-muted-foreground">{t.exploreOther}</div>
          <div className="flex flex-wrap gap-2">
            {prevProduct && (
              <Button asChild variant="outline" size="sm" className="rounded-lg border-border/50 hover:border-primary/40">
                <Link href={`/equipment/integrated-or/${prevProduct.slug}`}>
                  <ArrowLeft className="h-4 w-4" />
                  {prevProduct.name}
                </Link>
              </Button>
            )}
            {nextProduct && (
              <Button asChild variant="outline" size="sm" className="rounded-lg border-border/50 hover:border-primary/40">
                <Link href={`/equipment/integrated-or/${nextProduct.slug}`}>
                  {nextProduct.name}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-t border-border/50 py-20 md:py-24">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <Container className="relative flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {t.bottomTitle}
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {t.bottomText}
          </p>
          <Button asChild size="lg" className="gap-2 rounded-xl glow-cyan">
            <Link href="/contact">
              {t.quote}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Container>
      </section>
    </>
  )
}
