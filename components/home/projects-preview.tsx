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
      en: "City Clinical Hospital OR Complex",
      ua: "Комплекс операційних міської клінічної лікарні",
    },
    desc: {
      en: "Four integrated operating rooms with centralized video routing, surgical displays, and coordinated room control.",
      ua: "Чотири інтегровані операційні з централізованою відеокомутацією, хірургічними дисплеями та узгодженим керуванням у межах кімнати.",
    },
    location: "Kyiv",
    image: "/images/projects/project-hospital.jpg",
  },
  {
    title: {
      en: "Private Surgical Center Upgrade",
      ua: "Модернізація приватного хірургічного центру",
    },
    desc: {
      en: "Surgical lighting, room infrastructure, and supporting systems coordinated for a faster relaunch of the OR suite.",
      ua: "Хірургічне освітлення, інфраструктура приміщення та допоміжні системи, узгоджені для швидкого перезапуску операційного блоку.",
    },
    location: "Lviv",
    image: "/images/projects/project-clinic.jpg",
  },
  {
    title: {
      en: "Regional Endoscopy and Procedure Department",
      ua: "Регіональне відділення ендоскопії та процедурних кімнат",
    },
    desc: {
      en: "Procedure rooms equipped with visualization, integration-ready infrastructure, and room systems aligned for clinical workflow.",
      ua: "Процедурні кімнати, оснащені системами візуалізації, інфраструктурою для інтеграції та узгодженими кімнатними системами для клінічного процесу.",
    },
    location: "Odesa",
    image: "/images/projects/project-surgical.jpg",
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
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title[locale]}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
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
