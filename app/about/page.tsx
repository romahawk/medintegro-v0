import type { Metadata } from "next"
import { AboutContent } from "./about-content"

export const metadata: Metadata = {
  title: {
    absolute: "About | Medintegro Medical Infrastructure Integration",
  },
  description:
    "Learn about Medintegro’s expertise in operating room integration, medical infrastructure, surgical video systems, and healthcare equipment projects.",
  alternates: { canonical: "https://www.medintegro.com.ua/about" },
  openGraph: {
    url: "https://www.medintegro.com.ua/about",
    title: "About | Medintegro Medical Infrastructure Integration",
    description:
      "Learn about Medintegro’s expertise in operating room integration, medical infrastructure, surgical video systems, and healthcare equipment projects.",
  },
}

export default function AboutPage() {
  return <AboutContent />
}
