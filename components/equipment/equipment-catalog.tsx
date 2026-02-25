"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

type CategoryKey = "all" | "imaging" | "surgical" | "endoscopy" | "monitoring" | "sterilization" | "lighting"

interface EquipmentItem {
  nameKey: string
  descKey: string
  category: Exclude<CategoryKey, "all">
  image: string
}

const categoryFilters: { key: CategoryKey; labelKey: string }[] = [
  { key: "all", labelKey: "equipment.filter.all" },
  { key: "imaging", labelKey: "cat.imaging" },
  { key: "surgical", labelKey: "cat.surgical" },
  { key: "endoscopy", labelKey: "cat.endoscopy" },
  { key: "monitoring", labelKey: "cat.monitoring" },
  { key: "sterilization", labelKey: "cat.sterilization" },
  { key: "lighting", labelKey: "cat.lighting" },
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
]

export function EquipmentCatalog() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all")
  const { t } = useLanguage()

  const filtered =
    activeCategory === "all"
      ? equipment
      : equipment.filter((item) => item.category === activeCategory)

  return (
    <div>
      {/* Category filter */}
      <div className="mb-10 flex flex-wrap gap-2">
        {categoryFilters.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
              activeCategory === cat.key
                ? "bg-primary text-primary-foreground glow-cyan"
                : "glass text-muted-foreground hover:text-foreground hover:border-primary/30"
            )}
          >
            {t(cat.labelKey)}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map((item) => (
          <article
            key={item.nameKey}
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
                <h3 className="text-base font-semibold text-foreground">{t(item.nameKey)}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{t(item.descKey)}</p>
              <div className="mt-auto pt-2">
                <Button asChild variant="outline" size="sm" className="gap-2 rounded-lg border-border/50 hover:border-primary/40">
                  <Link href="/contact">
                    {t("equipment.requestQuote")}
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
