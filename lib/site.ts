const fallbackSiteUrl = "https://medintegro.com"

export const siteConfig = {
  name: "Medintegro",
  description:
    "Medical infrastructure integration, equipment sourcing, and turnkey delivery for hospitals, clinics, contractors, and healthcare partners.",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || fallbackSiteUrl,
  contactEmail: process.env.CONTACT_EMAIL || "info@medintegro.com",
  contactPhone: "+380 44 123 4567",
  location: "Kyiv, Ukraine",
}

export function absoluteUrl(path = "/") {
  return `${siteConfig.siteUrl}${path.startsWith("/") ? path : `/${path}`}`
}
