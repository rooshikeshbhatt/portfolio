# Portfolio Project — Claude Code Briefing

This file is loaded at the start of every Claude Code session. Read it first.

## Who I am

Rooshikesh Bhatt — **Data Scientist and GenAI Engineer** based in Toronto, Canada. Open work permit. Targeting remote **Data Science and GenAI Engineering** roles across Canada — **not ML engineering or MLOps**. Data Science is backed by IBM Professional Data Science + Data Analyst certifications and analytics projects. GenAI is backed by production projects (RAG document assistant, fraud detection pipeline, model launch framework). Earlier work in computer vision and embedded systems.

## How we work

- **Strong Python/ML background, little web dev experience.** You handle the code; I make decisions and write content.
- **Explain as you go** — when you use a pattern I might not know, give me a 1–2 sentence plain-language note. I learn by osmosis as we build.
- **Ask, don't assume** — surface decision points; don't quietly pick.
- **Small, reviewable steps** — show me changes I can verify in the browser before stacking more on top.
- **Push back if I'm wrong** — if I ask for something that's a bad idea, say so and tell me why.

## What we're building

A personal portfolio site: landing page with a centered chip-strip tablist that swaps between four content sections (`overview` / `projects` / `notes` / `now`), plus deep-page routes for projects, résumé, and contact. Eventually includes a blog, RAG-powered agent dock (⌘K from anywhere), email subscriptions, comments, reactions, and an auto-LinkedIn drafting pipeline.

- **Audience priority:** recruiters and hiring managers first; collaborators and engineers welcome.
- **30-second visitor goal:** "I want to hire or work with them."

We are in **Phase 1**. See `docs/ROADMAP.md` for current status.

## Locked stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15+ (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI primitives | shadcn/ui (`radix-nova` preset — see DECISIONS.md 2026-05-27) |
| Fonts | Geist Sans + Geist Mono via `next/font/google` |
| Theme | Dark mode default with toggle (`next-themes`) |
| Hosting | Vercel |
| Repo | Public on GitHub |

## Design tokens

Visual direction: **technical / dev-coded** — geometric sans + monospace accents, terminal-inspired details.

| Token | Light | Dark |
|---|---|---|
| Background | `#FFFFFF` | `#0A0A0A` |
| Foreground | `#0A0A0A` | `#FAFAFA` |
| Muted | `#F4F4F5` | `#18181B` |
| Muted fg | `#71717A` | `#A1A1AA` |
| Border | `#E4E4E7` | `#27272A` |
| Primary (accent) | `#06B6D4` | `#22D3EE` |
| Primary fg | `#FFFFFF` | `#0A0A0A` |

Essentially shadcn's `zinc` neutrals with cyan as the accent. Wire these as CSS variables in `globals.css` so all shadcn components pick them up automatically.

## Conventions

- **Project content** lives in `lib/projects.ts` as typed TS objects, NOT MDX. MDX comes in Phase 2 with the blog.
- **`/api/status`** returns static JSON in Phase 1 but exists from day one — it gets wired to a real backend in Phase 3 without frontend changes.
- **Dock slot** (~56px) reserved at the bottom of every page. Empty in Phase 1; the RAG agent mounts there in Phase 3. Don't refactor it out.
- **Project data shape** stays structured (typed objects) — it needs to be RAG-indexable in Phase 6.

## What NOT to do in Phase 1

Do not start any of the following. Each has its own future phase:

- Blog, MDX setup, RSS feed
- Agent, RAG, vector DB, Postgres
- Email subscribers, Resend integration
- Comments, reactions
- LinkedIn pipeline
- Writing studio

If I ask for one of these, remind me of the phase order in `docs/ROADMAP.md` before complying.

## Session ritual

**Start of session:** Read this file, then `docs/DECISIONS.md` and `docs/ROADMAP.md`. Summarize where we are and what's next in 3–5 lines before doing any work.

**End of session:** Update `docs/ROADMAP.md` (mark completed items, note in-progress / blocked / open questions) and append to `docs/DECISIONS.md` (any new decisions with reasoning). Commit with a clean message.

## Pointers to other docs

- `docs/DECISIONS.md` — running log of decisions and reasoning
- `docs/ROADMAP.md` — what's done, in progress, next
- `docs/ARCHITECTURE.md` — folder layout, data flow, key components
