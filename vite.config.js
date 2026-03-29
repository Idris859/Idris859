import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

function collectHtml(dir, base = '') {
  const entries = {};
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    if (item.name === 'dist' || item.name === 'node_modules' || item.name.startsWith('.git')) continue;
    const absolute = path.join(dir, item.name);
    const relative = path.join(base, item.name);
    if (item.isDirectory()) {
      Object.assign(entries, collectHtml(absolute, relative));
    } else if (item.isFile() && item.name.endsWith('.html')) {
      const key = relative.replace(/\.html$/, '').replace(/\\/g, '/');
      entries[key] = absolute;
    }
  }
  return entries;
}

const input = collectHtml(process.cwd());

export default defineConfig({
  build: {
    rollupOptions: { input }
  }
});
