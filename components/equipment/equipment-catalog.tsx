"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight, Brackets, Cctv, Lightbulb, Monitor, Network, SquareActivity, Wind, type LucideIcon } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { integratedOrProducts } from "@/lib/integrated-or-products"

type CategoryKey =
  | "imaging"
  | "lighting"
  | "endoscopy"
  | "monitoring"
  | "sterilization"
  | "surgical"
  | "videorecorders"

interface EquipmentItem {
  key: string
  nameKey: string
  descKey: string
  category: CategoryKey
  image: string
  href?: string
  ctaKey?: string
}

const categoryFilters: { key: CategoryKey; labelKey: string; icon: LucideIcon }[] = [
  { key: "imaging", labelKey: "cat.imaging", icon: Network },
  { key: "lighting", labelKey: "cat.lighting", icon: Lightbulb },
  { key: "endoscopy", labelKey: "cat.endoscopy", icon: SquareActivity },
  { key: "monitoring", labelKey: "cat.monitoring", icon: Wind },
  { key: "sterilization", labelKey: "cat.sterilization", icon: Monitor },
  { key: "surgical", labelKey: "cat.surgical", icon: Brackets },
  { key: "videorecorders", labelKey: "cat.videorecorders", icon: Cctv },
]

const equipment: EquipmentItem[] = [
  ...integratedOrProducts.map((product) => ({
    key: product.slug,
    nameKey: product.name,
    descKey: product.shortDescription,
    category: "imaging" as const,
    image: product.cardImage ?? "/images/cat-imaging.jpg",
    href: `/equipment/integrated-or/${product.slug}`,
    ctaKey: "equipment.viewMore",
  })),
  { key: "equip.robot.name", nameKey: "equip.robot.name", descKey: "equip.robot.desc", category: "surgical", image: "/images/cat-surgical.jpg" },
  { key: "equip.electro.name", nameKey: "equip.electro.name", descKey: "equip.electro.desc", category: "surgical", image: "/images/cat-surgical.jpg" },
  { key: "equip.nav.name", nameKey: "equip.nav.name", descKey: "equip.nav.desc", category: "surgical", image: "/images/cat-surgical.jpg" },
  { key: "equip.tables.name", nameKey: "equip.tables.name", descKey: "equip.tables.desc", category: "surgical", image: "/images/cat-surgical.jpg" },
  // ICU / critical infrastructure — two sub-category cards
  {
    key: "icu-ceiling-pendants",
    nameKey: "icu.ceilingPendants.name",
    descKey: "icu.ceilingPendants.desc",
    category: "endoscopy",
    image: "/images/or-integration.jpg",
    href: "/equipment/icu-infrastructure/ceiling-pendants",
    ctaKey: "equipment.viewMore",
  },
  {
    key: "icu-bed-head-units",
    nameKey: "icu.bedHeadUnits.name",
    descKey: "icu.bedHeadUnits.desc",
    category: "endoscopy",
    image: "/images/cat-monitoring.jpg",
    href: "/equipment/icu-infrastructure/bed-head-units",
    ctaKey: "equipment.viewMore",
  },
  { key: "equip.videotower.name", nameKey: "equip.videotower.name", descKey: "equip.videotower.desc", category: "videorecorders", image: "/images/cat-endoscopy.jpg" },
  { key: "equip.scopes.name", nameKey: "equip.scopes.name", descKey: "equip.scopes.desc", category: "videorecorders", image: "/images/cat-endoscopy.jpg" },
  // Medical gases & distribution — single entry pointing to sub-category listing
  {
    key: "medical-gases",
    nameKey: "medgas.catalog.name",
    descKey: "medgas.catalog.desc",
    category: "monitoring",
    image: "/images/or-integration.jpg",
    href: "/equipment/medical-gases",
    ctaKey: "equipment.viewMore",
  },
  { key: "beacon-monitors", nameKey: "monitors.beacon.name", descKey: "monitors.beacon.desc", category: "sterilization", image: "/images/cat-monitoring.jpg", href: "/equipment/surgical-monitors/beacon", ctaKey: "equipment.viewMore" },
  { key: "fsn-monitors", nameKey: "monitors.fsn.name", descKey: "monitors.fsn.desc", category: "sterilization", image: "/images/cat-monitoring.jpg", href: "/equipment/surgical-monitors/fsn", ctaKey: "equipment.viewMore" },
  {
    key: "equip.ledlights.name",
    nameKey: "equip.ledlights.name",
    descKey: "equip.ledlights.desc",
    category: "lighting",
    image: "/images/led-surgical-lights.png",
    href: "/equipment/or-lighting",
    ctaKey: "equipment.viewMore",
  },
  {
    key: "equip.examlamps.name",
    nameKey: "equip.examlamps.name",
    descKey: "equip.examlamps.desc",
    category: "lighting",
    image: "/images/examination-lamps.png",
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
      {/* Category filter */}
      <div className="mb-10 flex flex-wrap gap-2">
        {categoryFilters.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={cn(
              "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
              activeCategory === cat.key
                ? "bg-primary text-primary-foreground glow-cyan"
                : "glass text-muted-foreground hover:text-foreground hover:border-primary/30"
            )}
          >
            <cat.icon className="h-4 w-4" />
            {t(cat.labelKey)}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map((item) => (
          <article
            key={item.key}
            className="glass glass-hover glow-cyan-hover flex flex-col overflow-hidden rounded-xl transition-all duration-300 md:flex-row"
          >
            <div className="relative aspect-[4/3] w-full shrink-0 md:aspect-auto md:w-48">
              <Image
                src={item.image}
                alt={t(item.nameKey)}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/30 md:block hidden" />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <div>
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-primary">
                  {t(categoryFilters.find((c) => c.key === item.category)?.labelKey ?? "")}
                </span>
                <h3 className="text-base font-semibold text-foreground">{t(item.nameKey) === item.nameKey ? item.nameKey : t(item.nameKey)}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{t(item.descKey) === item.descKey ? item.descKey : t(item.descKey)}</p>
              <div className="mt-auto pt-2">
                <Button asChild variant="outline" size="sm" className="gap-2 rounded-lg border-border/50 hover:border-primary/40">
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
