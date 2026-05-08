import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"

const EN_TITLE = "Medintegro | Operating Room & Medical Systems Integration"
const EN_DESCRIPTION =
  "Medintegro designs and integrates operating rooms, surgical video systems, medical infrastructure, and equipment solutions for modern healthcare facilities."
const EN_OG_DESCRIPTION =
  "Operating room integration, surgical video systems, medical infrastructure, and equipment solutions for healthcare facilities."

export const metadata: Metadata = {
  title: {
    absolute: EN_TITLE,
  },
  description: EN_DESCRIPTION,
  alternates: {
    canonical: "https://www.medintegro.com.ua/en",
    languages: {
      "uk-UA": "https://www.medintegro.com.ua/",
      en: "https://www.medintegro.com.ua/en",
      "x-default": "https://www.medintegro.com.ua/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Medintegro",
    url: "https://www.medintegro.com.ua/en",
    title: EN_TITLE,
    description: EN_OG_DESCRIPTION,
    images: [
      {
        url: "/og/og-image-en.jpg",
        width: 1200,
        height: 630,
        alt: "Operating room integration and medical infrastructure solutions by Medintegro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: EN_TITLE,
    description: EN_OG_DESCRIPTION,
    images: ["/og/og-image-en.jpg"],
  },
}

const solutionPoints = [
  "Integrated OR platforms and clinical control workflows",
  "Surgical lighting, displays, and video system coordination",
  "Medical gas infrastructure and room-ready equipment planning",
]

const equipmentPoints = [
  "Surgical lights and examination lighting",
  "Ceiling pendants, monitor mounts, and display systems",
  "Integrated OR solutions, medical gases, and clinical infrastructure",
]

export default function EnglishHomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Medintegro",
    url: "https://www.medintegro.com.ua/en",
    email: "info@medintegro.com",
    telephone: "+380 67 214 2144",
    areaServed: ["Ukraine", "Europe"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kyiv",
      addressCountry: "UA",
    },
    sameAs: ["https://www.medintegro.com.ua/en"],
    description: EN_DESCRIPTION,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0">
          <Image
            src="/images/company/hero-or.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

        <Container className="relative z-10 py-24 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-2xl">
              <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                Operating Room Integration Specialist
              </span>
              <h1 className="mt-5 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Operating room integration and medical systems for modern clinical facilities
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                Medintegro helps hospitals, contractors, and healthcare partners deliver integrated operating rooms,
                surgical video systems, medical infrastructure, and equipment solutions with a practical implementation focus.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="gap-2 rounded-xl glow-cyan">
                  <Link href="/contact">
                    Discuss a Clinical Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-xl border-border/50 bg-card/30 text-foreground backdrop-blur-sm hover:border-primary/40 hover:bg-card/50"
                >
                  <Link href="/solutions">Explore Solutions</Link>
                </Button>
              </div>
            </div>

            <div className="glass rounded-2xl border border-border/60 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                English Landing
              </p>
              <h2 className="mt-4 text-xl font-semibold text-foreground">
                Built for premium, room-level healthcare infrastructure delivery
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The English route is designed for international partners and decision-makers who need a clear introduction
                to Medintegro&apos;s OR integration and infrastructure capability.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="glass rounded-2xl border border-border/60 p-6">
              <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                Solutions
              </span>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                Surgical integration with implementation discipline
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Medintegro coordinates multiple systems into one dependable operating room environment rather than treating
                each component as an isolated product purchase.
              </p>
              <ul className="mt-6 space-y-3">
                {solutionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button asChild variant="outline" className="rounded-xl border-border/50">
                  <Link href="/solutions">View OR solutions</Link>
                </Button>
              </div>
            </article>

            <article className="glass rounded-2xl border border-border/60 p-6">
              <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                Equipment
              </span>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                Equipment aligned to clinical room performance
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The equipment portfolio supports integrated operating rooms and wider healthcare infrastructure projects
                where compatibility, room planning, and practical deployment matter.
              </p>
              <ul className="mt-6 space-y-3">
                {equipmentPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button asChild variant="outline" className="rounded-xl border-border/50">
                  <Link href="/equipment">View equipment</Link>
                </Button>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-t border-border/50 py-20 md:py-24">
        <div className="absolute inset-0 bg-mesh" />
        <Container className="relative flex flex-col items-center gap-6 text-center">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            Contact Medintegro
          </span>
          <h2 className="max-w-3xl text-balance text-2xl font-semibold tracking-tight text-foreground md:text-4xl">
            Planning a new operating room or a surgical infrastructure upgrade?
          </h2>
          <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            Contact Medintegro to discuss operating room integration, surgical equipment, medical infrastructure, or a
            partner-led healthcare technology project.
          </p>
          <Button asChild size="lg" className="gap-2 rounded-xl glow-cyan">
            <Link href="/contact">
              Contact Medintegro
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Container>
      </section>
    </>
  )
}
