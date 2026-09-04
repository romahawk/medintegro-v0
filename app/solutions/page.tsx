import type { Metadata } from "next"
import { staticPageMetadata } from "@/lib/seo"
import { SolutionsContent } from "./solutions-content"

export const metadata: Metadata = staticPageMetadata("/solutions")

export default function SolutionsPage() {
  return <SolutionsContent />
}
