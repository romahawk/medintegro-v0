"use client"

import { PageHeader } from "@/components/page-header"
import { Container } from "@/components/container"
import { CTASection } from "@/components/cta-section"
import {
  ArrowRightLeft,
  Building2,
  Handshake,
  Hospital,
  Lightbulb,
  MessageSquare,
  Monitor,
  Network,
  Wind,
} from "lucide-react"
import { useLanguage, type Locale } from "@/lib/i18n"

type LocalizedText = Record<Locale, string>

interface WorkflowStep {
  title: LocalizedText
  desc: LocalizedText
}

const solutions = [
  {
    icon: Network,
    title: {
      en: "OR integration",
      ua: "Інтеграція операційних",
    },
    desc: {
      en: "Our lead offer: integrated operating rooms that connect routing, visualization, documentation, and room workflow into one surgical environment.",
      ua: "Наш ключовий напрям: інтегровані операційні, де маршрутизація, візуалізація, документація та логіка приміщення працюють як єдине хірургічне середовище.",
    },
  },
  {
    icon: Lightbulb,
    title: {
      en: "Surgical lighting systems",
      ua: "Системи хірургічного освітлення",
    },
    desc: {
      en: "Surgical lights selected and configured around room geometry, clinical specialty, mounting logic, and the wider OR equipment plan.",
      ua: "Хірургічне освітлення, підібране та налаштоване з урахуванням геометрії приміщення, клінічного профілю, логіки монтажу та загального плану оснащення операційної.",
    },
  },
  {
    icon: Wind,
    title: {
      en: "Medical gas systems",
      ua: "Системи медичних газів",
    },
    desc: {
      en: "Medical gas infrastructure planned as a working part of the surgical room, not as a disconnected utility package.",
      ua: "Інфраструктура медичних газів, спроєктована як робоча частина хірургічного приміщення, а не як відірваний від процесу інженерний пакет.",
    },
  },
  {
    icon: Monitor,
    title: {
      en: "Surgical displays and supporting room systems",
      ua: "Хірургічні дисплеї та допоміжні кімнатні системи",
    },
    desc: {
      en: "Displays, pendants, and related room systems coordinated to support visualization, ergonomics, and reliable in-room workflow.",
      ua: "Дисплеї, консолі та пов’язані кімнатні системи, узгоджені для підтримки візуалізації, ергономіки та надійного робочого процесу в межах приміщення.",
    },
  },
  {
    icon: ArrowRightLeft,
    title: {
      en: "Broader clinical project support",
      ua: "Ширша підтримка клінічних проєктів",
    },
    desc: {
      en: "We also support wider clinic and hospital projects when OR and surgical infrastructure expertise must connect with the broader delivery package.",
      ua: "Ми також підтримуємо ширші проєкти для клінік і лікарень, коли експертиза з операційних та хірургічної інфраструктури має бути пов’язана із загальним проєктним пакетом.",
    },
  },
  {
    icon: MessageSquare,
    title: {
      en: "Consulting",
      ua: "Консалтинг",
    },
    desc: {
      en: "Independent advice on OR system selection, infrastructure planning, and project scope — for buyers who need clarity before committing to a delivery path.",
      ua: "Незалежні рекомендації щодо вибору систем для операційних, планування інфраструктури та обсягу проєкту — для замовників, яким потрібна визначеність перед прийняттям рішення.",
    },
  },
]

const buyerSituations = [
  {
    icon: Hospital,
    title: {
      en: "Hospitals and clinics",
      ua: "Лікарні та клініки",
    },
    desc: {
      en: "When a new operating room, procedure space, or surgical-suite upgrade needs a partner who understands how the room should function in practice.",
      ua: "Коли нова операційна, процедурна або модернізація хірургічного блоку потребує партнера, який розуміє, як приміщення має працювати на практиці.",
    },
  },
  {
    icon: Building2,
    title: {
      en: "General contractors and builders",
      ua: "Генпідрядники та будівельні команди",
    },
    desc: {
      en: "When the construction team needs support on medical-room interfaces, infrastructure dependencies, and specialist systems inside the surgical environment.",
      ua: "Коли будівельній команді потрібна підтримка щодо інтерфейсів медичних приміщень, інфраструктурних залежностей і спеціалізованих систем у хірургічному середовищі.",
    },
  },
  {
    icon: Handshake,
    title: {
      en: "Manufacturers and distributors",
      ua: "Виробники та дистриб’ютори",
    },
    desc: {
      en: "When a local OR integration partner is needed to support qualification, implementation, coordination, and confidence with the end customer.",
      ua: "Коли потрібен локальний партнер з інтеграції операційних для кваліфікації, впровадження, координації та зміцнення довіри кінцевого замовника.",
    },
  },
]

const deliverySteps: WorkflowStep[] = [
  {
    title: {
      en: "Define the surgical room brief",
      ua: "Сформувати технічне завдання для хірургічного приміщення",
    },
    desc: {
      en: "We validate room requirements, clinical use cases, workflow priorities, and infrastructure constraints before the package is set.",
      ua: "Ми уточнюємо вимоги до приміщення, клінічні сценарії, пріоритети робочого процесу та інфраструктурні обмеження ще до фіналізації рішення.",
    },
  },
  {
    title: {
      en: "Match systems that work together",
      ua: "Узгодити системи, які мають працювати разом",
    },
    desc: {
      en: "We align brands, mounting logic, gas points, displays, lighting, and supporting equipment around one practical room configuration.",
      ua: "Ми узгоджуємо бренди, логіку монтажу, точки медичних газів, дисплеї, освітлення та допоміжне обладнання в межах однієї практичної конфігурації приміщення.",
    },
  },
  {
    title: {
      en: "Support commissioning and handover",
      ua: "Супроводити пусконалагодження та передачу в експлуатацію",
    },
    desc: {
      en: "We coordinate delivery, installation, commissioning, training, and project handover so the room is ready for reliable clinical use.",
      ua: "Ми координуємо постачання, монтаж, пусконалагодження, навчання та передачу проєкту, щоб приміщення було готове до надійної клінічної роботи.",
    },
  },
  {
    title: {
      en: "Stay involved after launch",
      ua: "Залишатися залученими після запуску",
    },
    desc: {
      en: "We remain available for service coordination, modernization planning, and future expansion of the surgical environment.",
      ua: "Ми залишаємося доступними для сервісної координації, планування модернізації та майбутнього розширення хірургічного середовища.",
    },
  },
]

