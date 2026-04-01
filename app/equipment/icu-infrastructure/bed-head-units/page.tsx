import Link from "next/link"
import Image from "next/image"
import { existsSync, statSync } from "node:fs"
import path from "node:path"
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { bedHeadUnitProducts } from "@/lib/icu-infrastructure-products"

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
              Equipment
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/equipment" className="transition-colors hover:text-primary">
              ICU / Critical Infrastructure
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">Bed Head Units</span>
          </nav>

          <Link
            href="/equipment"
            className="mb-6 flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Equipment
          </Link>

          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            ICU / Critical Infrastructure
          </span>
          <h1 className="max-w-4xl text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Bed Head Units
          </h1>
          <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            INMED MERY family bed head units - integrating medical gas, electrical, data, IT,
            and lighting in a single modular bedside unit for hospital wards, ICU, paediatric,
            and premium care environments.
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
                    {product.shortDescription}
                  </p>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm" className="gap-2 rounded-lg border-border/50 hover:border-primary/40">
                      <Link href={`/equipment/icu-infrastructure/bed-head-units/${product.slug}`}>
                        View More
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
            Bed head units for every hospital ward and care environment
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Bed head units organize all bedside media - gas, power, data, lighting - in one modular
            overhead system, supporting efficient nursing workflows and a clean patient environment.
            The MERY family covers every ward type from standard general wards to ICU, paediatric,
            and premium private care.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="glass rounded-xl p-5">
              <h3 className="text-base font-semibold text-foreground">Organized bedside infrastructure</h3>
              <ul className="mt-3 space-y-2">
                {[
                  "Centralizes gas, electrical, data, and lighting at the bedside.",
                  "Eliminates floor-level cable management and equipment stands.",
                  "Supports rapid clinical access during nursing procedures.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="glass rounded-xl p-5">
              <h3 className="text-base font-semibold text-foreground">Clinical environment range</h3>
              <ul className="mt-3 space-y-2">
                {[
                  "Standard ward to ICU-grade media provision options.",
                  "Paediatric models with child-safe design and themed fronts.",
                  "Premium finishes for private and luxury healthcare environments.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="glass rounded-xl p-5">
              <h3 className="text-base font-semibold text-foreground">Patient comfort and experience</h3>
              <ul className="mt-3 space-y-2">
                {[
                  "Integrated nurse call, entertainment, and patient media systems.",
                  "Multi-zone lighting supports procedures and patient rest cycles.",
                  "Design options from functional to premium aesthetics.",
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
                Request Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}

