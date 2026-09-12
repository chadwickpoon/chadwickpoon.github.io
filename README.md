# Chadwick Poon website

Personal website for chadwickpoon.com, imported from chadwickpoon/chadwickpoon.github.io.

## Work in Codex

Add this folder as a Codex project and start a task describing the content or design changes you want. The editable source is index.html, style.css, and script.js. Career text and externally hosted images are inherited from the existing site and may need updating.

## Preview

Run npm run check, then npm run build. Run npm run dev to open the website at http://127.0.0.1:4317. No package installation is required.

## Hosting

ChatGPT Sites uses .openai/hosting.json and the dist/server/index.js output created by npm run build. The dependency-free Worker embeds the public assets and permanently redirects www.chadwickpoon.com to https://chadwickpoon.com while preserving the path and query. The page also declares this canonical URL. Ask Codex to publish the approved website using the Sites hosting workflow.

The original GitHub repository remains the origin remote. GitHub Pages is configured to publish its master branch. Namecheap DNS now routes both the main domain and www to ChatGPT Sites; GitHub Pages is retained as the previous host. The domain registration remains at Namecheap.
