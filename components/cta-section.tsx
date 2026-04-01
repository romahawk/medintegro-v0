"use client"

import Link from "next/link"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function CTASection() {
  const { locale } = useLanguage()
  const copy = {
    label: {
      en: "OR Consultation",
      ua: "Консультація щодо операційної",
    },
    title: {
      en: "Planning an operating room or upgrading surgical infrastructure?",
      ua: "Плануєте операційну або оновлення хірургічної інфраструктури?",
    },
    description: {
      en: "Talk with Medintegro about OR integration, surgical lights, medical gases, and the room systems needed to launch a dependable surgical environment.",
      ua: "Обговоріть з Medintegro інтеграцію операційної, хірургічне освітлення, медичні гази та кімнатні системи, потрібні для запуску надійного хірургічного середовища.",
    },
    button: {
      en: "Discuss Your OR Project",
      ua: "Обговорити проєкт операційної",
    },
  }

  return (
    <section className="relative overflow-hidden border-t border-border/50 py-20 md:py-24">
      {/* Background glow */}
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <Container className="relative flex flex-col items-center gap-6 text-center">
        <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
          {copy.label[locale]}
        </span>
        <h2 className="max-w-xl text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl lg:text-4xl">
          {copy.title[locale]}
        </h2>
        <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
          {copy.description[locale]}
        </p>
        <Button
          asChild
          size="lg"
          className="mt-2 gap-2 rounded-xl glow-cyan"
        >
          <Link href="/contact">
            {copy.button[locale]}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </Container>
    </section>
  )
}
