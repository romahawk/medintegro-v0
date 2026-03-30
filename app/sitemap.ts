import type { MetadataRoute } from "next"
import { absoluteUrl } from "@/lib/site"
import { integratedOrProducts } from "@/lib/integrated-or-products"
import { orLightingProducts } from "@/lib/or-lighting-products"
import { examinationLampProducts } from "@/lib/examination-lamps-products"
import { beaconProducts, fsnProducts } from "@/lib/surgical-monitors-products"
import {
  bedHeadUnitProducts,
  ceilingPendantProducts,
} from "@/lib/icu-infrastructure-products"
import { medicalGasProducts } from "@/lib/medical-gases-products"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/about",
    "/contact",
    "/equipment",
    "/partners",
    "/projects",
    "/services",
    "/equipment/examination-lamps",
    "/equipment/icu-infrastructure/bed-head-units",
    "/equipment/icu-infrastructure/ceiling-pendants",
    "/equipment/medical-gases",
    "/equipment/or-lighting",
    "/equipment/surgical-monitors/beacon",
    "/equipment/surgical-monitors/fsn",
  ]

  const dynamicRoutes = [
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

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
  }))
}
