"use client"

import Image from "next/image"
import { Container } from "@/components/container"
import { SectionHeader } from "@/components/section-header"
import { useLanguage } from "@/lib/i18n"

const expertiseItems = [
  {
    title: {
      en: "Clinical brief and OR specification",
      ua: "Клінічне завдання та специфікація операційної",
    },
    desc: {
      en: "We translate the surgical brief, room constraints, and equipment priorities into a practical OR system scope.",
      ua: "Ми перетворюємо хірургічне завдання, обмеження приміщення та пріоритети обладнання на практичний обсяг систем для операційної.",
    },
    image: "/images/pages/home/OR-specification.jpg",
  },
  {
    title: {
      en: "System alignment across the room",
      ua: "Узгодження систем у межах приміщення",
    },
    desc: {
      en: "We coordinate lights, medical gases, displays, pendants, and supporting infrastructure so the room works as one clinical environment.",
      ua: "Ми координуємо освітлення, медичні гази, дисплеї, консолі та допоміжну інфраструктуру, щоб приміщення працювало як єдине клінічне середовище.",
    },
    image: "/images/pages/home/system-alignment.png",
  },
  {
    title: {
      en: "Installation, commissioning, and handover",
      ua: "Монтаж, пусконалагодження та передача в експлуатацію",
    },
    desc: {
      en: "We support delivery planning, on-site coordination, commissioning, staff orientation, and structured handover for the surgical team.",
      ua: "Ми супроводжуємо планування поставки, координацію на майданчику, пусконалагодження, навчання персоналу та структуровану передачу для хірургічної команди.",
    },
    image: "/images/pages/home/installation.png",
  },
  {
    title: {
      en: "Support beyond launch",
      ua: "Підтримка після запуску",
    },
    desc: {
      en: "We stay involved through service coordination, modernization planning, and future room upgrades as clinical needs evolve.",
      ua: "Ми залишаємося залученими через координацію сервісу, планування модернізації та подальші оновлення приміщень разом зі зміною клінічних потреб.",
    },
    image: "/images/pages/home/support.jpg",
  },
]

export function Expertise() {
  const { locale } = useLanguage()
  const copy = {
    label: {
      en: "How We Work",
      ua: "Як ми працюємо",
    },
    title: {
      en: "A delivery model built for operating rooms and surgical infrastructure",
      ua: "Модель реалізації, побудована для операційних і хірургічної інфраструктури",
    },
    description: {
      en: "From OR specification to commissioning and post-launch support, we help buyers coordinate the systems, brands, and project steps required for a dependable surgical environment.",
      ua: "Від специфікації операційної до пусконалагодження та підтримки після запуску ми допомагаємо замовникам координувати системи, бренди та етапи проєкту, потрібні для надійного хірургічного середовища.",
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
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {expertiseItems.map((item) => (
            <article
              key={item.title.en}
              className="glass glass-hover glow-cyan-hover group flex flex-col overflow-hidden rounded-xl transition-all duration-300"
            >
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title[locale]}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent" />
              </div>
              <div className="flex flex-col gap-2 p-5">
                <h3 className="text-base font-semibold text-foreground">{item.title[locale]}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.desc[locale]}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
