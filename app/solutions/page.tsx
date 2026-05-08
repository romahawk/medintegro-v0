import type { Metadata } from "next"
import { SolutionsContent } from "./solutions-content"

export const metadata: Metadata = {
  title: {
    absolute: "Solutions | Operating Room & Hospital Infrastructure Integration",
  },
  description:
    "Explore Medintegro solutions for integrated operating rooms, surgical video systems, medical infrastructure, and healthcare technology projects.",
  alternates: { canonical: "https://www.medintegro.com.ua/solutions" },
  openGraph: {
    url: "https://www.medintegro.com.ua/solutions",
    title: "Solutions | Operating Room & Hospital Infrastructure Integration",
    description:
      "Explore Medintegro solutions for integrated operating rooms, surgical video systems, medical infrastructure, and healthcare technology projects.",
  },
}

export default function SolutionsPage() {
  return <SolutionsContent />
}
