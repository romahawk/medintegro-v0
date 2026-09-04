import type { Metadata } from "next"
import { staticPageMetadata } from "@/lib/seo"
import { AboutContent } from "./about-content"

export const metadata: Metadata = staticPageMetadata("/about")

export default function AboutPage() {
  return <AboutContent />
}
