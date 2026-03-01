# Roadmap — Medintegro

**Horizon:** 3 months (March – May 2026)
**Updated:** 2026-03-01
**Methodology:** AI Production OS v1 — weekly outcome-based delivery

---

## Guiding Principle

Ship one visible, working improvement per week. No week ends without a deployed increment and a verifiable demo artifact.

---

## WEEK 1–2: Stabilize + Ship Working Lead Capture

**Outcome:** The site is production-correct and the contact form submits real leads to a designated inbox.

### Issues
1. **[chore] Fix package.json name from "my-project" to "medintegro"**
2. **[bug] Remove `ignoreBuildErrors: true` from next.config.mjs and fix all TS errors**
3. **[bug] Remove `images.unoptimized: true` to re-enable Next.js image optimization**
4. **[feature] Implement contact form API route with Resend email delivery**
5. **[chore] Fix `lang` attribute — make it dynamic based on current locale**
6. **[chore] Add sitemap.xml and robots.txt for SEO baseline**

### Definition of Done
- [ ] `pnpm build` exits 0 with no TypeScript errors
- [ ] Submitting the contact form delivers an email to the configured inbox
- [ ] Vercel production URL resolves all 6 pages with no console errors
- [ ] sitemap.xml and robots.txt are accessible
- [ ] All changes merged via PR with review checklist completed

### Demo Artifact Required
Screenshot: Terminal showing clean `pnpm build` + email received in inbox after form submission.

---

## WEEK 3–4: SEO + Performance + Open Graph

**Outcome:** The site is discoverable, shareable, and scores ≥85 on Lighthouse mobile.

### Issues
7. **[feature] Add Open Graph and Twitter meta tags to all 6 pages**
8. **[feature] Add per-page metadata (title, description) for SEO**
9. **[chore] Audit and optimize image sizes in /public/images/**
10. **[feature] Add structured data (JSON-LD) for LocalBusiness on home page**
11. **[chore] Run Lighthouse audit and fix top 3 performance bottlenecks**

### Definition of Done
- [ ] Lighthouse Performance ≥85, Accessibility ≥90, SEO ≥90 on mobile (home page)
- [ ] Each page has unique `<title>` and `<meta description>` in both locales
- [ ] Social share preview renders correctly (OG image, title, description)
- [ ] Structured data validates at schema.org/SchemaApp

### Demo Artifact Required
Lighthouse report screenshot (before/after). Social share card preview from opengraph.xyz.

---

## MONTH 2: Expand Capability — Equipment Inquiry Flow

**Outcome:** Equipment catalog items have direct per-item quote request, increasing lead context and quality.

### Milestone: Equipment → Quote Flow
- **[feature] Add per-equipment-item "Request Quote" form with item pre-populated**
  - Clicking "Request Quote" on any equipment card opens a modal/sheet
  - Subject line pre-filled with equipment name
  - Same Resend backend as contact form
- **[feature] Add equipment item detail pages (`/equipment/[slug]`)**
  - Static paths generated from translations data
  - Full description, specs section (placeholder initially)
  - Per-page SEO metadata
- **[feature] Add analytics events for "Request Quote" button clicks**
  - Track with `@vercel/analytics` `track()` calls
  - Goal: understand which equipment categories drive most interest

### Definition of Done
- [ ] Clicking "Request Quote" on any equipment item submits a lead with item context
- [ ] Equipment detail pages exist and are indexed (in sitemap.xml)
- [ ] Analytics events visible in Vercel Analytics dashboard

### Demo Artifact Required
Loom or screen recording: browse catalog → click Request Quote → receive email with equipment context.

---

## MONTH 3: Polish + Projects Portfolio Depth

**Outcome:** Projects section becomes a trust-building case study engine, and the site is ready for a public launch announcement.

### Milestone: Case Study Depth
- **[feature] Add individual project pages (`/projects/[slug]`)**
  - Problem, solution, scope, results sections
  - Gallery placeholder for project photos
  - Related equipment links
- **[feature] Add "Our Partners / Manufacturers" section on home or about page**
  - Logo grid: Olympus, Karl Storz, Siemens, GE Healthcare, Drager
- **[chore] Performance audit round 2 — target Lighthouse ≥90 all pages**
- **[docs] Write case study content for top 2 projects**

### Definition of Done
- [ ] All 6 projects have individual pages with rich content
- [ ] Partners section live on home or about page
- [ ] Lighthouse ≥90 all pages in both locales

### Demo Artifact Required
Screenshot of partner logo section + one complete project case study page.

---

## Freeze List (Won't Touch)

These are intentionally deferred:

- **CMS integration** — hardcoded content is fine until >50 leads/month or multiple content editors
- **Authentication / user accounts** — no use case in current product scope
- **E-commerce / purchasing flow** — out of scope by design
- **Custom analytics dashboard** — Vercel Analytics is sufficient for MVP
- **i18n library migration** (e.g., next-intl) — custom solution works; migrate only if locale routing needed
- **Refactoring shadcn/ui component library** — functional, leave it
- **Dark/light theme rewrite** — working correctly, don't touch
