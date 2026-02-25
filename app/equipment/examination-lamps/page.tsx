import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { examinationLampProducts } from "@/lib/examination-lamps-products"

export default function ExaminationLampsPage() {
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
            <span className="text-foreground">Examination Lamps</span>
          </nav>

          <Link
            href="/equipment"
            className="mb-6 flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Equipment
          </Link>
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            Examination Lamps
          </span>
          <h1 className="max-w-4xl text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Examination & Treatment Lighting
          </h1>
          <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Dedicated lighting solutions for consultation rooms, specialist examinations, and minor procedures.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {examinationLampProducts.map((product) => (
              <article key={product.slug} className="glass glass-hover glow-cyan-hover overflow-hidden rounded-xl transition-all duration-300">
                <div className="relative aspect-[16/10]">
                  <Image src={product.cardImage} alt={product.name} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-foreground">{product.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.shortDescription}</p>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm" className="gap-2 rounded-lg border-border/50 hover:border-primary/40">
                      <Link href={`/equipment/examination-lamps/${product.slug}`}>
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
            Medical care and examination lighting for daily clinical precision
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Examination lights are essential in consultation rooms, treatment areas, and minor
            procedure spaces where clinicians rely on clear visualization for accurate diagnosis and
            safe intervention. Modern medical examination lighting should provide high-quality color
            rendering, low-shadow illumination, ergonomic handling, and practical hygiene-oriented
            controls that fit high-frequency daily workflows.
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground md:text-base">
            In specialist care environments, a well-chosen treatment lamp improves visual comfort
            and supports more consistent clinical decisions. Features such as touchless adjustment,
            fast activation behavior, and automatic energy-saving shutoff can also improve
            operational efficiency while maintaining sterile workflow discipline.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="glass rounded-xl p-5">
              <h3 className="text-base font-semibold text-foreground">Clinical lighting quality</h3>
              <ul className="mt-3 space-y-2">
                {[
                  "High color rendering for precise tissue and anomaly perception.",
                  "Low-shadow field behavior for examination and minor procedures.",
                  "Stable intensity suitable for repeated daily diagnostic use.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="glass rounded-xl p-5">
              <h3 className="text-base font-semibold text-foreground">Hygiene and ergonomics</h3>
              <ul className="mt-3 space-y-2">
                {[
                  "Touchless interaction concepts to reduce unnecessary contact.",
                  "Design that supports cleaning and maintenance routines.",
                  "Ergonomic handling for fast and accurate light positioning.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="glass rounded-xl p-5">
              <h3 className="text-base font-semibold text-foreground">Efficiency and sustainability</h3>
              <ul className="mt-3 space-y-2">
                {[
                  "Automatic on/off logic can reduce avoidable energy consumption.",
                  "Lighting control tuned for rapid room turnover in outpatient care.",
                  "Reliable long-term operation for high-volume specialist practices.",
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
