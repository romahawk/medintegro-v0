import type { Metadata } from "next"
import { PartnersContent } from "./partners-content"

export const metadata: Metadata = {
  title: "OR Integration Partnerships — Manufacturers & Distributors",
  description: "Medintegro partners with OR integration manufacturers, contractors, and international suppliers as an exclusive and official distributor in Ukraine.",
  alternates: { canonical: "https://www.medintegro.com.ua/partners" },
  openGraph: { url: "https://www.medintegro.com.ua/partners" },
}

export default function PartnersPage() {
  return <PartnersContent />
}
