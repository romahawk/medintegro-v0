import { notFound } from "next/navigation"
import { OrLightingProductContent } from "./or-lighting-product-content"
import { getOrLightingProductBySlug, orLightingProducts } from "@/lib/or-lighting-products"

export function generateStaticParams() {
  return orLightingProducts.map((product) => ({ slug: product.slug }))
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
