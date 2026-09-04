import type { Metadata } from "next"
import { staticPageMetadata } from "@/lib/seo"
import { OrLightingContent } from "./or-lighting-content"

export const metadata: Metadata = staticPageMetadata("/equipment/or-lighting")

export default function OrLightingPage() {
  return <OrLightingContent />
}
