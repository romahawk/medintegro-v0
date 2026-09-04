import type { Metadata } from "next"
import { staticPageMetadata } from "@/lib/seo"
import { ContactContent } from "./contact-content"

export const metadata: Metadata = staticPageMetadata("/contact")

export default function ContactPage() {
  return <ContactContent />
}
