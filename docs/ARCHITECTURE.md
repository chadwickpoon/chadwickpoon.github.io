# Personal-site architecture

The site is a responsive Next.js App Router application deployed separately on Vercel Hobby. React, strict TypeScript, Tailwind, Motion, and React Aria match the selected Videoath frontend foundation. Version choices were checked against Videoath’s lockfile on September 12, 2026 and are pinned here independently.

## Page and interaction boundaries

- Server pages render the introduction, content summaries, About, and story routes. Static parameters give each known story a prebuilt page. Unknown routes return 404.
- The home page wraps only the guide and gallery in CharacterProvider. It owns the local interest filter and character message; there is no account or persistent profile.
- WelcomeGuide adapts Videoath’s presentation-only branching-choice pattern. The visitor chooses an interest and activates Explore, which filters the gallery and moves keyboard focus to its heading. Browse everything remains available.
- CharacterCompanion uses a selected local original image, a fallback, and reduced-motion support. It has no Convex media lookup. CharacterMessage handles an accessible changing greeting.
- Gallery artwork is decorative CSS/SVG, with meaningful link titles rendered as real text. Each panel opens a normal route.
- Trips are typed but empty until an actual trip is supplied. No invented map or trip record is rendered. MapLibre should load only within a future trip experience after the data provider is selected.

## Videoath reuse

Adaptation references: src/features/character/CharacterContext.tsx, CharacterCompanion.tsx, CharacterMessage.tsx, and src/features/sessions/slides/BranchingChoiceSlide.tsx in the Videoath repository. Reused ideas include local reducer state, context-driven character reactions, accessible single-choice cards, and caller-owned navigation. These are simplified adaptations, not unchanged component copies.

No root Videoath provider tree, authentication, Convex, billing, analytics, live media bindings, session engine, private data, or credentials were copied. The original character PNG is recorded in ASSETS.md.

## Infrastructure boundaries

Codex edits the repository; GitHub preserves source; Vercel builds/serves the site; Namecheap manages the domain. Do not introduce a second personal repository or a monorepo solely for this scaffold.

No backend service is needed today. A future bounded AI demo can live in a Next.js server route, with server-only credentials, rate and spend controls, and a selected model. Do not create a pretend working endpoint or commit keys before that workflow is defined. Convex becomes a separate decision only when durable or shared visitor state is required.

## Assets and indexing

Serve files separately from public; the old embedded-Worker format is archived. The current guide PNG is 199,747 bytes and needs no on-demand image transformation. No external fonts, maps, analytics, or models load in the scaffold. Each story has a canonical URL. robots and metadata default to noindex until public release is approved; noindex does not make a URL private.
