"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Lightbulb, Monitor, Network, Wind, type LucideIcon } from "lucide-react"
import { Container } from "@/components/container"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"

const systemPillars: {
  title: string
  description: string
  icon: LucideIcon
}[] = [
  {
    title: "OR integration platforms",
    description:
      "Centralized control for video, routing, documentation, and in-room workflow coordination.",
    icon: Network,
  },
  {
    title: "Surgical lights",
    description:
      "Procedure-ready lighting layouts matched to the room geometry, clinical specialty, and equipment plan.",
    icon: Lightbulb,
  },
  {
    title: "Medical gas systems",
    description:
      "Reliable gas supply points and infrastructure aligned with surgical, anaesthesia, and intensive care workflows.",
    icon: Wind,
  },
  {
    title: "Displays and supporting equipment",
    description:
      "Surgical visualization, pendants, and related room systems integrated into a practical clinical setup.",
    icon: Monitor,
  },
]

export function OrIntegrationFocus() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-card/40" />
      <div className="absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionHeader
              align="left"
              label="Flagship Expertise"
              title="OR integration is the core of the Medintegro offer"
              description="We do not approach operating rooms as isolated products. We coordinate the systems that make a surgical environment function as one dependable clinical workspace."
              className="mb-8"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {systemPillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="glass rounded-xl border border-border/60 p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_18px_50px_-24px_rgba(6,182,212,0.45)]"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg border border-primary/20 bg-primary/10 p-2 text-primary">
                      <pillar.icon className="h-4 w-4" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base font-semibold text-foreground">{pillar.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="glass overflow-hidden rounded-2xl border border-border/60">
            <div className="relative aspect-[16/11] overflow-hidden">
              <Image
                src="/images/company/or-integration.jpg"
                alt="Integrated surgical environment with displays, lighting, and coordinated clinical systems"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
            </div>
            <div className="space-y-5 p-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  What buyers need from an OR integration partner
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  Hospitals, clinics, contractors, and manufacturers need more than supply. They
                  need room logic, cross-system compatibility, commissioning discipline, and a team
                  that can translate clinical requirements into a working operating room.
                </p>
              </div>

              <ul className="grid gap-3 text-sm leading-relaxed text-muted-foreground">
                <li>Integrated planning across lights, gas points, displays, and room workflow.</li>
                <li>Multi-brand coordination that reduces installation friction and handover risk.</li>
                <li>Support for new OR builds, surgical-suite upgrades, and modernization phases.</li>
              </ul>

              <div className="flex flex-wrap gap-3">
                <Button asChild className="rounded-xl">
                  <Link href="/services">
                    Explore OR Solutions
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-xl border-border/60">
                  <Link href="/contact">Discuss an OR Project</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
