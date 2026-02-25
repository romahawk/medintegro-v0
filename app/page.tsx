"use client"

import { Hero } from "@/components/home/hero"
import { Expertise } from "@/components/home/expertise"
import { Categories } from "@/components/home/categories"
import { ProjectsPreview } from "@/components/home/projects-preview"
import { Trust } from "@/components/home/trust"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <Expertise />
      <Categories />
      <ProjectsPreview />
      <CTASection />
    </>
  )
}
