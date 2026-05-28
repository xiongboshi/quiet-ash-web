/**
 * Homepage BEST SELLERS — single place to curate `#best-sellers`.
 *
 * ## Mental model
 * - Products live in normal shop aisles (`data/products/**` → `shop.categorySlugs`).
 * - This file only picks which slugs appear on the homepage and optional card copy.
 * - Same SKU as `/shop` PLP and PDP — never a separate catalog.
 *
 * ## To add / remove / reorder
 * 1. Ensure the product JSON exists and has `shop.categorySlugs` (e.g. `incense`, `holders`).
 * 2. Add or remove a row below (order = left-to-right on homepage).
 * 3. Optional `card` overrides title, notes, image for the homepage band only.
 *    Price always comes from the same rules as `/shop` (incense PLP) — do not set `priceDisplay` here.
 *
 * ## Do not
 * - Add a `best-sellers` (or other) category slug for homepage use.
 * - Duplicate product data here — only slug + optional card overrides.
 */
import { SHOP_INDEX } from "@/lib/site-paths";
import type { ShopHomeBestSellersSection } from "@/data/shop-catalog-types";
import type { ShopPlpOverride } from "@/lib/shop-types";

/** Section chrome — heading and “view all” link. */
export const homeBestSellersSection: ShopHomeBestSellersSection = {
  heading: "BEST SELLERS",
  viewAllLabel: "VIEW ALL PRODUCTS",
  viewAllHref: SHOP_INDEX,
};

export type HomeBestSellersManifestEntry = {
  /** Must match `slug` in `data/products/<folder>/<slug>.json`. */
  slug: string;
  /** Homepage card-only overrides. Omit to use shop PLP fields. Never set `priceDisplay` (use catalog/PLP). */
  card?: Omit<ShopPlpOverride, "homeOrder" | "priceDisplay">;
};

/**
 * Curated list — top to bottom on homepage.
 * Slugs reference existing shop products from other categories.
 */
export const homeBestSellersManifest: readonly HomeBestSellersManifestEntry[] = [
  {
    slug: "wood-tray",
    card: {
      title: "Citrus Grove",
      scentNotes: "Lemon · Bergamot · Mandarin",
      reviewCount: 276,
      imageSrc: "/images/generated/best-sellers/citrus-grove-v5.webp",
      imageAlt: "Citrus Grove incense",
    },
  },
  {
    slug: "brass-incense-stand",
    card: {
      title: "White Jasmine",
      scentNotes: "Jasmine · Green Leaves · Lily",
      reviewCount: 312,
      imageSrc: "/images/generated/best-sellers/white-jasmine-v3.webp",
      imageAlt: "White Jasmine incense",
    },
  },
  {
    slug: "small-agarwood-box",
    card: {
      title: "Sandalwood & Fig",
      scentNotes: "Sandalwood · Fig · Amber",
      reviewCount: 267,
      imageSrc: "/images/generated/best-sellers/sandalwood-night-v2.webp",
      imageAlt: "Sandalwood and fig incense",
    },
  },
  {
    slug: "paper-incense-sleeve",
    card: {
      title: "Lavender & Linen",
      scentNotes: "Lavender · Cotton · Soft Musk",
      reviewCount: 294,
      imageSrc: "/images/generated/best-sellers/lavender-field-v3.webp",
      imageAlt: "Lavender and linen incense",
    },
  },
  {
    slug: "ceramic-tea-cup",
    card: {
      title: "Rose Garden",
      scentNotes: "Rose · Geranium · Palmarosa",
      reviewCount: 246,
      imageSrc: "/images/generated/best-sellers/rose-garden-v3.webp",
      imageAlt: "Rose Garden incense",
    },
  },
];
