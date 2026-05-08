import type { Metadata } from "next"
import { PartnersContent } from "./partners-content"

export const metadata: Metadata = {
  title: {
    absolute: "Partners | Medintegro Medical Technology Network",
  },
  description:
    "Medintegro works with trusted medical technology partners to deliver surgical infrastructure, equipment, and integration solutions.",
  alternates: { canonical: "https://www.medintegro.com.ua/partners" },
  openGraph: {
    url: "https://www.medintegro.com.ua/partners",
    title: "Partners | Medintegro Medical Technology Network",
    description:
      "Medintegro works with trusted medical technology partners to deliver surgical infrastructure, equipment, and integration solutions.",
  },
}

export default function PartnersPage() {
  return <PartnersContent />
}
