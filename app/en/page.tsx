import type { Metadata } from "next"
import { HomePageContent } from "@/components/home/home-page-content"

const EN_TITLE = "Medintegro | Operating Room & Medical Systems Integration"
const EN_DESCRIPTION =
  "Medintegro designs and integrates operating rooms, surgical video systems, medical infrastructure, and equipment solutions for modern healthcare facilities."
const EN_OG_DESCRIPTION =
  "Operating room integration, surgical video systems, medical infrastructure, and equipment solutions for healthcare facilities."

export const metadata: Metadata = {
  title: {
    absolute: EN_TITLE,
  },
  description: EN_DESCRIPTION,
  alternates: {
    canonical: "https://www.medintegro.com.ua/en",
    languages: {
      "uk-UA": "https://www.medintegro.com.ua/",
      en: "https://www.medintegro.com.ua/en",
      "x-default": "https://www.medintegro.com.ua/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Medintegro",
    url: "https://www.medintegro.com.ua/en",
    title: EN_TITLE,
    description: EN_OG_DESCRIPTION,
    images: [
      {
        url: "/og/og-image-en.jpg",
        width: 1200,
        height: 630,
        alt: "Operating room integration and medical infrastructure solutions by Medintegro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: EN_TITLE,
    description: EN_OG_DESCRIPTION,
    images: ["/og/og-image-en.jpg"],
  },
}

export default function EnglishHomePage() {
  return <HomePageContent locale="en" />
}
