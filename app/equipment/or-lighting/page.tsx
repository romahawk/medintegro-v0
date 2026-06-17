import type { Metadata } from "next"
import { OrLightingContent } from "./or-lighting-content"

export const metadata: Metadata = {
  title: {
    absolute: "Surgical Lights & LED Operating Room Lighting | Medintegro",
  },
  description:
    "Medintegro supplies and supports Surgiris surgical lights, LED operating room lights, wireless camera options, and OR lighting integration for hospitals, clinics, and healthcare infrastructure projects.",
  alternates: {
    canonical: "https://www.medintegro.com.ua/equipment/or-lighting",
  },
  openGraph: {
    url: "https://www.medintegro.com.ua/equipment/or-lighting",
    title: "Surgical Lights & LED Operating Room Lighting | Medintegro",
    description:
      "Medintegro supplies and supports Surgiris surgical lights, LED operating room lights, wireless camera options, and OR lighting integration for hospitals, clinics, and healthcare infrastructure projects.",
  },
}

export default function OrLightingPage() {
  return <OrLightingContent />
}
