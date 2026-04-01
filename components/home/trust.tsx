"use client"

import { Container } from "@/components/container"

export function Trust() {
  const stats = [
    { value: "200+", label: "clinical projects and room packages supported" },
    { value: "15+", label: "years in medical technology and project delivery" },
    { value: "50+", label: "manufacturers and technology partners" },
    { value: "24/7", label: "service coordination and support availability" },
  ]

  const proofPoints = [
    "OR integration expertise that aligns surgical displays, lighting, medical gas infrastructure, and supporting clinical systems into one reliable room environment.",
    "Structured for new operating room builds, surgical-suite upgrades, and multi-brand hospital projects that require commissioning and handover discipline.",
    "Built for hospitals, private clinics, contractors, and manufacturers that need a technically credible local integration partner rather than a simple reseller.",
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
              Why OR buyers trust Medintegro
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
              Representative brands and technologies
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
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We coordinate multi-brand operating room and surgical infrastructure packages around
              the clinical workflow, installation sequence, and long-term support model.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
