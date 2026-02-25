import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Lightbulb, Monitor, Settings2 } from "lucide-react"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { examinationLampProducts, getExaminationLampProductBySlug } from "@/lib/examination-lamps-products"

export function generateStaticParams() {
  return examinationLampProducts.map((product) => ({ slug: product.slug }))
}

export default async function ExaminationLampProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getExaminationLampProductBySlug(slug)

  if (!product) {
    notFound()
  }

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
            <Link href="/equipment/examination-lamps" className="transition-colors hover:text-primary">
              Examination Lamps
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">{product.name}</span>
          </nav>

          <Link
            href="/equipment/examination-lamps"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Examination Lamps
          </Link>

          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                Examination Lamps
              </span>
              <h1 className="max-w-4xl text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                {product.heroTitle}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {product.heroSubtitle}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="gap-2 rounded-xl glow-cyan">
                  <Link href="/contact">
                    Request Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-xl border border-border/40">
                <Image src={product.heroImages.main.src} alt={product.heroImages.main.alt} fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border/40">
                <Image src={product.heroImages.secondary1.src} alt={product.heroImages.secondary1.alt} fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border/40">
                <Image src={product.heroImages.secondary2.src} alt={product.heroImages.secondary2.alt} fill className="object-cover" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="glass rounded-xl p-6 lg:col-span-2">
              <h2 className="text-xl font-semibold text-foreground md:text-2xl">Overview</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                {product.overview}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {product.valuePoints.map((point) => (
                  <div key={point} className="rounded-lg border border-border/50 bg-background/40 p-3">
                    <p className="text-sm leading-relaxed text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </article>
            <article className="glass rounded-xl p-6">
              <h2 className="text-xl font-semibold text-foreground">Key Highlights</h2>
              <ul className="mt-4 space-y-3">
                {product.highlights.map((item) => (
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

      <section className="relative overflow-hidden border-y border-border/50 py-16 md:py-24">
        <div className="absolute inset-0 bg-card/40" />
        <Container className="relative">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Core capabilities for specialist care environments
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {product.capabilityItems.map((item, index) => (
              <article key={item.title} className="glass glass-hover rounded-xl p-6 transition-all duration-300">
                <div className="mb-3 inline-flex rounded-lg border border-primary/30 bg-primary/10 p-2 text-primary">
                  {index % 3 === 0 ? <Lightbulb className="h-4 w-4" /> : index % 3 === 1 ? <Monitor className="h-4 w-4" /> : <Settings2 className="h-4 w-4" />}
                </div>
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
