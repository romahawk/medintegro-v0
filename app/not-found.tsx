import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Home,
  Package,
  Briefcase,
  Users,
  Building2,
  Phone,
} from "lucide-react"

const navCards = [
  { href: "/solutions", label: "Рішення для операційних", icon: Briefcase },
  { href: "/equipment", label: "Обладнання",              icon: Package   },
  { href: "/projects",  label: "Проєкти",                 icon: Building2 },
  { href: "/partners",  label: "Партнери",                icon: Users     },
  { href: "/about",     label: "Про Medintegro",          icon: Home      },
  { href: "/contact",   label: "Контакти",                icon: Phone     },
]

export default function NotFound() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden">
      {/* Background */}
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

        {/* Technical label */}
        <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
          404 / Маршрут не знайдено
        </span>

        {/* Main message */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Схоже, ця сторінка залишилась<br className="hidden md:block" /> у старій операційній
          </h1>
          <p className="max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            Можливо, посилання веде на стару сторінку Medintegro або розділ, який був перенесений під час оновлення сайту. Ми оновили структуру, щоб швидше знайти рішення, обладнання або контактну інформацію.
          </p>
          <p className="text-xs text-muted-foreground/50">
            Система навігації перенаправила вас до доступних розділів.
          </p>
        </div>

        {/* Recovery navigation cards */}
        <div className="grid w-full max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {navCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              aria-label={card.label}
              className="glass glass-hover glow-cyan-hover group flex items-center gap-3 rounded-xl p-4 text-left transition-all duration-300"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                <card.icon className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {card.label}
              </span>
              <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="gap-2 rounded-xl glow-cyan">
            <Link href="/contact">
              Обговорити проєкт операційної
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
              Повернутися на головну
            </Link>
          </Button>
        </div>

      </Container>
    </section>
  )
}
