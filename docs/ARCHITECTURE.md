# Architecture

High-level structure of the portfolio. Doesn't change often. Read for orientation; implementation details live in the code.

## Big picture

Static-rendered Next.js site (App Router). The landing page is mode-aware — content swaps based on a user-selected "mode" persisted in localStorage. A persistent dock slot is reserved at the bottom of every page for a future RAG agent (Phase 3). Project content is typed TS objects in Phase 1; it migrates to MDX in Phase 2 alongside the blog.

## Folder layout

```
portfolio/
├── CLAUDE.md                       # Briefing — loaded every session
├── docs/
│   ├── DECISIONS.md                # Decision log (append-only)
│   ├── ROADMAP.md                  # Status tracker (updated each session)
│   └── ARCHITECTURE.md             # This file
├── app/
│   ├── layout.tsx                  # Root: nav, footer, dock slot
│   ├── page.tsx                    # Landing (mode-aware)
│   ├── globals.css                 # Tailwind directives + theme tokens
│   ├── projects/
│   │   ├── page.tsx                # Index
│   │   └── [slug]/page.tsx         # Detail (dynamic)
│   ├── resume/page.tsx
│   ├── contact/page.tsx
│   └── api/status/route.ts         # Static JSON in P1; real backend in P3
├── components/
│   ├── nav/         # TopNav, AvailabilityPill, ThemeToggle
│   ├── home/        # Hero, ModeSelector, modes/RecruiterView, etc.
│   ├── projects/    # ProjectCard, ProjectHero, CaseStudySection, TechBadge
│   ├── shared/      # SkillPill, CTAButton, Section
│   └── dock/        # AgentDockPlaceholder (empty in P1)
├── lib/
│   ├── mode.ts                     # Mode detection + localStorage persistence
│   ├── projects.ts                 # Project data (typed objects)
│   └── types.ts                    # Shared types
└── public/
    ├── resume.pdf
    └── images/
```

## Data flow

### Mode detection (Phase 1)

1. Request hits server → server renders the **Recruiter view by default** (no flash of wrong content for the most common case).
2. Client mounts → `useEffect` reads `localStorage.mode`.
3. If localStorage has a mode → swap to that view.
4. If localStorage is empty → check `document.referrer`:
   - `linkedin.com` → Recruiter (already default; no swap)
   - `github.com` → Peer
   - everything else → Recruiter
5. Save the resolved mode to localStorage so the next visit is instant.

### Availability pill

The `AvailabilityPill` component fetches `/api/status` on mount and shows a colored dot + message. In Phase 1 the route returns hardcoded JSON; in Phase 3 it's backed by a CMS field or DB row. The frontend doesn't care which.

### Future RAG flow (Phase 3 — for context only)

User opens the dock (or hits ⌘K) → input is sent to an agent endpoint → endpoint embeds the query, retrieves from pgvector with source-type weighting (resume = facts, blog = voice), assembles context, calls the LLM, and streams the response back with optional inline UI (project cards, action buttons, calendar booking links).

## Key components (Phase 1)

- **`ModeSelector`** — 4 chips, controlled, writes selection to localStorage. Hydration-aware so the SSR default doesn't flash.
- **`AvailabilityPill`** — fetches `/api/status` and renders status. Survives the Phase 3 backend swap unchanged.
- **`CaseStudySection`** — reusable wrapper for each section of a project page (Problem, Approach, Tradeoffs, Outcomes, etc.). Each project page is 5–6 of these stacked.
- **`AgentDockPlaceholder`** — empty 56px bar in Phase 1. Becomes the agent input in Phase 3. The layout already accounts for its space.
- **`TopNav`** — sticky, logo + 4 links (Projects, Blog [disabled], Resume, Contact), `AvailabilityPill`, `ThemeToggle`.

## Future-proofing decisions (locked in `docs/DECISIONS.md`)

- `/api/status` exists from day one even though it returns static JSON
- Dock slot reserved in `layout.tsx` from day one
- Project data shape stays structured (typed objects with `title`, `slug`, `description`, `tech`, `sections`) — needs to be RAG-indexable in Phase 6
