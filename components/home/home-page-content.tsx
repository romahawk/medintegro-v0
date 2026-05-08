import { Hero } from "@/components/home/hero"
import { OrIntegrationFocus } from "@/components/home/or-integration-focus"
import { Expertise } from "@/components/home/expertise"
import { Categories } from "@/components/home/categories"
import { ProjectsPreview } from "@/components/home/projects-preview"
import { Trust } from "@/components/home/trust"
import { CTASection } from "@/components/cta-section"
import { absoluteUrl, siteConfig } from "@/lib/site"
import type { Locale } from "@/lib/i18n"

const jsonLdDescriptions: Record<Locale, string> = {
  ua: "Medintegro проєктує та інтегрує операційні, хірургічні відеосистеми, медичну інфраструктуру та обладнання для сучасних клінік.",
  en: "Medintegro designs and integrates operating rooms, surgical video systems, medical infrastructure, and equipment solutions for modern healthcare facilities.",
}

export function HomePageContent({ locale }: { locale: Locale }) {
  const route = locale === "en" ? "/en" : "/"
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: absoluteUrl(route),
    email: siteConfig.contactEmail,
    telephone: siteConfig.contactPhone,
    areaServed: ["Ukraine", "Europe"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kyiv",
      addressCountry: "UA",
    },
    sameAs: [absoluteUrl(route)],
    description: jsonLdDescriptions[locale],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <OrIntegrationFocus />
      <Trust />
      <Expertise />
      <Categories />
      <ProjectsPreview />
      <CTASection />
    </>
  )
}
