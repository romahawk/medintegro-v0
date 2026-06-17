"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  AirVent,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Focus,
  Gauge,
  Hand,
  Link2,
  Palette,
  Radio,
  Settings2,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { useLanguage, type Locale } from "@/lib/i18n"
import { getLocalizedOrLightingProduct } from "@/lib/equipment-detail-localizations"
import { orLightingProducts } from "@/lib/or-lighting-products"

const copy = {
  en: {
    metadataTitle: "Surgical Lights & LED Operating Room Lighting | Medintegro",
    metadataDescription:
      "Medintegro supplies and supports Surgiris surgical lights, LED operating room lights, wireless camera options, and OR lighting integration for hospitals, clinics, and healthcare infrastructure projects.",
    equipment: "Equipment",
    back: "Back to Equipment",
    category: "OR Lighting",
    heroTitle: "Surgical Lights and LED Operating Room Lighting",
    heroText:
      "Surgiris surgical lighting solutions for modern operating rooms designed to support visualization, sterile workflow, surgeon comfort, and long-term operating room integration.",
    heroSupport:
      "Medintegro helps hospitals, contractors, architects, and healthcare partners plan, select, integrate, commission, and support surgical lighting as part of a complete operating room environment.",
    consult: "Request OR Lighting Consultation",
    rangeTitle: "Surgiris Surgical Lighting Range",
    rangeText:
      "Explore LED surgical lights and wireless video options designed for different operating room requirements, clinical workflows, and modernization strategies.",
    viewMore: "View More",
    modernTitle: "LED Surgical Lights for Modern Operating Rooms",
    modernText:
      "Operating room lighting affects how clearly teams see the surgical field, distinguish tissue, manage shadows, and maintain concentration during long procedures. A well-planned LED surgical lighting system should deliver consistent visibility while fitting the sterile workflow, room geometry, and wider technical infrastructure.",
    modernSupport:
      "Medintegro coordinates surgical lights with displays, medical gas systems, ceiling pendants, video integration, room controls, and commissioning requirements. This systems-level approach helps avoid equipment conflicts and creates an OR lighting solution that remains serviceable and ready for future expansion.",
    modernPoints: [
      {
        title: "Consistent surgical visibility",
        description:
          "Balanced illumination and shadow control help teams maintain a clear view across changing positions and procedure types.",
      },
      {
        title: "Tissue differentiation",
        description:
          "Strong color rendering and adjustable color temperature support accurate visual assessment of tissues and anatomical structures.",
      },
      {
        title: "Integration-ready planning",
        description:
          "Lighting positions and controls are coordinated with the surgical table, displays, pendants, airflow, and video infrastructure.",
      },
    ],
    technologiesTitle: "Surgiris Surgical Lighting Technologies",
    technologiesText:
      "Surgiris combines electronic control, touchless interaction, stable optical performance, and integration-ready communication to support modern operating theatre lighting.",
    technologies: [
      {
        name: "FOCUSMATIC",
        description:
          "Electronic focusing adjusts the light-field diameter while maintaining strong illumination at the center.",
      },
      {
        name: "MOTION MATIC",
        description:
          "Touchless adjustment enables fast lighting changes while helping teams preserve the sterile workflow.",
      },
      {
        name: "EFA",
        description:
          "Electronic Field Adjustment changes the illuminated field through LED control without mechanical movement.",
      },
      {
        name: "CCL",
        description:
          "Constant Color Lighting supports stable, accurate color rendering throughout the procedure.",
      },
      {
        name: "APM",
        description:
          "Automatic Preventive Maintenance supports consistent light performance and long-term reliability.",
      },
      {
        name: "WCT",
        description:
          "Wireless Communication Technology simplifies lighting control and integration with related OR systems.",
      },
    ],
    selectionTitle: "How to Choose Operating Room Lights",
    selectionText:
      "The right operating lights are selected around the clinical program, room configuration, infrastructure constraints, and long-term service strategy. Medintegro helps translate these requirements into a coordinated lighting specification.",
    selectionItems: [
      {
        title: "Illuminance and uniformity",
        description: "Confirm light output and field consistency for the planned procedure mix.",
      },
      {
        title: "Shadow control",
        description: "Evaluate how overlapping beams maintain visibility when heads and hands obstruct the field.",
      },
      {
        title: "Color rendering",
        description: "Review Ra and R9 performance for dependable tissue and red-color differentiation.",
      },
      {
        title: "Color temperature",
        description: "Match adjustable color-temperature options to clinical specialties and surgeon preference.",
      },
      {
        title: "Sterile controls",
        description: "Consider touchless operation, sterile handles, and cleaning workflows.",
      },
      {
        title: "Airflow compatibility",
        description: "Coordinate light-head geometry and positioning with laminar airflow requirements.",
      },
      {
        title: "Integration capability",
        description: "Plan controls, wireless communication, cameras, displays, and video routing together.",
      },
      {
        title: "Serviceability",
        description: "Assess maintenance access, preventive support, commissioning, and lifecycle service.",
      },
    ],
    infrastructureTitle: "OR Lighting as Part of Surgical Infrastructure",
    infrastructureText:
      "Surgical lights should be planned as part of the room, not as an isolated purchase. Mounting positions, movement envelopes, and control methods must work with the surgical table, ceiling pendants, displays, airflow systems, medical gases, and video integration.",
    infrastructureSupport:
      "Medintegro supports the full coordination process from early room planning and equipment selection through installation, commissioning, training, and long-term technical support.",
    infrastructureLinks: [
      { label: "Explore OR integration solutions", href: "/solutions" },
      { label: "View integrated OR systems", href: "/equipment?category=imaging" },
      { label: "View surgical displays", href: "/equipment?category=sterilization" },
      { label: "View medical gas systems", href: "/equipment?category=monitoring" },
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      {
        question: "What are surgical lights?",
        answer:
          "Surgical lights are specialized medical luminaires designed to illuminate the operating field with high intensity, controlled shadows, accurate color rendering, and reliable performance during procedures.",
      },
      {
        question: "What is the difference between surgical lights and standard medical lights?",
        answer:
          "Surgical lights are engineered for operating rooms and provide stronger shadow management, higher optical consistency, sterile controls, and more demanding color-rendering performance than general examination or room lighting.",
      },
      {
        question: "Why are LED surgical lights preferred?",
        answer:
          "LED surgical lights provide efficient, controllable illumination with long service life, lower heat generation, stable color performance, and flexible electronic control options.",
      },
      {
        question: "Can surgical lights integrate with OR video systems?",
        answer:
          "Yes. Compatible surgical lights can support camera options, wireless communication, and routing into displays, recording systems, or integrated OR video platforms.",
      },
      {
        question: "What should hospitals consider before choosing operating room lights?",
        answer:
          "Hospitals should evaluate illuminance, shadow control, color rendering, sterile controls, airflow compatibility, room geometry, integration requirements, maintenance, and future expansion plans.",
      },
    ],
    ctaTitle: "Need help specifying surgical lights for a new OR or modernization project?",
    ctaText:
      "Medintegro can help evaluate room requirements, select the right Surgiris lighting configuration, and coordinate integration with the wider surgical infrastructure.",
  },
  ua: {
    metadataTitle: "Хірургічні світильники та LED освітлення операційних | Medintegro",
    metadataDescription:
      "Medintegro постачає та підтримує хірургічні світильники Surgiris, LED освітлення операційних, бездротові камери та інтеграцію освітлення для сучасних операційних залів.",
    equipment: "Обладнання",
    back: "Назад до обладнання",
    category: "Освітлення операційних",
    heroTitle: "Хірургічні світильники та LED освітлення операційних",
    heroText:
      "Хірургічні системи освітлення Surgiris для сучасних операційних, створені для якісної візуалізації, стерильного робочого процесу, комфорту хірурга та довгострокової інтеграції.",
    heroSupport:
      "Medintegro допомагає лікарням, підрядникам, архітекторам і медичним партнерам планувати, підбирати, інтегрувати, вводити в експлуатацію та підтримувати хірургічне освітлення як частину цілісного середовища операційної.",
    consult: "Замовити консультацію з освітлення операційної",
    rangeTitle: "Лінійка хірургічного освітлення Surgiris",
    rangeText:
      "Ознайомтеся з LED хірургічними світильниками та бездротовими відеорішеннями для різних вимог операційних, клінічних процесів і програм модернізації.",
    viewMore: "Детальніше",
    modernTitle: "LED хірургічні світильники для сучасних операційних",
    modernText:
      "Освітлення операційної впливає на чіткість хірургічного поля, розпізнавання тканин, контроль тіней і концентрацію команди під час тривалих втручань. Правильно спроєктована LED система має забезпечувати стабільну видимість і відповідати стерильному процесу, геометрії приміщення та технічній інфраструктурі.",
    modernSupport:
      "Medintegro координує хірургічні світильники з дисплеями, системами медичних газів, стельовими консолями, відеоінтеграцією, керуванням приміщенням і вимогами введення в експлуатацію. Такий системний підхід допомагає уникнути конфліктів обладнання та забезпечує готовність до майбутнього розширення.",
    modernPoints: [
      {
        title: "Стабільна видимість хірургічного поля",
        description:
          "Рівномірне освітлення та контроль тіней допомагають зберігати чіткий огляд за різних позицій і типів процедур.",
      },
      {
        title: "Розпізнавання тканин",
        description:
          "Висока передача кольору та регульована колірна температура підтримують точну візуальну оцінку тканин і анатомічних структур.",
      },
      {
        title: "Готовність до інтеграції",
        description:
          "Позиції і керування світильниками узгоджуються з операційним столом, дисплеями, консолями, повітряними потоками та відеоінфраструктурою.",
      },
    ],
    technologiesTitle: "Технології хірургічного освітлення Surgiris",
    technologiesText:
      "Surgiris поєднує електронне керування, безконтактну взаємодію, стабільні оптичні характеристики та бездротову готовність до інтеграції в сучасній операційній.",
    technologies: [
      {
        name: "FOCUSMATIC",
        description:
          "Електронне фокусування змінює діаметр світлового поля, зберігаючи високу освітленість у центрі.",
      },
      {
        name: "MOTION MATIC",
        description:
          "Безконтактне регулювання дозволяє швидко змінювати параметри світла та підтримувати стерильний процес.",
      },
      {
        name: "EFA",
        description:
          "Електронне регулювання поля змінює освітлену зону через керування LED без механічного руху.",
      },
      {
        name: "CCL",
        description:
          "Constant Color Lighting підтримує стабільну та точну передачу кольору протягом усієї процедури.",
      },
      {
        name: "APM",
        description:
          "Автоматична превентивна підтримка допомагає зберігати стабільну світлову продуктивність і довгострокову надійність.",
      },
      {
        name: "WCT",
        description:
          "Бездротова комунікаційна технологія спрощує керування світильниками та інтеграцію з іншими системами операційної.",
      },
    ],
    selectionTitle: "Як обрати світильники для операційної",
    selectionText:
      "Оптимальні операційні світильники підбираються з урахуванням клінічної програми, конфігурації приміщення, інфраструктурних обмежень і стратегії сервісу. Medintegro перетворює ці вимоги на узгоджену специфікацію освітлення.",
    selectionItems: [
      {
        title: "Освітленість і рівномірність",
        description: "Перевірте світлову потужність і стабільність поля для запланованого профілю процедур.",
      },
      {
        title: "Контроль тіней",
        description: "Оцініть, як перекриття світлових променів зберігає видимість при перешкодах у полі.",
      },
      {
        title: "Передача кольору",
        description: "Враховуйте Ra та R9 для надійного розпізнавання тканин і відтінків червоного.",
      },
      {
        title: "Колірна температура",
        description: "Узгодьте можливості регулювання з клінічними спеціальностями та вподобаннями хірургів.",
      },
      {
        title: "Стерильне керування",
        description: "Враховуйте безконтактне керування, стерильні ручки та процеси очищення.",
      },
      {
        title: "Сумісність із повітряними потоками",
        description: "Координуйте геометрію та позицію світильника з вимогами ламінарного потоку.",
      },
      {
        title: "Можливості інтеграції",
        description: "Плануйте керування, бездротовий зв'язок, камери, дисплеї та маршрутизацію відео разом.",
      },
      {
        title: "Сервісопридатність",
        description: "Оцініть доступ для обслуговування, превентивну підтримку, введення в експлуатацію та життєвий цикл.",
      },
    ],
    infrastructureTitle: "Освітлення операційної як частина хірургічної інфраструктури",
    infrastructureText:
      "Хірургічні світильники потрібно планувати як частину приміщення, а не як ізольовану закупівлю. Монтажні позиції, зони руху та способи керування мають узгоджуватися з операційним столом, стельовими консолями, дисплеями, системами повітряних потоків, медичними газами та відеоінтеграцією.",
    infrastructureSupport:
      "Medintegro супроводжує повний процес координації: від раннього планування приміщення та підбору обладнання до монтажу, введення в експлуатацію, навчання й довгострокової технічної підтримки.",
    infrastructureLinks: [
      { label: "Переглянути рішення для інтеграції операційних", href: "/solutions" },
      { label: "Переглянути інтегровані системи операційних", href: "/equipment?category=imaging" },
      { label: "Переглянути хірургічні дисплеї", href: "/equipment?category=sterilization" },
      { label: "Переглянути системи медичних газів", href: "/equipment?category=monitoring" },
    ],
    faqTitle: "Поширені запитання",
    faqs: [
      {
        question: "Що таке хірургічні світильники?",
        answer:
          "Хірургічні світильники - це спеціалізовані медичні системи для освітлення операційного поля з високою інтенсивністю, контрольованими тінями, точною передачею кольору та надійною роботою під час процедур.",
      },
      {
        question: "Чим хірургічні світильники відрізняються від стандартних медичних?",
        answer:
          "Хірургічні світильники розроблені для операційних і забезпечують кращий контроль тіней, стабільнішу оптику, стерильне керування та вищі вимоги до передачі кольору, ніж загальне або оглядове освітлення.",
      },
      {
        question: "Чому обирають LED хірургічні світильники?",
        answer:
          "LED світильники забезпечують ефективне кероване освітлення, тривалий строк служби, менше тепловиділення, стабільну передачу кольору та гнучкі можливості електронного керування.",
      },
      {
        question: "Чи можна інтегрувати хірургічні світильники з відеосистемами операційної?",
        answer:
          "Так. Сумісні хірургічні світильники можуть підтримувати камери, бездротовий зв'язок і передачу сигналу на дисплеї, системи запису або інтегровані відеоплатформи операційної.",
      },
      {
        question: "Що лікарні мають враховувати перед вибором світильників для операційної?",
        answer:
          "Варто оцінити освітленість, контроль тіней, передачу кольору, стерильне керування, сумісність із повітряними потоками, геометрію приміщення, інтеграцію, сервіс і плани майбутнього розширення.",
      },
    ],
    ctaTitle: "Потрібна допомога зі специфікацією світильників для нової або модернізованої операційної?",
    ctaText:
      "Medintegro допоможе оцінити вимоги приміщення, підібрати конфігурацію освітлення Surgiris та скоординувати інтеграцію з усією хірургічною інфраструктурою.",
  },
} as const

