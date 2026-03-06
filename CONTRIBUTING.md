# Contributing — Medintegro

Development workflow for the Medintegro codebase. This is a solo project; these conventions exist for discipline and proof-of-work quality.

---

## Daily Build Loop (10-Step Checklist)

```
[ ] 1. Pull latest from main: git pull origin main
[ ] 2. Review open issues — pick the top-priority item
[ ] 3. Create a feature branch: git checkout -b feat/short-description
[ ] 4. Open the relevant issue and mark it "In Progress"
[ ] 5. Implement the change (one issue at a time — no scope creep)
[ ] 6. Run pnpm build — must exit 0 before committing
[ ] 7. Run pnpm lint — fix all lint errors
[ ] 8. Commit with a conventional commit message (see below)
[ ] 9. Push branch and open PR using the PR template
[ ] 10. Merge PR — delete branch — close issue — update CHANGELOG
```

---

## Branch Naming

```
feat/<short-description>     # New feature
fix/<short-description>      # Bug fix
chore/<short-description>    # Maintenance, config, deps
docs/<short-description>     # Documentation only
```

**Examples:**
```
feat/contact-form-resend
fix/typescript-errors
chore/rename-package-json
docs/add-prd
```

---

## Commit Message Rules

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>: <short imperative description>

[optional body — what and why, not how]

[optional footer — Closes #issue-number]
```

**Types:**
- `feat:` — new feature
- `fix:` — bug fix
- `chore:` — maintenance, config, dependencies
- `docs:` — documentation only
- `style:` — formatting, no logic change
- `refactor:` — restructure without behavior change
- `test:` — add or fix tests

**Examples:**
```
feat: add contact form API route with Resend email delivery

Closes #4

fix: remove ignoreBuildErrors from next.config.mjs

chore: rename package.json name to medintegro

docs: add PRD, ARCHITECTURE, ROADMAP, DECISIONS_LOG
```

---

## Pull Request Process

1. Use the PR template (`.github/PULL_REQUEST_TEMPLATE.md`)
2. All PRs require a passing `pnpm build` (no TypeScript errors)
3. Self-review the diff before merging
4. Link the PR to its issue with "Closes #N"
5. Update `CHANGELOG.md` under `[Unreleased]` before merging
6. Delete the branch after merge

---

## Issue Process

1. Use the issue templates (`.github/ISSUE_TEMPLATE/`)
2. Label every issue: `bug`, `feature`, `chore`, or `docs`
3. Every issue must have acceptance criteria
4. Close issues only when acceptance criteria are verified
5. Max 3 open issues in "In Progress" at any time (solo discipline)

---

## Code Standards

- **TypeScript:** Strict — no `any`, no `@ts-ignore` without comment
- **Build:** `pnpm build` must exit 0 — `ignoreBuildErrors` is permanently disabled
- **Lint:** `pnpm lint` must pass with no errors
- **Components:** Functional components only, no class components
- **i18n:** All user-facing strings must use `t("key")` from `useLanguage()` — no hardcoded English/Ukrainian strings in JSX
- **Styling:** Tailwind utility classes only — no inline styles, no CSS modules
- **Images:** Use `next/image` — never `<img>` tags

---

## Release Notes Format

When cutting a release, update `CHANGELOG.md`:

```markdown
## [X.Y.Z] — YYYY-MM-DD

### Added
- Description of new features

### Changed
- Description of changes to existing features

### Fixed
- Description of bug fixes

### Removed
- Description of removed features
```

Bump `version` in `package.json` to match.

---

## Environment Setup

```bash
# Prerequisites: Node.js 18+, pnpm
pnpm install
cp .env.example .env.local
# Fill in .env.local values
pnpm dev
```

See [`README.md`](README.md) for full setup instructions.
