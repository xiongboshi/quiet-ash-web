import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");
const ignoreDirs = new Set(["node_modules", ".next", ".git", "public"]);

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (/\.(png|jpe?g|webp|svg|gif)$/i.test(e.name)) acc.push(p);
  }
  return acc;
}

function readTextFiles(dir, files = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignoreDirs.has(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) readTextFiles(p, files);
    else if (/\.(ts|tsx|js|jsx|json|md|mdx|css|html|mjs)$/i.test(e.name)) {
      try {
        files.push(fs.readFileSync(p, "utf8"));
      } catch {
        /* skip */
      }
    }
  }
  return files;
}

const images = walk(publicDir);
const corpus = readTextFiles(root).join("\n");
const unused = [];
const used = [];

for (const abs of images) {
  const rel = `/${path.posix.join(...path.relative(publicDir, abs).split(path.sep))}`;
  const withoutLeading = rel.slice(1);
  const base = path.basename(abs);
  const baseNoExt = base.replace(/\.[^.]+$/, "");

  const found =
    corpus.includes(rel) ||
    corpus.includes(withoutLeading) ||
    corpus.includes(`"${base}"`) ||
    corpus.includes(`'${base}'`);
  if (found) used.push(rel);
  else unused.push(rel);
}

console.log(`TOTAL ${images.length}  USED ${used.length}  UNUSED ${unused.length}`);
for (const u of unused.sort()) console.log(u);
