"use client"

import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const copy = {
    label: "OR Integration Expert",
    title: "Integrated operating rooms and surgical infrastructure for high-performance clinical environments",
    subtitle:
      "Medintegro designs and integrates operating room systems that combine OR integration platforms, surgical lights, medical gas infrastructure, and specialized clinical equipment into one reliable surgical workflow.",
    cta1: "Explore OR Solutions",
    cta2: "Discuss an OR Project",
    badges: [
      "OR integration",
      "Surgical lights",
      "Medical gas systems",
      "Hospitals, contractors, and partners",
    ],
  }

  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      <div className="absolute inset-0">
        <Image
          src="/images/company/hero-or.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-32 bottom-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <Container className="relative z-10">
        <div className="flex max-w-2xl flex-col gap-6">
          <span className="w-fit rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            {copy.label}
          </span>
          <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {copy.title}
          </h1>
          <p className="max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {copy.subtitle}
          </p>
          <div className="flex flex-wrap gap-2">
            {copy.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-border/60 bg-card/50 px-3 py-1 text-xs text-muted-foreground"
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg" className="gap-2 rounded-xl glow-cyan">
              <Link href="/services">
                {copy.cta1}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl border-border/50 bg-card/30 text-foreground backdrop-blur-sm hover:border-primary/40 hover:bg-card/50 hover:text-foreground"
            >
              <Link href="/contact">{copy.cta2}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
