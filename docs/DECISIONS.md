# Decisions Log

Append-only. Each entry has: date, decision, reasoning, alternatives considered (when relevant).

This file exists so we don't re-litigate settled choices in new sessions. If you're tempted to revisit a decision, scroll up first.

---

## 2026-05-14 — Framework: Next.js 15+ with App Router

Standard choice for a TypeScript + React portfolio in 2026. App Router is the supported direction. Server components useful for the mode-aware landing (default Recruiter view rendered on the server, no flash on first paint).

## 2026-05-14 — Language: TypeScript

Catches dumb mistakes early; autocomplete is valuable given my limited web dev experience; shadcn assumes it. No real downside for a project this size.

## 2026-05-14 — Styling: Tailwind CSS

Utility-first matches the iteration speed I need. Pairs natively with shadcn/ui. Alternative considered: CSS Modules — rejected because shadcn ecosystem support is too good to give up.

## 2026-05-14 — UI primitives: shadcn/ui (`new-york` style)

Copies code into the repo (not an opaque dependency), so customization is unlimited. The `Command` primitive will become the ⌘K agent palette in Phase 3, so we already have a path there.

**Update 2026-05-27:** When we ran `shadcn init`, the `new-york` preset no longer exists in shadcn CLI v4.8.1. The current preset family is `nova, vega, maia, lyra, mira, luma, sera, rhea` (the "Nova generation"). Switched to `radix-nova` preset — the Radix-UI variant of the Nova style, which preserves the original intent (Radix primitives, battle-tested) while accepting shadcn's modern style direction. Alternative considered: pin to legacy shadcn 2.x — rejected because it may not support Tailwind v4 / Next.js 16 cleanly. Base color still `zinc` per the design tokens table.

## 2026-05-14 — Fonts: Geist Sans + Geist Mono

Designed as a pair, free, ships via `next/font/google` with zero config. The mono is genuinely beautiful and reinforces the technical / dev-coded direction. Alternatives considered: Inter + JetBrains Mono (more universal but less cohesive); IBM Plex (warmer but heavier).

## 2026-05-14 — Visual direction: technical / dev-coded

Geometric sans + monospace accents, terminal-inspired details. Reasoning: audience is ML/AI hiring managers — "this person lives in a terminal" reads better than "this person hired a designer." Alternatives considered: Editorial Minimal, Warm Modern, High-contrast Bold.

## 2026-05-14 — Palette: zinc neutrals + cyan accent, dark mode default

Cyan (`#06B6D4` / `#22D3EE`) over green or matrix-themed options because it reads "modern technical" without being a hacker cliché. Zinc has no warm undertone fighting the cyan. Default mode = dark because the audience uses dark mode and it signals "engineer."

## 2026-05-14 — Project content: typed TS objects (not MDX) in Phase 1

Three project pages don't justify MDX compiler setup. MDX comes in Phase 2 with the blog; migrating three project files at that point is an afternoon's work.

## 2026-05-14 — `/api/status` exists from day one (returns static JSON)

Returns `{ status: "available", message: "..." }` now. When wired to a real backend in Phase 3, no frontend changes needed. Trivial cost to set up now; expensive to retrofit later.

## 2026-05-14 — Dock slot reserved from day one

Empty 56px bar fixed to bottom of every page. The agent mounts there in Phase 3. Reserving the layout space now avoids a painful refactor later.

## 2026-05-14 — Hosting: Vercel

Natural home for Next.js. Free tier handles a personal portfolio comfortably. Can move backend to Fly or Railway later if Phase 3+ costs rise.

## 2026-05-14 — Repo: public on GitHub

Public is itself a portfolio signal — recruiters do click through to see commit history and code quality. Keep early commits clean.

## 2026-05-14 — Mode-based landing (not agent-first)

