import type { Metadata } from "next"
import { Suspense } from "react"
import { staticPageMetadata } from "@/lib/seo"
import { EquipmentContent } from "./equipment-content"

export const metadata: Metadata = staticPageMetadata("/equipment")

export default function EquipmentPage() {
  return (
    <Suspense fallback={null}>
      <EquipmentContent />
    </Suspense>
  )
}
