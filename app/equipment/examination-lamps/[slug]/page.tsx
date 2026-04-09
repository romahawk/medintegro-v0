import { notFound } from "next/navigation"
import { ExaminationLampProductContent } from "./examination-lamp-product-content"
import { examinationLampProducts, getExaminationLampProductBySlug } from "@/lib/examination-lamps-products"

export function generateStaticParams() {
  return examinationLampProducts.map((product) => ({ slug: product.slug }))
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
