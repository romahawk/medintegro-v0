import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { orLightingProducts } from "@/lib/or-lighting-products"

export default function OrLightingPage() {
  const lightingCards = [
    ...orLightingProducts.map((product) => ({
      key: product.slug,
      title: product.name,
      description: product.shortDescription,
      image: product.cardImage,
      href: `/equipment/or-lighting/${product.slug}`,
    })),
    {
      key: "examination-lamps",
      title: "Examination Lamps",
      description: "Dedicated examination and treatment lighting solutions for specialist care environments.",
      image: "/images/or-lighting/diasys-range.png",
      href: "/equipment/examination-lamps",
    },
  ]

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
            <span className="text-foreground">OR Lighting</span>
          </nav>

          <Link
            href="/equipment"
            className="mb-6 flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Equipment
          </Link>

          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            OR Lighting
          </span>
          <h1 className="max-w-4xl text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Surgical Lighting Solutions
          </h1>
          <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Discover modern operating lights designed for visibility, infection-control workflow,
            and ergonomic efficiency in every surgical environment.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {lightingCards.map((card) => (
              <article key={card.key} className="glass glass-hover glow-cyan-hover overflow-hidden rounded-xl transition-all duration-300">
                <div className="relative aspect-[4/3]">
                  <Image src={card.image} alt={card.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
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
            Surgical lights for precision, safety, and workflow efficiency
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Modern surgical lights are a foundational part of operating room performance. A well-selected
            OR lighting system improves tissue differentiation, supports surgeon concentration, and helps
            reduce visual fatigue during long procedures. Strategic lighting planning also contributes to
            cleaner sterile workflows, better team coordination, and long-term reliability of the surgical suite.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="glass rounded-xl p-5">
              <h3 className="text-base font-semibold text-foreground">Why surgical lighting matters</h3>
              <ul className="mt-3 space-y-2">
                {[
                  "Supports accurate visualization in deep and narrow cavities.",
                  "Improves consistency across multidisciplinary procedure types.",
                  "Helps reduce avoidable interruptions caused by poor visibility.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="glass rounded-xl p-5">
              <h3 className="text-base font-semibold text-foreground">Core selection criteria</h3>
              <ul className="mt-3 space-y-2">
                {[
                  "Illuminance and uniformity across the surgical field.",
                  "Color rendering index and color temperature flexibility.",
                  "Sterile operation controls and easy room integration.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="glass rounded-xl p-5">
              <h3 className="text-base font-semibold text-foreground">Long-term OR value</h3>
              <ul className="mt-3 space-y-2">
                {[
                  "Reliable performance over high daily usage cycles.",
                  "Design that supports cleaning and infection prevention workflows.",
                  "Scalable compatibility with future OR integration upgrades.",
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
