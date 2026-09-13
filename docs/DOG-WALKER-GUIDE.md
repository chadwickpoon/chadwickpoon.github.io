# Dog Walker guide and open gallery — September 13, 2026

Chadwick selected the existing Dog Walker PFP and GIF to represent him because he has a corgi. He also asked to remove the gallery’s Everything / Work & building / Life & play filter bar.

The welcome now pairs the Dog Walker portrait with the greeting and displays the original walking GIF underneath. The same portrait is used on About. The GIF includes a corgi. The animation has a pause/play control and defaults to a still portrait for reduced-motion visitors; they may explicitly choose to play it. Original image bytes and backgrounds are preserved.

The gallery always contains all six worlds. As an implementation choice, the welcome’s work or personal-life choices put the relevant panels first instead of hiding any. Browse everything restores the original order. The filter bar and unused filter styles were removed. The navigation logo and favicon retain their existing marks; this decision selects a personal avatar, and Untitled UI logo work remains deferred.

Source files were read from the existing Videoath LetsWalk original-assets collection. The portrait matches the user’s supplied Airtable record recoHS0P3o4EuXNkN. Only the requested portrait and GIF were copied; Videoath’s repository, content records, and services were not changed. Exact filenames, sizes, and hashes are recorded in docs/ASSETS.md.

Lockfile installation, lint, type checking, production build, and all 24 local desktop/mobile checks passed. The checks cover all six panels after either welcome choice, reset order, absence of the filter bar, original GIF loading, pause/play, reduced-motion preference changes, About avatar, and existing Boardy/Videoath flows. Desktop and 390px mobile visual reviews confirmed the greeting, animation, controls, and gallery spacing.

This is an update to the existing Vercel Hobby review site. Main-domain publishing, DNS, paid services, and live AI remain outside this change. The verified hosted receipt is recorded below.

## Verified hosted update

[Review the updated welcome and gallery](https://chadwickpoon-personal-site-cpoon166-gmailcoms-projects.vercel.app/).

- Source: `fbd9aef9e3cf06036a4e9b0ff6b49172e45771b4` on `codex/personal-site-foundation`.
- Deployment: `dpl_Hmxwa27j5iYFTLDy2zyMV2orTRsM`, READY on the same Vercel Hobby project and generated review address.
- Both hosted asset files returned successfully and matched their original SHA-256 and byte sizes exactly.
- All 22 applicable hosted checks are covered. The initial run passed 21 and exposed an existing Boardy test racing the step’s planned focus change. After adding an explicit wait for that heading focus, the focused keyboard checks passed on desktop and mobile. The two custom-Host redirect checks passed locally and are intentionally skipped at the generated review address.
- The hosted welcome, original walking GIF, and gallery without filters were visually verified. The current receipt is `docs/deployment-receipt.json`; the prior Boardy receipt remains at `docs/receipts/2026-09-12-boardy.json`.
- No custom-domain, DNS, billing, Videoath infrastructure, or live AI change was made. Indexing remains disabled on the review site.
