# Chadwick Poon personal website

This repository is Chadwick's personal portfolio at chadwickpoon.com. Treat the website and any career history already present as source material, not as verified current claims. Do not import private employer or business material or invent dates, roles, outcomes, or metrics.

## Product and design context

Read the canonical [Personal Site brief](</Users/chadwick.poon/Library/Mobile Documents/iCloud~md~obsidian/Documents/alan-skills/Knowledge Base/20 Personal/Projects/Personal Site/Personal Site.md>) and its linked decisions before design or content work. Preserve the distinction between confirmed user choices, current preferences, historical rejected references, and proposals. The Obsidian brief is the source of direction; keep code and implementation in this repository.

## Editing

- Edit index.html, style.css, and script.js at the repository root. Keep the current design unless Chadwick requests a redesign.
- The site content is static HTML, CSS, and JavaScript. A small dependency-free Worker serves public assets and redirects www to the canonical apex domain; it has no database. Do not introduce a framework without a concrete need.
- Put public assets in assets/, images/, or fonts/. The build also copies root HTML, CSS, JS, image, font, PDF, and webmanifest files.
- Run npm run check and npm run build after relevant edits. Generated dist/ output is not the editing source.
- For local preview, build first, then run npm run dev.

## Identity and publishing

- Use repository-local Chadwick Poon <chadwickpoon@gmail.com> and user.useConfigOnly=true. Never change global Git identity.
- Before a GitHub push, verify origin is chadwickpoon/chadwickpoon.github.io and gh api user returns chadwickpoon. Inspect outgoing author and committer emails for any incorrect employer identity.
- GitHub Pages remains configured on origin/master as the previous host. Namecheap DNS now points chadwickpoon.com and www.chadwickpoon.com to ChatGPT Sites. Keep the personal site hosted in the existing Sites project.
- Use the installed Sites building and hosting skills for ChatGPT Sites. Reuse the exact project_id in .openai/hosting.json; never create a duplicate Site.
- Keep GitHub origin. Sites may supply a separate source repository and temporary credential; use per-command authentication, never store credentials in files, remotes, or Git configuration.
- A local edit or request to review changes does not authorize a public release or DNS change. When Chadwick requests publishing, verify the intended host and audience and report the verified live URL.
- Domain registration remains at Namecheap. Preserve email and unrelated DNS records during any explicitly requested hosting cutover.
