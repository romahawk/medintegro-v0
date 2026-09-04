import type { Metadata } from "next"
import { HomePageContent } from "@/components/home/home-page-content"
import { HOME_ALTERNATES, HOME_SEO, buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  path: "/en",
  locale: "en",
  title: HOME_SEO.en.title,
  description: HOME_SEO.en.description,
  ogDescription: HOME_SEO.en.ogDescription,
  languages: HOME_ALTERNATES,
})

export default function EnglishHomePage() {
  // The document element carries lang="uk" from the shared root layout; this
  // wrapper marks the English content correctly for crawlers and assistive
  // technology. LanguageProvider also syncs <html lang> on the client.
  return (
    <div lang="en">
      <HomePageContent locale="en" />
    </div>
  )
}
