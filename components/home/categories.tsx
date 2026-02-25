"use client"

import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/container"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const categories = [
  { titleKey: "cat.imaging", descKey: "cat.imaging.desc", image: "/images/cat-imaging.jpg" },
  { titleKey: "cat.surgical", descKey: "cat.surgical.desc", image: "/images/cat-surgical.jpg" },
  { titleKey: "cat.endoscopy", descKey: "cat.endoscopy.desc", image: "/images/cat-endoscopy.jpg" },
  { titleKey: "cat.monitoring", descKey: "cat.monitoring.desc", image: "/images/cat-monitoring.jpg" },
  { titleKey: "cat.sterilization", descKey: "cat.sterilization.desc", image: "/images/cat-sterilization.jpg" },
  { titleKey: "cat.lighting", descKey: "cat.lighting.desc", image: "/images/cat-lighting.jpg" },
]

export function Categories() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-card/50" />
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <Container className="relative">
        <SectionHeader
          label={t("categories.label")}
          title={t("categories.title")}
          description={t("categories.description")}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.titleKey}
              href="/equipment"
              className="glass glass-hover glow-cyan-hover group overflow-hidden rounded-xl transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={t(cat.titleKey)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-foreground">{t(cat.titleKey)}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t(cat.descKey)}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline" className="gap-2 rounded-xl border-border/50 hover:border-primary/40">
            <Link href="/equipment">
              {t("categories.viewAll")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
