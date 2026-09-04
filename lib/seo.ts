import type { Metadata } from "next"
import { siteConfig } from "@/lib/site"

/**
 * Single source of truth for SEO metadata.
 *
 * Architecture note
 * -----------------
 * The site serves one URL per page. Ukrainian is the canonical content
 * language for every route except `/en`, which is the only English URL.
 * Metadata language therefore always mirrors the server-rendered content
 * language of the route it belongs to, so a crawler can never receive
 * Ukrainian content under an English URL (or the reverse).
 */

export type SeoLocale = "uk" | "en"

export const SITE_URL = siteConfig.siteUrl

export const OG_LOCALE: Record<SeoLocale, string> = {
  uk: "uk_UA",
  en: "en_US",
}

export const OG_IMAGE: Record<SeoLocale, string> = {
  uk: "/og/og-image-uk.jpg",
  en: "/og/og-image-en.jpg",
}

const OG_IMAGE_ALT: Record<SeoLocale, string> = {
  uk: "Інтеграція операційних та медична інфраструктура від Medintegro",
  en: "Operating room integration and medical infrastructure solutions by Medintegro",
}

/**
 * Normalises any internal path into an absolute, production-safe URL.
 * Always uses the production origin - never localhost or a preview host -
 * and drops trailing slashes everywhere except the site root.
 */
export function canonicalUrl(path = "/"): string {
  const withLeadingSlash = path.startsWith("/") ? path : `/${path}`
  // Trailing slashes are stripped everywhere, including the root, so canonical,
  // hreflang, og:url and the sitemap all agree on one spelling per URL.
  const normalized = withLeadingSlash.replace(/\/+$/, "")

  return `${SITE_URL}${normalized}`
}

/** The only route pair on the site that has a real localized equivalent. */
export const HOME_ALTERNATES = {
  "uk-UA": canonicalUrl("/"),
  en: canonicalUrl("/en"),
  "x-default": canonicalUrl("/en"),
}

export interface PageSeoInput {
  /** Route path, e.g. "/equipment/or-lighting". */
  path: string
  /** Content language actually rendered on that route. Defaults to Ukrainian. */
  locale?: SeoLocale
  title: string
  description: string
  /** Shorter variant used for social cards. Falls back to `description`. */
  ogDescription?: string
  /**
   * hreflang map. Only pass it for routes that genuinely have a localized
   * twin - an alternate pointing at a non-existent page is worse than none.
   */
  languages?: Record<string, string>
  ogType?: "website" | "article"
  images?: { url: string; width: number; height: number; alt: string }[]
}

/**
 * Builds a complete, localized Metadata object: absolute canonical,
 * OpenGraph (localized, with og:locale), and Twitter card.
 */
export function buildPageMetadata({
  path,
  locale = "uk",
  title,
  description,
  ogDescription,
  languages,
  ogType = "website",
  images,
}: PageSeoInput): Metadata {
  const url = canonicalUrl(path)
  const social = ogDescription ?? description
  const ogImages = images ?? [
    {
      url: OG_IMAGE[locale],
      width: 1200,
      height: 630,
      alt: OG_IMAGE_ALT[locale],
    },
  ]

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      type: ogType,
      siteName: siteConfig.name,
      locale: OG_LOCALE[locale],
      url,
      title,
      description: social,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: social,
      images: ogImages.map((image) => image.url),
    },
  }
}

interface LocalizedCopy {
  title: string
  description: string
  ogDescription?: string
}

export const HOME_SEO: Record<SeoLocale, LocalizedCopy> = {
  uk: {
    title: "Medintegro | Інтеграція операційних та медичних систем",
    description:
      "Medintegro проєктує та інтегрує операційні, хірургічні відеосистеми, медичну інфраструктуру та обладнання для сучасних клінік.",
    ogDescription:
      "Інтеграція операційних, хірургічні відеосистеми, медична інфраструктура та обладнання для сучасних клінік.",
  },
  en: {
    title: "Medintegro | Operating Room & Medical Systems Integration",
    description:
      "Medintegro designs and integrates operating rooms, surgical video systems, medical infrastructure, and equipment solutions for modern healthcare facilities.",
    ogDescription:
      "Operating room integration, surgical video systems, medical infrastructure, and equipment solutions for healthcare facilities.",
  },
}

/**
 * Copy for every static indexable route, in the language that route serves.
 * Add a route here rather than hardcoding metadata inside a page file.
 */
