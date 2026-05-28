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
const height = 2000;

const slugArg = process.argv[2];
const fileArg = process.argv[3];

const slugs = slugArg
  ? [slugArg]
  : [
      "brass-incense-stand",
      "small-agarwood-box",
      "wood-tray",
      "paper-incense-sleeve",
      "ceramic-tea-cup",
      "linen-cloth",
    ];

const files = fileArg
  ? [fileArg]
  : [
      "hero",
      "gallery-01",
      "gallery-02",
      "gallery-03",
      "gallery-04",
      "narrative",
      "atmosphere",
    ];

function candidates(slug, file) {
  return [
    path.join(assetsRoot, "products", slug, `${file}.png`),
    path.join(assetsRoot, `product-${slug}-${file}.png`),
    path.join(assetsRoot, `product-${slug}-${file.replace("gallery-", "g")}.png`),
  ];
}

async function install(slug, file) {
  const src = candidates(slug, file).find((p) => fs.existsSync(p));
  if (!src) {
    console.warn(`skip: ${slug}/${file}`);
    return false;
  }
  const dest = path.join(
    root,
    "public",
    "images",
    "generated",
    "products",
    slug,
    `${file}.webp`,
  );
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  await sharp(src)
    .resize(width, height, { fit: "cover", position: "centre" })
    .webp({ quality: 82, effort: 4 })
    .toFile(dest);
  console.log(`installed products/${slug}/${file}.webp`);
  return true;
}

for (const slug of slugs) {
  for (const file of files) {
    await install(slug, file);
  }
}
