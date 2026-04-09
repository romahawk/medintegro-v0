"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  ArrowRight,
  Lightbulb,
  Monitor,
  Network,
  SquareActivity,
  Wind,
  type LucideIcon,
} from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { integratedOrProducts } from "@/lib/integrated-or-products"
import { medicalGasProducts } from "@/lib/medical-gases-products"

type CategoryKey =
  | "imaging"
  | "lighting"
  | "endoscopy"
  | "monitoring"
  | "sterilization"

interface EquipmentItem {
  key: string
  nameKey: string
  descKey: string
  category: CategoryKey
  image: string
  imageClassName?: string
  imageWrapperClassName?: string
  href?: string
  ctaKey?: string
}

type LocalizedValue = {
  en: string
  ua: string
}

const categoryFilters: { key: CategoryKey; labelKey: string; icon: LucideIcon }[] = [
  { key: "imaging", labelKey: "cat.imaging", icon: Network },
  { key: "lighting", labelKey: "cat.lighting", icon: Lightbulb },
  { key: "endoscopy", labelKey: "cat.endoscopy", icon: SquareActivity },
  { key: "monitoring", labelKey: "cat.monitoring", icon: Wind },
  { key: "sterilization", labelKey: "cat.sterilization", icon: Monitor },
]

const equipment: EquipmentItem[] = [
  ...integratedOrProducts.map((product) => {
    const integratedOrCardVersions: Record<string, string> = {
      "surgimedia-compact": "639104632581964485",
      "surgimedia-xxl-4k": "639104632582133265",
      "surgimedia-distriview-4k-ip": "639104632581987923",
      "surgimedia-multiview-4k-ip": "639104632582028020",
    }

    return {
      key: product.slug,
      nameKey: product.name,
      descKey: product.shortDescription,
      category: "imaging" as const,
      image: product.cardImage
        ? `${product.cardImage}?v=${integratedOrCardVersions[product.slug] ?? "1"}`
        : "/images/categories/integrated-or/cover.jpg?v=639104632582028020",
      href: `/equipment/integrated-or/${product.slug}`,
      ctaKey: "equipment.viewMore",
    }
  }),
  {
    key: "icu-ceiling-pendants",
    nameKey: "icu.ceilingPendants.name",
    descKey: "icu.ceilingPendants.desc",
    category: "endoscopy",
    image: "/images/categories/icu-infrastructure/cover-v1.jpg",
    imageClassName: "scale-125 object-center",
    href: "/equipment/icu-infrastructure/ceiling-pendants",
    ctaKey: "equipment.viewMore",
  },
  {
    key: "icu-bed-head-units",
    nameKey: "icu.bedHeadUnits.name",
    descKey: "icu.bedHeadUnits.desc",
    category: "endoscopy",
    image: "/images/categories/icu-infrastructure/cover-v2.jpg?v=639105416652393297",
    imageClassName: "scale-125 object-center",
    href: "/equipment/icu-infrastructure/bed-head-units",
    ctaKey: "equipment.viewMore",
  },
  ...medicalGasProducts.map((product) => ({
    key: product.slug,
    nameKey: product.name,
    descKey: product.shortDescription,
    category: "monitoring" as const,
    image: `/images/products/medical-gases/${product.slug}/card.jpg`,
    href: `/equipment/medical-gases/${product.slug}`,
    ctaKey: "equipment.viewMore",
  })),
  {
    key: "beacon-monitors",
    nameKey: "monitors.beacon.name",
    descKey: "monitors.beacon.desc",
    category: "sterilization",
    image: "/images/categories/medical-gases/cover.jpg",
    href: "/equipment/surgical-monitors/beacon",
    ctaKey: "equipment.viewMore",
  },
  {
    key: "fsn-monitors",
    nameKey: "monitors.fsn.name",
    descKey: "monitors.fsn.desc",
    category: "sterilization",
    image: "/images/categories/medical-gases/cover.jpg",
    href: "/equipment/surgical-monitors/fsn",
    ctaKey: "equipment.viewMore",
  },
  {
    key: "equip.ledlights.name",
    nameKey: "equip.ledlights.name",
    descKey: "equip.ledlights.desc",
    category: "lighting",
    image: "/images/categories/or-lighting/cover.png",
    imageClassName: "scale-90 object-center",
    imageWrapperClassName: "bg-background/70",
    href: "/equipment/or-lighting",
    ctaKey: "equipment.viewMore",
  },
  {
    key: "equip.examlamps.name",
    nameKey: "equip.examlamps.name",
    descKey: "equip.examlamps.desc",
    category: "lighting",
    image: "/images/categories/examination-lamps/cover.png",
    imageClassName: "scale-90 object-center",
    imageWrapperClassName: "bg-background/70",
    href: "/equipment/examination-lamps",
    ctaKey: "equipment.viewMore",
  },
]

