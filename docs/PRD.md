# Product Requirements Document — Medintegro

**Version:** 1.0
**Date:** 2026-03-01
**Owner:** Solo Founder
**Status:** Active

---

## Problem

Healthcare facilities in Ukraine and Europe need a trusted partner to:
1. Source certified medical equipment from global manufacturers
2. Integrate operating rooms into unified, centralized control systems
3. Manage full turnkey project delivery (design → install → commission → train)
4. Provide ongoing 24/7 technical support and maintenance

Procurement decision-makers have no easy way to discover, evaluate, and initiate contact with a qualified integrator. Existing outreach is relationship-driven; there is no scalable digital lead channel. Medintegro has 15+ years of experience and 200+ delivered projects but no credible web presence to convert that reputation into inbound leads.

---

## Target User

**Primary:** Hospital procurement director / Chief Medical Officer at a mid-to-large Ukrainian or European healthcare facility planning a new build, renovation, or equipment upgrade.

**Secondary:** Healthcare facility manager responsible for service contracts and maintenance on existing equipment.

**Characteristics:**
- Decision-making authority or strong influence on €50k–€2M+ equipment purchases
- Evaluates vendors by: track record, certifications, portfolio, responsiveness
- Speaks Ukrainian and/or English
- Likely first touchpoint: Google search → website → contact form

---

## Core Loop

1. Healthcare decision-maker arrives via organic search or referral
2. Browses equipment catalog and project portfolio to assess competence and trust
3. Clicks "Request Quote" or "Get a Quote" from any equipment item or CTA
4. Submits bilingual contact form (name, company, email, subject, message)
5. Medintegro receives the lead and responds within 24h

---

## Killer Feature

A bilingual (EN/UA) equipment catalog with contextual "Request Quote" lead capture — turning a static brochure into an active B2B sales funnel.

---

## MVP Scope

The MVP is a **fully functional marketing site** with a working lead capture pipeline. It is NOT an application platform.

**In scope (MVP):**
- [ ] All 6 pages rendering correctly with bilingual content (EN/UA)
- [ ] Contact form submitting leads to a real destination (email or form service)
- [ ] SEO baseline: sitemap.xml, robots.txt, Open Graph tags
- [ ] Performance: Lighthouse score ≥85 on mobile
- [ ] TypeScript errors resolved (no `ignoreBuildErrors`)
- [ ] Dark/light theme working correctly
- [ ] Vercel deployment live at a production URL

**Out of scope (MVP):**
- CMS or admin panel for content editing
- Client portal or authentication
- E-commerce / direct purchasing
- Advanced analytics dashboard
- Automated follow-up / CRM integration (Phase 2)

---

## Non-Goals

- No e-commerce or transaction processing
- No customer accounts or login flows
- No CMS (content lives in code until lead volume justifies the investment)

---

## Acceptance Criteria for MVP

| # | Criterion | Verification |
|---|-----------|-------------|
| 1 | Contact form submits and delivers email to designated inbox | Manual test: submit form, confirm email received |
| 2 | Both languages (EN/UA) render correctly on all 6 pages | Manual toggle + visual review |
| 3 | Lighthouse Performance ≥85, Accessibility ≥90, SEO ≥90 on mobile | `npx lighthouse [url] --view` |
| 4 | `pnpm build` completes with 0 TypeScript errors | CI output |
| 5 | Site is live on production Vercel URL | Browser navigation |
| 6 | sitemap.xml and robots.txt exist and are valid | Browser + validator |
| 7 | Core Web Vitals: LCP <2.5s, CLS <0.1 on home page | Vercel analytics / PageSpeed Insights |
| 8 | All nav links resolve (no 404s) | Manual click-through |

---

## Risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Contact form leads lost (no backend) | CURRENT STATE | HIGH | Week 1: integrate Resend or Formspree |
| TypeScript errors hiding real bugs | HIGH | MEDIUM | Week 1: remove `ignoreBuildErrors`, fix errors |
| Slow page load hurts conversion | MEDIUM | HIGH | Week 1: re-enable image optimization |
| Poor SEO = no organic discovery | HIGH | HIGH | Week 2: add sitemap, OG tags, meta descriptions |
| Content goes stale (hardcoded) | LOW | MEDIUM | Accept for now; reassess after 50+ leads |