function WorkflowConnectors() {
  return (
    <>
      <svg
        aria-hidden="true"
        focusable="false"
        className="workflow-connector pointer-events-none absolute inset-0 z-0 hidden h-full w-full md:block"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="workflow-line-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.16" />
            <stop offset="45%" stopColor="currentColor" stopOpacity="0.42" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.16" />
          </linearGradient>
        </defs>
        <path
          className="workflow-connector-path"
          d="M 25 24 H 75 V 76 H 25 V 24"
          fill="none"
          stroke="url(#workflow-line-gradient)"
          strokeWidth="0.7"
          strokeDasharray="3 3"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <circle className="workflow-connector-dot" r="1" fill="currentColor">
          <animateMotion
            dur="18s"
            repeatCount="indefinite"
            path="M 25 24 H 75 V 76 H 25 V 24"
          />
        </circle>
      </svg>
      <svg
        aria-hidden="true"
        focusable="false"
        className="workflow-connector pointer-events-none absolute bottom-8 left-6 top-8 z-0 w-8 md:hidden"
        viewBox="0 0 24 100"
        preserveAspectRatio="none"
      >
        <path
          className="workflow-connector-path"
          d="M 12 0 V 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </>
  )
}

function WorkflowCard({
  step,
  index,
  locale,
}: {
  step: WorkflowStep
  index: number
  locale: Locale
}) {
  return (
    <div className="group rounded-xl border border-border/60 bg-background/85 p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_18px_45px_var(--glow-color)]">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-xs font-semibold text-primary transition-colors duration-300 group-hover:border-primary/45 group-hover:bg-primary/15">
          0{index + 1}
        </span>
        <span className="h-px flex-1 bg-linear-to-r from-primary/25 to-transparent" />
      </div>
      <h3 className="mt-3 text-base font-semibold text-foreground">{step.title[locale]}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc[locale]}</p>
    </div>
  )
}

function WorkflowSection({
  title,
  description,
  locale,
}: {
  title: string
  description: string
  locale: Locale
}) {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <div className="glass rounded-2xl p-8">
          <div className="max-w-3xl">
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              {title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {description}
            </p>
          </div>
          <div className="relative mt-8">
            <WorkflowConnectors />
            <div className="relative z-10 grid gap-4 md:grid-cols-2">
              {deliverySteps.map((step, index) => (
                <WorkflowCard
                  key={step.title.en}
                  step={step}
                  index={index}
                  locale={locale}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export function SolutionsContent() {
  const { locale } = useLanguage()

  const copy = {
    label: {
      en: "Solutions",
      ua: "Рішення",
    },
    title: {
      en: "OR integration and surgical infrastructure solutions",
      ua: "Рішення з інтеграції операційних та хірургічної інфраструктури",
    },
    description: {
      en: "Medintegro leads with operating room integration, then extends that expertise into surgical lighting, medical gas systems, and the supporting room infrastructure required for dependable clinical delivery.",
      ua: "Medintegro працює насамперед з інтеграцією операційних, а далі розширює цю експертизу на хірургічне освітлення, системи медичних газів та допоміжну кімнатну інфраструктуру, потрібну для надійного клінічного запуску.",
    },
    situationsTitle: {
      en: "Where buyers involve us",
      ua: "Коли нас залучають замовники",
    },
    situationsDescription: {
      en: "We are usually brought in when a surgical room or clinical package needs specialist coordination across systems, brands, and project teams.",
      ua: "Нас зазвичай залучають тоді, коли операційна або клінічний пакет потребує спеціалізованої координації між системами, брендами та командами проєкту.",
    },
    deliveryTitle: {
      en: "How we engage on OR and surgical infrastructure projects",
      ua: "Як ми працюємо з проєктами операційних та хірургічної інфраструктури",
    },
    deliveryDescription: {
      en: "Our role is to help the project move from clinical brief to an integrated, commissioned room that works in practice.",
      ua: "Наша роль полягає в тому, щоб провести проєкт від клінічного завдання до інтегрованого, налагодженого приміщення, яке реально працює на практиці.",
    },
  }

  return (
    <>
      <PageHeader
        label={copy.label[locale]}
        title={copy.title[locale]}
        description={copy.description[locale]}
      />

      <WorkflowSection
        title={copy.deliveryTitle[locale]}
        description={copy.deliveryDescription[locale]}
        locale={locale}
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((solution) => (
              <article
                key={solution.title.en}
                className="glass glass-hover glow-cyan-hover group flex flex-col gap-4 rounded-xl p-6 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                  <solution.icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-lg font-semibold text-foreground">{solution.title[locale]}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {solution.desc[locale]}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-y border-border/50 py-20 md:py-24">
        <div className="absolute inset-0 bg-card/40" />
        <Container className="relative">
          <div className="max-w-3xl">
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              {copy.situationsTitle[locale]}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {copy.situationsDescription[locale]}
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {buyerSituations.map((item) => (
              <article key={item.title.en} className="glass rounded-xl p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{item.title[locale]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.desc[locale]}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
