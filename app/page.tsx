import { Hero } from "@/components/home/hero"
import { OrIntegrationFocus } from "@/components/home/or-integration-focus"
import { Expertise } from "@/components/home/expertise"
import { Categories } from "@/components/home/categories"
import { ProjectsPreview } from "@/components/home/projects-preview"
import { Trust } from "@/components/home/trust"
import { CTASection } from "@/components/cta-section"
import { absoluteUrl, siteConfig } from "@/lib/site"

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    email: siteConfig.contactEmail,
    telephone: siteConfig.contactPhone,
    areaServed: ["Ukraine", "Europe"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kyiv",
      addressCountry: "UA",
    },
    sameAs: [absoluteUrl("/")],
    description: siteConfig.description,
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
