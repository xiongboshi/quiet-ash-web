import fs from "node:fs";
import path from "node:path";
import type {
  ShopFilterTags,
  ShopProductConfig,
  ShopProductPdp,
} from "@/lib/shop-types";

/**
 * One JSON file per object under `data/products/<category-slug>/*.json`.
 * `category` is always the parent folder name. Optional fields drive `/objects/[slug]`.
 */
export type ProductRitualBlurb = {
  slug: string;
  /** Editorial title on object detail (falls back to ritual title). */
  title?: string;
  blurb?: string;
};

export type ProductPairOverride = {
  slug: string;
  title?: string;
  materialLine?: string;
  priceDisplay?: string;
};

export type CatalogProduct = {
  slug: string;
  title: string;
  line: string;
  /** Shown on `/objects` grid as `material — origin` when set. */
  material?: string;
  origin?: string;
  priceDisplay?: string;
  image: string;
  universe: string;
  seriesSlugs: string[];
  featured?: boolean;
  category: string;
  /** Long intro under hero title — editorial object detail. */
  description?: string;
  /** e.g. stock / batch note under description. */
  availabilityNote?: string;
  /** One line, e.g. `Ø11cm x H7cm · Approx. 280ml` */
  dimensions?: string;
  finish?: string;
  care?: string;
  capacity?: string;
  /** Thumbnail strip under hero main image (first should match hero or alternate angle). */
  gallery?: string[];
  narrativeTitle?: string;
  narrativeBody?: string;
  narrativeImage?: string;
  /** Override ritual list order + blurbs; when omitted, rituals that list this slug in MDX are used. */
  usedInRituals?: ProductRitualBlurb[];
  /** Product slugs or editorial pair rows for “pairs quietly with”. */
  pairsWith?: (string | ProductPairOverride)[];
  detailsDisclaimer?: string;
  atmosphereQuote?: string;
  atmosphereImage?: string;
  relatedEssaySlugs?: string[];
  featureBullets?: string[];
  /** Shop PLP + filter tags — see docs/SHOP-CMS-SCHEMA.md */
  shop?: ShopProductConfig;
  /** Shop PDP blocks — merged over defaults in `getShopProductPdp`. */
  shopPdp?: Partial<ShopProductPdp>;
};

const PRODUCTS_ROOT = path.join(process.cwd(), "data", "products");
const SHOP_PDP_ROOT = path.join(process.cwd(), "data", "shop-pdp");

