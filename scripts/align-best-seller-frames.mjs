/**
 * Align BEST SELLERS pack shots to a shared frame (box scale + vertical anchor).
 * Reference framing: lavender-field.png. Tune scale/top in CONFIG below.
 *
 *   node scripts/align-best-seller-frames.mjs
 */
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const DIR = path.join(ROOT, "public/images/generated/best-sellers");
const OUT_W = 681;
const OUT_H = 1024;

/** @type {Record<string, { scale: number; top: number; out: string }>} */
const CONFIG = {
  // First two: scale up + crop down to match box height of cards 3–6
  "citrus-grove-v3.png": {
    scale: 1.2,
    top: 118,
    out: "citrus-grove-v4.png",
  },
  "white-jasmine.png": {
    scale: 1.17,
    top: 102,
    out: "white-jasmine-v2.png",
  },
  // Last four: slight scale + shift crop up
  "lavender-field.png": {
    scale: 1.05,
    top: 42,
    out: "lavender-field-v2.png",
  },
  "rose-garden.png": {
    scale: 1.05,
    top: 38,
    out: "rose-garden-v2.png",
  },
  "sandalwood-night.png": {
    scale: 1.05,
    top: 44,
    out: "sandalwood-night-v2.png",
  },
  "peach-orchard.png": {
    scale: 1.05,
    top: 36,
    out: "peach-orchard-v2.png",
  },
};

async function alignFrame(inputName, { scale, top, out }) {
  const input = path.join(DIR, inputName);
  const meta = await sharp(input).metadata();
  const sw = Math.round(meta.width * scale);
  const sh = Math.round(meta.height * scale);
  const left = Math.max(0, Math.round((sw - OUT_W) / 2));
  const extractTop = Math.min(Math.max(0, top), Math.max(0, sh - OUT_H));

  await sharp(input)
    .resize(sw, sh, { fit: "fill" })
    .extract({ left, top: extractTop, width: OUT_W, height: OUT_H })
    .png()
    .toFile(path.join(DIR, out));

  console.log(`✓ ${inputName} → ${out} (scale ${scale}, top ${extractTop})`);
}

for (const [name, cfg] of Object.entries(CONFIG)) {
  await alignFrame(name, cfg);
}
