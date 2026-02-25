"use client"

import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Container } from "@/components/container"
import { CTASection } from "@/components/cta-section"
import { MapPin } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const projects = [
  { titleKey: "projectPage.1.title", locationKey: "projectPage.1.location", descKey: "projectPage.1.desc", scopeKey: "projectPage.1.scope", image: "/images/project-hospital.jpg" },
  { titleKey: "projectPage.2.title", locationKey: "projectPage.2.location", descKey: "projectPage.2.desc", scopeKey: "projectPage.2.scope", image: "/images/project-clinic.jpg" },
  { titleKey: "projectPage.3.title", locationKey: "projectPage.3.location", descKey: "projectPage.3.desc", scopeKey: "projectPage.3.scope", image: "/images/project-surgical.jpg" },
  { titleKey: "projectPage.4.title", locationKey: "projectPage.4.location", descKey: "projectPage.4.desc", scopeKey: "projectPage.4.scope", image: "/images/project-icu.jpg" },
  { titleKey: "projectPage.5.title", locationKey: "projectPage.5.location", descKey: "projectPage.5.desc", scopeKey: "projectPage.5.scope", image: "/images/project-imaging.jpg" },
  { titleKey: "projectPage.6.title", locationKey: "projectPage.6.location", descKey: "projectPage.6.desc", scopeKey: "projectPage.6.scope", image: "/images/project-endoscopy.jpg" },
]

export default function ProjectsPage() {
  const { t } = useLanguage()

  return (
    <>
      <PageHeader
        label={t("projectsPage.label")}
        title={t("projectsPage.title")}
        description={t("projectsPage.subtitle")}
      />
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.titleKey}
                className="glass glass-hover glow-cyan-hover group flex flex-col overflow-hidden rounded-xl transition-all duration-300"
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
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h2 className="text-base font-semibold text-foreground">
                    {t(project.titleKey)}
                  </h2>
                  <div className="flex items-center gap-1.5 text-xs text-primary">
                    <MapPin className="h-3 w-3" />
                    {t(project.locationKey)}
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {t(project.descKey)}
                  </p>
                  <div className="mt-2 rounded-lg border border-border/50 bg-background/30 px-3 py-2">
                    <span className="text-xs font-semibold text-muted-foreground">{t("projects.scope")}: </span>
                    <span className="text-xs text-foreground">{t(project.scopeKey)}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  )
}
