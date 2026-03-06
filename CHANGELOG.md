# Changelog

All notable changes to Medintegro are documented here.

Format: [Semantic Versioning](https://semver.org)
Follows: [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)

---

## [Unreleased]

### Added
- `docs/PRD.md` — Product requirements document with MVP scope and acceptance criteria
- `docs/ARCHITECTURE.md` — System design, component map, and data flow documentation
- `docs/ROADMAP.md` — 3-month outcome-based roadmap with weekly DoD
- `docs/DECISIONS_LOG.md` — Architecture decision records (6 initial ADRs)
- `README.md` — Project overview, setup instructions, tech stack, docs index
- `.env.example` — Environment variable template with documentation
- `CHANGELOG.md` — This file
- `CONTRIBUTING.md` — Development workflow, branch naming, commit conventions
- `.github/ISSUE_TEMPLATE/feature.md` — Feature request template
- `.github/ISSUE_TEMPLATE/bug.md` — Bug report template
- `.github/PULL_REQUEST_TEMPLATE.md` — PR checklist template
- AI Production OS v1 governance layer applied retroactively

### Fixed
- `package.json` name corrected from `"my-project"` to `"medintegro"`
- `next.config.mjs` — removed `ignoreBuildErrors: true` (TypeScript errors now fail builds)
- `next.config.mjs` — removed `images.unoptimized: true` (image optimization re-enabled)

---

## [0.1.0] — 2026-02-01

### Added
- Initial v0.dev scaffold: Next.js 15, React 19, Tailwind CSS v4, shadcn/ui
- 6-page marketing site: Home, About, Equipment, Services, Projects, Contact
- Bilingual support: English and Ukrainian via custom i18n context
- Dark/light theme toggle with localStorage persistence
- Equipment catalog: 16 items across 6 categories with filter
- Projects portfolio: 6 completed projects
- Contact form (UI only — no backend submission)
- Vercel Analytics integration
- Responsive design with mobile hamburger navigation
- Custom SVG logo with cyan hexagon design
