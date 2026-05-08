"use client"

import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"
import {
  ArrowRight,
  Home,
  Package,
  Briefcase,
  Users,
  Building2,
  Phone,
} from "lucide-react"

export default function NotFound() {
  const { locale } = useLanguage()

  const copy = {
    label: {
      en: "404 / Route Not Found",
      ua: "404 / Маршрут не знайдено",
    },
    title: {
      en: <>This page seems to have stayed<br className="hidden md:block" /> in the old operating room</>,
      ua: <>Схоже, ця сторінка залишилась<br className="hidden md:block" /> у старій операційній</>,
    },
    body: {
      en: "The link may point to an old Medintegro page or a section that was moved during the site update. We reorganised the structure to help you find solutions, equipment, or contact information faster.",
      ua: "Можливо, посилання веде на стару сторінку Medintegro або розділ, який був перенесений під час оновлення сайту. Ми оновили структуру, щоб швидше знайти рішення, обладнання або контактну інформацію.",
    },
    hint: {
      en: "The navigation system has redirected you to available sections.",
      ua: "Система навігації перенаправила вас до доступних розділів.",
    },
    cta: {
      en: "Discuss an OR Project",
      ua: "Обговорити проєкт операційної",
    },
    home: {
      en: "Back to Home",
      ua: "Повернутися на головну",
    },
  }

  const navCards = [
    { href: "/solutions", icon: Briefcase, label: { en: "OR Solutions",      ua: "Рішення для операційних" } },
    { href: "/equipment", icon: Package,   label: { en: "Equipment",         ua: "Обладнання"              } },
    { href: "/projects",  icon: Building2, label: { en: "Projects",          ua: "Проєкти"                 } },
    { href: "/partners",  icon: Users,     label: { en: "Partners",          ua: "Партнери"                } },
    { href: "/about",     icon: Home,      label: { en: "About Medintegro",  ua: "Про Medintegro"          } },
    { href: "/contact",   icon: Phone,     label: { en: "Contact",           ua: "Контакти"                } },
  ]

  return (
    <section className="relative flex min-h-svh items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/company/hero-or.jpg"
          alt=""
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-32 bottom-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <Container className="relative z-10 flex flex-col items-center gap-10 py-24 text-center">

        <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
          {copy.label[locale]}
        </span>

        <div className="flex flex-col items-center gap-4">
          <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {copy.title[locale]}
          </h1>
          <p className="max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            {copy.body[locale]}
          </p>
          <p className="text-xs text-muted-foreground/50">
            {copy.hint[locale]}
          </p>
        </div>

        <div className="grid w-full max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {navCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              aria-label={card.label[locale]}
              className="glass glass-hover glow-cyan-hover group flex items-center gap-3 rounded-xl p-4 text-left transition-all duration-300"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                <card.icon className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {card.label[locale]}
              </span>
              <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="gap-2 rounded-xl glow-cyan">
            <Link href="/contact">
              {copy.cta[locale]}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="gap-2 rounded-xl border-border/50 bg-card/30 text-foreground backdrop-blur-sm hover:border-primary/40 hover:bg-card/50 hover:text-foreground"
          >
            <Link href="/">
              <Home className="h-4 w-4" />
              {copy.home[locale]}
            </Link>
          </Button>
        </div>

      </Container>
    </section>
  )
}
