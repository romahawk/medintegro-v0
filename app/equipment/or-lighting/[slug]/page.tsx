import { notFound } from "next/navigation"
import { OrLightingProductContent } from "./or-lighting-product-content"
import { getOrLightingProductBySlug, orLightingProducts } from "@/lib/or-lighting-products"
import type { Metadata } from "next"
import { productMetadata } from "@/lib/seo"
import { getLocalizedOrLightingProduct } from "@/lib/equipment-detail-localizations"

export function generateStaticParams() {
  return orLightingProducts.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getOrLightingProductBySlug(slug)

  if (!product) return {}

  const localized = getLocalizedOrLightingProduct(product, "ua")

  return productMetadata({
    path: `/equipment/or-lighting/${product.slug}`,
    name: localized.name ?? product.name,
    description: localized.shortDescription ?? product.shortDescription,
  })
}

export default async function OrLightingProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getOrLightingProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const currentIndex = orLightingProducts.findIndex((item) => item.slug === product.slug)
  const prevProduct = currentIndex > 0 ? orLightingProducts[currentIndex - 1] : null
  const nextProduct =
    currentIndex < orLightingProducts.length - 1 ? orLightingProducts[currentIndex + 1] : null

  return (
    <OrLightingProductContent
      product={product}
      prevProduct={prevProduct}
      nextProduct={nextProduct}
    />
  )
}
