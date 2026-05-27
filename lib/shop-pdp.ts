import type { CatalogProduct } from "@/lib/catalog";
import { formatPriceDisplay, parsePriceDisplay } from "@/lib/cart/pricing";
import { freeShippingOnOrdersOverCopy } from "@/lib/shipping-policy";
import { SHOP_INDEX, shopPath } from "@/lib/site-paths";
import type { ShopProductPdp } from "@/lib/shop-types";

const DEFAULT_HIGHLIGHTS: ShopProductPdp["highlights"] = [
  { icon: "leaf", label: "100% Natural Ingredients" },
  { icon: "hand", label: "Handmade in Small Batches" },
  { icon: "flask", label: "No Harsh Chemicals" },
  { icon: "refresh", label: "Long-Lasting Fragrance" },
];

const DEFAULT_HOW_TO_USE: ShopProductPdp["howToUse"] = [
  {
    title: "Light the tip",
    body: "Hold the stick at a slight angle and light the tip.",
  },
  {
    title: "Let it burn",
    body: "Let it burn for 5–10 seconds, then gently blow out the flame.",
  },
  {
    title: "Place & enjoy",
    body: "Place in an incense holder and enjoy the fragrance.",
  },
];

const DEFAULT_SAFETY: ShopProductPdp["safetyTips"] = [
  "Use in a well-ventilated area.",
  "Keep away from flammable items.",
  "Keep out of reach of children and pets.",
];

const DEFAULT_REVIEWS: ShopProductPdp["reviews"] = {
  average: 4.8,
  count: 120,
  items: [],
};

const DEFAULT_SPECS: ShopProductPdp["specs"] = {
  burnTime: "About 15–20 min per stick",
  scentStrength: { label: "Medium", filled: 3, total: 5 },
  bestFor: "Calm, Focus, Evening",
  perfectFor: "Living Room, Bedroom, Desk",
};

function defaultTrust(): ShopProductPdp["trust"] {
  return [
    { icon: "truck", label: freeShippingOnOrdersOverCopy() },
    { icon: "returns", label: "30-day returns hassle free" },
    { icon: "lock", label: "Secure payment SSL encrypted" },
  ];
}

function buildDefaultPdp(product: CatalogProduct): ShopProductPdp {
  const rawPrice = product.priceDisplay ?? "$18.00";
  const priceCents = parsePriceDisplay(rawPrice) || 1800;
  const priceDisplay = formatPriceDisplay(rawPrice);

  return {
    slug: product.slug,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Shop", href: SHOP_INDEX },
      { label: product.title, href: shopPath(product.slug) },
    ],
    title: product.title,
    tagline: product.line,
    rating: { value: 4.8, score: "4.8", count: 120 },
    priceDisplay,
    priceCents,
    description: product.description ?? product.line,
    badge: "HANDMADE INCENSE",
    scentName: product.title,
    gallery: product.gallery?.length ? product.gallery : [product.image],
    highlights: DEFAULT_HIGHLIGHTS,
    specs: DEFAULT_SPECS,
    aboutScent: {
      body: product.description ?? product.line,
      imageSrc: product.image,
    },
    packaging: {
      body: "Thoughtful cream paper packaging — minimal on the shelf, ready to gift.",
      imageSrc: product.image,
    },
    howToUse: DEFAULT_HOW_TO_USE,
    safetyTips: DEFAULT_SAFETY,
    reviews: DEFAULT_REVIEWS,
    trust: defaultTrust(),
  };
}

/** Merge JSON `shopPdp` over catalog defaults (P2 — no PDP_BY_SLUG). */
export function getShopProductPdp(product: CatalogProduct): ShopProductPdp {
  const base = buildDefaultPdp(product);
  const custom = product.shopPdp;
  if (!custom) return base;

  const merged = {
    ...base,
    ...custom,
    rating: { ...base.rating, ...custom.rating },
    specs: { ...base.specs, ...custom.specs },
    aboutScent: { ...base.aboutScent, ...custom.aboutScent },
    packaging: { ...base.packaging, ...custom.packaging },
    reviews: { ...base.reviews, ...custom.reviews },
    gallery: custom.gallery?.length ? custom.gallery : base.gallery,
    highlights: custom.highlights?.length ? custom.highlights : base.highlights,
    howToUse: custom.howToUse?.length ? custom.howToUse : base.howToUse,
    safetyTips: custom.safetyTips?.length ? custom.safetyTips : base.safetyTips,
    trust: custom.trust?.length ? custom.trust : base.trust,
    breadcrumbs: custom.breadcrumbs?.length ? custom.breadcrumbs : base.breadcrumbs,
  };

  return {
    ...merged,
    priceDisplay: formatPriceDisplay(merged.priceDisplay),
    priceCents:
      custom.priceDisplay !== undefined
        ? parsePriceDisplay(custom.priceDisplay) || merged.priceCents
        : merged.priceCents,
  };
}