Standard nav + 4 mode chips below the hero (Recruiter default, Hiring Manager, Client, Peer). Mode persists in localStorage; first-visit auto-detection from referrer (LinkedIn → Recruiter, GitHub → Peer). Alternative considered: agent as the landing experience — rejected because recruiters scan rather than converse, and the friction would lose hires.

## 2026-05-14 — Agent lives in a persistent dock + ⌘K (not the hero)

Bottom-anchored input on every page. ⌘K opens it from anywhere. Reasoning: doesn't gate the static content recruiters need, but the differentiating feature is one keystroke away for anyone curious.

## 2026-05-14 — RAG source-type weighting (Phase 6)

Resume entries weighted as facts; blog posts weighted as voice/opinion. "What's your experience with X" prefers résumé; "What do you think about X" prefers blog. Same corpus, different retrieval profile.

## 2026-05-14 — Vector DB for future RAG: Postgres + pgvector

Pinecone / Weaviate would be overkill for a personal-site corpus. Postgres + pgvector is one database for everything (subscribers, comments, embeddings) and ships free on Vercel/Neon/Supabase.

## 2026-05-14 — Blog will use MDX with files-in-repo (Phase 2)

Git is the CMS — free version control and previews. Postgres only added later if a web editor is built. Alternative considered: headless CMS — rejected as overkill for solo authorship.

## 2026-05-14 — Comments: agent-moderated (Phase 8)

Visitor submits → agent classifies (spam / low-effort / abusive / genuine) → genuine auto-publishes, questionable queues for review, spam dies silently. Alternative considered: Giscus (GitHub Discussions backend) — fine for a technical audience but hostile to non-devs.

## 2026-05-14 — Reactions: emoji counters, IP rate-limited, no identity (Phase 5)

Ship-first engagement signal. No login required. Cheap, fast, useful.

## 2026-05-14 — Email: Resend, double opt-in (Phase 4)

Double opt-in is required for CASL (Canada) + GDPR + sender reputation — non-negotiable. Resend has a clean API, React Email templates, generous free tier. Skipped: SMS/Twilio — too expensive, lower engagement on long-form, perceived invasiveness.

## 2026-05-14 — LinkedIn flow: "Draft, don't post" (Phase 7)

Agent generates drafts on publish, emails them to me, I post manually. Reasons: better voice control, better timing (Tuesday 9am beats whenever-the-blog-publishes), LinkedIn algorithm appears to penalize API-posted content.

## 2026-05-14 — Single LLM provider for the agent (Phase 3)

Pick Claude or GPT-4-class when Phase 3 starts. No multi-provider juggling — added complexity for negligible benefit at this scale.

## 2026-05-14 — Drafting workflow: stay on MVP path

Use Claude/Cursor with a system prompt containing 3–5 voice samples from past posts. No custom `/studio` route until friction is felt. Phase 9 is explicitly optional.

## 2026-05-27 — Production hosting: live at https://rooshikeshbhatt.com

