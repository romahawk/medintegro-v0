import type { Metadata } from "next"
import { staticPageMetadata } from "@/lib/seo"
import { PartnersContent } from "./partners-content"

export const metadata: Metadata = staticPageMetadata("/partners")

export default function PartnersPage() {
  return <PartnersContent />
}
