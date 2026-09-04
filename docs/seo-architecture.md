# SEO Architecture

How search metadata, language, canonicals, redirects and structured data work in
this repo, and what still has to be done outside it.

---

## 1. Language model

The site serves **one URL per page**. Ukrainian is the canonical content
language for every route; `/en` is the only English URL.

| Surface | Behaviour |
| --- | --- |
| `/` | Ukrainian content, Ukrainian metadata |
| `/en` | English content (server-rendered), English metadata |
| every other route | Ukrainian content, Ukrainian metadata |

`LanguageProvider` (`lib/i18n.tsx`) seeds its locale from the **route**, not from
`localStorage`, so the server-rendered HTML a crawler receives is always in the
language that URL is published in. User preference and browser language are
applied afterwards, in an effect, and only on bilingual routes. This is what
guarantees a crawler never receives Ukrainian content under `/en`.

The language switcher and theme toggle are unchanged.

### Known gap: `<html lang>` on `/en`

The root layout renders `<html lang="uk">` for the whole site. `/en` marks its
content with a `<div lang="en">` wrapper and `LanguageProvider` sets
`document.documentElement.lang` on hydration, so JS-executing crawlers and
screen readers get `en`.

Making `<html lang="en">` server-rendered requires **two root layouts** (route
groups `(uk)` and `(en)`). That was implemented and tested against Next 16.1.6
and **reverted**: with multiple root layouts, `notFound()` raised from a nested
route no longer resolves to a `not-found.tsx` boundary at any level, so invalid
product slugs render Next's unstyled fallback instead of the branded 404 page.
`experimental.globalNotFound` fixes unmatched URLs only, not nested
`notFound()`. Revisit when that interaction is fixed upstream.

---

## 2. Metadata

`lib/seo.ts` is the single source of truth.

- `PAGE_SEO` — title/description per static route, in that route's language
- `HOME_SEO` — Ukrainian and English homepage copy
- `staticPageMetadata(path)` — metadata for a static route
- `productMetadata({...})` — metadata for a product detail route
- `buildPageMetadata({...})` — the underlying builder (canonical, OG, Twitter,
  `og:locale`, optional hreflang)
- `canonicalUrl(path)` — always the production origin, trailing slashes stripped
  (including the root), never `localhost` or a Vercel preview host

`lib/i18n.tsx` reads titles from the same registry, so the browser tab title
always matches the language and route on screen after a language switch.

Adding a page: add its copy to `PAGE_SEO`, then
`export const metadata = staticPageMetadata("/your/route")`.

---

## 3. Canonical and hreflang

- One canonical per indexable page, absolute, production host.
- hreflang is emitted **only** for `/` and `/en` — the one route pair that has a
  real localized equivalent. Alternates pointing at pages that do not exist are
  worse than none.
- `x-default` → `/en`.

---

## 4. robots.txt and sitemap.xml

- `app/robots.ts` — allows everything except `/api/`, declares host and sitemap.
- `app/sitemap.ts` — all indexable production routes plus the `/` ↔ `/en`
  alternates. Excludes permanent redirects (`/services`,
  `/equipment/medical-gases`), legacy WordPress URLs and query-string variants.
- `lastmod` is deliberately omitted: a build-time timestamp on every URL is not
  a meaningful signal.

---

## 5. Redirects

All redirects live in `vercel.json` (edge, permanent 301/308) except two
in-app ones that use `permanentRedirect()` (308):

- `/services` → `/solutions`
- `/equipment/medical-gases` → `/equipment?category=monitoring`

`vercel.json` covers legacy WordPress paths, their trailing-slash variants, and
wildcard patterns for `/blog/*`, `/category/*`, `/tag/*`, `/author/*` and feeds.
It also carries the apex → `www` host redirect.

---

## 6. Structured data

`lib/structured-data.ts` + `components/json-ld.tsx`.

- `Organization` and `WebSite` on both homepages, with stable `@id`s
- `BreadcrumbList` on equipment category and product pages **that render a
  visible breadcrumb**, using the same labels as the visible trail
- `CollectionPage` + `FAQPage` on `/equipment/or-lighting` (pre-existing)

No schema is added where the page has no matching visible content.

---

## 7. Outstanding content work (not technical SEO)

These pages render **English** body copy while the rest of the Ukrainian site
renders Ukrainian. Metadata for them is Ukrainian, which is correct for the
market, but the bodies should be translated:

- `/equipment/examination-lamps` (+ product pages)
- `/equipment/surgical-monitors/beacon` (+ product pages)
- `/equipment/surgical-monitors/fsn` (+ product pages)
- `/equipment/medical-gases/*`

Product data for these ranges has no Ukrainian entries in
`lib/equipment-detail-localizations.ts`.

---

## 8. External actions (cannot be done from the repo)

1. **Vercel domains** — set `www.medintegro.com.ua` as the primary domain and
   `medintegro.com.ua` as a permanent redirect to it. The `vercel.json` host
   rule is a backstop, not a replacement.
2. **DNS** — apex `A`/`ALIAS` and `www` `CNAME` pointed at Vercel; verify HTTPS
   certificates cover both.
3. **Google Search Console** — verify the `https://www.medintegro.com.ua`
   property, submit `/sitemap.xml`, and request re-indexing for `/`, `/en`,
   `/solutions`, `/equipment` and `/equipment/or-lighting`.
4. **Legacy URL removal** — after the redirects are live, confirm in GSC that
   old WordPress URLs report 301, not 404.
5. **FortiGuard** — submit a category reclassification request for the domain.
6. **Email/DNS** — confirm MX, SPF, DKIM and DMARC survive the DNS change.

---

## 9. Local verification

```bash
npm run build
npx next start -p 3000
```

Then check:

- `curl -s localhost:3000/robots.txt`
- `curl -s localhost:3000/sitemap.xml`
- `/en` renders English navigation in the raw HTML (`curl`, not the browser)
- an unknown URL returns `404` and the branded 404 page
- `/services` returns `308`

> `npm run lint` does not work in this repo — `eslint` is not installed as a
> dependency, only the `lint` script exists. Use `npx tsc --noEmit` as the type
> gate until ESLint is added.
