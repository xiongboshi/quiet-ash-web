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
const width = 1920;
const height = 1080;

const slugArg = process.argv[2];

function candidates(slug) {
  return [
    path.join(assetsRoot, "essays", `${slug}.png`),
    path.join(assetsRoot, `essay-${slug}.png`),
    path.join(assetsRoot, `essay-${slug}-source.png`),
  ];
}

async function install(slug) {
  const src = candidates(slug).find((p) => fs.existsSync(p));
  if (!src) {
    console.warn(`skip (missing asset): essay-${slug}`);
    return false;
  }
  const dest = path.join(
    root,
    "public",
    "images",
    "generated",
    `essay-${slug}.webp`,
  );
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  await sharp(src)
    .resize(width, height, { fit: "cover", position: "centre" })
    .webp({ quality: 82, effort: 4 })
    .toFile(dest);
  console.log(`installed essay-${slug}.webp`);
  return true;
}

const slugs = slugArg
  ? [slugArg]
  : [
      "why-scholars-burned-incense",
      "night-incense-ritual",
      "what-is-agarwood",
      "agarwood-time-rain-injury",
      "forgotten-incense-culture",
      "good-incense-not-loud",
      "incense-heaven-earth",
      "incense-ink-silence",
      "incense-ink-silence23",
      "incense-ink-silence24",
      "incense-patience",
      "king-of-incense",
    ];

for (const slug of slugs) {
  await install(slug);
}
