/**
 * Rewrite .png/.jpg paths to .webp in source (data, content, components).
 * Skips scripts/, node_modules/, .next/, and *.mjs install pipelines that still ingest PNG.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const SCAN_ROOTS = ["data", "content", "components", "app", "lib"];
const SKIP_FILE_RE = /(install-.*\.mjs|convert-raster|patch-image|knockout|align-best-seller)/i;

const EXT_RE = /\.(png|jpe?g)(?=["'`)\s]|$)/gi;

function shouldScan(file) {
  if (SKIP_FILE_RE.test(file)) return false;
  return /\.(ts|tsx|mdx|json)$/.test(file);
}

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      if (name === "node_modules" || name === ".next") continue;
      walk(full, out);
    } else if (shouldScan(full)) out.push(full);
  }
  return out;
}

let filesChanged = 0;
let replacements = 0;

for (const relRoot of SCAN_ROOTS) {
  const abs = path.join(root, relRoot);
  for (const file of walk(abs)) {
    const text = fs.readFileSync(file, "utf8");
    if (!EXT_RE.test(text)) continue;
    EXT_RE.lastIndex = 0;
    const next = text.replace(EXT_RE, ".webp");
    if (next !== text) {
      fs.writeFileSync(file, next);
      filesChanged++;
      replacements += (text.match(EXT_RE) ?? []).length;
      EXT_RE.lastIndex = 0;
      console.log(path.relative(root, file).replace(/\\/g, "/"));
    }
  }
}

console.log(`Updated ${filesChanged} files (${replacements} path suffixes).`);
