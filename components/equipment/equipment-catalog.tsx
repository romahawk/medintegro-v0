"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
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
  ...integratedOrProducts.map((product) => ({
    key: product.slug,
    nameKey: product.name,
    descKey: product.shortDescription,
    category: "imaging" as const,
    image: product.cardImage ?? "/images/categories/integrated-or/cover.jpg",
    href: `/equipment/integrated-or/${product.slug}`,
    ctaKey: "equipment.viewMore",
  })),
  {
    key: "icu-ceiling-pendants",
    nameKey: "icu.ceilingPendants.name",
    descKey: "icu.ceilingPendants.desc",
    category: "endoscopy",
    image: "/images/categories/icu-infrastructure/cover-v2.jpg",
    imageClassName: "scale-125 object-center",
    href: "/equipment/icu-infrastructure/ceiling-pendants",
    ctaKey: "equipment.viewMore",
  },
  {
    key: "icu-bed-head-units",
    nameKey: "icu.bedHeadUnits.name",
    descKey: "icu.bedHeadUnits.desc",
    category: "endoscopy",
    image: "/images/categories/icu-infrastructure/cover-v2.jpg",
    imageClassName: "scale-125 object-center",
    href: "/equipment/icu-infrastructure/bed-head-units",
    ctaKey: "equipment.viewMore",
  },
  {
    key: "medical-gases",
    nameKey: "medgas.catalog.name",
    descKey: "medgas.catalog.desc",
    category: "monitoring",
    image: "/images/categories/integrated-or/cover.jpg",
    href: "/equipment/medical-gases",
    ctaKey: "equipment.viewMore",
  },
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
  const { t } = useLanguage()

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
