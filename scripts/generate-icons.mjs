import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const svgPath = path.join(root, "app", "icon.svg");
const sealPath = path.join(root, "public", "images", "generated", "quote-seal-stamp.png");
const paper = { r: 232, g: 228, b: 220 };

const svg = fs.readFileSync(svgPath);

/** Keep cinnabar ink; drop black mat / paper for favicon compositing. */
async function sealRgbaBuffer() {
  const { data, info } = await sharp(sealPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    const max = Math.max(r, g, b) / 255;
    const min = Math.min(r, g, b) / 255;
    const s =
      max === 0 || max === min
        ? 0
        : lum > 0.5
          ? (max - min) / (2 - max - min)
          : (max - min) / (max + min);

    const cinnabar = r > 92 && r > g + 9 && r > b + 7;
    const redStroke = s > 0.12 && r > 85 && r > g && r > b;
    if (cinnabar || redStroke) continue;

    if (lum < 0.12) {
      data[i + 3] = 0;
      continue;
    }
    if (lum > 0.88 && s < 0.11) {
      data[i + 3] = 0;
      continue;
    }
    if (r + g + b > 705 && s < 0.14) {
      data[i + 3] = 0;
    }
  }

  return sharp(Buffer.from(data), {
    raw: { width: info.width, height: info.height, channels: 4 },
  }).png();
}

async function writeFromSeal(size, outName) {
  const pad = Math.max(2, Math.round(size * 0.06));
  const inner = size - pad * 2;
  const sealBuf = await sealRgbaBuffer()
    .then((img) => img.resize(inner, inner, { fit: "contain" }).png().toBuffer());

  const out = path.join(root, "app", outName);
  await sharp({
    create: {
      width: size,
      height: size,
      channels: 3,
      background: paper,
    },
  })
    .composite([{ input: sealBuf, gravity: "center" }])
    .png({ compressionLevel: 9 })
    .toFile(out);
  console.log(`wrote ${outName} (${size}px, seal)`);
}

async function writeFromSvg(size, outName) {
  const out = path.join(root, "app", outName);
  await sharp(svg, { density: 288 })
    .resize(size, size, { fit: "contain", background: "#E8E4DC" })
    .png({ compressionLevel: 9 })
    .toFile(out);
  console.log(`wrote ${outName} (${size}px, svg)`);
}

if (fs.existsSync(sealPath)) {
  await writeFromSeal(32, "icon.png");
  await writeFromSeal(180, "apple-icon.png");
} else {
  await writeFromSvg(32, "icon.png");
  await writeFromSvg(180, "apple-icon.png");
}
