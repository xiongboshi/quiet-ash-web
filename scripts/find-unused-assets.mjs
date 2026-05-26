import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");
const ignoreDirs = new Set(["node_modules", ".next", ".git", "public", ".cursor"]);

function walkImages(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkImages(p, acc);
    else if (/\.(png|jpe?g|webp|svg|gif|ico)$/i.test(e.name)) acc.push(p);
  }
  return acc;
}

function readSourceFiles(dir, files = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignoreDirs.has(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) readSourceFiles(p, files);
    else if (/\.(ts|tsx|js|jsx|json|md|mdx|css|html|mjs)$/i.test(e.name)) {
      files.push(p);
    }
  }
  return files;
}

const refs = new Set();
const corpusParts = [];

function addRef(raw) {
  if (!raw || typeof raw !== "string") return;
  const cleaned = raw.split("?")[0].trim();
  if (!cleaned.startsWith("/images/") && !cleaned.startsWith("/textures/")) return;
  refs.add(cleaned);
}

const pathPatterns = [
  /["'`](\/(?:images|textures)\/[^"'`\s)]+?\.(?:png|jpe?g|webp|svg|gif|ico))(?:\?[^"'`\s)]*)?["'`]/gi,
  /url\(\s*["']?(\/(?:images|textures)\/[^"')\s#]+)/gi,
  /(?:cover|coverImage|imageSrc|backgroundSrc|avatarSrc|hero|lifestyleImage|narrativeImage|atmosphereImage|intro_aside_image|introAsideImage)\s*:\s*(\/(?:images|textures)\/[^\s#]+)/gi,
  /^\s*image\s*:\s*(\/(?:images|textures)\/[^\s#]+)/gim,
  /^\s*-\s*(\/(?:images|textures)\/[^\s#]+)/gim,
  /(?:publicPath|outfile)\s*:\s*["']?(?:public)?(\/(?:images|textures)\/[^\s"'#]+)/gi,
  /(?:publicPath|outfile)\s*:\s*["']?public(\/(?:images|textures)\/[^\s"'#]+)/gi,
];

for (const file of readSourceFiles(root)) {
  let text;
  try {
    text = fs.readFileSync(file, "utf8");
  } catch {
    continue;
  }
  corpusParts.push(text);
  for (const re of pathPatterns) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(text))) {
      addRef(m[1].startsWith("/") ? m[1] : `/${m[1].replace(/^\/+/, "")}`);
    }
  }
}

const corpus = corpusParts.join("\n");

// Dynamic fallbacks: essay cards without cover use `/images/collections/{series}.svg`
for (const m of corpus.matchAll(/^\s*series:\s*([a-z0-9-]+)\s*$/gim)) {
  addRef(`/images/collections/${m[1]}.svg`);
}

// Basename references (e.g. assetBasename in prompt files)
const images = walkImages(publicDir);
for (const abs of images) {
  const base = path.basename(abs);
  if (corpus.includes(base)) addRef(`/${path.relative(publicDir, abs).split(path.sep).join("/")}`);
}

const unused = [];
const used = [];

for (const abs of images) {
  const rel = `/${path.relative(publicDir, abs).split(path.sep).join("/")}`;
  if (refs.has(rel)) used.push(rel);
  else unused.push(rel);
}

const outPath = path.join(root, "scripts", ".unused-assets-report.txt");
fs.writeFileSync(
  outPath,
  [
    `REFERENCES ${refs.size}`,
    `IMAGES ${images.length}`,
    `USED ${used.length}`,
    `UNUSED ${unused.length}`,
    "",
    ...unused.sort(),
  ].join("\n"),
);

console.log(fs.readFileSync(outPath, "utf8"));
