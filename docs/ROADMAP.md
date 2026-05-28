# Roadmap

Updated at the end of every session.

## Current status

- **Phase:** 1 (Chip-tab landing + project pages + static pages)
- **Sub-phase:** 1.1 ✓ · 1.2 ✓ (post-pivot) · 1.3 ✓ structural (content deferred) · 1.4 ✓ except OG image · 1.5 not started
- **Live at:** https://rooshikeshbhatt.com (auto-deploys on push to main)
- **Last session:** 2026-05-28 — Major IA pivot. Tried scroll-anchor sections, reverted to chip-tab swap with content-keyed labels (`overview` / `projects` / `notes` / `now`) and a `SHOW_SERVICES` feature flag for the old Client section. Plus `/projects` index + detail route, `/resume` + `/contact` pages, top-nav links wired, social icons extracted. See DECISIONS.md for IA reasoning.
- **Next action:** Either (a) Phase 1.5 polish (responsive + a11y pass), (b) OG image (last 1.4 item), or (c) start the content sprint — fill real project case studies into `lib/projects.ts` so Phase 3 RAG has substance to retrieve.
- **Blockers:** none functional. Résumé PDF needs to land at `/public/resume.pdf` to enable the currently-disabled CTA — 30-second swap when ready.
- **Hard gate before Phase 3:** content sprint must complete first — real project case studies + a few blog posts. Without real corpus, the Phase 3 RAG agent retrieves placeholder text.

---

## Phase 1 — Landing + project pages + static pages

### 1.1 Foundation ✓

- [x] Initialize Next.js 15+ project (TypeScript, Tailwind, ESLint, App Router) — landed on Next.js 16.2.6 + Turbopack
- [x] Install and configure shadcn/ui — `radix-nova` preset (new-york gone from current CLI; see DECISIONS.md)
- [x] Set CSS variables in `globals.css` for both light and dark theme tokens (oklch, zinc base + cyan primary)
- [x] Wire Geist Sans + Geist Mono via `next/font/google` (as `--font-sans` / `--font-mono`)
- [x] Install `next-themes`, set dark mode as default, add theme toggle component
- [x] Build layout shell in `app/layout.tsx`: top nav, footer, dock slot
- [x] Create `app/api/status/route.ts` returning static `{ status, message }` JSON
- [x] Wire availability pill to fetch `/api/status` and show colored dot + message
- [x] Initialize git, create public GitHub repo, push — github.com/rooshikeshbhatt/portfolio
- [x] Connect repo to Vercel; verify live URL — https://rooshikeshbhatt.com

### 1.2 Chip-tab landing + content-keyed sections ✓

This sub-phase pivoted twice on 2026-05-28 — from the original identity-keyed mode views (Recruiter / Hiring Manager / Client / Peer) to scroll-anchor sections, then reverted to a click-swap tablist with content-keyed labels. See DECISIONS.md (`2026-05-28` entries) for full reasoning.

- [x] `lib/sections.ts` — section config + `SHOW_SERVICES` feature flag + `visibleSections` filter (single source of truth)
- [x] `SectionChipStrip` — centered controlled tablist (`role="tablist"`, button per chip)
- [x] `HomeLanding` — client component with `useState<string>` for active section id
- [x] `OverviewSection` — facts grid, skills (3 groups), capabilities (12 pills), featured-projects 3-card grid, contact CTAs
- [x] `ProjectsSection` — placeholder (`// projects — case studies coming`)
- [x] `NotesSection` — placeholder (`// notes — essays and process writing coming`)
- [x] `NowSection` — placeholder (`// now — current focus coming`)
- [x] `ServicesSection` — packaged offerings + process timeline, gated by `SHOW_SERVICES = false` in `lib/sections.ts`. One-line flip re-enables chip + section.

### 1.3 Projects ✓ structural · content deferred

