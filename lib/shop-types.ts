import type { HomeBestSellerCard } from "@/data/home-redesign";

/** Filter dimension ids must match `filters.groups[].id` in shop catalog. */
export type ShopFilterTags = Partial<Record<string, readonly string[]>>;

/** PLP card overrides — merged over catalog title/line/image when rendering shop grid. */
export type ShopPlpOverride = {
  title?: string;
  scentNotes?: string;
  priceDisplay?: string;
  reviewCount?: number;
  imageSrc?: string;
  imageAlt?: string;
  imageObjectPosition?: string;
};

export type ShopProductConfig = {
  /** Shop aisle slugs (`incense`, `holders`, …) — product appears on each PLP. */
  categorySlugs: readonly string[];
  filterTags?: ShopFilterTags;
  /** Default card fields for all aisles this product appears on. */
  plp?: ShopPlpOverride;
  /** Per-aisle card overrides when the same slug needs different copy per PLP. */
  plpByCategory?: Partial<Record<string, ShopPlpOverride>>;
};

export type ShopPdpHighlightIcon = "leaf" | "hand" | "flask" | "refresh";

export type ShopProductPdp = {
  slug: string;
  breadcrumbs: readonly { label: string; href: string }[];
  title: string;
  tagline: string;
  rating: { value: number; score: string; count: number };
  priceDisplay: string;
  priceCents: number;
  description: string;
  badge: string;
  scentName: string;
  gallery: readonly string[];
  highlights: readonly { icon: ShopPdpHighlightIcon; label: string }[];
  specs: {
    burnTime: string;
    scentStrength: { label: string; filled: number; total: number };
    bestFor: string;
    perfectFor: string;
  };
  aboutScent: { body: string; imageSrc: string };
  packaging: { body: string; imageSrc: string; details?: readonly string[] };
  howToUse: readonly { title: string; body: string }[];
  safetyTips: readonly string[];
  reviews: {
    average: number;
    count: number;
    items: readonly {
      name: string;
      avatarSrc: string;
      quote: string;
    }[];
  };
  trust: readonly { icon: "truck" | "returns" | "lock"; label: string }[];
};

/** One row on the shop PLP — card fields + filter tags for sidebar logic. */
export type ShopListingProduct = HomeBestSellerCard & {
  filterTags: ShopFilterTags;
};
