"use client"

import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/container"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const projects = [
  {
    titleKey: "project.1.title",
    descKey: "project.1.desc",
    location: "Kyiv",
    image: "/images/projects/project-hospital.jpg",
  },
  {
    titleKey: "project.2.title",
    descKey: "project.2.desc",
    location: "Lviv",
    image: "/images/projects/project-clinic.jpg",
  },
  {
    titleKey: "project.3.title",
    descKey: "project.3.desc",
    location: "Odesa",
    image: "/images/projects/project-surgical.jpg",
  },
]

export function ProjectsPreview() {
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader
          label={t("projects.label")}
          title="Representative project work"
          description="Not just installed equipment, but projects where sourcing, integration, and stakeholder coordination had to work together."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.titleKey}
              className="glass glass-hover glow-cyan-hover group overflow-hidden rounded-xl transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={t(project.titleKey)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="flex flex-col gap-2 p-5">
                <h3 className="text-base font-semibold text-foreground">{t(project.titleKey)}</h3>
                <div className="flex items-center gap-1.5 text-xs text-primary">
                  <MapPin className="h-3 w-3" />
                  {project.location}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(project.descKey)}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline" className="gap-2 rounded-xl border-border/50 hover:border-primary/40">
            <Link href="/projects">
              {t("projects.viewAll")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
