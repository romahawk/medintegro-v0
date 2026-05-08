import type { Metadata } from "next"
import { AboutContent } from "./about-content"

export const metadata: Metadata = {
  title: "About Medintegro | OR Integration Specialist",
  description: "Medintegro is an operating room integration and surgical infrastructure specialist supporting hospitals, contractors, and partners with credible room delivery in Ukraine.",
  alternates: { canonical: "https://www.medintegro.com.ua/about" },
  openGraph: { url: "https://www.medintegro.com.ua/about" },
}

export default function AboutPage() {
  return <AboutContent />
}
