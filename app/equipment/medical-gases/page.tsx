import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { medicalGasProducts } from "@/lib/medical-gases-products"

export default function MedicalGasesPage() {
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
            <span className="text-foreground">Medical Gases & Distribution</span>
          </nav>

          <Link
            href="/equipment"
            className="mb-6 flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Equipment
          </Link>

          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            Medical Gases & Distribution
          </span>
          <h1 className="max-w-4xl text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Medical Gas Pipeline Systems
          </h1>
          <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Complete medical gas infrastructure — from central source generation and pipeline
            distribution to terminal outlets, monitoring, zone isolation, and consumption boards
            for every clinical environment.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {medicalGasProducts.map((product) => (
              <article
                key={product.slug}
                className="glass glass-hover glow-cyan-hover overflow-hidden rounded-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3]">
                  <Image src={product.cardImage} alt={product.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-foreground">{product.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {product.shortDescription}
                  </p>
                  <div className="mt-4">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="gap-2 rounded-lg border-border/50 hover:border-primary/40"
                    >
                      <Link href={`/equipment/medical-gases/${product.slug}`}>
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
            Safe and compliant medical gas infrastructure for healthcare facilities
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Medical gas pipeline systems are patient safety critical infrastructure. Every component —
            from source plant to terminal outlet — must be designed, installed, commissioned, and
            maintained to EN ISO 7396-1 and applicable national standards. We provide end-to-end
            project delivery and supply across all system elements.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="glass rounded-xl p-5">
              <h3 className="text-base font-semibold text-foreground">Standards and compliance</h3>
              <ul className="mt-3 space-y-2">
                {[
                  "All systems designed and installed to EN ISO 7396-1.",
                  "Gas-specific colour coding and probe design prevent cross-connection.",
                  "Pressure testing, purging, and verification before commissioning.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="glass rounded-xl p-5">
              <h3 className="text-base font-semibold text-foreground">Reliability and redundancy</h3>
              <ul className="mt-3 space-y-2">
                {[
                  "N+1 redundancy in source plant maintains supply during maintenance.",
                  "Zone isolation via AVSUs prevents area shutdowns affecting adjacent zones.",
                  "Continuous monitoring with audible and visual alarm on pressure deviation.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="glass rounded-xl p-5">
              <h3 className="text-base font-semibold text-foreground">End-to-end project delivery</h3>
              <ul className="mt-3 space-y-2">
                {[
                  "Design, supply, installation, and commissioning from one partner.",
                  "Covering new builds, extensions, and legacy system renovation.",
                  "Full documentation package for handover and ongoing maintenance.",
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
