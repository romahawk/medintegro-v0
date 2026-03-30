"use client"

import { PageHeader } from "@/components/page-header"
import { Container } from "@/components/container"
import { CTASection } from "@/components/cta-section"
import {
  Package,
  Monitor,
  Wrench,
  GraduationCap,
  Search,
  ClipboardList,
  Building2,
  Handshake,
  Hospital,
} from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const serviceItems = [
  { icon: Package, titleKey: "service.1.title", descKey: "service.1.desc" },
  { icon: Monitor, titleKey: "service.2.title", descKey: "service.2.desc" },
  { icon: ClipboardList, titleKey: "service.3.title", descKey: "service.3.desc" },
  { icon: Wrench, titleKey: "service.4.title", descKey: "service.4.desc" },
  { icon: Search, titleKey: "service.5.title", descKey: "service.5.desc" },
  { icon: GraduationCap, titleKey: "service.6.title", descKey: "service.6.desc" },
]

const situations = [
  {
    icon: Hospital,
    title: "Hospitals and clinics",
    desc: "When a new build, department upgrade, or specialty room package needs a coordinated medical-technology partner.",
  },
  {
    icon: Building2,
    title: "General contractors and developers",
    desc: "When the construction team needs a partner who understands medical room requirements, infrastructure interfaces, and equipment integration.",
  },
  {
    icon: Handshake,
    title: "Manufacturers and distributors",
    desc: "When a local integrator is needed to support qualification, delivery coordination, and trust with the end customer.",
  },
]

const process = [
  "Validating the project brief, room requirements, and clinical use cases.",
  "Matching brands, systems, and compatible components to budget and infrastructure reality.",
  "Coordinating supply, installation, commissioning, and staff training.",
  "Supporting the client after launch with service coordination and future upgrade planning.",
]

export default function ServicesPage() {
  const { t } = useLanguage()

  return (
    <>
      <PageHeader
        label="Solutions"
        title="How Medintegro supports complex healthcare projects"
        description="We get involved when equipment sourcing, engineering coordination, and project delivery need to work as one integrated commercial package."
      />
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceItems.map((service) => (
              <article
                key={service.titleKey}
                className="glass glass-hover glow-cyan-hover group flex flex-col gap-4 rounded-xl p-6 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-lg font-semibold text-foreground">{t(service.titleKey)}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{t(service.descKey)}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="relative overflow-hidden border-y border-border/50 py-20 md:py-24">
        <div className="absolute inset-0 bg-card/40" />
        <Container className="relative">
          <h2 className="max-w-3xl text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Where buyers involve us
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {situations.map((item) => (
              <article key={item.title} className="glass rounded-xl p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-20 md:py-24">
        <Container>
          <div className="glass rounded-2xl p-8">
            <h2 className="max-w-3xl text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              What we take ownership of
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {process.map((item, index) => (
                <div
                  key={item}
                  className="rounded-xl border border-border/50 bg-background/40 p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                    0{index + 1}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  )
}
