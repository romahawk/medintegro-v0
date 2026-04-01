"use client"

import Image from "next/image"
import { Container } from "@/components/container"
import { SectionHeader } from "@/components/section-header"

const expertiseItems = [
  {
    title: "Clinical brief and OR specification",
    desc: "We translate the surgical brief, room constraints, and equipment priorities into a practical OR system scope.",
    image: "/images/company/equipment-supply.jpg",
  },
  {
    title: "System alignment across the room",
    desc: "We coordinate lights, medical gases, displays, pendants, and supporting infrastructure so the room works as one clinical environment.",
    image: "/images/company/or-integration.jpg",
  },
  {
    title: "Installation, commissioning, and handover",
    desc: "We support delivery planning, on-site coordination, commissioning, staff orientation, and structured handover for the surgical team.",
    image: "/images/company/maintenance.jpg",
  },
  {
    title: "Support beyond launch",
    desc: "We stay involved through service coordination, modernization planning, and future room upgrades as clinical needs evolve.",
    image: "/images/company/turnkey.jpg",
  },
]

export function Expertise() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader
          label="How We Work"
          title="A delivery model built for operating rooms and surgical infrastructure"
          description="From OR specification to commissioning and post-launch support, we help buyers coordinate the systems, brands, and project steps required for a dependable surgical environment."
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
