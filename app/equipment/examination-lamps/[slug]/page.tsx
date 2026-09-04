import { notFound } from "next/navigation"
import { ExaminationLampProductContent } from "./examination-lamp-product-content"
import { examinationLampProducts, getExaminationLampProductBySlug } from "@/lib/examination-lamps-products"
import type { Metadata } from "next"
import { productMetadata } from "@/lib/seo"
import { getLocalizedExaminationLampProduct } from "@/lib/equipment-detail-localizations"

// Every product slug is known at build time; anything else is a real 404 and
// should render the branded not-found page rather than an on-demand error shell.
export const dynamicParams = false

export function generateStaticParams() {
  return examinationLampProducts.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getExaminationLampProductBySlug(slug)

  if (!product) return {}

  const localized = getLocalizedExaminationLampProduct(product, "ua")

  return productMetadata({
    path: `/equipment/examination-lamps/${product.slug}`,
    name: localized.name ?? product.name,
    description: localized.shortDescription ?? product.shortDescription,
  })
}

export default async function ExaminationLampProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getExaminationLampProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return <ExaminationLampProductContent product={product} />
}