export function EquipmentCatalog() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("imaging")
  const searchParams = useSearchParams()
  const { locale, t } = useLanguage()

  const localizedItemCopy: Record<string, { name: LocalizedValue; desc: LocalizedValue }> = {
    "surgimedia-compact": {
      name: { en: "SurgiMedia Compact", ua: "SurgiMedia Compact" },
      desc: {
        en: "Flexible integrated OR platform tailored for hybrid operating and treatment rooms.",
        ua: "Гнучка платформа для інтегрованої операційної, адаптована для гібридних операційних і процедурних приміщень.",
      },
    },
    "surgimedia-xxl-4k": {
      name: { en: "SurgiMedia XXL 4K", ua: "SurgiMedia XXL 4K" },
      desc: {
        en: "Advanced 4K integrated OR concept for minimally invasive and image-guided surgery.",
        ua: "Передова 4K-концепція інтегрованої операційної для малоінвазивної та навігаційної хірургії.",
      },
    },
    "surgimedia-distriview-4k-ip": {
      name: { en: "SurgiMedia DistriView 4K-IP", ua: "SurgiMedia DistriView 4K-IP" },
      desc: {
        en: "IP-based distribution and control platform for medical audio, video, and data signals.",
        ua: "Платформа на базі IP для розподілу й керування медичними аудіо-, відео- та data-сигналами.",
      },
    },
    "surgimedia-multiview-4k-ip": {
      name: { en: "SurgiMedia MultiView 4K-IP", ua: "SurgiMedia MultiView 4K-IP" },
      desc: {
        en: "Integrated video management for multi-discipline and hybrid OR environments.",
        ua: "Інтегроване керування відео для мультидисциплінарних і гібридних операційних середовищ.",
      },
    },
    "gas-sources": {
      name: { en: "Medical Gas Sources", ua: "Джерела медичних газів" },
      desc: {
        en: "Central medical gas plants including oxygen, vacuum, medical air, and cylinder manifold systems for healthcare facilities.",
        ua: "Центральні станції медичних газів, включно з киснем, вакуумом, медичним повітрям і колекторними системами для медичних закладів.",
      },
    },
    "pipeline-distribution": {
      name: {
        en: "Medical Gas Pipeline Distribution Systems",
        ua: "Системи трубопровідного розподілу медичних газів",
      },
      desc: {
        en: "Complete copper pipeline networks connecting gas sources to every point of care across operating rooms, ICU, and ward areas.",
        ua: "Повні мережі мідних трубопроводів, що з'єднують джерела газів з кожною точкою споживання в операційних, ВІТ і палатних зонах.",
      },
    },
    "area-valve-service-units": {
      name: { en: "Area Valve Service Units", ua: "Зональні клапанні сервісні модулі" },
      desc: {
        en: "Zone isolation valve boxes enabling controlled shutdown of individual clinical areas for maintenance without disrupting adjacent zones.",
        ua: "Зональні клапанні блоки, що дозволяють контрольовано відключати окремі клінічні зони для сервісу без впливу на сусідні ділянки.",
      },
    },
    "monitoring-systems": {
      name: { en: "Medical Gas Monitoring Systems", ua: "Системи моніторингу медичних газів" },
      desc: {
        en: "Alarm panels, pressure monitoring, and centralized gas management systems providing continuous visibility of medical gas pressure and status across all zones.",
        ua: "Панелі сигналізації, моніторинг тиску та централізовані системи керування газами для постійного контролю тиску та стану медичних газів у всіх зонах.",
      },
    },
    "gas-outlets": {
      name: { en: "Medical Gas Outlets", ua: "Точки підключення медичних газів" },
      desc: {
        en: "Terminal units and quick-connect outlets for safe, standardized gas delivery at every point of care.",
        ua: "Термінальні блоки та швидкороз'ємні точки підключення для безпечної стандартизованої подачі газів у кожній точці надання допомоги.",
      },
    },
    "consumption-boards": {
      name: { en: "Consumption and Control Boards", ua: "Панелі споживання та керування" },
      desc: {
        en: "Ward and bed-area boards combining outlet access, controls, and service organization for clinical workstations.",
        ua: "Панелі для палат і приліжкових зон, що поєднують доступ до виходів, елементи керування та організацію сервісів на клінічному робочому місці.",
      },
    },
    "beacon-monitors": {
      name: { en: "Beacon Display", ua: "Beacon Display" },
      desc: {
        en: "High-performance 4K surgical monitors for endoscopy and open surgery from Shenzhen Beacon Display.",
        ua: "Високопродуктивні 4K хірургічні монітори для ендоскопії та відкритої хірургії від Shenzhen Beacon Display.",
      },
    },
    "fsn-monitors": {
      name: { en: "FSN Medical Technologies", ua: "FSN Medical Technologies" },
      desc: {
        en: "Full-range surgical monitors from FHD to 4K Mini-LED, OLED and large-format for modern operating rooms.",
        ua: "Повний спектр хірургічних моніторів від FHD до 4K Mini-LED, OLED і великоформатних дисплеїв для сучасних операційних.",
      },
    },
  }

  function getLocalizedText(item: EquipmentItem, field: "name" | "desc") {
    const override = localizedItemCopy[item.key]
    if (override) {
      return override[field][locale]
    }

    const key = field === "name" ? item.nameKey : item.descKey
    const translated = t(key)
    return translated === key ? key : translated
  }

  useEffect(() => {
    const categoryParam = searchParams.get("category")

    if (
      categoryParam === "imaging" ||
      categoryParam === "lighting" ||
      categoryParam === "endoscopy" ||
      categoryParam === "monitoring" ||
      categoryParam === "sterilization"
    ) {
      setActiveCategory(categoryParam)
    }
  }, [searchParams])

  const filtered = equipment.filter((item) => item.category === activeCategory)

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {categoryFilters.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={cn(
              "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
              activeCategory === cat.key
                ? "bg-primary text-primary-foreground glow-cyan"
                : "glass text-muted-foreground hover:border-primary/30 hover:text-foreground"
            )}
          >
            <cat.icon className="h-4 w-4" />
            {t(cat.labelKey)}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map((item) => (
          <article
            key={item.key}
            className="glass glass-hover glow-cyan-hover flex flex-col overflow-hidden rounded-xl transition-all duration-300 md:flex-row"
          >
            <div className={cn("relative aspect-4/3 w-full shrink-0 overflow-hidden md:w-48", item.imageWrapperClassName)}>
              <Image
                src={item.image}
                alt={t(item.nameKey)}
                fill
                className={cn("object-cover transition-transform duration-300", item.imageClassName)}
              />
              <div className="absolute inset-0 hidden bg-linear-to-r from-transparent to-background/30 md:block" />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <div>
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-primary">
                  {t(categoryFilters.find((c) => c.key === item.category)?.labelKey ?? "")}
                </span>
                <h3 className="text-base font-semibold text-foreground">
                  {getLocalizedText(item, "name")}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {getLocalizedText(item, "desc")}
              </p>
              <div className="mt-auto pt-2">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="gap-2 rounded-lg border-border/50 hover:border-primary/40"
                >
                  <Link href={item.href ?? "/contact"}>
                    {t(item.ctaKey ?? "equipment.requestQuote")}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
