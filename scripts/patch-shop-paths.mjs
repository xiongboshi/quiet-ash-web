import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const files = [
  "lib/rituals.ts",
  "components/mood/mood-header.tsx",
  "components/mood/mood-hero-nav.tsx",
  "components/mood/mood-best-sellers.tsx",
  "components/cart/cart-line-item.tsx",
  "components/cart/cart-empty.tsx",
  "components/cart/cart-recommendations.tsx",
  "components/objects/object-catalog-link-columns.tsx",
  "components/objects/object-detail-layout.tsx",
  "components/objects/object-purchase-actions.tsx",
  "components/rituals/ritual-editorial-layout.tsx",
  "components/ui/ProductCard.tsx",
  "components/editorial/editorial-product-pair.tsx",
  "app/(site)/objects/page.tsx",
  "app/(site)/objects/[slug]/page.tsx",
];

const importLine =
  'import { SHOP_INDEX, shopPath } from "@/lib/site-paths";\n';

for (const rel of files) {
  const f = path.join(root, rel);
  let c = fs.readFileSync(f, "utf8");
  const orig = c;

  c = c.replace(/href=\{`\/objects\/\$\{([^}]+)\}`\}/g, "href={shopPath($1)}");
  c = c.replace(/href="\/objects"/g, "href={SHOP_INDEX}");
  c = c.replace(/href='\/objects'/g, "href={SHOP_INDEX}");
  c = c.replace(/buyHref = "\/objects"/g, "buyHref = SHOP_INDEX");
  c = c.replace(/fallbackHref="\/objects"/g, "fallbackHref={SHOP_INDEX}");
  c = c.replace(/ctaHref: "\/objects"/g, "ctaHref: SHOP_INDEX");
  c = c.replace(
    /alternates: \{ canonical: "\/objects" \}/g,
    "alternates: { canonical: SHOP_INDEX }",
  );
  c = c.replace(/canonical: `\/objects\/\$\{slug\}`/g, "canonical: shopPath(slug)");
  c = c.replace(
    /const href = `\/objects\/\$\{item\.slug\}`;/g,
    "const href = shopPath(item.slug);",
  );

  if (
    c !== orig &&
    !c.includes('from "@/lib/site-paths"')
  ) {
    const m = c.match(/^import .+ from .+;\n/m);
    c = m ? c.replace(m[0], m[0] + importLine) : importLine + c;
  }

  if (c !== orig) {
    fs.writeFileSync(f, c);
    console.log("patched", rel);
  }
}
