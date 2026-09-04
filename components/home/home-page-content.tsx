import { Hero } from "@/components/home/hero"
import { OrIntegrationFocus } from "@/components/home/or-integration-focus"
import { Expertise } from "@/components/home/expertise"
import { Categories } from "@/components/home/categories"
import { ProjectsPreview } from "@/components/home/projects-preview"
import { Trust } from "@/components/home/trust"
import { CTASection } from "@/components/cta-section"
import { JsonLd } from "@/components/json-ld"
import { organizationSchema, websiteSchema } from "@/lib/structured-data"
import type { Locale } from "@/lib/i18n"

export function HomePageContent({ locale }: { locale: Locale }) {
  const seoLocale = locale === "en" ? "en" : "uk"

  return (
    <>
      <JsonLd schema={organizationSchema(seoLocale)} />
      <JsonLd schema={websiteSchema(seoLocale)} />
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
