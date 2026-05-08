import type { Metadata } from "next"
import { ContactContent } from "./contact-content"

export const metadata: Metadata = {
  title: {
    absolute: "Contact | Medintegro",
  },
  description:
    "Contact Medintegro to discuss operating room integration, medical equipment, surgical infrastructure, or healthcare technology projects.",
  alternates: { canonical: "https://www.medintegro.com.ua/contact" },
  openGraph: {
    url: "https://www.medintegro.com.ua/contact",
    title: "Contact | Medintegro",
    description:
      "Contact Medintegro to discuss operating room integration, medical equipment, surgical infrastructure, or healthcare technology projects.",
  },
}

export default function ContactPage() {
  return <ContactContent />
}