- [x] `lib/projects.ts` — typed `Project` + `CaseStudySection` shapes, 3 stubs with varied-length TODO summaries (layout stress test)
- [x] `ProjectCard` component (used in OverviewSection + /projects index)
- [x] Projects index page (`/projects`) — 2-col grid of all projects
- [x] Project detail template (`/projects/[slug]`) — back-link, hero, sections; `generateStaticParams` + `generateMetadata`; `notFound()` for unknown slugs
- [x] `CaseStudySection` component — heading + paragraph body
- [ ] Write + add Project 1: RAG document assistant *(content sprint)*
- [ ] Write + add Project 2: Fraud detection pipeline *(content sprint)*
- [ ] Write + add Project 3: Standardized model launch framework *(content sprint)*

### 1.4 Static pages — substantially done

- [x] `lib/resume.ts` — typed `ExperienceEntry` / `EducationEntry` / `Certification` + TODO stubs (certifications have real names)
- [x] Resume page (`/resume`) — HTML résumé + disabled PDF download button; PDF drops at `/public/resume.pdf` when ready
- [x] Contact page (`/contact`) — mailto + LinkedIn + GitHub buttons + scaffolded-but-disabled form (form goes live in Phase 4 with Resend)
- [x] `components/social-icons.tsx` — extracted shared GithubIcon + LinkedinIcon
- [x] Top nav wired with Projects + Résumé + Contact links
- [x] Custom domain attached to Vercel — done in 1.1
- [ ] OG image for social previews

### 1.5 Polish — not started

- [ ] Responsive pass (mobile + tablet breakpoints)
- [ ] Accessibility pass (keyboard nav, contrast, alt text, focus rings)
- [ ] Analytics (Vercel Analytics or Plausible)
- [ ] Performance check (Lighthouse, image sizing)

### Content sprint (hard gate before Phase 3)

Per 2026-05-28 discussion: structure-first build is fine, but real content must land before Phase 3 RAG setup so the agent has a representative corpus to chunk, embed, and retrieve against.

- [ ] Fill 3 project case studies (problem / approach / tradeoffs / outcomes) in `lib/projects.ts`
- [ ] Fill résumé data (`lib/resume.ts`) — summary, experience, education, certification years
- [ ] Drop résumé PDF at `/public/resume.pdf` and remove `disabled` from the download button
- [ ] Optional: 2–3 blog posts (Phase 2 infrastructure required first)

---

## Future phases (not started)

- **Phase 2:** Blog with MDX + RSS feed (no comments or notifications yet)
- **Phase 3:** RAG-powered agent in the dock (Postgres + pgvector, single LLM provider, ⌘K) — **content sprint must complete first**
- **Phase 4:** Email subscribers via Resend, double opt-in (CASL-compliant). Wires the contact-page form's submit handler.
- **Phase 5:** Emoji reactions on blog posts (IP rate-limited, no identity)
- **Phase 6:** Auto-index blog posts into RAG corpus on publish, source-type tagged
- **Phase 7:** Auto-drafted LinkedIn posts on publish, drafts emailed for manual posting
- **Phase 8:** Agent-moderated comments
- **Phase 9 (optional):** `/studio` writing tool

Phases 1–3 give a genuinely impressive portfolio. Phases 4–7 turn it into a distribution machine. Phases 8–9 are quality-of-life.

---

## Open questions / parking lot

- ~~Domain~~ ✓ rooshikeshbhatt.com (Cloudflare → Vercel CNAME)
- ~~Tagline~~ ✓ locked: "Data Scientist and GenAI Engineer — analyst instincts, engineer execution"
- Top skills + years of experience for the Overview facts grid (skills landed; "years of experience" not surfaced anywhere)
- Project case study content for all three projects — biggest content lift, gated as the Phase 3 prerequisite
- Photo / avatar / initials decision for the hero (currently text-only, no initials circle)
- "How I think about..." essay titles for the Notes section (stub for P1, write in P2)
- ~~3 client-side packaged offerings + process timeline copy~~ deferred behind `SHOW_SERVICES` flag (focus is full-time hiring; re-enable if freelancing returns)
- Reading list / influences / "building now" for the Now section
- Top-nav `Projects` link points to `/projects` deep route, while the home chip-strip `projects` chip points to the inline section. When case-study content lands inline, decide whether the dedicated `/projects` route stays or collapses into the home page.
