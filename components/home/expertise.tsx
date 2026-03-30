"use client"

import Image from "next/image"
import { Container } from "@/components/container"
import { SectionHeader } from "@/components/section-header"

const expertiseItems = [
  {
    title: "Sourcing and specification",
    desc: "We build the right package around the clinical brief, budget constraints, and room requirements.",
    image: "/images/company/equipment-supply.jpg",
  },
  {
    title: "Infrastructure and systems integration",
    desc: "We align medical gases, displays, lighting, IT, and workflow logic as one coordinated environment.",
    image: "/images/company/or-integration.jpg",
  },
  {
    title: "Delivery and commissioning",
    desc: "We coordinate supply, installation, commissioning, training, and handover documentation.",
    image: "/images/company/maintenance.jpg",
  },
  {
    title: "Support after launch",
    desc: "We stay involved through service coordination, updates, and future modernization phases.",
    image: "/images/company/turnkey.jpg",
  },
]

export function Expertise() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader
          label="How We Work"
          title="Commercial and technical coordination for complex healthcare projects"
          description="We combine equipment sourcing, technical integration, and delivery management so buyers receive an operational solution, not just a list of devices."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {expertiseItems.map((item) => (
            <article
              key={item.title}
              className="glass glass-hover glow-cyan-hover group flex flex-col overflow-hidden rounded-xl transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="flex flex-col gap-2 p-5">
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
