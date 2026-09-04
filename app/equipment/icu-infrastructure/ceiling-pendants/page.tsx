import Link from "next/link"
import Image from "next/image"
import { existsSync, statSync } from "node:fs"
import path from "node:path"
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { ceilingPendantProducts } from "@/lib/icu-infrastructure-products"
import type { Metadata } from "next"
import { staticPageMetadata } from "@/lib/seo"
import { breadcrumbSchema } from "@/lib/structured-data"
import { JsonLd } from "@/components/json-ld"
import { ceilingPendantUaDescriptions } from "@/lib/icu-infrastructure-localizations"

function getCeilingPendantImage(slug: string, fileName: string) {
  const relativePath = `/images/products/icu-infrastructure/ceiling-pendants/${slug}/${fileName}`
  const absolutePath = path.join(
    process.cwd(),
    "public",
    "images",
    "products",
    "icu-infrastructure",
    "ceiling-pendants",
    slug,
    fileName
  )

  if (!existsSync(absolutePath)) {
    return relativePath
  }

  return `${relativePath}?v=${statSync(absolutePath).mtimeMs}`
}

export const metadata: Metadata = staticPageMetadata(
  "/equipment/icu-infrastructure/ceiling-pendants"
)

export default function CeilingPendantsPage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Обладнання", path: "/equipment" },
          {
            name: "Стельові медичні консолі",
            path: "/equipment/icu-infrastructure/ceiling-pendants",
          },
        ])}
      />
      <section className="relative overflow-hidden border-b border-border/50 py-16 md:py-20">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <Container className="relative">
          <nav className="mb-4 flex flex-wrap items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Link href="/equipment" className="transition-colors hover:text-primary">
              Обладнання
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/equipment" className="transition-colors hover:text-primary">
              ВІТ / критична інфраструктура
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">Стельові медичні консолі</span>
          </nav>

          <Link
            href="/equipment"
            className="mb-6 flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Назад до обладнання
          </Link>

          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            ВІТ / критична інфраструктура
          </span>
          <h1 className="max-w-4xl text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Стельові медичні консолі
          </h1>
          <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Стельові консолі INMED, балкові системи ВІТ та стійки від підлоги до стелі
            забезпечують надійну інфраструктуру медичних газів, електроживлення, даних
            і аксесуарів для операційних залів та відділень інтенсивної терапії.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ceilingPendantProducts.map((product) => (
              <article key={product.slug} className="glass glass-hover glow-cyan-hover overflow-hidden rounded-xl transition-all duration-300">
                <div className="relative aspect-4/3">
                  <Image
                    src={getCeilingPendantImage(product.slug, "card.jpg")}
                    alt={`${product.name} — стельова медична консоль для операційних та ВІТ`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/70 to-transparent" />
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-foreground">{product.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {ceilingPendantUaDescriptions[product.slug] ?? product.shortDescription}
                  </p>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm" className="gap-2 rounded-lg border-border/50 hover:border-primary/40">
                      <Link href={`/equipment/icu-infrastructure/ceiling-pendants/${product.slug}`}>
                        Детальніше
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-y border-border/50 py-16 md:py-24">
        <div className="absolute inset-0 bg-card/40" />
        <Container className="relative">
          <h2 className="max-w-3xl text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Стельова інфраструктура для операційних і ВІТ
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Стельові медичні консолі централізують підключення медичних газів,
            електроживлення, даних і аксесуарів у точці надання допомоги, зменшують
            кількість обладнання на підлозі, підтримують ергономічні клінічні процеси
            та створюють надійну інфраструктуру для операційних і відділень ВІТ.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="glass rounded-xl p-5">
              <h3 className="text-base font-semibold text-foreground">Централізація медіа в операційних і ВІТ</h3>
              <ul className="mt-3 space-y-2">
                {[
                  "Стельове розміщення усуває перешкоди на підлозі та ризики від кабелів.",
                  "Єдина точка доступу до газів, електрики, даних і моніторингу.",
                  "Підтримує стерильний робочий процес завдяки меншому контакту з підлогою.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="glass rounded-xl p-5">
              <h3 className="text-base font-semibold text-foreground">Гнучкість та ергономіка</h3>
              <ul className="mt-3 space-y-2">
                {[
                  "Шарнірні плечі дають змогу точно позиціонувати обладнання під час процедур.",
                  "Варіанти з регулюванням висоти адаптуються до різних конфігурацій команди.",
                  "Балкові системи з каретками швидко змінюють конфігурацію місця пацієнта у ВІТ.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="glass rounded-xl p-5">
              <h3 className="text-base font-semibold text-foreground">Життєвий цикл та цінність інвестиції</h3>
              <ul className="mt-3 space-y-2">
                {[
                  "Тривалий строк служби з доступними точками технічного обслуговування.",
                  "Модульна конструкція підтримує майбутню реконфігурацію під клінічні потреби.",
                  "Сумісність з екосистемою аксесуарів INMED у різних поколіннях продуктів.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <div className="mt-10">
            <Button asChild size="lg" className="gap-2 rounded-xl glow-cyan">
              <Link href="/contact">
                Отримати пропозицію
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}

