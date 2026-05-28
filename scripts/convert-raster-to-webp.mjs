/**
 * Convert PNG/JPEG under public/images to WebP (keeps originals unless --replace).
 * Usage: node scripts/convert-raster-to-webp.mjs [--replace] [--quality=82]
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicImages = path.join(root, "public", "images");

const replace = process.argv.includes("--replace");
const qualityArg = process.argv.find((a) => a.startsWith("--quality="));
const quality = qualityArg ? Number(qualityArg.split("=")[1]) : 82;

const SKIP_DIRS = new Set(["textures"]);

async function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const rel = path.relative(publicImages, full);
    if (fs.statSync(full).isDirectory()) {
      if (SKIP_DIRS.has(name)) continue;
      await walk(full, out);
      continue;
    }
    if (/\.(png|jpe?g)$/i.test(name)) out.push(full);
  }
  return out;
}

const files = await walk(publicImages);
let converted = 0;
let skipped = 0;

for (const srcPath of files) {
  const destPath = srcPath.replace(/\.(png|jpe?g)$/i, ".webp");
  const srcStat = fs.statSync(srcPath);
  const destExists = fs.existsSync(destPath);
  if (destExists) {
    const destStat = fs.statSync(destPath);
    if (destStat.mtimeMs >= srcStat.mtimeMs) {
      skipped++;
      if (replace) fs.unlinkSync(srcPath);
      continue;
    }
  }

  await sharp(srcPath)
    .webp({ quality, effort: 4 })
    .toFile(destPath);

  const before = srcStat.size;
  const after = fs.statSync(destPath).size;
  const rel = path.relative(root, destPath).replace(/\\/g, "/");
  console.log(
    `webp ${rel} (${Math.round(before / 1024)}KB → ${Math.round(after / 1024)}KB)`,
  );
  converted++;

  if (replace) fs.unlinkSync(srcPath);
}

console.log(`Done: ${converted} converted, ${skipped} up-to-date, ${files.length} raster files scanned.`);
