# Medintegro

**Precision medical equipment supply, operating room integration, and full lifecycle support for modern healthcare facilities.**

Medintegro is a bilingual (EN/UA) marketing and lead-generation website for a Ukrainian medical technology integration company. Built with Next.js 15, React 19, Tailwind CSS v4, and shadcn/ui.

---

## Live Site

> Deploy link: *(add Vercel URL here after first production deploy)*

---

## Screenshots

| Home | Equipment Catalog | Projects |
|------|-------------------|----------|
| *(add screenshot)* | *(add screenshot)* | *(add screenshot)* |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5.7 |
| UI Components | shadcn/ui + Radix UI |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| i18n | Custom context (EN/UA) |
| Theme | next-themes (dark/light) |
| Analytics | Vercel Analytics |
| Email | Resend (Week 1) |
| Package Manager | pnpm |
| Deployment | Vercel |

---

## Setup

**Prerequisites:** Node.js 18+, pnpm

```bash
# 1. Clone the repository
git clone <repo-url>
cd medintegro-v0

# 2. Install dependencies
pnpm install

# 3. Configure environment variables
cp .env.example .env.local
# Edit .env.local and fill in your values

# 4. Run development server
pnpm dev
# Open http://localhost:3000
```

---

## Environment Variables

See [`.env.example`](.env.example) for the full list. Required for production:

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Email delivery for contact form |
| `CONTACT_EMAIL` | Inbox that receives form submissions |

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, expertise, equipment categories, project previews, CTA |
| `/about` | Company history, mission, and values |
| `/equipment` | Filterable catalog of 16 equipment items across 6 categories |
| `/services` | 6 service offerings (supply, integration, turnkey, maintenance, consulting, training) |
| `/projects` | Portfolio of 6 delivered projects across Ukraine |
| `/contact` | Contact form + contact information |

---

## Development Workflow

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for branch naming, commit conventions, and PR process.

### Daily Loop
```bash
pnpm dev          # Start dev server
pnpm build        # Production build (must exit 0)
pnpm lint         # ESLint check
```

---

## Roadmap

See [`docs/ROADMAP.md`](docs/ROADMAP.md) for weekly outcomes and milestones.

**Current sprint (Week 1–2):** Stabilize codebase + ship working contact form lead capture.

---

## Documentation

| Doc | Description |
|-----|-------------|
| [`docs/PRD.md`](docs/PRD.md) | Product requirements, MVP scope, acceptance criteria |
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | System design, component map, data flow |
| [`docs/ROADMAP.md`](docs/ROADMAP.md) | Weekly outcomes + 3-month milestones |
| [`docs/DECISIONS_LOG.md`](docs/DECISIONS_LOG.md) | Architecture decision records (ADRs) |
| [`CHANGELOG.md`](CHANGELOG.md) | Release history |

---

## Project Structure

```
medintegro-v0/
├── app/                  # Next.js App Router pages
├── components/           # React components
│   ├── home/             # Home page sections
│   ├── contact/          # Contact form
│   ├── equipment/        # Equipment catalog
│   └── ui/               # shadcn/ui primitives
├── docs/                 # Living documentation
├── hooks/                # Custom React hooks
├── lib/                  # i18n, theme, translations, utils
├── public/               # Static assets and images
└── styles/               # Global CSS
```

---

## Contributing

This is a solo project. See [`CONTRIBUTING.md`](CONTRIBUTING.md) for workflow conventions.

---

## License

Private — all rights reserved. © Medintegro 2026.
