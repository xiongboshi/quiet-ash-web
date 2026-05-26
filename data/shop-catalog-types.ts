/** Static shop aisle config — products come from `data/products/*.json` (`shop` field). */

/** Card copy for homepage “Shop by need” (mood group options). */
export type ShopFilterOptionHomeCard = {
  imageSrc: string;
  imageAlt?: string;
  description: string;
  /** Defaults to `SHOP {label} →`. */
  ctaLabel?: string;
};

/** One selectable value inside a filter group. */
export type ShopFilterOption = {
  id: string;
  label: string;
  count: number;
  /** When set, option appears on `/` mood strip; omit only if the option should not be promoted. */
  homeCard?: ShopFilterOptionHomeCard;
};

/** Copy for the homepage mood strip — cards come from the `mood` filter group. */
export type ShopMoodHomeSection = {
  heading: string;
  subheading: string;
  exploreAll: { label: string; href: string };
};

/**
 * Filter dimension for a category PLP (e.g. scent family, price).
 * Add a group here — mobile tabs and desktop accordions update automatically.
 */
export type ShopFilterGroup = {
  id: string;
  /** Desktop sidebar heading (uppercase in UI). */
  label: string;
  /** Short mobile tab label; falls back to first word of `label`. */
  tabLabel?: string;
  defaultOpen?: boolean;
  /** Mobile option grid columns (default 2). */
  mobileColumns?: 1 | 2;
  options: ShopFilterOption[];
};

export type ShopCategoryFilters = {
  heading: string;
  clearLabel: string;
  groups: ShopFilterGroup[];
};

export type ShopCategoryValueBarItem = {
  id: string;
  title: string;
  description: string;
  icon: "hand" | "leaf" | "returns" | "shipping";
};

/** One shop aisle (incense, holders, tea, …). Register in `data/shop-catalog.ts`. */
export type ShopCategoryDefinition = {
  /** Stable id — used in code and optional URL segment `/shop/[slug]`. */
  slug: string;
  /** Canonical listing URL (`/shop` for the default aisle). */
  pathname: string;
  navLabel: string;
  hero: {
    title: string;
    descriptionLines: readonly string[];
    imageSrc: string;
    imageAlt: string;
  };
  breadcrumbs: readonly { label: string; href: string }[];
  filters: ShopCategoryFilters;
  listing: {
    title: string;
    sortOptions: readonly string[];
  };
  valueBar: readonly ShopCategoryValueBarItem[];
  /** Homepage “Shop by need” — lists every option in the `mood` filter group. */
  moodHome?: ShopMoodHomeSection;
};
