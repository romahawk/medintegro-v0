import type { Metadata } from "next"
import { ContactContent } from "./contact-content"

export const metadata: Metadata = {
  title: "Contact Medintegro | OR Integration Consultations",
  description: "Reach Medintegro for operating room integration consultations, equipment enquiries, and project discussions. Based in Kyiv, Ukraine.",
  alternates: { canonical: "https://www.medintegro.com.ua/contact" },
  openGraph: { url: "https://www.medintegro.com.ua/contact" },
}

export default function ContactPage() {
  return <ContactContent />
}
