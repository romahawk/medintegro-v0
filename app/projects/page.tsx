"use client"

import Image from "next/image"
import { MapPin } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { Container } from "@/components/container"
import { CTASection } from "@/components/cta-section"
import { useLanguage } from "@/lib/i18n"

const projects = [
  {
    title: {
      en: "City Clinical Hospital OR Complex",
      ua: "Комплекс операційних міської клінічної лікарні",
    },
    location: {
      en: "Kyiv, Ukraine",
      ua: "Київ, Україна",
    },
    summary: {
      en: "Four operating rooms aligned around centralized video routing, surgical displays, and workflow control for a modern OR block.",
      ua: "Чотири операційні, побудовані навколо централізованої відеокомутації, хірургічних дисплеїв та логіки керування сучасним операційним блоком.",
    },
    challenge: {
      en: "Challenge: coordinate multiple OR rooms, shared video logic, and brand compatibility without slowing project delivery.",
      ua: "Виклик: узгодити кілька операційних, спільну відеологіку та сумісність брендів без затримки реалізації проєкту.",
    },
    scope: {
      en: "Scope: OR integration, surgical displays, routing, room workflow coordination.",
      ua: "Обсяг: інтеграція операційних, хірургічні дисплеї, маршрутизація сигналів, координація логіки приміщень.",
    },
    result: {
      en: "Result: a coordinated OR environment that supports clinical teams with cleaner visualization and faster in-room control.",
      ua: "Результат: узгоджене OR-середовище, яке забезпечує клінічним командам кращу візуалізацію та швидше керування в межах кімнати.",
    },
    image: "/images/projects/project-hospital.jpg",
  },
  {
    title: {
      en: "Private Surgical Center Upgrade",
      ua: "Модернізація приватного хірургічного центру",
    },
    location: {
      en: "Lviv, Ukraine",
      ua: "Львів, Україна",
    },
    summary: {
      en: "Surgical rooms upgraded with integration-ready infrastructure, lighting, and coordinated equipment planning for relaunch.",
      ua: "Хірургічні приміщення модернізовано з інтеграційно-готовою інфраструктурою, освітленням та узгодженим плануванням обладнання для повторного запуску.",
    },
    challenge: {
      en: "Challenge: modernize the surgical suite while aligning room infrastructure with clinical workflow and reopening targets.",
      ua: "Виклик: модернізувати хірургічний блок, узгодивши інфраструктуру приміщень із клінічним процесом і термінами повторного запуску.",
    },
    scope: {
      en: "Scope: surgical lighting, room infrastructure, equipment package coordination, commissioning support.",
      ua: "Обсяг: хірургічне освітлення, кімнатна інфраструктура, координація пакета обладнання, супровід пусконалагодження.",
    },
    result: {
      en: "Result: a sharper surgical-room package that supports daily throughput and a more dependable relaunch path.",
      ua: "Результат: сильніший пакет хірургічних приміщень, який підтримує щоденне навантаження та надійніший шлях до повторного запуску.",
    },
    image: "/images/projects/project-clinic.jpg",
  },
  {
    title: {
      en: "Regional Endoscopy and Procedure Department",
      ua: "Регіональне відділення ендоскопії та процедурних кімнат",
    },
    location: {
      en: "Odesa, Ukraine",
      ua: "Одеса, Україна",
    },
    summary: {
      en: "Procedure rooms equipped with high-resolution visualization, supporting infrastructure, and documentation-ready room systems.",
      ua: "Процедурні кімнати, оснащені високоякісною візуалізацією, допоміжною інфраструктурою та кімнатними системами, готовими до документації процесу.",
    },
    challenge: {
      en: "Challenge: deliver multiple procedure spaces that feel clinically consistent instead of a disconnected equipment rollout.",
      ua: "Виклик: реалізувати кілька процедурних просторів так, щоб вони працювали як єдина клінічна система, а не як набір розрізненого обладнання.",
    },
    scope: {
      en: "Scope: visualization systems, room infrastructure, washer-disinfector support, workflow-ready room setup.",
      ua: "Обсяг: системи візуалізації, кімнатна інфраструктура, підтримка мийно-дезінфекційного циклу, підготовка приміщень до робочого процесу.",
    },
    result: {
      en: "Result: a department package that supports procedure quality, staff usability, and future system expansion.",
      ua: "Результат: пакет для відділення, який підтримує якість процедур, зручність для персоналу та майбутнє розширення систем.",
    },
    image: "/images/projects/project-endoscopy.jpg",
  },
  {
    title: {
      en: "Maternity Hospital Operating Suite Renovation",
      ua: "Реконструкція операційного блоку пологового будинку",
    },
    location: {
      en: "Zaporizhzhia, Ukraine",
      ua: "Запоріжжя, Україна",
    },
    summary: {
      en: "Operating suites and delivery-room infrastructure refreshed with modern surgical and monitoring systems.",
      ua: "Операційні та інфраструктура пологових залів оновлені сучасними хірургічними та моніторинговими системами.",
    },
    challenge: {
      en: "Challenge: improve room readiness and surgical support infrastructure inside an active hospital environment.",
      ua: "Виклик: покращити готовність приміщень та хірургічну інфраструктуру в умовах діючого медичного закладу.",
    },
    scope: {
      en: "Scope: OR equipment refresh, monitoring support, room modernization, coordinated relaunch preparation.",
      ua: "Обсяг: оновлення OR-обладнання, підтримка моніторингу, модернізація приміщень, координація підготовки до повторного запуску.",
    },
    result: {
      en: "Result: a more reliable surgical environment with stronger readiness for obstetric and operative care workflows.",
      ua: "Результат: надійніше хірургічне середовище з кращою готовністю до акушерських та операційних клінічних процесів.",
    },
    image: "/images/projects/project-surgical.jpg",
  },
]

