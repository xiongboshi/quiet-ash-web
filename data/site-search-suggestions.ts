import {
  journalDiscoveryExploreTopics,
  journalDiscoverySearchIntents,
} from "@/data/journal-index-discovery";
import { siteSearchShopProductNames } from "@/data/site-search-shop-products";
import { listShopCategoriesForShop } from "@/lib/shop-catalog";
import { shopPath } from "@/lib/site-paths";

export type SiteSearchSuggestionLink = {
  label: string;
  href: string;
};

/** Shop aisles — from shop catalog. */
export function getSiteSearchProductCategories(): SiteSearchSuggestionLink[] {
  return listShopCategoriesForShop().map((category) => ({
    label: category.navLabel ?? category.hero.title,
    href: category.pathname,
  }));
}

/** Shop quick picks — product names only (categories live in `getSiteSearchProductCategories`). */
export function getSiteSearchProductHints(): SiteSearchSuggestionLink[] {
  return siteSearchShopProductNames.map((product) => ({
    label: product.title,
    href: shopPath(product.slug),
  }));
}

/** Journal topic hubs — discovery pills. */
export function getSiteSearchArticleTopics(): SiteSearchSuggestionLink[] {
  return journalDiscoveryExploreTopics.map((topic) => ({
    label: topic.label,
    href: topic.href,
  }));
}

/** Article / guide search intents. */
export function getSiteSearchArticleHints(): SiteSearchSuggestionLink[] {
  return journalDiscoverySearchIntents.map((item) => ({
    label: item.label,
    href: item.href,
  }));
}
