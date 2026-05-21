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

const masterCandidates = [
  path.join(root, "app", "icon-source.png"),
  path.join(assetsRoot, "quiet-ash-brand-icon-seal.png"),
  path.join(assetsRoot, "quiet-ash-brand-icon-v2.png"),
];

const masterPath = masterCandidates.find((p) => fs.existsSync(p));
const svgPath = path.join(root, "app", "icon.svg");

if (!masterPath && !fs.existsSync(svgPath)) {
  console.error("Missing app/icon-source.png or app/icon.svg");
  process.exit(1);
}

const BG = "#F4EFE8";

async function writeFaviconFromSvg(size, outName) {
  const out = path.join(root, "app", outName);
  await sharp(svgPath, { density: 512 })
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toFile(out);
  console.log(`wrote ${outName} (${size}px) from icon.svg`);
}

async function writeRasterFromMaster(size, outName) {
  const out = path.join(root, "app", outName);
  const pad = Math.round(size * 0.06);
  await sharp(masterPath)
    .resize(size - pad * 2, size - pad * 2, {
      fit: "contain",
      background: BG,
      position: "center",
    })
    .extend({
      top: pad,
      bottom: pad,
      left: pad,
      right: pad,
      background: BG,
    })
    .png({ compressionLevel: 9 })
    .toFile(out);
  console.log(`wrote ${outName} (${size}px) from icon-source.png`);
}

if (fs.existsSync(svgPath)) {
  await writeFaviconFromSvg(32, "icon.png");
} else if (masterPath) {
  await writeRasterFromMaster(32, "icon.png");
}

if (masterPath) {
  await writeRasterFromMaster(180, "apple-icon.png");
} else if (fs.existsSync(svgPath)) {
  await writeFaviconFromSvg(180, "apple-icon.png");
}
