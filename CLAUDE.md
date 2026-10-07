# CLAUDE.md – Project context for Siva Varman’s portfolio

## Architecture
- Single‑page React + TypeScript + Vite application (apps/web/)
- Styled with Tailwind CSS via PostCSS; no CSS framework duplication.
- No backend, CMS, authentication, analytics, or blog routes – pure static SPA.

## Current portfolio constraints
- One‑page site only.
- Experience-first professional profile and writing hub; no Work or Selected Work section.
- Exactly four public-safe Experience records in reverse chronological order.
- LinkedIn is the only contact method; no email, phone, or forms.
- No confidential employer/client details, internal system names, or exact metrics.
- No speculative components, features, or dependencies beyond those listed in package.json.
- Accessible (WCAG 2.1 AA), responsive, respects prefers‑reduced‑motion.

## Commands (run from the repository root)
- Development:   `npm --prefix apps/web run dev`
- Production build: `npm --prefix apps/web run build`
- Preview:       `npm --prefix apps/web run serve`   (uses the exact script defined in apps/web/package.json)
- Alternatively, change into the web directory and run the scripts directly:
  cd apps/web && npm run dev | build | serve

## Agent workflow
See **AGENTS.md** for the detailed cross‑agent workflow, role responsibilities, safety boundaries, and handoff process.
