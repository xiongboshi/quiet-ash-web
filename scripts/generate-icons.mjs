import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const svgPath = path.join(root, "app", "icon.svg");
const svg = fs.readFileSync(svgPath);

async function writePng(size, outName) {
  const out = path.join(root, "app", outName);
  await sharp(svg, { density: 384 })
    .resize(size, size, { fit: "cover", position: "center" })
    .png({ compressionLevel: 9 })
    .toFile(out);
  console.log(`wrote ${outName} (${size}px)`);
}

await writePng(32, "icon.png");
await writePng(180, "apple-icon.png");
