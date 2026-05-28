/**
 * Pre-compress `.next/static` JS/CSS as `.gz` for nginx `gzip_static on`.
 * Vercel/CDN compress on the fly — run this only for self-hosted nginx.
 *
 * Usage: npm run build && node scripts/gzip-static-chunks.mjs
 */
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

const gzip = promisify(zlib.gzip);
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const staticDir = path.join(root, ".next", "static");

const COMPRESS_EXT = /\.(js|css|json|svg|txt|xml|html|woff2?)$/i;

async function compressFile(filePath) {
  const raw = fs.readFileSync(filePath);
  const gzPath = `${filePath}.gz`;
  const level = 6;
  const compressed = await gzip(raw, { level });
  if (fs.existsSync(gzPath)) {
    const existing = fs.readFileSync(gzPath);
    if (existing.length === compressed.length) return false;
  }
  fs.writeFileSync(gzPath, compressed);
  const ratio = ((1 - compressed.length / raw.length) * 100).toFixed(1);
  console.log(
    `gzip ${path.relative(root, filePath).replace(/\\/g, "/")} (${Math.round(raw.length / 1024)}KB → ${Math.round(compressed.length / 1024)}KB, -${ratio}%)`,
  );
  return true;
}

async function walk(dir) {
  if (!fs.existsSync(dir)) {
    console.error(`Missing ${dir} — run npm run build first.`);
    process.exit(1);
  }
  let count = 0;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      count += await walk(full);
      continue;
    }
    if (!COMPRESS_EXT.test(name) || name.endsWith(".gz")) continue;
    if (await compressFile(full)) count++;
  }
  return count;
}

const written = await walk(staticDir);
console.log(`Done: ${written} files compressed under .next/static/`);
