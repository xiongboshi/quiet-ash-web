import {
  DEFAULT_SHOP_CATEGORY_SLUG,
  type ShopCatalogSlug,
} from "@/data/shop-catalog";
import { getShopCategory } from "@/lib/shop-catalog";
import type {
  ShopFilterOption,
  ShopMoodHomeSection,
} from "@/data/shop-catalog-types";
import { shopMoodFilterHref } from "@/lib/shop-filter-url";

const MOOD_GROUP_ID = "mood";

const DEFAULT_MOOD_IMAGE =
  "/images/generated/objects-essence-hero.png";

export type ShopMoodHomeCard = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  cta: string;
};

export type ResolvedShopMoodHomeSection = ShopMoodHomeSection & {
  cards: ShopMoodHomeCard[];
};

function moodOptionToCard(
  option: ShopFilterOption,
  pathname: string,
): ShopMoodHomeCard {
  const home = option.homeCard;
  const title = option.label;
  return {
    id: option.id,
    title,
    description:
      home?.description ??
      `Find scents crafted for ${title.toLowerCase()}.`,
    imageSrc: home?.imageSrc ?? DEFAULT_MOOD_IMAGE,
    imageAlt: home?.imageAlt ?? title,
    href: shopMoodFilterHref(option.id, pathname),
    cta:
      home?.ctaLabel ?? `SHOP ${title.toUpperCase()} →`,
  };
}

/** Homepage “Shop by need” — driven by `filters.groups` mood options in shop catalog. */
export function getShopMoodHomeSection(
  categorySlug: ShopCatalogSlug = DEFAULT_SHOP_CATEGORY_SLUG,
): ResolvedShopMoodHomeSection | null {
  const category = getShopCategory(categorySlug);
  const moodHome = category.moodHome;
  if (!moodHome) return null;

  const moodGroup = category.filters.groups.find((g) => g.id === MOOD_GROUP_ID);
  if (!moodGroup?.options.length) return null;

  return {
    ...moodHome,
    cards: moodGroup.options.map((option) =>
      moodOptionToCard(option, category.pathname),
    ),
  };
}

export function getMoodFilterOptionIds(
  categorySlug: ShopCatalogSlug = DEFAULT_SHOP_CATEGORY_SLUG,
): string[] {
  const category = getShopCategory(categorySlug);
  const moodGroup = category.filters.groups.find((g) => g.id === MOOD_GROUP_ID);
  return moodGroup?.options.map((o) => o.id) ?? [];
}
