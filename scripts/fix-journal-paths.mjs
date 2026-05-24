import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const skip = new Set(["node_modules", ".next", ".git"]);

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skip.has(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, files);
    else if (/\.(tsx?|mjs)$/.test(ent.name)) files.push(p);
  }
  return files;
}

let n = 0;
for (const f of walk(root)) {
  if (f.includes("journal-tmp")) continue;
  let c = fs.readFileSync(f, "utf8");
  const o = c;
  if (f.endsWith("next.config.ts")) continue;
  c = c.replace(/\/Journal\//g, "/journal/");
  c = c.replace(/"\/Journal"/g, '"/journal"');
  c = c.replace(/'\/Journal'/g, "'/journal'");
  c = c.replace(/`\/Journal`/g, "`/journal`");
  c = c.replace(/content\/Journal\//g, "content/essays/");
  c = c.replace(/`\/Journal\/\[slug\]`/g, "`/journal/[slug]`");
  if (c !== o) {
    fs.writeFileSync(f, c);
    n++;
  }
}
console.log(`fixed ${n} files`);
