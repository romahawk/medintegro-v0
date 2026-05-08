import type { Metadata } from "next"
import { Suspense } from "react"
import { EquipmentContent } from "./equipment-content"

export const metadata: Metadata = {
  title: "OR Integration Equipment & Surgical Systems",
  description: "Browse OR integration platforms, surgical lighting, medical gas pendants, surgical displays, and specialist equipment from Surgiris, Surgimedia, FSN, Inmed, Beacon, and ErgoMounts.",
  alternates: { canonical: "https://www.medintegro.com.ua/equipment" },
  openGraph: { url: "https://www.medintegro.com.ua/equipment" },
}

export default function EquipmentPage() {
  return (
    <Suspense fallback={null}>
      <EquipmentContent />
    </Suspense>
  )
}
