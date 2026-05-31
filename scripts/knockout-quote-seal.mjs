/**
 * Makes near-white / light-mat pixels transparent on quote-seal-stamp.webp
 * so only cinnabar ink remains on the homepage quote band.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const inputPath = path.join(root, "public/images/generated/quote-seal-stamp.webp");
const tmpPath = path.join(
  root,
  "public/images/generated/quote-seal-stamp.webp.tmp.webp",
);

async function main() {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  if (channels !== 4) {
    throw new Error(`Expected RGBA raw, got ${channels} channels`);
  }

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const max = Math.max(r, g, b) / 255;
    const min = Math.min(r, g, b) / 255;
    const l = (max + min) / 2;
    const s =
      max === 0 || max === min ? 0 : l > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);

    const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Keep seal ink: cinnabar (R leads) or any clearly saturated red stroke.
    const cinnabar = r > 92 && r > g + 9 && r > b + 7;
    const redStroke = s > 0.12 && r > 85 && r > g && r > b;
    if (cinnabar || redStroke) continue;

    // Aggressive: light mat / paper / JPEG off-white.
    if (lum > 0.88 && s < 0.11) {
      data[i + 3] = 0;
      continue;
    }
    if (r + g + b > 705 && s < 0.14) {
      data[i + 3] = 0;
      continue;
    }
    if (r > 238 && g > 235 && b > 225 && r - b < 42) {
      data[i + 3] = 0;
    }
  }

  await sharp(Buffer.from(data), {
    raw: { width, height, channels: 4 },
  })
    .webp({ quality: 90, effort: 4 })
    .toFile(tmpPath);

  fs.rmSync(inputPath, { force: true });
  fs.renameSync(tmpPath, inputPath);
  // eslint-disable-next-line no-console -- CLI script
  console.log("Wrote transparent knockout:", inputPath);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
