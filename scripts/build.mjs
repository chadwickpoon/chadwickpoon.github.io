import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
const publicFolders = new Set(['assets', 'images', 'fonts']);
for (const entry of await readdir(root, { withFileTypes: true })) {
  const isPublicFile = entry.isFile() && /\.(html|css|js|ico|svg|png|jpg|jpeg|webp|gif|woff2?|pdf|webmanifest)$/i.test(entry.name);
  const isPublicFolder = entry.isDirectory() && publicFolders.has(entry.name);
  if (isPublicFile || isPublicFolder) {
    await cp(path.join(root, entry.name), path.join(output, entry.name), { recursive: true });
  }
}
console.log('Website prepared in dist/');
