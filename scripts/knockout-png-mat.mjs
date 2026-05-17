/**
 * Knock out light mat / white JPEG background on decorative PNGs (shadows, etc.).
 * Usage: node scripts/knockout-png-mat.mjs <filename-in-public/images/generated/>
 * Example: node scripts/knockout-png-mat.mjs quote-spec-wintersweet.png
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const file = process.argv[2];
if (!file || file.includes("..") || file.includes("/") || file.includes("\\")) {
  console.error("Usage: node scripts/knockout-png-mat.mjs <filename.png>");
  process.exit(1);
}
const inputPath = path.join(root, "public/images/generated", file);
const tmpPath = `${inputPath}.tmp.png`;

async function main() {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { channels } = info;
  if (channels !== 4) throw new Error(`Expected RGBA, got ${channels} ch`);

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

    // Keep shadow ink (dark / mid grey-brown).
    if (lum < 0.62) continue;

    // Remove whites and pale neutrals.
    if (lum > 0.9) {
      data[i + 3] = 0;
      continue;
    }
    if (lum > 0.82 && s < 0.1) {
      data[i + 3] = 0;
      continue;
    }
    if (r + g + b > 710 && s < 0.12) {
      data[i + 3] = 0;
      continue;
    }
    if (r > 242 && g > 240 && b > 232 && r - b < 40) {
      data[i + 3] = 0;
    }
  }

  await sharp(Buffer.from(data), {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png({ compressionLevel: 9 })
    .toFile(tmpPath);

  fs.rmSync(inputPath, { force: true });
  fs.renameSync(tmpPath, inputPath);
  // eslint-disable-next-line no-console -- CLI
  console.log("Knocked mat:", inputPath);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