export default function ProjectsPage() {
  const { locale } = useLanguage()

  const copy = {
    label: {
      en: "Project Proof",
      ua: "Підтверджені проєкти",
    },
    title: {
      en: "Selected OR and surgical infrastructure case proof",
      ua: "Вибрані кейси з операційних та хірургічної інфраструктури",
    },
    description: {
      en: "These examples show how Medintegro supports operating rooms, procedure spaces, and surgical infrastructure projects where systems, brands, and delivery steps must work together in practice.",
      ua: "Ці приклади показують, як Medintegro підтримує операційні, процедурні простори та проєкти хірургічної інфраструктури, де системи, бренди та етапи реалізації мають працювати разом на практиці.",
    },
    scopeLabel: {
      en: "Scope",
      ua: "Обсяг",
    },
    resultLabel: {
      en: "Outcome",
      ua: "Результат",
    },
  }

  return (
    <>
      <PageHeader
        label={copy.label[locale]}
        title={copy.title[locale]}
        description={copy.description[locale]}
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title.en}
                className="glass glass-hover glow-cyan-hover group overflow-hidden rounded-2xl transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title[locale]}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/85 to-transparent" />
                </div>

                <div className="space-y-4 p-6">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-foreground">{project.title[locale]}</h2>
                    <div className="flex items-center gap-1.5 text-xs text-primary">
                      <MapPin className="h-3 w-3" />
                      {project.location[locale]}
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    {project.summary[locale]}
                  </p>

                  <div className="grid gap-3">
                    <div className="rounded-xl border border-border/50 bg-background/30 p-4">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {project.challenge[locale]}
                      </p>
                    </div>
                    <div className="rounded-xl border border-border/50 bg-background/30 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        {copy.scopeLabel[locale]}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {project.scope[locale]}
                      </p>
                    </div>
                    <div className="rounded-xl border border-border/50 bg-background/30 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        {copy.resultLabel[locale]}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {project.result[locale]}
                      </p>
                    </div>
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
