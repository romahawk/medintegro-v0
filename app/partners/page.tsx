import { CheckCircle2, Globe2, Handshake, Hospital, Shield, ShieldCheck } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { Container } from "@/components/container"
import { CTASection } from "@/components/cta-section"

const cards = [
  {
    icon: Handshake,
    title: "For manufacturers",
    desc: "Local technical and commercial support for OR integration, surgical infrastructure, qualification, project coordination, and buyer trust in the Ukrainian market.",
  },
  {
    icon: Hospital,
    title: "For contractors",
    desc: "Specialist support on operating rooms, surgical room interfaces, medical gas infrastructure, and room-system coordination inside healthcare builds and upgrades.",
  },
  {
    icon: Globe2,
    title: "For international partners",
    desc: "A local OR integration partner that can support customer communication, room planning, implementation coordination, and post-launch credibility.",
  },
  {
    icon: ShieldCheck,
    title: "For long-term collaboration",
    desc: "Documentation, commissioning support, service coordination, and modernization planning that help protect partner reputation after delivery.",
  },
]

const distributorships = [
  {
    label: "Exclusive in Ukraine",
    title: "Surgiris and Surgimedia",
    desc: "Exclusive distributor position for Ukraine across OR integration and related surgical infrastructure solutions.",
  },
  {
    label: "Official in Ukraine",
    title: "Inmed, Beacon, and FSN",
    desc: "Official distributor relationships covering medical infrastructure, surgical displays, and supporting clinical systems.",
  },
]

const integrationProof = [
  "Vendor-neutral OR integration systems compatible with most global equipment brands.",
  "Able to coordinate room systems, infrastructure interfaces, and partner delivery steps around one surgical environment.",
]

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        label="Partnerships"
        title="OR integration partnerships for manufacturers, contractors, and specialist suppliers"
        description="Medintegro acts as a local OR integration and surgical infrastructure partner for brands, distributors, and project teams that need a credible commercial and technical presence in Ukraine."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {cards.map((card) => (
              <article
                key={card.title}
                className="glass glass-hover glow-cyan-hover rounded-xl p-6 transition-all duration-300"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                  <card.icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-lg font-semibold text-foreground">{card.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-y border-border/50 py-20 md:py-24">
        <div className="absolute inset-0 bg-card/40" />
        <Container className="relative">
          <h2 className="max-w-3xl text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Distribution status and integration position
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.3fr_1fr]">
            <div className="grid gap-4">
              {distributorships.map((item) => (
                <article key={item.title} className="glass rounded-xl border border-border/60 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                        {item.label}
                      </span>
                      <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                    <div className="rounded-xl border border-primary/20 bg-primary/10 p-2.5 text-primary">
                      <Shield className="h-5 w-5" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="glass rounded-xl p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                What this means in practice
              </p>
              <div className="mt-4 rounded-xl border border-border/50 bg-background/35 p-4">
                <div className="mb-3 flex items-center gap-2 text-foreground">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <p className="text-sm font-semibold">Vendor-neutral OR integration</p>
                </div>
                <ul className="space-y-3">
                  {integrationProof.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  We can represent specific brands where distribution status is defined, while still
                  designing OR integration systems in a vendor-neutral way when the room requires a
                  broader combination of technologies.
                </p>
                <p>
                  That gives partners a local route to technically credible room delivery without
                  forcing the project into a single-brand limitation.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
