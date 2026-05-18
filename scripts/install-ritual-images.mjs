/**
 * Copy generated ritual PNGs from assets/ or assets/rituals/ into
 * public/images/generated/rituals/{slug}/ and resize to editorial 3:2.
 *
 * Usage:
 *   node scripts/install-ritual-images.mjs
 *   node scripts/install-ritual-images.mjs incense-before-writing cover
 */
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
const width = 1600;
const height = 1067;

const slugArg = process.argv[2];
const fileArg = process.argv[3];

function destFor(slug, file) {
  const name = file === "cover" ? "cover.png" : `step-0${file}.png`;
  return path.join(root, "public", "images", "generated", "rituals", slug, name);
}

function candidates(slug, file) {
  const suffix = file === "cover" ? "cover" : `step-0${file}`;
  return [
    path.join(assetsRoot, "rituals", slug, `${suffix}.png`),
    path.join(assetsRoot, `ritual-${slug}-${suffix}.png`),
    path.join(assetsRoot, `ritual-${slug}-${file === "cover" ? "cover" : `step-${file}`}.png`),
  ];
}

async function installOne(slug, file) {
  const dest = destFor(slug, file);
  const src = candidates(slug, file).find((p) => fs.existsSync(p));
  if (!src) {
    console.warn(`skip (missing): ${slug} ${file}`);
    return false;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  await sharp(src)
    .resize(width, height, { fit: "cover", position: "centre" })
    .png({ compressionLevel: 9 })
    .toFile(dest);
  console.log(`installed ${path.relative(root, dest)}`);
  return true;
}

const slugs = slugArg
  ? [slugArg]
  : [
      "incense-before-writing",
      "quiet-desk-ritual",
      "tea-after-rain",
      "smoke-and-silence",
      "evening-room-ritual",
      "why-agarwood-matters",
    ];

const files =
  fileArg === "cover"
    ? ["cover"]
    : fileArg
      ? [fileArg]
      : ["cover", "1", "2", "3", "4"];

for (const slug of slugs) {
  for (const file of files) {
    await installOne(slug, file);
  }
}