Domain bought via Cloudflare. **Apex-canonical** (`rooshikeshbhatt.com`), with `www.rooshikeshbhatt.com` 308-redirecting to apex. Reasoning: shorter URL for resumes, and Google has had no apex-vs-www preference for years. Alternative considered: www-canonical (Vercel's recommended pattern; works around the historical apex-CNAME limitation) — rejected for the cleaner URL since Cloudflare's CNAME flattening solves the apex limitation anyway.

DNS records on Cloudflare are a single CNAME at both `@` and `www`, pointing at Vercel's project-specific subdomain (`<project-hash>.vercel-dns-017.com`). Cloudflare's CNAME flattening transparently serves A records at apex. Cloudflare proxy is OFF (gray cloud / DNS only) so Vercel owns SSL and the edge directly. The newer CNAME pattern lets Vercel rotate IPs without us touching DNS.

Every push to `main` auto-deploys to production.

## 2026-05-27 — Commit attribution: no Co-Authored-By trailer

Commits do not include the default Claude Code `Co-Authored-By: Claude` trailer. Per user preference — commit history reads as solely authored. Memory-tracked so future sessions remember.

## 2026-05-27 — Role targeting locked: Data Science + GenAI Engineering (NOT ML/MLOps)

Role targeting locked — Data Science and GenAI Engineering only. Not ML engineering, not MLOps. Data Science is backed by IBM Professional Data Science and Data Analyst certifications plus analytics projects. GenAI is backed by production projects (RAG document assistant, fraud detection pipeline, model launch framework). Tagline locked as: "Data Scientist and GenAI Engineer — analyst instincts, engineer execution." All mode views, taglines, and copy must reflect this dual targeting.

## 2026-05-28 — Pivot from identity-keyed modes to content-keyed scroll-anchor sections

Replaces the 4-mode landing (Recruiter / Hiring Manager / Client / Peer) with a single scrolling page whose chip-strip nav anchors to four content sections: `overview`, `projects`, `notes`, `now`. Supersedes the 2026-05-14 "Mode-based landing" decision.

Reasoning: identity chips function as gates — a recruiter who'd benefit from project depth never clicks "Hiring Manager," and a hiring manager curious about current work never clicks "Peer." Re-keying chips to content lens makes every section accessible to every visitor without friction. The IA also scales naturally as content lands (each section grows in place) and removes the view-swap state + localStorage persistence that mode-keyed landing required.

Implementation notes:
- All visible sections rendered inline on `/`; `IntersectionObserver` (rootMargin `-40% 0px -55% 0px`) drives active chip state during scroll, click-to-anchor for explicit nav.
- Chip strip sticky at `top-14` (under the `h-14` top nav, `z-30` < nav's `z-40`).
- Each section uses `scroll-mt-32` (8rem) to clear the combined sticky-header height when jumped to.
- `scroll-smooth` set on `<html>` for both click-jump and back-button restoration.
- Section list lives in `lib/sections.ts` as single source of truth — both chip strip and home-landing map render off it.

## 2026-05-28 — Freelancing deferred via SHOW_SERVICES feature flag

Old "Client" mode migrates to a content-keyed `services` section (offerings + process timeline) gated behind a `SHOW_SERVICES` constant in `lib/sections.ts`, currently `false`. Reasoning: focus is full-time hiring, so freelancing CTAs would dilute that signal; but the concept may come back later. Flag-gating keeps the content + structure intact for one-line re-enable rather than deleting and rebuilding from git history.

Pattern: `enabled: boolean` field on each `SectionConfig` entry. Chip strip and section render-map both filter on `visibleSections = sections.filter(s => s.enabled)`, so flipping `SHOW_SERVICES = true` adds the chip, the section, and registers the observer — no other code changes.

## 2026-05-28 — Reverted scroll-anchor IA to chip-tab swap (kept content-keyed labels + flag)

Same day as the scroll-anchor decision above: tried the continuous-scroll IA in browser, didn't feel right. Reverted to a click-swap tablist where only the active section renders.

Reasoning: the original concern with the old identity-keyed chips (Recruiter / Hiring Manager / Client / Peer) was that visitors would never click chips not meant "for" them. With content-keyed labels (overview / projects / notes / now), that concern doesn't apply — every label is universally interesting, so click-swap is fine IA. Scroll-anchor felt overwhelming (everything dumped on one page) and made each section feel less distinct.

What was kept from the prior pivot: content-keyed labels, `lib/sections.ts` as single source of truth, the `SHOW_SERVICES` feature flag pattern, all five section components. What was removed: `IntersectionObserver`-driven active state, sticky chip-strip + border-bottom, `scroll-mt-32` on sections, `scroll-smooth` on `<html>`, anchor-link chip interaction. Chip strip is now a centered controlled tablist; `HomeLanding` is a client component with `useState<string>` for active id.

Visual: chips centered (`justify-center`) matching the existing live-site pattern; no border-line between chip strip and content, no sticky chip strip — they flow with the page above the active section.
