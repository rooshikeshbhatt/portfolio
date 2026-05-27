# Roadmap

Updated at the end of every session.

## Current status

- **Phase:** 1 (Mode-based landing + 3 project pages)
- **Sub-phase:** 1.1 complete ✓ — 1.2 (mode selector + 4 views) up next
- **Live at:** https://rooshikeshbhatt.com (auto-deploys on push to main)
- **Last session:** 2026-05-27 — Phase 1.1 foundation: Next.js 16 + Tailwind v4 + shadcn (radix-nova) + dark-mode toggle + layout shell + /api/status + availability pill + GitHub + Vercel + custom domain
- **Next action:** Start Phase 1.2: `lib/mode.ts` (detection helpers) + `ModeSelector` component (4 chips, Recruiter default)
- **Blockers:** none

---

## Phase 1 — Mode-based landing + 3 project pages

### 1.1 Foundation (first session) ✓

- [x] Initialize Next.js 15+ project (TypeScript, Tailwind, ESLint, App Router) — landed on Next.js 16.2.6 + Turbopack
- [x] Install and configure shadcn/ui — `radix-nova` preset (new-york gone from current CLI; see DECISIONS.md)
- [x] Set CSS variables in `globals.css` for both light and dark theme tokens (oklch, zinc base + cyan primary)
- [x] Wire Geist Sans + Geist Mono via `next/font/google` (as `--font-sans` / `--font-mono`)
- [x] Install `next-themes`, set dark mode as default, add theme toggle component (lucide Sun/Moon, shadcn ghost Button)
- [x] Build layout shell in `app/layout.tsx`: top nav, footer, dock slot
- [x] Create `app/page.tsx` with a verification "Hello, Phase 1" + `// foundation ready` (mono) heading
- [x] Create `app/api/status/route.ts` returning static `{ status, message }` JSON
- [x] Wire availability pill to fetch `/api/status` and show colored dot + message
- [x] Initialize git with clean first commit
- [x] Create public GitHub repo and push — github.com/rooshikeshbhatt/portfolio
- [x] Connect repo to Vercel; verify live preview URL — https://rooshikeshbhatt.com

### 1.2 Mode selector + landing

- [ ] `lib/mode.ts`: `detectModeFromReferrer`, `getStoredMode`, `setStoredMode`
- [ ] `ModeSelector` component (4 chips, Recruiter default)
- [ ] Hydration: SSR Recruiter view, swap on mount based on localStorage
- [ ] `RecruiterView` (quick facts, top skills, 3 featured projects, CTAs)
- [ ] `HiringManagerView` (case-study teasers, "How I think about..." links — stub for P1)
- [ ] `ClientView` (outcome-led offerings, process timeline, contact CTA)
- [ ] `PeerView` (what I'm building now, reading list, influences, GitHub activity)

### 1.3 Projects

- [ ] `lib/projects.ts` — typed data structure + `Project` type
- [ ] `ProjectCard` component (used in mode views + index)
- [ ] Projects index page (`/projects`)
- [ ] Project detail template (`/projects/[slug]`) using `CaseStudySection`
- [ ] Write + add Project 1: RAG document assistant
- [ ] Write + add Project 2: Fraud detection pipeline
- [ ] Write + add Project 3: Standardized model launch framework

### 1.4 Static pages

- [ ] Resume page (`/resume`) with PDF download button
- [ ] Contact page (`/contact`) with mailto: link
- [ ] OG image for social previews
- [ ] Custom domain attached to Vercel (once purchased)

### 1.5 Polish

- [ ] Responsive pass (mobile + tablet breakpoints)
- [ ] Accessibility pass (keyboard nav, contrast, alt text, focus rings)
- [ ] Analytics (Vercel Analytics or Plausible)
- [ ] Performance check (Lighthouse, image sizing)

---

## Future phases (not started)

- **Phase 2:** Blog with MDX + RSS feed (no comments or notifications yet)
- **Phase 3:** RAG-powered agent in the dock (Postgres + pgvector, single LLM provider, ⌘K)
- **Phase 4:** Email subscribers via Resend, double opt-in (CASL-compliant)
- **Phase 5:** Emoji reactions on blog posts (IP rate-limited, no identity)
- **Phase 6:** Auto-index blog posts into RAG corpus on publish, source-type tagged
- **Phase 7:** Auto-drafted LinkedIn posts on publish, drafts emailed for manual posting
- **Phase 8:** Agent-moderated comments
- **Phase 9 (optional):** `/studio` writing tool

Phases 1–3 give a genuinely impressive portfolio. Phases 4–7 turn it into a distribution machine. Phases 8–9 are quality-of-life.

---

## Open questions / parking lot

- Domain: `rooshikeshbhatt.com` is the top candidate; check availability on Cloudflare Registrar (`.com` ~$10/yr, `.dev` ~$11/yr at-cost)
- Tagline: need 5 options to pick from (the hardest sentence on the site)
- Top skills + years of experience for the Recruiter view quick facts grid
- Project case study content for all three projects — biggest content lift
- Photo / avatar / initials decision for the hero
- "How I think about..." essay titles for Hiring Manager view (stub for P1, write in P2)
- 3 client-side packaged offerings + process timeline copy
- Reading list and influences for Peer view
