import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const assetsRoot = path.join(
  process.env.USERPROFILE ?? "",
  ".cursor",
  "projects",
  "d-quietash",
  "assets",
);

const assetBasename = process.argv[2] ?? "mood-hero-ins-mockup-lock.webp";
const publicBasename = process.argv[3] ?? "mood-hero-ins-mockup-lock.webp";
const src = path.join(assetsRoot, assetBasename);
const dest = path.join(root, "public", "images", "generated", publicBasename);

if (!fs.existsSync(src)) {
  console.error(`Missing source: ${src}`);
  process.exit(1);
}

fs.mkdirSync(path.dirname(dest), { recursive: true });

/** Trim excess left wall — keep product + window */
await sharp(src)
  .resize(1920, 1080, { fit: "cover", position: "right" })
  .webp({ quality: 82, effort: 4 })
  .toFile(dest);

console.log(`Installed ${dest}`);
