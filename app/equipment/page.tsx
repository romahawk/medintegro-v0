import type { Metadata } from "next"
import { Suspense } from "react"
import { EquipmentContent } from "./equipment-content"

export const metadata: Metadata = {
  title: {
    absolute: "Equipment | Surgical Lights, Pendants & Medical Systems",
  },
  description:
    "Medical equipment for operating rooms and healthcare infrastructure, including surgical lights, medical pendants, displays, and integration systems.",
  alternates: { canonical: "https://www.medintegro.com.ua/equipment" },
  openGraph: {
    url: "https://www.medintegro.com.ua/equipment",
    title: "Equipment | Surgical Lights, Pendants & Medical Systems",
    description:
      "Medical equipment for operating rooms and healthcare infrastructure, including surgical lights, medical pendants, displays, and integration systems.",
  },
}

export default function EquipmentPage() {
  return (
    <Suspense fallback={null}>
      <EquipmentContent />
    </Suspense>
  )
}