function loadShopPdpSidecar(slug: string): Partial<ShopProductPdp> | undefined {
  const fp = path.join(SHOP_PDP_ROOT, `${slug}.json`);
  if (!fs.existsSync(fp)) return undefined;
  try {
    const raw = JSON.parse(fs.readFileSync(fp, "utf8")) as unknown;
    return parseShopPdpField(raw);
  } catch (e) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[catalog] Invalid shop PDP JSON: ${fp}`, e);
    }
    return undefined;
  }
}

function optString(raw: unknown): string | undefined {
  return typeof raw === "string" && raw.trim() ? raw.trim() : undefined;
}

function parseStringArrayField(raw: unknown): string[] | undefined {
  if (!Array.isArray(raw)) return undefined;
  const a = raw
    .filter((x): x is string => typeof x === "string")
    .map((s) => s.trim())
    .filter(Boolean);
  return a.length ? a : undefined;
}

function parseRitualBlurbs(raw: unknown): ProductRitualBlurb[] | undefined {
  if (!Array.isArray(raw)) return undefined;
  const out: ProductRitualBlurb[] = [];
  for (const item of raw) {
    if (typeof item === "string" && item.trim()) {
      out.push({ slug: item.trim() });
      continue;
    }
    if (item && typeof item === "object") {
      const o = item as Record<string, unknown>;
      const slug = typeof o.slug === "string" ? o.slug.trim() : "";
      if (!slug) continue;
      const blurb = typeof o.blurb === "string" ? o.blurb.trim() : undefined;
      const title = typeof o.title === "string" ? o.title.trim() : undefined;
      out.push({ slug, blurb, title });
    }
  }
  return out.length ? out : undefined;
}

function parsePairsWith(
  raw: unknown,
): (string | ProductPairOverride)[] | undefined {
  if (!Array.isArray(raw)) return undefined;
  const out: (string | ProductPairOverride)[] = [];
  for (const item of raw) {
    if (typeof item === "string" && item.trim()) {
      out.push(item.trim());
      continue;
    }
    if (item && typeof item === "object") {
      const o = item as Record<string, unknown>;
      const slug = typeof o.slug === "string" ? o.slug.trim() : "";
      if (!slug) continue;
      const title = typeof o.title === "string" ? o.title.trim() : undefined;
      const materialLine =
        typeof o.materialLine === "string" ? o.materialLine.trim() : undefined;
      const priceDisplay =
        typeof o.priceDisplay === "string" ? o.priceDisplay.trim() : undefined;
      out.push({ slug, title, materialLine, priceDisplay });
    }
  }
  return out.length ? out : undefined;
}

export function pairOverrideFor(
  product: CatalogProduct,
  slug: string,
): ProductPairOverride | undefined {
  const entry = product.pairsWith?.find((p) =>
    typeof p === "string" ? p === slug : p.slug === slug,
  );
  return typeof entry === "object" ? entry : undefined;
}

export function pairSlugsFromProduct(product: CatalogProduct): string[] {
  if (!product.pairsWith?.length) return [];
  return product.pairsWith
    .map((p) => (typeof p === "string" ? p : p.slug))
    .filter(Boolean);
}

function parseFilterTags(raw: unknown): ShopFilterTags | undefined {
  if (!raw || typeof raw !== "object") return undefined;
  const out: Record<string, string[]> = {};
  for (const [key, value] of Object.entries(raw)) {
    if (!Array.isArray(value)) continue;
    const ids = value
      .filter((x): x is string => typeof x === "string" && x.trim().length > 0)
      .map((s) => s.trim());
    if (ids.length) out[key] = ids;
  }
  return Object.keys(out).length ? out : undefined;
}

function parsePlpOverride(raw: unknown): ShopProductConfig["plp"] | undefined {
  if (!raw || typeof raw !== "object") return undefined;
  const o = raw as Record<string, unknown>;
  const title = optString(o.title);
  const scentNotes = optString(o.scentNotes);
  const priceDisplay = optString(o.priceDisplay);
  const imageSrc = optString(o.imageSrc);
  const imageAlt = optString(o.imageAlt);
  const imageObjectPosition = optString(o.imageObjectPosition);
  const reviewCount =
    typeof o.reviewCount === "number" && o.reviewCount >= 0
      ? Math.round(o.reviewCount)
      : undefined;
  if (
    !title &&
    !scentNotes &&
    !priceDisplay &&
    !imageSrc &&
    !imageAlt &&
    reviewCount === undefined &&
    !imageObjectPosition
  ) {
    return undefined;
  }
  return {
    ...(title ? { title } : {}),
    ...(scentNotes ? { scentNotes } : {}),
    ...(priceDisplay ? { priceDisplay } : {}),
    ...(reviewCount !== undefined ? { reviewCount } : {}),
    ...(imageSrc ? { imageSrc } : {}),
    ...(imageAlt ? { imageAlt } : {}),
    ...(imageObjectPosition ? { imageObjectPosition } : {}),
  };
}

function parseShopConfig(raw: unknown): ShopProductConfig | undefined {
  if (!raw || typeof raw !== "object") return undefined;
  const o = raw as Record<string, unknown>;
  const slugs = parseStringArrayField(o.categorySlugs);
  if (!slugs?.length) return undefined;
  const plp = parsePlpOverride(o.plp);
  const filterTags = parseFilterTags(o.filterTags);
  let plpByCategory: ShopProductConfig["plpByCategory"];
  if (o.plpByCategory && typeof o.plpByCategory === "object") {
    plpByCategory = {};
    for (const [key, value] of Object.entries(o.plpByCategory)) {
      const row = parsePlpOverride(value);
      if (row) plpByCategory[key] = row;
    }
    if (!Object.keys(plpByCategory).length) plpByCategory = undefined;
  }
  return {
    categorySlugs: slugs,
    ...(filterTags ? { filterTags } : {}),
    ...(plp ? { plp } : {}),
    ...(plpByCategory ? { plpByCategory } : {}),
  };
}

function parseShopPdpField(raw: unknown): Partial<ShopProductPdp> | undefined {
  if (!raw || typeof raw !== "object") return undefined;
  return raw as Partial<ShopProductPdp>;
}

function parseSeriesSlugs(raw: unknown): string[] {
  if (!Array.isArray(raw)) return [];
  return raw.filter(
    (x): x is string => typeof x === "string" && x.trim().length > 0,
  );
}

function readProductJson(
  filePath: string,
  category: string,
): CatalogProduct | null {
  let raw: Record<string, unknown>;
  try {
    raw = JSON.parse(fs.readFileSync(filePath, "utf8")) as Record<
      string,
      unknown
    >;
  } catch (e) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[catalog] Invalid JSON: ${filePath}`, e);
    }
    return null;
  }

  const slug =
    typeof raw.slug === "string" && raw.slug.trim()
      ? raw.slug.trim()
      : path.basename(filePath, ".json");
  const title =
    typeof raw.title === "string" && raw.title.trim()
      ? raw.title.trim()
      : slug;
  const line =
    typeof raw.line === "string" && raw.line.trim() ? raw.line.trim() : "";
  const image =
    typeof raw.image === "string" && raw.image.trim() ? raw.image.trim() : "";
  if (!line || !image) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[catalog] Missing line/image: ${filePath}`);
    }
    return null;
  }

  const priceDisplay =
    typeof raw.priceDisplay === "string" && raw.priceDisplay.trim()
      ? raw.priceDisplay.trim()
      : undefined;
  const universe =
    typeof raw.universe === "string" && raw.universe.trim()
      ? raw.universe.trim()
      : "ritual";
  const seriesSlugs = parseSeriesSlugs(raw.seriesSlugs);
  const featured = raw.featured === true;
  const material =
    typeof raw.material === "string" && raw.material.trim()
      ? raw.material.trim()
      : undefined;
  const origin =
    typeof raw.origin === "string" && raw.origin.trim()
      ? raw.origin.trim()
      : undefined;

  const description = optString(raw.description);
  const availabilityNote = optString(raw.availabilityNote);
  const dimensions = optString(raw.dimensions);
  const finish = optString(raw.finish);
  const care = optString(raw.care);
  const capacity = optString(raw.capacity);
  const gallery = parseStringArrayField(raw.gallery);
  const narrativeTitle = optString(raw.narrativeTitle);
  const narrativeBody = optString(raw.narrativeBody);
  const narrativeImage = optString(raw.narrativeImage);
  const usedInRituals = parseRitualBlurbs(raw.usedInRituals);
  const pairsWith = parsePairsWith(raw.pairsWith);
  const detailsDisclaimer = optString(raw.detailsDisclaimer);
  const atmosphereQuote = optString(raw.atmosphereQuote);
  const atmosphereImage = optString(raw.atmosphereImage);
  const relatedEssaySlugs = parseStringArrayField(raw.relatedEssaySlugs);
  const featureBullets = parseStringArrayField(raw.featureBullets);
  const shop = parseShopConfig(raw.shop);
  const shopPdp =
    parseShopPdpField(raw.shopPdp) ?? loadShopPdpSidecar(slug);

  return {
    slug,
    title,
    line,
    ...(material ? { material } : {}),
    ...(origin ? { origin } : {}),
    ...(priceDisplay ? { priceDisplay } : {}),
    image,
    universe,
    seriesSlugs,
    ...(featured ? { featured: true } : {}),
    category,
    ...(description ? { description } : {}),
    ...(availabilityNote ? { availabilityNote } : {}),
    ...(dimensions ? { dimensions } : {}),
    ...(finish ? { finish } : {}),
    ...(care ? { care } : {}),
    ...(capacity ? { capacity } : {}),
    ...(gallery ? { gallery } : {}),
    ...(narrativeTitle ? { narrativeTitle } : {}),
    ...(narrativeBody ? { narrativeBody } : {}),
    ...(narrativeImage ? { narrativeImage } : {}),
    ...(usedInRituals ? { usedInRituals } : {}),
    ...(pairsWith ? { pairsWith } : {}),
    ...(detailsDisclaimer ? { detailsDisclaimer } : {}),
    ...(atmosphereQuote ? { atmosphereQuote } : {}),
    ...(atmosphereImage ? { atmosphereImage } : {}),
    ...(relatedEssaySlugs ? { relatedEssaySlugs } : {}),
    ...(featureBullets ? { featureBullets } : {}),
    ...(shop ? { shop } : {}),
    ...(shopPdp ? { shopPdp } : {}),
  };
}

function listProductJsonPaths(): { fp: string; category: string; mtime: number }[] {
  if (!fs.existsSync(PRODUCTS_ROOT)) return [];
  const out: { fp: string; category: string; mtime: number }[] = [];
  for (const ent of fs.readdirSync(PRODUCTS_ROOT, { withFileTypes: true })) {
    if (!ent.isDirectory()) continue;
    if (ent.name.startsWith("_") || ent.name.startsWith(".")) continue;
    const dir = path.join(PRODUCTS_ROOT, ent.name);
    for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
      if (!f.isFile() || !f.name.endsWith(".json")) continue;
      const fp = path.join(dir, f.name);
      let mtime = 0;
      try {
        mtime = fs.statSync(fp).mtimeMs;
      } catch {
        mtime = 0;
      }
      out.push({ fp, category: ent.name, mtime });
    }
  }
  return out.sort((a, b) => a.fp.localeCompare(b.fp));
}

function loadAllProductsDeduped(): CatalogProduct[] {
  const rows = listProductJsonPaths();
  const bySlug = new Map<
    string,
    { product: CatalogProduct; mtime: number; fp: string }
  >();
  for (const { fp, category, mtime } of rows) {
    const product = readProductJson(fp, category);
    if (!product) continue;
    const prev = bySlug.get(product.slug);
    if (prev && process.env.NODE_ENV === "development") {
      console.warn(
        `[catalog] Duplicate slug "${product.slug}" — keeping newer mtime.\n  was: ${prev.fp}\n  now: ${fp}`,
      );
    }
    if (!prev || mtime >= prev.mtime) {
      bySlug.set(product.slug, { product, mtime, fp });
    }
  }
  return [...bySlug.values()]
    .map((r) => r.product)
    .sort((a, b) => {
      if (a.category !== b.category) return a.category.localeCompare(b.category);
      return a.title.localeCompare(b.title);
    });
}

let cache: CatalogProduct[] | null = null;

function allProducts(): CatalogProduct[] {
  if (process.env.NODE_ENV === "development") {
    return loadAllProductsDeduped();
  }
  if (!cache) cache = loadAllProductsDeduped();
  return cache;
}

/** Folders under `data/products/` that contain at least one `.json` object. */
export function getProductCategorySlugs(): string[] {
  const seen = new Set<string>();
  for (const p of allProducts()) seen.add(p.category);
  return [...seen].sort();
}

export function getProductsInCategory(categorySlug: string): CatalogProduct[] {
  return allProducts()
    .filter((p) => p.category === categorySlug)
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getAllProducts(): CatalogProduct[] {
  return [...allProducts()];
}

export function getProductBySlug(slug: string): CatalogProduct | undefined {
  return allProducts().find((p) => p.slug === slug);
}

export function getFeaturedProducts(limit = 6): CatalogProduct[] {
  return allProducts()
    .filter((p) => p.featured)
    .slice(0, limit);
}

/** Homepage featured rail — same as `getFeaturedProducts` with default cap. */
export function getFeaturedForHome(limit = 4): CatalogProduct[] {
  return getFeaturedProducts(limit);
}

export function getProductsForSeries(seriesSlug: string): CatalogProduct[] {
  return allProducts().filter((p) => p.seriesSlugs.includes(seriesSlug));
}

export function getRelatedProductsForEssay(
  seriesSlug: string,
  limit = 3,
): CatalogProduct[] {
  return getProductsForSeries(seriesSlug).slice(0, limit);
}

/** Object detail “pairs quietly with” — same category first, then any others. */
export function getPairedProductsFor(
  product: CatalogProduct,
  limit = 3,
): CatalogProduct[] {
  const all = allProducts().filter((p) => p.slug !== product.slug);
  const same = all.filter((p) => p.category === product.category);
  const rest = all.filter((p) => p.category !== product.category);
  const ordered = [...same, ...rest];
  const pairSlugs = pairSlugsFromProduct(product);
  if (pairSlugs.length) {
    const map = new Map(allProducts().map((p) => [p.slug, p]));
    const picked: CatalogProduct[] = [];
    for (const s of pairSlugs) {
      const p = map.get(s);
      if (p && p.slug !== product.slug) picked.push(p);
      if (picked.length >= limit) break;
    }
    if (picked.length) return picked.slice(0, limit);
  }
  return ordered.slice(0, limit);
}

export function formatProductCategoryLabel(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}
