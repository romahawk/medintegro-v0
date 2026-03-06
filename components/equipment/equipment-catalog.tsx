"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight, Brackets, Cctv, Lightbulb, Monitor, Network, SquareActivity, Wind, type LucideIcon } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { integratedOrProducts } from "@/lib/integrated-or-products"

type CategoryKey = "all" | "imaging" | "surgical" | "endoscopy" | "monitoring" | "sterilization" | "lighting" | "icu"
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

const categoryFilters: { key: CategoryKey; labelKey: string }[] = [
  { key: "all", labelKey: "equipment.filter.all" },
  { key: "imaging", labelKey: "cat.imaging" },
  { key: "surgical", labelKey: "cat.surgical" },
  { key: "endoscopy", labelKey: "cat.endoscopy" },
  { key: "monitoring", labelKey: "cat.monitoring" },
  { key: "sterilization", labelKey: "cat.sterilization" },
  { key: "lighting", labelKey: "cat.lighting" },
  { key: "icu", labelKey: "cat.icu" },
]

const equipment: EquipmentItem[] = [
  { nameKey: "equip.mri.name", descKey: "equip.mri.desc", category: "imaging", image: "/images/cat-imaging.jpg" },
  { nameKey: "equip.ct.name", descKey: "equip.ct.desc", category: "imaging", image: "/images/cat-imaging.jpg" },
  { nameKey: "equip.xray.name", descKey: "equip.xray.desc", category: "imaging", image: "/images/cat-imaging.jpg" },
  { nameKey: "equip.ultrasound.name", descKey: "equip.ultrasound.desc", category: "imaging", image: "/images/cat-imaging.jpg" },
  { nameKey: "equip.robot.name", descKey: "equip.robot.desc", category: "surgical", image: "/images/cat-surgical.jpg" },
  { nameKey: "equip.electro.name", descKey: "equip.electro.desc", category: "surgical", image: "/images/cat-surgical.jpg" },
  { nameKey: "equip.nav.name", descKey: "equip.nav.desc", category: "surgical", image: "/images/cat-surgical.jpg" },
  { nameKey: "equip.tables.name", descKey: "equip.tables.desc", category: "surgical", image: "/images/cat-surgical.jpg" },
  { nameKey: "equip.videotower.name", descKey: "equip.videotower.desc", category: "endoscopy", image: "/images/cat-endoscopy.jpg" },
  { nameKey: "equip.scopes.name", descKey: "equip.scopes.desc", category: "endoscopy", image: "/images/cat-endoscopy.jpg" },
  { nameKey: "equip.monitors.name", descKey: "equip.monitors.desc", category: "monitoring", image: "/images/cat-monitoring.jpg" },
  { nameKey: "equip.central.name", descKey: "equip.central.desc", category: "monitoring", image: "/images/cat-monitoring.jpg" },
  { nameKey: "equip.autoclaves.name", descKey: "equip.autoclaves.desc", category: "sterilization", image: "/images/cat-sterilization.jpg" },
  { nameKey: "equip.washers.name", descKey: "equip.washers.desc", category: "sterilization", image: "/images/cat-sterilization.jpg" },
  { nameKey: "equip.ledlights.name", descKey: "equip.ledlights.desc", category: "lighting", image: "/images/cat-lighting.jpg" },
  { nameKey: "equip.examlamps.name", descKey: "equip.examlamps.desc", category: "lighting", image: "/images/cat-lighting.jpg" },
  // ICU / Critical Infrastructure — Ceiling Medical Supply Units (INMED)
  { nameKey: "equip.lissaclassic.name", descKey: "equip.lissaclassic.desc", category: "icu", image: "/images/or-integration.jpg" },
  { nameKey: "equip.lissaclassiclift.name", descKey: "equip.lissaclassiclift.desc", category: "icu", image: "/images/or-integration.jpg" },
  { nameKey: "equip.lissaheavy.name", descKey: "equip.lissaheavy.desc", category: "icu", image: "/images/or-integration.jpg" },
  { nameKey: "equip.lunacompact.name", descKey: "equip.lunacompact.desc", category: "icu", image: "/images/or-integration.jpg" },
  { nameKey: "equip.vegacare.name", descKey: "equip.vegacare.desc", category: "icu", image: "/images/or-integration.jpg" },
  { nameKey: "equip.caroclassic.name", descKey: "equip.caroclassic.desc", category: "icu", image: "/images/or-integration.jpg" },
  { nameKey: "equip.carocarepremium.name", descKey: "equip.carocarepremium.desc", category: "icu", image: "/images/or-integration.jpg" },
  // ICU / Critical Infrastructure — Bed Head Units (INMED MERY family)
  { nameKey: "equip.meryclassic.name", descKey: "equip.meryclassic.desc", category: "icu", image: "/images/cat-monitoring.jpg" },
  { nameKey: "equip.merycare.name", descKey: "equip.merycare.desc", category: "icu", image: "/images/cat-monitoring.jpg" },
  { nameKey: "equip.merycareclassic.name", descKey: "equip.merycareclassic.desc", category: "icu", image: "/images/cat-monitoring.jpg" },
  { nameKey: "equip.merylight.name", descKey: "equip.merylight.desc", category: "icu", image: "/images/cat-monitoring.jpg" },
  { nameKey: "equip.meryedge.name", descKey: "equip.meryedge.desc", category: "icu", image: "/images/cat-monitoring.jpg" },
  { nameKey: "equip.meryfun.name", descKey: "equip.meryfun.desc", category: "icu", image: "/images/cat-monitoring.jpg" },
  { nameKey: "equip.meryart.name", descKey: "equip.meryart.desc", category: "icu", image: "/images/cat-monitoring.jpg" },
  { nameKey: "equip.merycomfort.name", descKey: "equip.merycomfort.desc", category: "icu", image: "/images/cat-monitoring.jpg" },
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
  { key: "equip.videotower.name", nameKey: "equip.videotower.name", descKey: "equip.videotower.desc", category: "videorecorders", image: "/images/cat-endoscopy.jpg" },
  { key: "equip.scopes.name", nameKey: "equip.scopes.name", descKey: "equip.scopes.desc", category: "endoscopy", image: "/images/cat-endoscopy.jpg" },
  { key: "equip.monitors.name", nameKey: "equip.monitors.name", descKey: "equip.monitors.desc", category: "monitoring", image: "/images/cat-monitoring.jpg" },
  { key: "equip.central.name", nameKey: "equip.central.name", descKey: "equip.central.desc", category: "monitoring", image: "/images/cat-monitoring.jpg" },
  { key: "equip.autoclaves.name", nameKey: "equip.autoclaves.name", descKey: "equip.autoclaves.desc", category: "sterilization", image: "/images/cat-sterilization.jpg" },
  { key: "equip.washers.name", nameKey: "equip.washers.name", descKey: "equip.washers.desc", category: "sterilization", image: "/images/cat-sterilization.jpg" },
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
