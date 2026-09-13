# Personal-site architecture

The site is a responsive Next.js App Router application deployed separately on Vercel Hobby. React, strict TypeScript, Tailwind, Motion, and React Aria match the selected Videoath frontend foundation. Version choices were checked against Videoath’s lockfile on September 12, 2026 and are pinned here independently.

## Page and interaction boundaries

- Server pages render the introduction, content summaries, About, and story routes. Static parameters give each known story a prebuilt page. Unknown routes return 404.
- The home page wraps only the guide and gallery in CharacterProvider. It owns the local interest preference and character message; there is no account or persistent profile.
- WelcomeGuide adapts Videoath’s presentation-only branching-choice pattern. The visitor chooses an interest and activates Explore, which prioritizes matching panels while keeping every panel visible and moves keyboard focus to its heading. Browse everything remains available.
- CharacterCompanion renders the selected Dog Walker PFP. CharacterAnimation displays its original GIF, with pause/play and a static default for reduced motion. The rejected astronaut is no longer displayed; final Untitled UI logo selection is deferred. CharacterMessage handles an accessible changing greeting.
- Gallery artwork is decorative CSS/SVG, with meaningful link titles rendered as real text. Each panel opens a normal route.
- Trips are typed but empty until an actual trip is supplied. No invented map or trip record is rendered. MapLibre should load only within a future trip experience after the data provider is selected.

## Videoath reuse

Adaptation references: src/features/character/CharacterContext.tsx, CharacterCompanion.tsx, CharacterMessage.tsx, and src/features/sessions/slides/BranchingChoiceSlide.tsx in the Videoath repository. Reused ideas include local reducer state, context-driven character reactions, accessible single-choice cards, and caller-owned navigation. These are simplified adaptations, not unchanged component copies.

No root Videoath provider tree, authentication, Convex, billing, analytics, live media bindings, session engine, private data, or credentials were copied. The previously selected character PNG remains preserved and recorded in ASSETS.md, but is not rendered.

## Infrastructure boundaries

Codex edits the repository; GitHub preserves source; Vercel builds/serves the site; Namecheap manages the domain. Do not introduce a second personal repository or a monorepo solely for this scaffold.

No backend service is needed today. A future bounded AI demo can live in a Next.js server route, with server-only credentials, rate and spend controls, and a selected model. Do not create a pretend working endpoint or commit keys before that workflow is defined. Convex becomes a separate decision only when durable or shared visitor state is required.

## Assets and indexing

Serve files separately from public; the old embedded-Worker format is archived. The Dog Walker guide serves two curated original files locally and needs no image service or live asset query. No external fonts, maps, analytics, or models load in the scaffold. Each story has a canonical URL. robots and metadata default to noindex until public release is approved; noindex does not make a URL private.

## First interactive experience

The prerendered VideoathStory page owns the introduction, public role summary, product links, and onward navigation. PracticeWalkthrough is an isolated client component with three steps and typed, original examples in src/content/videoath-walkthrough.ts. Selecting an opening changes its feedback; selecting a follow-through changes the example and takeaway. Changing the opening clears downstream state. Visitors can revisit completed steps and restart. Each step moves keyboard focus and scrolls the new content into view. Reduced motion is respected.

The walkthrough sends no answers, records no audio or video, calls no model, and stores no visitor data. It is explicitly illustrative. Core portfolio pages, links, and a walkthrough fallback remain available without JavaScript.

## Boardy introduction explorer

BoardyStory is the second detailed prerendered story. IntroductionExplorer owns only the local three-stage interaction: reason, context, connection. Typed authored data in src/content/boardy-examples.ts supplies three reasons and two focuses per reason. A reason change clears the downstream focus and introduction disclosure; a focus change closes the old disclosure. All progression uses accessible radio groups and buttons. New steps receive focus and scroll into view with reduced-motion support.

The example has no external requests, persistence, form submission, or live AI service. Real role attribution and public product links remain in the server page, separate from the fictional people and introductions. No additional dependency or backend is required.
