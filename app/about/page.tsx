"use client"

import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Container } from "@/components/container"
import { CTASection } from "@/components/cta-section"
import { SectionHeader } from "@/components/section-header"
import { CheckCircle } from "lucide-react"

const values = [
  {
    title: "Project-led thinking",
    desc: "We work from clinical use case, room logic, and launch requirements instead of treating the opportunity as a simple product resale.",
  },
  {
    title: "Multi-brand coordination",
    desc: "We can combine equipment, infrastructure, and workflow systems from different manufacturers into one usable environment.",
  },
  {
    title: "Partner-side support",
    desc: "We can support manufacturers, distributors, and international partners as a local project and customer interface.",
  },
  {
    title: "Support after commissioning",
    desc: "Training, service coordination, documentation, and future-stage modernization remain part of the relationship.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About Us"
        title="About Medintegro"
        description="Medintegro is positioned for healthcare projects where trust, coordination, and integration matter more than a simple equipment quote."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-5">
              <span className="w-fit rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                What We Do
              </span>
              <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                We operate between commercial coordination, engineering reality, and project launch
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Our role is to assemble a workable package for hospitals, clinics, contractors, and partners by aligning brands, room requirements, infrastructure, procurement, and commissioning into one delivery path.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl glow-cyan">
              <Image
                src="/images/about-team.jpg"
                alt="Medintegro project delivery"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-card/50" />
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <Container className="relative">
          <SectionHeader
            label="Where Medintegro Adds Value"
            title="Where Medintegro adds the most value"
            description="We are most useful when a project involves multiple systems, multiple suppliers, or multiple decision-makers. That is where an integrator can reduce friction, protect credibility, and keep the delivery package commercially coherent."
          />
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader
            label="Why Buyers Trust Us"
            title="What strengthens buyer and partner confidence"
          />
          <div className="mx-auto grid max-w-3xl gap-5 md:grid-cols-2">
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
