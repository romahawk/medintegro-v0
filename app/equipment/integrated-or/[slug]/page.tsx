import { notFound } from "next/navigation"
import { IntegratedOrProductContent } from "./integrated-or-product-content"
import {
  getIntegratedOrProductBySlug,
  integratedOrProducts,
} from "@/lib/integrated-or-products"
import type { Metadata } from "next"
import { productMetadata } from "@/lib/seo"
import { getLocalizedIntegratedOrProduct } from "@/lib/equipment-detail-localizations"

// Every product slug is known at build time; anything else is a real 404 and
// should render the branded not-found page rather than an on-demand error shell.
export const dynamicParams = false

export function generateStaticParams() {
  return integratedOrProducts.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getIntegratedOrProductBySlug(slug)

  if (!product) return {}

  const localized = getLocalizedIntegratedOrProduct(product, "ua")

  return productMetadata({
    path: `/equipment/integrated-or/${product.slug}`,
    name: localized.name ?? product.name,
    description: localized.shortDescription ?? product.shortDescription,
  })
}

export default async function IntegratedOrProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getIntegratedOrProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const hasDetailedLayout = Boolean(
    product.heroTitle &&
      product.heroSubtitle &&
      product.capabilityItems?.length &&
      product.deploymentItems?.length &&
      product.valuePoints?.length
  )
  const currentIndex = integratedOrProducts.findIndex((item) => item.slug === product.slug)
  const prevProduct = currentIndex > 0 ? integratedOrProducts[currentIndex - 1] : null
  const nextProduct =
    currentIndex < integratedOrProducts.length - 1 ? integratedOrProducts[currentIndex + 1] : null
  const fallbackHeroImages = {
    main: {
      src: "/images/company/hero-or.jpg",
      alt: "Integrated operating room environment",
    },
    secondary1: {
      src: "/images/company/or-integration.jpg?v=20260508",
      alt: "OR control and displays",
    },
    secondary2: {
      src: "/images/projects/project-surgical.jpg",
      alt: "Surgical setup and display workflow",
    },
  }
  const heroImages = product.heroImages ?? fallbackHeroImages
  const deploymentImages = product.deploymentImages ?? [
    { src: "/images/company/or-integration.jpg?v=20260508", alt: "Integrated OR deployment configuration" },
    { src: "/images/projects/project-surgical.jpg", alt: "Integrated OR deployment configuration" },
    { src: "/images/company/hero-or.jpg", alt: "Integrated OR deployment configuration" },
  ]

  return (
    <IntegratedOrProductContent
      product={product}
      products={integratedOrProducts}
      hasDetailedLayout={hasDetailedLayout}
      prevProduct={prevProduct}
      nextProduct={nextProduct}
      heroImages={heroImages}
      deploymentImages={deploymentImages}
    />
  )
}
