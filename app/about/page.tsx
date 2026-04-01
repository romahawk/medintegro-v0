"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { Container } from "@/components/container"
import { CTASection } from "@/components/cta-section"
import { SectionHeader } from "@/components/section-header"

const values = [
  {
    title: "OR integration first",
    desc: "Medintegro is built around operating room integration, surgical lighting, medical gas systems, and the infrastructure logic that makes a surgical room work in practice.",
  },
  {
    title: "Vendor-neutral room design",
    desc: "We can combine room systems from different manufacturers because our OR integration approach is vendor neutral and compatible with most global equipment brands.",
  },
  {
    title: "Project-side execution credibility",
    desc: "We support hospitals, clinics, contractors, and partners where room requirements, system compatibility, commissioning, and handover all need disciplined coordination.",
  },
  {
    title: "Long-term clinical support",
    desc: "Service coordination, modernization planning, documentation, and future upgrades remain part of the relationship after launch.",
  },
]

const proofBlocks = [
  {
    title: "What we specialize in",
    desc: "Integrated operating rooms, surgical lighting systems, medical gas infrastructure, surgical displays, and the supporting room systems that shape dependable clinical environments.",
  },
  {
    title: "Where we add the most value",
    desc: "Projects with multiple systems, multiple brands, and multiple stakeholders where surgical room performance depends on coordination, compatibility, and execution discipline.",
  },
  {
    title: "How buyers use us",
    desc: "As an OR integration specialist for new builds, operating-suite upgrades, room modernization programs, and partner-led healthcare projects that need a credible local technical and commercial interface.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About Us"
        title="OR integration expertise backed by project delivery discipline"
        description="Medintegro is positioned as an operating room integration and surgical infrastructure specialist, with broader clinical project capability growing outward from that core expertise."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-5">
              <span className="w-fit rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                What We Do
              </span>
              <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                We help turn surgical room requirements into working operating environments
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Our role is not to act as a simple reseller. We align operating room integration,
                surgical lights, medical gas infrastructure, displays, and supporting room systems
                into one practical delivery path that hospitals, contractors, and partners can
                trust.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                That specialist OR focus is the center of the company. Wider clinic and hospital
                project support matters, but it is strongest when it grows from a surgical
                infrastructure package rather than from generic supply.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl glow-cyan">
              <Image
                src="/images/company/or-integration.jpg"
                alt="Integrated operating room environment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent" />
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-card/50" />
        <div className="absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-primary/30 to-transparent" />

        <Container className="relative">
          <SectionHeader
            label="Specialist Position"
            title="Why Medintegro is strongest in OR and surgical infrastructure projects"
            description="Buyers bring us in when room logic, brand compatibility, infrastructure planning, and commissioning quality matter as much as the equipment list itself."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {proofBlocks.map((block) => (
              <article key={block.title} className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground">{block.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{block.desc}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader
            label="Why Buyers Trust Us"
            title="What strengthens buyer and partner confidence"
          />
          <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
            {values.map((val) => (
              <div
                key={val.title}
                className="glass glass-hover glow-cyan-hover flex items-start gap-4 rounded-xl p-5 transition-all duration-300"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{val.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
