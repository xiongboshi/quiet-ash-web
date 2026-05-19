import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const assetsRoot = path.join(
  process.env.USERPROFILE ?? "",
  ".cursor",
  "projects",
  "d-quietash",
  "assets",
  "products",
);

const slugs = [
  "brass-incense-stand",
  "small-agarwood-box",
  "wood-tray",
  "paper-incense-sleeve",
  "ceramic-tea-cup",
  "linen-cloth",
];

const files = [
  "hero",
  "gallery-01",
  "gallery-02",
  "gallery-03",
  "gallery-04",
  "narrative",
  "atmosphere",
];

function candidates(file) {
  return [
    path.join(root, `product-${file}.png`),
    path.join(root, `${file}.png`),
    path.join(root, "assets", `${file}.png`),
  ];
}

for (const slug of slugs) {
  const slugArg = process.argv[2];
  if (slugArg && slug !== slugArg) continue;
  const destDir = path.join(assetsRoot, slug);
  fs.mkdirSync(destDir, { recursive: true });
  for (const file of files) {
    const base = `product-${slug}-${file}`;
    const src =
      candidates(base).find((p) => fs.existsSync(p)) ??
      path.join(root, `${base}.png`);
    if (!fs.existsSync(src)) {
      console.warn(`missing: ${base}.png`);
      continue;
    }
    const dest = path.join(destDir, `${file}.png`);
    fs.copyFileSync(src, dest);
    console.log(`staged ${slug}/${file}.png`);
  }
}
