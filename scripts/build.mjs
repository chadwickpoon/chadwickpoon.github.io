import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
await rm(output, { recursive: true, force: true });
await mkdir(path.join(output, 'server'), { recursive: true });
await mkdir(path.join(output, '.openai'), { recursive: true });
const mime = {
  html: 'text/html; charset=utf-8', css: 'text/css; charset=utf-8',
  js: 'text/javascript; charset=utf-8', ico: 'image/x-icon', svg: 'image/svg+xml',
  png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp',
  gif: 'image/gif', woff: 'font/woff', woff2: 'font/woff2', pdf: 'application/pdf',
  webmanifest: 'application/manifest+json', txt: 'text/plain; charset=utf-8',
  xml: 'application/xml'
};
const publicFolders = new Set(['assets', 'images', 'fonts']);
const assets = [];
async function collect(directory, prefix = '', nested = false) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    const relative = prefix + entry.name;
    if (entry.isDirectory() && (nested || publicFolders.has(entry.name))) {
      await collect(filename, relative + '/', true);
    } else if (entry.isFile() &&
        (nested || /\.(html|css|js|ico|svg|png|jpg|jpeg|webp|gif|woff2?|pdf|webmanifest)$/i.test(entry.name) ||
         ['robots.txt', 'sitemap.xml'].includes(entry.name))) {
      assets.push(['/' + relative, {
        type: mime[path.extname(entry.name).slice(1).toLowerCase()] || 'application/octet-stream',
        base64: (await readFile(filename)).toString('base64')
      }]);
    }
  }
}
await collect(root);
const worker = await readFile(path.join(root, 'hosting/worker.mjs'), 'utf8');
const bundle = worker + '\nconst assets = new Map(' + JSON.stringify(assets) +
  '.map(([name, asset]) => [name, { type: asset.type, body: Uint8Array.from(atob(asset.base64), c => c.charCodeAt(0)) }]));\nexport default createWorker(assets);\n';
await writeFile(path.join(output, 'server/index.js'), bundle);
await writeFile(path.join(output, '.openai/hosting.json'), await readFile(path.join(root, '.openai/hosting.json')));
console.log('Website and canonical-domain redirect prepared in dist/');
