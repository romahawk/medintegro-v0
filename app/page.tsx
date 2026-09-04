import type { Metadata } from "next"
import { HomePageContent } from "@/components/home/home-page-content"
import { HOME_ALTERNATES, HOME_SEO, buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  path: "/",
  locale: "uk",
  title: HOME_SEO.uk.title,
  description: HOME_SEO.uk.description,
  ogDescription: HOME_SEO.uk.ogDescription,
  languages: HOME_ALTERNATES,
})

export default function HomePage() {
  return <HomePageContent locale="ua" />
}
