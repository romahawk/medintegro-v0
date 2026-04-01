import Link from "next/link"
import Image from "next/image"
import path from "node:path"
import { existsSync, statSync } from "node:fs"
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { fsnProducts } from "@/lib/surgical-monitors-products"

function getFsnImage(slug: string, fileName: string, fallbackSrc: string) {
  const relativePath = `/images/products/surgical-monitors/fsn/${slug}/${fileName}`
  const absolutePath = path.join(
    process.cwd(),
    "public",
    "images",
    "products",
    "surgical-monitors",
    "fsn",
    slug,
    fileName
  )

  if (!existsSync(absolutePath)) {
    return fallbackSrc
  }

  return `${relativePath}?v=${statSync(absolutePath).mtimeMs}`
}

export default function FsnMonitorsPage() {
  const productCards = fsnProducts.map((product) => ({
    key: product.slug,
    title: product.name,
    description: product.shortDescription,
    image: getFsnImage(product.slug, "card.jpg", product.cardImage),
    href: `/equipment/surgical-monitors/fsn/${product.slug}`,
  }))

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
            <span className="text-foreground">FSN Medical Technologies Monitors</span>
          </nav>

          <Link
            href="/equipment"
            className="mb-6 flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Equipment
          </Link>

          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            OR Visualization Infrastructure
          </span>
          <h1 className="max-w-4xl text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            FSN surgical displays for integrated OR and advanced visualization
          </h1>
          <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            FSN structures its surgical-display range across FHD, 4K, and large-format 4K
            categories, including Mini-LED, OLED, and team-viewing formats that support operating
            rooms as integrated visualization environments rather than isolated display points.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {productCards.map((card) => (
              <article key={card.key} className="glass glass-hover glow-cyan-hover overflow-hidden rounded-xl transition-all duration-300">
                <div className="relative aspect-4/3 overflow-hidden bg-white">
                  <Image src={card.image} alt={card.title} fill className="object-contain p-5" />
                  <div className="absolute inset-0 bg-linear-to-t from-background/70 to-transparent" />
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-foreground">{card.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm" className="gap-2 rounded-lg border-border/50 hover:border-primary/40">
                      <Link href={card.href}>
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
            Display infrastructure for different OR visualization roles
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground md:text-base">
            The current FSN monitor structure highlights compact FHD displays, 4K clinical panels,
            Mini-LED and OLED premium options, and large 55-58 inch monitors for team-viewing and
            integrated-room layouts. This gives buyers a practical path from auxiliary and
            procedure-room visualization up to premium OR imaging and gallery-viewing environments.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="glass rounded-xl p-5">
              <h3 className="text-base font-semibold text-foreground">FHD to 4K display range</h3>
              <ul className="mt-3 space-y-2">
                {[
                  "FHD fanless monitors for standard endoscopy and auxiliary positions.",
                  "4K UHD panels from 27\" to 32\" for high-resolution primary visualization.",
                  "Mini-LED 4K flagship for HDR imaging in complex procedures.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="glass rounded-xl p-5">
              <h3 className="text-base font-semibold text-foreground">Specialty display technology</h3>
              <ul className="mt-3 space-y-2">
                {[
                  "OLED panel for perfect black levels and infinite contrast ratio.",
                  "58\" DICOM large-format for gallery positions and imaging review.",
                  "4K 3D stereoscopic display for robotic and advanced MIS procedures.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="glass rounded-xl p-5">
              <h3 className="text-base font-semibold text-foreground">Integration-focused deployment</h3>
              <ul className="mt-3 space-y-2">
                {[
                  "Fanless designs for quiet operation in noise-sensitive environments.",
                  "Medical-grade calibration maintained across all display series.",
                  "Broad input and mounting compatibility for diverse OR configurations.",
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
                Discuss OR Display Requirements
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
