# Architecture Document — Medintegro

**Version:** 1.0
**Date:** 2026-03-01
**Status:** Current state + near-term target

---

## High-Level Overview

Medintegro is a **static-first marketing site** built on Next.js App Router. It has no database, no authentication, and no server-side business logic. The entire application is a server-rendered/statically-generated React app deployed to Vercel.

```
Browser
  └── Vercel Edge Network (CDN)
        └── Next.js 15 App Router (SSR/SSG)
              ├── Pages (app/)
              ├── Components (components/)
              ├── i18n Context (lib/i18n.tsx)
              ├── Theme Context (lib/theme.tsx)
              └── Static Assets (public/)
```

**Current data flow:** All content is hardcoded in `lib/translations.ts`. No external APIs, no database queries, no runtime data fetching.

---

## Key Components

### Pages (`app/`)
| Route | File | Description |
|-------|------|-------------|
| `/` | `app/page.tsx` | Home: Hero, Trust stats, Expertise, Categories, Projects Preview, CTA |
| `/about` | `app/about/page.tsx` | Mission, story, values |
| `/equipment` | `app/equipment/page.tsx` | Filterable equipment catalog (16 items, 6 categories) |
| `/services` | `app/services/page.tsx` | 6 service offerings |
| `/projects` | `app/projects/page.tsx` | 6 project portfolio entries |
| `/contact` | `app/contact/page.tsx` | Contact form + contact info sidebar |

### Core Library (`lib/`)

**`lib/i18n.tsx`** — Custom bilingual context
- Locale: `"en" | "ua"`
- Stored in: `localStorage("medintegro-locale")`
- Default: Ukrainian
- Provides: `useLanguage()` hook returning `{ t(key), locale, setLocale }`

**`lib/theme.tsx`** — Custom dark/light theme context
- Theme: `"dark" | "light"`
- Stored in: `localStorage("medintegro-theme")`
- Default: dark
- Mechanism: adds/removes `"dark"` CSS class on `<html>`

**`lib/translations.ts`** — Single source of truth for all UI strings
- 294 EN/UA key-value pairs
- Organized by page/section
- All content lives here — no external CMS

**`lib/utils.ts`** — `cn()` utility (clsx + tailwind-merge)

### Component Architecture
```
components/
├── navbar.tsx          # Sticky header, theme toggle, language toggle, mobile menu
├── footer.tsx          # 4-column footer
├── providers.tsx       # Wraps ThemeProvider + LanguageProvider
├── logo.tsx            # SVG cyan hexagon logo
├── container.tsx       # Max-width layout wrapper
├── page-header.tsx     # Page title section
├── section-header.tsx  # Section label/title/description
├── cta-section.tsx     # "Ready to Transform?" CTA block
├── home/               # Home page section components
├── contact/            # Contact form component
├── equipment/          # Equipment catalog with filter
└── ui/                 # shadcn/ui primitives (80+ components, most unused)
```

---

## Data Flow

```
lib/translations.ts
       │
       ▼
lib/i18n.tsx (LanguageContext)
       │
       ▼ useLanguage() → t("key")
All Components ──► Rendered UI (bilingual)
```

**Contact form flow (current — broken):**
```
User fills form → handleSubmit() → setSubmitted(true) → Success UI
                                         ↑
                              [NO HTTP call — leads lost]
```

**Contact form flow (target — Week 1):**
```
User fills form → handleSubmit() → POST /api/contact → Email service → Inbox
                                         ↑
                              [Next.js API Route + Resend]
```

---

## Storage / Auth Choices

| Concern | Current Choice | Rationale |
|---------|---------------|-----------|
| Content storage | Hardcoded in `lib/translations.ts` | Zero ops overhead; sufficient for static site |
| User preferences | localStorage only | Theme + language — no server needed |
| Form submissions | None (broken) | Target: Resend API or Formspree |
| Authentication | None | Out of scope for MVP |
| Database | None | Out of scope for MVP |

---

## Key Tradeoffs

| Decision | Tradeoff |
|----------|----------|
| Custom i18n vs. i18next/next-intl | Simpler, less setup, less flexibility. Fine at current scale. |
| Hardcoded translations vs. CMS | No CMS ops/cost. Requires code deploy for content changes. Accept for MVP. |
| shadcn/ui full install vs. partial | Large unused component footprint. Tree-shaking handles JS. CSS is minimal. Not a problem yet. |
| `images.unoptimized: true` | Disables Next.js image CDN. Currently wrong — remove in Week 1. |
| `ignoreBuildErrors: true` | Masks TypeScript issues. Must be removed in Week 1. |

---

## Future Scaling Notes

If lead volume grows and operational complexity increases, consider:

1. **CMS Integration** — Contentful or Sanity for bilingual content editing without deploys
2. **Form Backend** — Move from Resend to a CRM-connected webhook (HubSpot, Pipedrive)
3. **API Routes** — Next.js API routes for contact form are the natural first backend step
4. **i18n library** — Migrate to `next-intl` if locale routing (e.g., `/en/`, `/ua/`) becomes needed for SEO
5. **Image CDN** — Enable Next.js image optimization (remove `unoptimized: true`) — Week 1 priority
6. **Analytics** — Add GA4 or PostHog alongside Vercel Analytics for funnel analysis
