import { canonicalUrl, type SeoLocale } from "@/lib/seo"
import { siteConfig } from "@/lib/site"

const ORGANIZATION_DESCRIPTION: Record<SeoLocale, string> = {
  uk: "Medintegro проєктує та інтегрує операційні, хірургічні відеосистеми, медичну інфраструктуру та обладнання для сучасних клінік.",
  en: "Medintegro designs and integrates operating rooms, surgical video systems, medical infrastructure, and equipment solutions for modern healthcare facilities.",
}

/** Stable @id so every page references the same Organization node. */
export const ORGANIZATION_ID = `${canonicalUrl("/")}/#organization`
export const WEBSITE_ID = `${canonicalUrl("/")}/#website`

export function organizationSchema(locale: SeoLocale) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: siteConfig.name,
    url: canonicalUrl("/"),
    email: siteConfig.contactEmail,
    telephone: siteConfig.contactPhone,
    areaServed: ["Ukraine", "Europe"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kyiv",
      addressCountry: "UA",
    },
    description: ORGANIZATION_DESCRIPTION[locale],
  }
}

export function websiteSchema(locale: SeoLocale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: siteConfig.name,
    url: canonicalUrl(locale === "en" ? "/en" : "/"),
    inLanguage: locale === "en" ? "en" : "uk",
    publisher: { "@id": ORGANIZATION_ID },
  }
}

/**
 * BreadcrumbList for pages that render a visible breadcrumb trail.
 * Only use it where the trail is actually on the page.
 */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  }
}
