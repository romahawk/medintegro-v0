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
import { useLanguage } from "@/lib/i18n"

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

const deliverySteps = [
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

      <section className="py-20 md:py-24">
        <Container>
          <div className="glass rounded-2xl p-8">
            <div className="max-w-3xl">
              <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {copy.deliveryTitle[locale]}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                {copy.deliveryDescription[locale]}
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {deliverySteps.map((item, index) => (
                <div
                  key={item.title.en}
                  className="rounded-xl border border-border/50 bg-background/40 p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-base font-semibold text-foreground">
                    {item.title[locale]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.desc[locale]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
