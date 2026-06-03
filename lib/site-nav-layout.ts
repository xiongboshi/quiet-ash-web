import { isEvergreenGuideSlug } from "@/data/evergreen-guides";
import { isJournalQaGuideArticleSlug } from "@/data/journal-qa-guide-article-slugs";
import { isJournalTopicHubPathSegment } from "@/data/journal-topic-hubs";
import { isShopCategorySegment } from "@/lib/shop-catalog";
import { JOURNAL_INDEX, SHOP_INDEX } from "@/lib/site-paths";

/** Normalize pathname for layout / theme checks */
export function normalizeSitePath(pathname: string | null): string {
  const path = (pathname ?? "").split("?")[0]?.split("#")[0] ?? "";
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

/** Evergreen guide — e.g. /guides/sleep-guide */
export function isEvergreenGuidePath(pathname: string | null): boolean {
  const path = normalizeSitePath(pathname);
  if (!path.startsWith("/guides/")) return false;
  const segment = path.slice("/guides/".length).split("/")[0] ?? "";
  return segment.length > 0 && isEvergreenGuideSlug(segment);
}

/** Topic hub — e.g. /journal/better-sleep */
export function isJournalTopicHubPath(pathname: string | null): boolean {
  const path = normalizeSitePath(pathname);
  if (!path.startsWith("/journal/")) return false;
  const segment = path.slice("/journal/".length).split("/")[0] ?? "";
  return segment.length > 0 && isJournalTopicHubPathSegment(segment);
}

/** Journal article detail — e.g. /journal/incense-patience (not topic hubs). */
export function isJournalArticlePath(pathname: string | null): boolean {
  const path = normalizeSitePath(pathname);
  if (!/^\/journal\/[^/]+$/.test(path)) return false;
  return !isJournalTopicHubPath(pathname);
}

/** Hand-authored Q&A guide at `/journal/{slug}` (not topic hubs). */
export function isJournalGuideArticlePath(pathname: string | null): boolean {
  const path = normalizeSitePath(pathname);
  if (!/^\/journal\/[^/]+$/.test(path)) return false;
  const slug = path.slice("/journal/".length);
  return isJournalQaGuideArticleSlug(slug);
}

/** Shop product PDP — e.g. /shop/wood-tray (not category PLP). */
export function isShopProductPdpPath(pathname: string | null): boolean {
  const path = normalizeSitePath(pathname);
  if (!path.startsWith("/shop/")) return false;
  const segment = path.slice("/shop/".length).split("/")[0] ?? "";
  return segment.length > 0 && !isShopCategorySegment(segment);
}

/** Cart page */
export function isCartPath(pathname: string | null): boolean {
  return normalizeSitePath(pathname) === "/cart";
}

/** Mobile nav: back in drawer on detail routes (see qa-home-header mobile panel). */
export function isMobileNavBackLeadingPath(pathname: string | null): boolean {
  return (
    isJournalTopicHubPath(pathname) ||
    isJournalArticlePath(pathname) ||
    isEvergreenGuidePath(pathname) ||
    isShopProductPdpPath(pathname) ||
    isCartPath(pathname)
  );
}

/**
 * Topic hub, evergreen guide, and Q&A guide articles: leading slot is history back
 * (not the hamburger). Keeps overlay hero nav aligned with editorial detail UX.
 */
export function isMobileNavLeadingBackOnlyPath(pathname: string | null): boolean {
  return (
    isJournalTopicHubPath(pathname) ||
    isEvergreenGuidePath(pathname) ||
    isJournalGuideArticlePath(pathname)
  );
}

/** Fallback when `history.back()` is unavailable. */
export function mobileNavBackFallbackHref(pathname: string | null): string {
  if (isJournalTopicHubPath(pathname)) return JOURNAL_INDEX;
  if (isEvergreenGuidePath(pathname)) return JOURNAL_INDEX;
  if (isJournalGuideArticlePath(pathname)) return JOURNAL_INDEX;
  if (isJournalArticlePath(pathname)) return JOURNAL_INDEX;
  if (isShopProductPdpPath(pathname)) return SHOP_INDEX;
  if (isCartPath(pathname)) return "/";
  return SHOP_INDEX;
}

/** Routes with full-bleed hero under transparent overlay nav (not homepage). */
export function isOverlayHeroPath(pathname: string | null): boolean {
  const path = normalizeSitePath(pathname);
  if (path === "/") return false;
  if (path === "/about" || path === "/journal") return true;
  if (path.startsWith("/journal/")) return true;
  if (isEvergreenGuidePath(pathname)) return true;
  if (path.startsWith("/moods/")) return true;
  return false;
}

/** Homepage + overlay-hero pages: nav over content. Cart, PDP, text pages: stacked bar. */
export function siteNavLayout(pathname: string | null): "overlay" | "stacked" {
  const path = normalizeSitePath(pathname);
  if (path === "/" || isOverlayHeroPath(pathname)) return "overlay";
  return "stacked";
}

export type SiteNavTheme = "overlay" | "ink";

/** Dark type on light hero scrims (home + overlay-hero pages). */
export function siteNavTheme(pathname: string | null): SiteNavTheme {
  const path = normalizeSitePath(pathname);
  if (path === "/" || isOverlayHeroPath(pathname)) return "overlay";
  return "ink";
}
