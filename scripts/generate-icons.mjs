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

/* Match sitewide field (styles/tokens.css --qa-bg) */
const BG = "#faf9f7";
/** Zoom trimmed art so the mark fills the square (crop outer breathing room). */
const ICON_FILL_ZOOM = 1.38;

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
  const zoomed = Math.round(size * ICON_FILL_ZOOM);
  let pipeline = sharp(masterPath).trim({ threshold: 16 });
  await pipeline
    .resize(zoomed, zoomed, {
      fit: "cover",
      position: "centre",
    })
    .extract({
      left: Math.floor((zoomed - size) / 2),
      top: Math.floor((zoomed - size) / 2),
      width: size,
      height: size,
    })
    .flatten({ background: BG })
    .png({ compressionLevel: 9 })
    .toFile(out);
  console.log(`wrote ${outName} (${size}px, zoom ${ICON_FILL_ZOOM}) from icon-source.png`);
}

/* Prefer brand master (QA monogram) over legacy letter-only icon.svg */
if (masterPath) {
  await writeRasterFromMaster(32, "icon.png");
  await writeRasterFromMaster(180, "apple-icon.png");
} else if (fs.existsSync(svgPath)) {
  await writeFaviconFromSvg(32, "icon.png");
  await writeFaviconFromSvg(180, "apple-icon.png");
}
