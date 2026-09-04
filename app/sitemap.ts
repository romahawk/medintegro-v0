import type { MetadataRoute } from "next"
import { HOME_ALTERNATES, canonicalUrl } from "@/lib/seo"
import { integratedOrProducts } from "@/lib/integrated-or-products"
import { orLightingProducts } from "@/lib/or-lighting-products"
import { examinationLampProducts } from "@/lib/examination-lamps-products"
import { beaconProducts, fsnProducts } from "@/lib/surgical-monitors-products"
import {
  bedHeadUnitProducts,
  ceilingPendantProducts,
} from "@/lib/icu-infrastructure-products"
import { medicalGasProducts } from "@/lib/medical-gases-products"

/**
 * Only indexable production routes belong here.
 *
 * Deliberately excluded:
 *  - /services and /equipment/medical-gases (permanent redirects)
 *  - every legacy WordPress URL handled in vercel.json
 *  - query-string variants such as /equipment?category=...
 *
 * lastModified is intentionally omitted: a build-time timestamp on every URL
 * is not a meaningful signal and devalues the field.
 */
const staticRoutes = [
  "/about",
  "/contact",
  "/equipment",
  "/partners",
  "/projects",
  "/solutions",
  "/equipment/examination-lamps",
  "/equipment/icu-infrastructure/bed-head-units",
  "/equipment/icu-infrastructure/ceiling-pendants",
  "/equipment/or-lighting",
  "/equipment/surgical-monitors/beacon",
  "/equipment/surgical-monitors/fsn",
]

const productRoutes = [
  ...integratedOrProducts.map((product) => `/equipment/integrated-or/${product.slug}`),
  ...orLightingProducts.map((product) => `/equipment/or-lighting/${product.slug}`),
  ...examinationLampProducts.map(
    (product) => `/equipment/examination-lamps/${product.slug}`
  ),
  ...beaconProducts.map(
    (product) => `/equipment/surgical-monitors/beacon/${product.slug}`
  ),
  ...fsnProducts.map((product) => `/equipment/surgical-monitors/fsn/${product.slug}`),
  ...ceilingPendantProducts.map(
    (product) => `/equipment/icu-infrastructure/ceiling-pendants/${product.slug}`
  ),
  ...bedHeadUnitProducts.map(
    (product) => `/equipment/icu-infrastructure/bed-head-units/${product.slug}`
  ),
  ...medicalGasProducts.map((product) => `/equipment/medical-gases/${product.slug}`),
]

export default function sitemap(): MetadataRoute.Sitemap {
  // The home pair is the only route with a real localized alternate.
  const localizedHome: MetadataRoute.Sitemap = [
    {
      url: canonicalUrl("/"),
      alternates: { languages: HOME_ALTERNATES },
    },
    {
      url: canonicalUrl("/en"),
      alternates: { languages: HOME_ALTERNATES },
    },
  ]

  return [
    ...localizedHome,
    ...[...staticRoutes, ...productRoutes].map((route) => ({
      url: canonicalUrl(route),
    })),
  ]
}
