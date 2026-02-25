"use client"

import { Container } from "@/components/container"
import { useLanguage } from "@/lib/i18n"

export function Trust() {
  const { t } = useLanguage()

  const stats = [
    { value: "200+", key: "stats.projects" },
    { value: "50+", key: "stats.partners" },
    { value: "15+", key: "stats.experience" },
    { value: "24/7", key: "stats.support" },
  ]

  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-0 bg-mesh" />

      <Container className="relative">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.key} className="flex flex-col items-center gap-2 text-center">
              <span className="text-4xl font-bold tracking-tight text-primary md:text-5xl">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">{t(stat.key)}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
