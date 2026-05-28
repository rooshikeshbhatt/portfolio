# Architecture

High-level structure of the portfolio. Doesn't change often. Read for orientation; implementation details live in the code.

## Big picture

Static-rendered Next.js site (App Router). The landing page renders a centered chip-strip tablist over four content sections (`overview`, `projects`, `notes`, `now`); clicking a chip swaps which section renders. A fifth `services` section is kept in code behind a `SHOW_SERVICES` feature flag (currently off — focus is full-time hiring). A persistent dock slot is reserved at the bottom of every page for a future RAG agent (Phase 3). Project content is typed TS objects in Phase 1; it migrates to MDX in Phase 2 alongside the blog.

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
│   ├── site-nav.tsx                # Top nav: brand, links, availability pill, theme toggle
│   ├── site-footer.tsx
│   ├── dock-slot.tsx               # 56px agent dock (empty in P1)
│   ├── home-landing.tsx            # Hero + chip strip + sections (server component)
│   ├── section-chip-strip.tsx      # Sticky chips, IntersectionObserver active state
│   ├── sections/
│   │   ├── overview-section.tsx    # Facts, skills, capabilities, featured projects, CTAs
│   │   ├── projects-section.tsx    # Placeholder — case studies coming
│   │   ├── notes-section.tsx       # Placeholder — essays coming
│   │   ├── now-section.tsx         # Placeholder — current focus coming
│   │   └── services-section.tsx    # Feature-flagged behind SHOW_SERVICES
│   ├── project-card.tsx
│   ├── case-study-section.tsx
│   ├── social-icons.tsx
│   └── ui/                         # shadcn primitives
├── lib/
│   ├── sections.ts                 # Section config + SHOW_SERVICES flag + visibleSections
│   ├── projects.ts                 # Project data (typed objects)
│   └── resume.ts                   # Résumé data (typed objects)
└── public/
    ├── resume.pdf
    └── images/
```

## Data flow

### Section nav (Phase 1)

1. Request hits server → server renders the page shell. `HomeLanding` is a client component that holds `activeId` state, defaulting to the first visible section (`overview`).
2. `SectionChipStrip` is a controlled tablist (`role="tablist"`, `<button role="tab">` per chip). It receives `value` + `onChange` from `HomeLanding`.
3. Clicking a chip calls `onChange(section.id)` → `setActiveId` → the matching component renders in place of whatever was there before. No scrolling, no URL change, no localStorage persistence.
4. The visible-section list comes from `lib/sections.ts`: `sections.filter(s => s.enabled)`. Toggling `SHOW_SERVICES` flips one entry's `enabled`, and both the chip strip and the home-landing render map update without any other code changes.

### Availability pill

The `AvailabilityPill` component fetches `/api/status` on mount and shows a colored dot + message. In Phase 1 the route returns hardcoded JSON; in Phase 3 it's backed by a CMS field or DB row. The frontend doesn't care which.

### Future RAG flow (Phase 3 — for context only)

User opens the dock (or hits ⌘K) → input is sent to an agent endpoint → endpoint embeds the query, retrieves from pgvector with source-type weighting (resume = facts, blog = voice), assembles context, calls the LLM, and streams the response back with optional inline UI (project cards, action buttons, calendar booking links).

## Key components (Phase 1)

- **`SectionChipStrip`** — centered controlled tablist. Client component. Iterates `visibleSections`, renders one `<button>` per chip; active state comes from the `value` prop passed by `HomeLanding`.
- **`OverviewSection`** — the at-a-glance section: facts, skills, capabilities, featured projects, contact CTAs. Server component.
- **`ServicesSection`** — packaged offerings + process timeline. File always present; rendering is gated by `SHOW_SERVICES` in `lib/sections.ts`.
- **`AvailabilityPill`** — fetches `/api/status` and renders status. Survives the Phase 3 backend swap unchanged.
- **`CaseStudySection`** — reusable wrapper for each section of a project page (Problem, Approach, Tradeoffs, Outcomes, etc.). Each project page is 5–6 of these stacked.
- **`DockSlot`** — empty 56px bar in Phase 1. Becomes the agent input in Phase 3. The layout already accounts for its space.
- **`SiteNav`** — sticky top nav: brand link, section links (Projects, Résumé, Contact pointing to deep-page routes), `AvailabilityPill`, `ThemeToggle`. Distinct from the in-page chip strip below it.

## Future-proofing decisions (locked in `docs/DECISIONS.md`)

- `/api/status` exists from day one even though it returns static JSON
- Dock slot reserved in `layout.tsx` from day one
- Project data shape stays structured (typed objects with `title`, `slug`, `description`, `tech`, `sections`) — needs to be RAG-indexable in Phase 6
