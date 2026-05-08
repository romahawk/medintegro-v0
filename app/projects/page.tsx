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
      en: "Dobrobut Private Clinic Network — Surgical Lighting",
      ua: "Мережа приватних клінік Добробут — хірургічне освітлення",
    },
    location: {
      en: "Kyiv, Ukraine — 3 branches",
      ua: "Київ, Україна — 3 філії",
    },
    summary: {
      en: "15 operating rooms across three Dobrobut clinic branches equipped with Surgiris X3-X2MT surgical lights, delivered as a coordinated multi-site project.",
      ua: "15 операційних у трьох філіях клінік Добробут оснащені хірургічними світильниками Surgiris X3-X2MT у рамках скоординованого багатомайданчикового проєкту.",
    },
    challenge: {
      en: "Challenge: maintain consistent lighting standards and commissioning quality across 15 ORs in three separate clinic locations operating on different schedules.",
      ua: "Виклик: забезпечити єдині стандарти освітлення та якість пусконалагодження у 15 операційних трьох філій, що працюють за різними графіками.",
    },
    scope: {
      en: "Scope: Surgiris X3-X2MT surgical lights, 15 ORs across 3 branches, multi-site delivery and commissioning coordination.",
      ua: "Обсяг: хірургічні світильники Surgiris X3-X2MT, 15 операційних у 3 філіях, координація поставки та пусконалагодження на кількох майданчиках.",
    },
    result: {
      en: "Result: a unified surgical lighting standard across all three clinic branches with consistent clinical performance and room-ready handover.",
      ua: "Результат: єдиний стандарт хірургічного освітлення в усіх трьох філіях із однорідними клінічними показниками та готовністю приміщень до роботи.",
    },
    image: "/images/projects/project-dobrobut.jpg",
  },
  {
    title: {
      en: "National Pediatric Hospital — OR Integration System",
      ua: "Національна дитяча лікарня — система OR integration",
    },
    location: {
      en: "Kyiv, Ukraine",
      ua: "Київ, Україна",
    },
    summary: {
      en: "7 operating rooms equipped with the Surgimedia Distriview 4K-IP OR integration system, enabling centralized video routing and surgical workflow control across the pediatric surgical department.",
      ua: "7 операційних оснащені системою OR integration Surgimedia Distriview 4K-IP, що забезпечує централізований відеорозподіл і керування хірургічним процесом у педіатричному хірургічному відділенні.",
    },
    challenge: {
      en: "Challenge: implement a unified OR integration platform across 7 operating rooms supporting multi-discipline pediatric surgery with demanding workflow and cross-room coordination requirements.",
      ua: "Виклик: впровадити єдину платформу OR integration у 7 операційних для мультидисциплінарної педіатричної хірургії з високими вимогами до процесу та координації між кімнатами.",
    },
    scope: {
      en: "Scope: Surgimedia Distriview 4K-IP OR integration system, 7 ORs, centralized video routing and surgical workflow coordination.",
      ua: "Обсяг: система OR integration Surgimedia Distriview 4K-IP, 7 операційних, централізований відеорозподіл і координація хірургічного процесу.",
    },
    result: {
      en: "Result: a centralized OR integration environment supporting multi-discipline pediatric surgery with reliable video management and consistent room workflow.",
      ua: "Результат: централізоване OR-середовище для мультидисциплінарної педіатричної хірургії з надійним керуванням відео та сталим робочим процесом у приміщеннях.",
    },
    image: "/images/projects/project-k2o.jpg",
  },
  {
    title: {
      en: "Kyiv City Clinical Hospital No. 1 — OR Integration and Lighting",
      ua: "Київська міська клінічна лікарня №1 — OR Integration і освітлення",
    },
    location: {
      en: "Kyiv, Ukraine",
      ua: "Київ, Україна",
    },
    summary: {
      en: "Operating rooms equipped with the Surgimedia Compact OR integration system combined with Surgiris Epure surgical lights with integrated video cameras, connecting room lighting and OR video infrastructure.",
      ua: "Операційні оснащені системою OR integration Surgimedia Compact у поєднанні з хірургічними світильниками Surgiris Epure з вбудованими відеокамерами, що об'єднує освітлення приміщення й відеоінфраструктуру операційної.",
    },
    challenge: {
      en: "Challenge: combine OR integration with video-capable surgical lighting in a city hospital environment, ensuring the camera-equipped lights feed correctly into the room's OR video system.",
      ua: "Виклик: поєднати OR integration з відеоздатним хірургічним освітленням у міській лікарні, гарантуючи коректну передачу відеосигналу від камер світильників до OR-системи приміщення.",
    },
    scope: {
      en: "Scope: Surgimedia Compact OR integration system; Surgiris Epure surgical lights with embedded video cameras.",
      ua: "Обсяг: система OR integration Surgimedia Compact; хірургічні світильники Surgiris Epure з вбудованими відеокамерами.",
    },
    result: {
      en: "Result: an integrated OR environment where video-capable surgical lights are connected to the room's OR integration system, supporting both illumination and in-room video capture.",
      ua: "Результат: інтегроване OR-середовище, де відеоздатні хірургічні світильники підключені до системи OR integration приміщення, забезпечуючи освітлення і відеозапис у кімнаті.",
    },
    image: "/images/projects/project-kyiv-1_1.jpg",
  },
  {
    title: {
      en: "Kyiv City Clinical Hospital No. 7 — Lights and Medical Gas Pendants",
      ua: "Київська міська клінічна лікарня №7 — освітлення і консолі медичних газів",
    },
    location: {
      en: "Kyiv, Ukraine",
      ua: "Київ, Україна",
    },
    summary: {
      en: "Operating rooms equipped with Surgiris X3-X2MT surgical lights and Surgiris Genius medical gas pendants, delivered as a coordinated single-supplier OR infrastructure package.",
      ua: "Операційні оснащені хірургічними світильниками Surgiris X3-X2MT і консолями медичних газів Surgiris Genius у рамках скоординованого OR-інфраструктурного пакету від одного постачальника.",
    },
    challenge: {
      en: "Challenge: align surgical lighting and medical gas pendant systems from the same manufacturer into one consistent OR infrastructure delivery without creating inter-system dependencies that complicate installation.",
      ua: "Виклик: узгодити хірургічне освітлення і консолі медичних газів від одного виробника в єдине OR-інфраструктурне постачання без міжсистемних залежностей, що ускладнюють монтаж.",
    },
    scope: {
      en: "Scope: Surgiris X3-X2MT surgical lights; Surgiris Genius medical gas pendants; coordinated delivery and commissioning.",
      ua: "Обсяг: хірургічні світильники Surgiris X3-X2MT; консолі медичних газів Surgiris Genius; координована поставка та пусконалагодження.",
    },
    result: {
      en: "Result: a coordinated single-supplier OR infrastructure package covering both surgical lighting and medical gas supply, with a clean handover to the surgical team.",
      ua: "Результат: скоординований OR-інфраструктурний пакет від одного постачальника, що охоплює хірургічне освітлення і медичне газопостачання з чіткою передачею хірургічній команді.",
    },
    image: "/images/projects/project-kyiv-7_1.jpg",
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
                <div className="relative aspect-16/10 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title[locale]}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

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
