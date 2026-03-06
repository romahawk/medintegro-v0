# Decisions Log — Medintegro

Architecture Decision Records (ADR-style)
Format: Context → Decision → Consequences

---

## ADR-001: Framework — Next.js App Router

**Date:** 2026-03-01 (retroactive)
**Status:** Accepted

**Context:**
Need a modern React framework with SSR/SSG for SEO, fast initial load, and easy Vercel deployment.

**Decision:**
Use Next.js 15 with the App Router (not Pages Router).

**Consequences:**
- Positive: Built-in routing, SSR, image optimization, metadata API, easy Vercel deploy
- Positive: React Server Components available for future data fetching patterns
- Negative: App Router is newer; some ecosystem libs have lagging support
- Accepted: The team (solo founder) has chosen this; keep it.

---

## ADR-002: Custom i18n vs. Standard Library

**Date:** 2026-03-01 (retroactive)
**Status:** Accepted (with review trigger)

**Context:**
Site needs bilingual support (EN/UA). Options: `next-intl`, `i18next`, custom solution.

**Decision:**
Custom context-based i18n using `lib/i18n.tsx` + `lib/translations.ts`. Language stored in localStorage. No URL-based locale routing (no `/en/`, `/ua/` path prefixes).

**Consequences:**
- Positive: Zero dependencies, simple, works for current single-domain deployment
- Negative: No SEO benefit of locale URLs; Googlebot indexes one language version only
- Negative: Migrations to `next-intl` later will require restructuring all translation keys
- **Review trigger:** If SEO locale routing becomes a priority (Month 3+), migrate to `next-intl`

---

## ADR-003: Static Hardcoded Content vs. CMS

**Date:** 2026-03-01 (retroactive)
**Status:** Accepted (with review trigger)

**Context:**
All content (equipment catalog, project descriptions, services, translations) lives in `lib/translations.ts`. No CMS.

**Decision:**
Keep content hardcoded in code. Content changes require a code deploy.

**Consequences:**
- Positive: Zero CMS cost, zero ops overhead, content lives in version control
- Positive: No CMS security surface, no API keys needed
- Negative: Non-technical team members cannot edit content without developer
- **Review trigger:** If content update frequency exceeds 2x/month or second editor joins, evaluate Sanity or Contentful

---

## ADR-004: Contact Form — No Backend (Initial State)

**Date:** 2026-03-01
**Status:** DEPRECATED — to be replaced by Week 1 implementation

**Context:**
The scaffolded contact form from v0.dev has no backend. `handleSubmit` calls `setSubmitted(true)` only. All leads are lost.

**Decision (initial):**
Shipped as a UI prototype without form backend. This was acceptable for initial scaffolding.

**Consequences (current):**
- CRITICAL: All contact form submissions are lost
- No leads captured since site launch

**Action (Week 1):**
Implement Next.js API route (`app/api/contact/route.ts`) + Resend SDK to deliver form submissions to designated email inbox. Replace this ADR entry with ADR-007.

---

## ADR-005: TypeScript Build Error Suppression

**Date:** 2026-03-01
**Status:** TO BE REMOVED in Week 1

**Context:**
`next.config.mjs` has `typescript: { ignoreBuildErrors: true }`. This was added during v0.dev scaffold generation to ensure the build would succeed regardless of TS errors.

**Decision (initial):**
Suppress to allow build. Acceptable during prototyping.

**Consequences (current):**
- TypeScript errors are invisible in CI — bugs can be silently deployed
- Undermines the value of TypeScript entirely

**Action (Week 1):**
Remove `ignoreBuildErrors: true`. Run `pnpm build` and fix all TypeScript errors. This is a non-negotiable production standard.

---

## ADR-006: Retroactive AI Production OS Adoption

**Date:** 2026-03-01
**Status:** Active

**Context:**
The repository was bootstrapped via v0.dev (Vercel's AI UI generator) as a quick prototype. It has no documentation, no workflow governance, no CI/CD, and no development process. The solo founder is transitioning to remote-first employment and needs this repo to serve as production-grade proof-of-work.

**Decision:**
Adopt the AI Production OS v1 framework retroactively. This means:
1. Establishing docs/ with PRD, ARCHITECTURE, ROADMAP, DECISIONS_LOG
2. Creating GitHub issue and PR templates
3. Establishing branch naming and commit conventions
4. Defining weekly outcome-based milestones
5. Creating a CHANGELOG and CONTRIBUTING guide

**Consequences:**
- Positive: Repo gains credibility as a professional, portfolio-grade codebase
- Positive: Development discipline prevents scope creep on a solo project
- Positive: Clear acceptance criteria for each sprint week
- Negative: Setup overhead of ~2–4 hours (one-time)
- Accepted: The overhead is justified given the portfolio and business value of the outcome
