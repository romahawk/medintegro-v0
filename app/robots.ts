import type { MetadataRoute } from "next"
import { canonicalUrl } from "@/lib/seo"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // API routes are not content and should never be indexed.
      disallow: ["/api/"],
    },
    sitemap: canonicalUrl("/sitemap.xml"),
    host: canonicalUrl("/"),
  }
}
