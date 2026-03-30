"use client"

import { PageHeader } from "@/components/page-header"
import { Container } from "@/components/container"
import { CTASection } from "@/components/cta-section"
import { Globe2, Handshake, Hospital, ShieldCheck } from "lucide-react"

const brands = ["Olympus", "Karl Storz", "Siemens", "GE HealthCare", "Drager", "FSN", "INMED"]

const cards = [
  {
    icon: Handshake,
    title: "For manufacturers",
    desc: "Market-entry support, project qualification, technical alignment, and local deal orchestration for healthcare opportunities.",
  },
  {
    icon: Hospital,
    title: "For contractors",
    desc: "Coordination of medical technology packages, room requirements, and equipment integration inside clinic and hospital builds.",
  },
  {
    icon: Globe2,
    title: "For international partners",
    desc: "Local customer communication, delivery coordination, and commissioning support for cross-border medical projects.",
  },
  {
    icon: ShieldCheck,
    title: "For long-term collaboration",
    desc: "Training, service coordination, documentation, and post-installation support that protect partner reputation on the ground.",
  },
]

const bullets = [
  "We position medical technology as part of a complete project package rather than a standalone product quote.",
  "We align stakeholders across buyer teams, project managers, consultants, and technical specialists.",
  "We help reduce delivery friction in projects where trust, timing, and coordination decide the outcome.",
]

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        label="Partnerships"
        title="Manufacturers, Distributors, and Project Partners"
        description="Medintegro can act as a local integrator, commercial partner, and delivery coordinator for complex healthcare infrastructure projects."
      />
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {cards.map((card) => (
              <article
                key={card.title}
                className="glass glass-hover glow-cyan-hover rounded-xl p-6 transition-all duration-300"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                  <card.icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-lg font-semibold text-foreground">{card.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="relative overflow-hidden border-y border-border/50 py-20 md:py-24">
        <div className="absolute inset-0 bg-card/40" />
        <Container className="relative">
          <h2 className="max-w-3xl text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            How we create value for partners
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.3fr_1fr]">
            <div className="glass rounded-xl p-6">
              <ul className="space-y-3">
                {bullets.map((bullet) => (
                  <li key={bullet} className="text-sm leading-relaxed text-muted-foreground">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-xl p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Representative brands
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <span
                    key={brand}
                    className="rounded-full border border-border/60 bg-background/50 px-3 py-1.5 text-sm text-foreground"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  )
}
