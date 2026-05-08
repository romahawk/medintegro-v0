import type { Metadata } from "next"
import { SolutionsContent } from "./solutions-content"

export const metadata: Metadata = {
  title: "OR Integration & Surgical Infrastructure Solutions",
  description: "Operating room integration platforms, surgical lighting, medical gas systems, and supporting clinical infrastructure for hospitals and healthcare projects.",
  alternates: { canonical: "https://www.medintegro.com.ua/solutions" },
  openGraph: { url: "https://www.medintegro.com.ua/solutions" },
}

export default function SolutionsPage() {
  return <SolutionsContent />
}