export const PAGE_SEO: Record<string, LocalizedCopy> = {
  "/solutions": {
    title: "Рішення для операційних та лікарняної інфраструктури | Medintegro",
    description:
      "Рішення Medintegro для інтегрованих операційних, хірургічних відеосистем, медичної інфраструктури та проєктів у сфері медичних технологій.",
  },
  "/equipment": {
    title: "Обладнання: хірургічні світильники, консолі та медичні системи | Medintegro",
    description:
      "Медичне обладнання для операційних і лікарняної інфраструктури: хірургічні світильники, медичні консолі, дисплеї та системи інтеграції операційних.",
  },
  "/projects": {
    title: "Проєкти інтеграції операційних та медичної інфраструктури | Medintegro",
    description:
      "Вибрані проєкти Medintegro з інтеграції операційних, хірургічної інфраструктури, монтажу медичного обладнання та впровадження медичних технологій.",
  },
  "/partners": {
    title: "Партнери | Мережа медичних технологій Medintegro",
    description:
      "Medintegro співпрацює з перевіреними партнерами у сфері медичних технологій, щоб постачати хірургічну інфраструктуру, обладнання та інтеграційні рішення.",
  },
  "/about": {
    title: "Про компанію | Інтеграція медичної інфраструктури Medintegro",
    description:
      "Досвід Medintegro в інтеграції операційних, медичній інфраструктурі, хірургічних відеосистемах та проєктах постачання медичного обладнання.",
  },
  "/contact": {
    title: "Контакти | Medintegro",
    description:
      "Зв’яжіться з Medintegro щодо інтеграції операційних, медичного обладнання, хірургічної інфраструктури та проєктів медичних технологій.",
  },
  "/equipment/or-lighting": {
    title: "Хірургічні світильники та LED освітлення операційних | Medintegro",
    description:
      "Medintegro постачає та підтримує хірургічні світильники Surgiris, LED освітлення операційних, бездротові камери та інтеграцію освітлення для сучасних операційних залів.",
  },
  "/equipment/examination-lamps": {
    title: "Оглядові та процедурні світильники | Medintegro",
    description:
      "Оглядові та процедурні світильники для консультаційних кабінетів, спеціалізованих оглядів і малих втручань у клініках та амбулаторних відділеннях.",
  },
  "/equipment/icu-infrastructure/ceiling-pendants": {
    title: "Стельові медичні консолі для операційних та ВІТ | Medintegro",
    description:
      "Стельові консолі INMED, балкові системи ВІТ і стійки: інфраструктура медичних газів, електроживлення, даних та аксесуарів для операційних і відділень інтенсивної терапії.",
  },
  "/equipment/icu-infrastructure/bed-head-units": {
    title: "Приліжкові панелі для палат та відділень ВІТ | Medintegro",
    description:
      "Приліжкові панелі INMED для палат, ВІТ і NICU: медичні гази, електроживлення, дані, освітлення та аксесуари в одному модульному рішенні.",
  },
  "/equipment/surgical-monitors/beacon": {
    title: "Хірургічні монітори Beacon для інтегрованих операційних | Medintegro",
    description:
      "Хірургічні дисплеї Beacon для інтегрованих операційних: основні операційні монітори, ендоскопічні дисплеї та великоформатні екрани для командного перегляду.",
  },
  "/equipment/surgical-monitors/fsn": {
    title: "Хірургічні монітори FSN для операційних та ендоскопії | Medintegro",
    description:
      "Медичні дисплеї FSN у форматах FHD, 4K і великоформатних 4K, включно з Mini-LED та OLED, для операційних як інтегрованих середовищ візуалізації.",
  },
}

/** Reads copy from the registry and fails loudly in dev if a route is missing. */
export function pageSeo(path: string): LocalizedCopy {
  const copy = PAGE_SEO[path]

  if (!copy) {
    throw new Error(`Missing SEO copy for route "${path}" in lib/seo.ts`)
  }

  return copy
}

/** Metadata for a static Ukrainian route, straight from the registry. */
export function staticPageMetadata(path: string): Metadata {
  const copy = pageSeo(path)

  return buildPageMetadata({
    path,
    locale: "uk",
    title: copy.title,
    description: copy.description,
    ogDescription: copy.ogDescription,
  })
}

/**
 * Metadata for a product detail page. Model names are language-neutral, so the
 * title stays stable while the description follows whichever localized copy
 * exists for that product.
 */
export function productMetadata({
  path,
  name,
  description,
  locale = "uk",
}: {
  path: string
  name: string
  description: string
  locale?: SeoLocale
}): Metadata {
  return buildPageMetadata({
    path,
    locale,
    title: `${name} | Medintegro`,
    description,
  })
}
