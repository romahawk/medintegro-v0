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

  const introCopy = {
    eyebrow: {
      en: "How to read this catalog",
      ua: "Як читати цей каталог",
    },
    title: {
      en: "Start with the operating room system, then move into the supporting infrastructure",
      ua: "Починайте з системи операційної, а далі переходьте до допоміжної інфраструктури",
    },
    description: {
      en: "Integrated OR platforms, surgical lights, medical gas systems, displays, and related room infrastructure are grouped here to reflect how buyers actually scope surgical environments.",
      ua: "Інтегровані OR-платформи, хірургічне освітлення, системи медичних газів, дисплеї та пов’язана кімнатна інфраструктура згруповані тут так, щоб відображати реальну логіку формування хірургічного середовища.",
    },
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
      <div className="mb-10 glass rounded-2xl border border-border/60 p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          {introCopy.eyebrow[locale]}
        </p>
        <h2 className="mt-3 max-w-3xl text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {introCopy.title[locale]}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {introCopy.description[locale]}
        </p>
      </div>

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
                  {t(item.nameKey) === item.nameKey ? item.nameKey : t(item.nameKey)}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t(item.descKey) === item.descKey ? item.descKey : t(item.descKey)}
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
