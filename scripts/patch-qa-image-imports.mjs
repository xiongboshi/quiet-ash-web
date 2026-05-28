/**
 * Point next/image imports at QaImage (alias keeps JSX as <Image />).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const IMPORT_DEFAULT =
  'import { QaImage as Image } from "@/components/ui/qa-image";';
const IMPORT_NAMED_RE =
  /import\s+Image\s*,\s*\{([^}]+)\}\s*from\s*["']next\/image["'];?/;
const IMPORT_DEFAULT_RE = /import\s+Image\s+from\s*["']next\/image["'];?/;

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      if (name === "node_modules" || name === ".next") continue;
      walk(full, out);
    } else if (/\.(tsx|ts)$/.test(name)) out.push(full);
  }
  return out;
}

let changed = 0;

for (const dir of ["components", "app"]) {
  for (const file of walk(path.join(root, dir))) {
    if (file.includes(`${path.sep}ui${path.sep}qa-image.tsx`)) continue;
    let text = fs.readFileSync(file, "utf8");
    if (!text.includes("next/image")) continue;

    const named = text.match(IMPORT_NAMED_RE);
    if (named) {
      const names = named[1].trim();
      text = text.replace(
        IMPORT_NAMED_RE,
        `import { QaImage as Image, ${names} } from "@/components/ui/qa-image";`,
      );
    } else if (IMPORT_DEFAULT_RE.test(text)) {
      text = text.replace(IMPORT_DEFAULT_RE, IMPORT_DEFAULT);
    } else {
      continue;
    }

    fs.writeFileSync(file, text);
    changed++;
    console.log(path.relative(root, file).replace(/\\/g, "/"));
  }
}

console.log(`Patched ${changed} files.`);
