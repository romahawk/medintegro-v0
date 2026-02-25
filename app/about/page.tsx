"use client"

import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Container } from "@/components/container"
import { CTASection } from "@/components/cta-section"
import { SectionHeader } from "@/components/section-header"
import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export default function AboutPage() {
  const { t } = useLanguage()

  const values = [
    { titleKey: "about.value.1.title", descKey: "about.value.1.desc" },
    { titleKey: "about.value.2.title", descKey: "about.value.2.desc" },
    { titleKey: "about.value.3.title", descKey: "about.value.3.desc" },
    { titleKey: "about.value.4.title", descKey: "about.value.4.desc" },
  ]

  return (
    <>
      <PageHeader
        label={t("about.label")}
        title={t("about.title")}
        description={t("about.subtitle")}
      />

      {/* Mission */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-5">
              <span className="w-fit rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                {t("about.mission.title")}
              </span>
              <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {t("about.mission.title")}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {t("about.mission.desc")}
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl glow-cyan">
              <Image
                src="/images/about-team.jpg"
                alt="Medintegro team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-card/50" />
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <Container className="relative">
          <SectionHeader
            label={t("about.story.title")}
            title={t("about.story.title")}
            description={t("about.story.desc")}
          />
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader
            label={t("about.values.title")}
            title={t("about.values.title")}
          />
          <div className="mx-auto grid max-w-3xl gap-5 md:grid-cols-2">
            {values.map((val) => (
              <div
                key={val.titleKey}
                className="glass glass-hover glow-cyan-hover flex items-start gap-4 rounded-xl p-5 transition-all duration-300"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{t(val.titleKey)}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t(val.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
