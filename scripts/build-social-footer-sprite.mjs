import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const source =
  process.argv[2] ??
  path.join(
    root,
    "../.cursor/projects/d-quietash/assets/c__Users_Administrator_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-39b7f38d-9217-478d-9489-ccdb57aa8d1a.png"
  );
const out = path.join(root, "public/images/generated/social-footer-reference.png");

const { width: w, height: h } = await sharp(source).metadata();
const railLeft = Math.round(w * 0.48);
const railW = w - railLeft;
const thumbTop = Math.round(h * 0.38);
const thumbH = h - thumbTop - 6;
const thumbW = Math.floor(railW / 5);
const tileSize = 400;

const composites = [];
for (let i = 0; i < 5; i++) {
  const buf = await sharp(source)
    .extract({
      left: railLeft + i * thumbW,
      top: thumbTop,
      width: thumbW,
      height: thumbH,
    })
    .resize(tileSize, tileSize, { fit: "cover" })
    .toBuffer();
  composites.push({ input: buf, left: i * tileSize, top: 0 });
}

await sharp({
  create: {
    width: tileSize * 5,
    height: tileSize,
    channels: 3,
    background: { r: 247, g: 244, b: 239 },
  },
})
  .composite(composites)
  .png()
  .toFile(out);

console.log(`Wrote ${out}`);
