import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const skipDirs = new Set(["node_modules", ".next", ".git"]);

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skipDirs.has(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, files);
    else if (/\.(tsx?|mdx?|mjs)$/.test(ent.name)) files.push(p);
  }
  return files;
}

function patch(c) {
  c = c.replace(/(["'`])\/rituals/g, "$1/moods");
  c = c.replace(/(["'`])\/essays/g, "$1/journal");
  c = c.replace(/\$\{base\}\/rituals/g, "${base}/moods");
  c = c.replace(/\$\{base\}\/essays/g, "${base}/journal");
  c = c.replace(/\/rituals\/\$\{/g, "/moods/${");
  c = c.replace(/\/essays\/\$\{/g, "/journal/${");
  c = c.replace(/\^\\\/rituals/g, "^\\/moods");
  c = c.replace(/\^\\\/essays/g, "^\\/journal");
  return c;
}

let changed = 0;
for (const f of walk(root)) {
  if (f.endsWith("next.config.ts") || f.endsWith("patch-routes.mjs")) continue;
  const c = fs.readFileSync(f, "utf8");
  const n = patch(c);
  if (n !== c) {
    fs.writeFileSync(f, n);
    changed++;
  }
}
console.log(`patched ${changed} files`);
