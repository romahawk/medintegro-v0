"use client"

import { Container } from "@/components/container"

export function Trust() {
  const stats = [
    { value: "200+", label: "projects supported" },
    { value: "15+", label: "years of market experience" },
    { value: "50+", label: "technology and brand partners" },
    { value: "24/7", label: "service support availability" },
  ]

  const proofPoints = [
    "One partner for sourcing, integration, commissioning, and project coordination.",
    "Built for new construction, modernization programs, and multi-brand delivery packages.",
    "Designed to support hospitals, private clinics, contractors, and international partners.",
  ]

  const brands = ["Olympus", "Karl Storz", "GE HealthCare", "Siemens", "Drager", "FSN", "INMED"]

  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-0 bg-mesh" />

      <Container className="relative">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
              <span className="text-4xl font-bold tracking-tight text-primary md:text-5xl">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <div className="glass rounded-xl p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Why buyers trust this model
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {proofPoints.map((point) => (
                <p key={point} className="text-sm leading-relaxed text-muted-foreground">
                  {point}
                </p>
              ))}
            </div>
          </div>
          <div className="glass rounded-xl p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Working across brands
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="rounded-full border border-border/60 bg-background/40 px-3 py-1.5 text-sm text-foreground"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