const technologyIcons = [Focus, Hand, Settings2, Palette, Wrench, Radio]
const selectionIcons = [Gauge, Sparkles, Palette, Focus, Hand, AirVent, Link2, ShieldCheck]

function getSchemas(locale: Locale) {
  const t = copy[locale]
  const baseUrl = "https://www.medintegro.com.ua/equipment/or-lighting"

  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: t.heroTitle,
      description: t.metadataDescription,
      url: baseUrl,
      isPartOf: {
        "@type": "WebSite",
        name: "Medintegro",
        url: "https://www.medintegro.com.ua",
      },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: orLightingProducts.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: getLocalizedOrLightingProduct(product, locale).name,
          url: `${baseUrl}/${product.slug}`,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: t.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ]
}

export function OrLightingContent() {
  const { locale } = useLanguage()
  const t = copy[locale]
  const schemas = getSchemas(locale)
  const imageAlts =
    locale === "ua"
      ? [
          "LED хірургічний світильник Surgiris XMT для операційних",
          "Система хірургічного освітлення Surgiris EPURE",
          "Бездротова камера NOMADEO для хірургічних світильників",
        ]
      : [
          "Surgiris XMT LED surgical light for operating rooms",
          "Surgiris EPURE surgical lighting system",
          "NOMADEO wireless camera for surgical lights",
        ]

  useEffect(() => {
    document.title = t.metadataTitle

    let description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!description) {
      description = document.createElement("meta")
      description.name = "description"
      document.head.appendChild(description)
    }
    description.content = t.metadataDescription
  }, [t.metadataDescription, t.metadataTitle])

  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <section className="relative overflow-hidden border-b border-border/50 py-16 md:py-20">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <Container className="relative">
          <nav className="mb-4 flex flex-wrap items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Link href="/equipment" className="transition-colors hover:text-primary">
              {t.equipment}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">{t.category}</span>
          </nav>

          <Link
            href="/equipment"
            className="mb-6 flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.back}
          </Link>

          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            {t.category}
          </span>
          <h1 className="max-w-5xl text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {t.heroTitle}
          </h1>
          <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {t.heroText}
          </p>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {t.heroSupport}
          </p>
          <Button asChild size="lg" className="mt-7 gap-2 rounded-xl glow-cyan">
            <Link href="/contact">
              {t.consult}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {t.rangeTitle}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {t.rangeText}
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {orLightingProducts.map((product, index) => {
              const localizedProduct = getLocalizedOrLightingProduct(product, locale)
              return (
                <article
                  key={product.slug}
                  className="glass glass-hover glow-cyan-hover overflow-hidden rounded-xl transition-all duration-300"
                >
                  <div className="relative aspect-4/3">
                    <Image src={product.cardImage} alt={imageAlts[index]} fill className="object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-background/70 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-foreground">{localizedProduct.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {localizedProduct.shortDescription}
                    </p>
                    <Button asChild variant="outline" size="sm" className="mt-4 gap-2 rounded-lg border-border/50 hover:border-primary/40">
                      <Link href={`/equipment/or-lighting/${product.slug}`}>
                        {t.viewMore}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </div>
                </article>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-y border-border/50 py-16 md:py-24">
        <div className="absolute inset-0 bg-card/40" />
        <Container className="relative">
          <div className="max-w-4xl">
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              {t.modernTitle}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{t.modernText}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{t.modernSupport}</p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {t.modernPoints.map((point) => (
              <article key={point.title} className="glass rounded-xl p-5">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h3 className="mt-4 text-base font-semibold text-foreground">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {t.technologiesTitle}
          </h2>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {t.technologiesText}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.technologies.map((technology, index) => {
              const Icon = technologyIcons[index]
              return (
                <article key={technology.name} className="glass glass-hover rounded-xl p-5 transition-all duration-300">
                  <div className="inline-flex rounded-lg border border-primary/30 bg-primary/10 p-2 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">{technology.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{technology.description}</p>
                </article>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-y border-border/50 py-16 md:py-24">
        <div className="absolute inset-0 bg-card/40" />
        <Container className="relative">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {t.selectionTitle}
          </h2>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {t.selectionText}
          </p>
          <div className="mt-8 grid gap-x-8 gap-y-5 md:grid-cols-2">
            {t.selectionItems.map((item, index) => {
              const Icon = selectionIcons[index]
              return (
                <div key={item.title} className="flex items-start gap-4 border-b border-border/50 pb-5">
                  <div className="mt-0.5 rounded-lg border border-primary/25 bg-primary/10 p-2 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {t.infrastructureTitle}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                {t.infrastructureText}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                {t.infrastructureSupport}
              </p>
            </div>
            <nav className="border-l border-border/60 pl-0 lg:pl-6" aria-label={t.infrastructureTitle}>
              <div className="space-y-2">
                {t.infrastructureLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between gap-3 rounded-lg border border-border/50 bg-background/40 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {item.label}
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-y border-border/50 py-16 md:py-24">
        <div className="absolute inset-0 bg-card/40" />
        <Container className="relative">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {t.faqTitle}
          </h2>
          <div className="mt-8 divide-y divide-border/60 border-y border-border/60">
            {t.faqs.map((faq) => (
              <article key={faq.question} className="grid gap-2 py-6 md:grid-cols-[0.8fr_1.2fr] md:gap-8">
                <h3 className="text-sm font-semibold text-foreground md:text-base">{faq.question}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-t border-border/50 py-20 md:py-24">
        <div className="absolute inset-0 bg-mesh" />
        <Container className="relative flex flex-col items-center gap-5 text-center">
          <h2 className="max-w-3xl text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {t.ctaTitle}
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">{t.ctaText}</p>
          <Button asChild size="lg" className="gap-2 rounded-xl glow-cyan">
            <Link href="/contact">
              {t.consult}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Container>
      </section>
    </>
  )
}
