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
    title: {
      en: "Dobrobut Private Clinic — Surgical lights",
      ua: "Приватна клініка Добробут — Хірургічне освітлення",
    },
    desc: {
      en: "Surgical lighting supply and installation for a leading private clinic network in Kyiv.",
      ua: "Постачання та монтаж хірургічного освітлення для провідної мережі приватних клінік у Києві.",
    },
    location: "Kyiv",
    image: "/images/pages/home/dobrobut-2017-1.jpg",
  },
  {
    title: {
      en: "City Clinical Hospital No. 1 — Integrated OR and Surgical lights",
      ua: "Міська клінічна лікарня №1 — Інтегрована операційна та хірургічне освітлення",
    },
    desc: {
      en: "Integrated operating room setup combining surgical lighting and OR infrastructure for a major municipal hospital.",
      ua: "Комплексне оснащення операційної з хірургічним освітленням та інфраструктурою OR для великої міської лікарні.",
    },
    location: "Kyiv",
    image: "/images/pages/home/kyiv-1_2.jpg",
  },
  {
    title: {
      en: "City Clinical Hospital No. 7 — Surgical lights and pendants",
      ua: "Міська клінічна лікарня №7 — Хірургічне освітлення та консолі",
    },
    desc: {
      en: "Supply and installation of surgical lights and ceiling-mounted pendants as part of a broader OR infrastructure upgrade.",
      ua: "Постачання та монтаж хірургічних світильників і стельових консолей у рамках масштабного оновлення інфраструктури операційної.",
    },
    location: "Kyiv",
    image: "/images/pages/home/kyiv-7_3.jpg",
  },
]

export function ProjectsPreview() {
  const { locale } = useLanguage()
  const copy = {
    label: {
      en: "Project Proof",
      ua: "Підтверджені проєкти",
    },
    title: {
      en: "Selected OR and surgical infrastructure projects",
      ua: "Вибрані проєкти з операційних та хірургічної інфраструктури",
    },
    description: {
      en: "These examples show where integration, surgical infrastructure, and multi-system coordination had to work together in real clinical environments.",
      ua: "Ці приклади показують, де інтеграція, хірургічна інфраструктура та координація кількох систем мали працювати разом у реальних клінічних умовах.",
    },
    viewAll: {
      en: "View All Projects",
      ua: "Переглянути всі проєкти",
    },
  }

  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader
          label={copy.label[locale]}
          title={copy.title[locale]}
          description={copy.description[locale]}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title.en}
              className="glass glass-hover glow-cyan-hover group overflow-hidden rounded-xl transition-all duration-300"
            >
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title[locale]}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent" />
              </div>
              <div className="flex flex-col gap-2 p-5">
                <h3 className="text-base font-semibold text-foreground">{project.title[locale]}</h3>
                <div className="flex items-center gap-1.5 text-xs text-primary">
                  <MapPin className="h-3 w-3" />
                  {project.location}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.desc[locale]}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline" className="gap-2 rounded-xl border-border/50 hover:border-primary/40">
            <Link href="/projects">
              {copy.viewAll[locale]}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
