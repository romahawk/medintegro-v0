import Link from "next/link"
import Image from "next/image"
import { existsSync, statSync } from "node:fs"
import path from "node:path"
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { bedHeadUnitProducts } from "@/lib/icu-infrastructure-products"

const productDescriptions: Record<string, string> = {
  "mery-classic": "Класична приліжкова панель MERY, що інтегрує медичні гази, електрику та освітлення у модульній конструкції.",
  "mery-care": "Розширена приліжкова панель для ВІТ/NICU у горизонтальній або вертикальній конфігурації для критичної допомоги.",
  "mery-light": "Ультратонка легка приліжкова панель з 9 типами алюмінієвих профілів для газів, електрики, IT та освітлення.",
  "mery-wall": "Вбудована в стіну приліжкова панель з якісними оздобленнями, освітленням і повною медичною інфраструктурою.",
  "mery-edge": "Сучасна приліжкова панель з елегантною алюмінієвою передньою поверхнею та ергономічним доступом до медіа.",
  "mery-fun": "Педіатрична приліжкова панель з кольоровими Corian-панелями, безпечними розетками та повною медичною інтеграцією.",
  "mery-art": "Преміальна приліжкова панель з Corian або загартованим склом, що поєднує клінічну функціональність і дизайн.",
  "mery-comfort": "Приліжкова панель для комфорту пацієнта з Corian-оздобленням, зонами для пацієнта і персоналу та багатозонним освітленням.",
}

function getBedHeadUnitImage(slug: string, fileName: string, fallbackSrc: string) {
  const relativePath = `/images/products/icu-infrastructure/bed-head-units/${slug}/${fileName}`
  const absolutePath = path.join(
    process.cwd(),
    "public",
    "images",
    "products",
    "icu-infrastructure",
    "bed-head-units",
    slug,
    fileName
  )

  if (!existsSync(absolutePath)) {
    return fallbackSrc
  }

  return `${relativePath}?v=${statSync(absolutePath).mtimeMs}`
}

export default function BedHeadUnitsPage() {
  return (
    <>
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
            <span className="text-foreground">Приліжкові панелі</span>
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
            Приліжкові панелі
          </h1>
          <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Приліжкові панелі сімейства INMED MERY об'єднують медичні гази,
            електроживлення, дані, IT та освітлення в одному модульному рішенні
            для лікарняних палат, ВІТ, педіатрії та преміальних середовищ догляду.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {bedHeadUnitProducts.map((product) => (
              <article key={product.slug} className="glass glass-hover glow-cyan-hover overflow-hidden rounded-xl transition-all duration-300">
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={getBedHeadUnitImage(product.slug, "card.jpg", product.cardImage)}
                    alt={product.name}
                    fill
                    className={product.slug === "mery-classic" ? "scale-125 object-cover" : "object-cover"}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/70 to-transparent" />
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-foreground">{product.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {productDescriptions[product.slug] ?? product.shortDescription}
                  </p>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm" className="gap-2 rounded-lg border-border/50 hover:border-primary/40">
                      <Link href={`/equipment/icu-infrastructure/bed-head-units/${product.slug}`}>
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
            Приліжкові панелі для кожного лікарняного відділення
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Приліжкові панелі організовують усі підключення біля ліжка - гази,
            живлення, дані та освітлення - в одній модульній системі, підтримуючи
            ефективну роботу медичного персоналу та охайне середовище для пацієнта.
            Сімейство MERY охоплює палати загального профілю, ВІТ, педіатрію
            та преміальні приватні палати.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="glass rounded-xl p-5">
              <h3 className="text-base font-semibold text-foreground">Організована приліжкова інфраструктура</h3>
              <ul className="mt-3 space-y-2">
                {[
                  "Централізує гази, електрику, дані та освітлення біля ліжка.",
                  "Зменшує потребу в кабелях на підлозі та окремих стійках обладнання.",
                  "Підтримує швидкий клінічний доступ під час сестринських процедур.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="glass rounded-xl p-5">
              <h3 className="text-base font-semibold text-foreground">Діапазон клінічних середовищ</h3>
              <ul className="mt-3 space-y-2">
                {[
                  "Варіанти від стандартних палат до медіаінфраструктури рівня ВІТ.",
                  "Педіатричні моделі з безпечним дизайном і тематичними фронтами.",
                  "Преміальні оздоблення для приватних і висококласних медичних середовищ.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="glass rounded-xl p-5">
              <h3 className="text-base font-semibold text-foreground">Комфорт і досвід пацієнта</h3>
              <ul className="mt-3 space-y-2">
                {[
                  "Інтегровані системи виклику медсестри, розваг і пацієнтських медіа.",
                  "Багатозонне освітлення підтримує процедури та відпочинок пацієнта.",
                  "Дизайн від функціонального виконання до преміальної естетики.",
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

