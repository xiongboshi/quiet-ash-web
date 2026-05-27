import { isShopCategorySegment } from "@/lib/shop-catalog";
import { JOURNAL_INDEX, SHOP_INDEX } from "@/lib/site-paths";

/** Normalize pathname for layout / theme checks */
export function normalizeSitePath(pathname: string | null): string {
  const path = (pathname ?? "").split("?")[0]?.split("#")[0] ?? "";
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

/** Shop PLP/category heroes — full-bleed image with nav over the photo (not product PDP). */
export function isShopCategoryHeroPath(pathname: string | null): boolean {
  const path = normalizeSitePath(pathname);
  if (path === "/shop") return true;
  if (!path.startsWith("/shop/")) return false;
  const segment = path.slice("/shop/".length).split("/")[0] ?? "";
  return segment.length > 0 && isShopCategorySegment(segment);
}

/** Journal article detail — e.g. /journal/incense-patience */
export function isJournalArticlePath(pathname: string | null): boolean {
  const path = normalizeSitePath(pathname);
  return /^\/journal\/[^/]+$/.test(path);
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

/** Mobile nav: back on the leading edge instead of menu. */
export function isMobileNavBackLeadingPath(pathname: string | null): boolean {
  return (
    isJournalArticlePath(pathname) ||
    isShopProductPdpPath(pathname) ||
    isCartPath(pathname)
  );
}

/** Mobile detail nav: hide cart icon in the bar (journal + cart page; shop PDP keeps cart). */
export function isMobileNavCartHiddenPath(pathname: string | null): boolean {
  return isJournalArticlePath(pathname) || isCartPath(pathname);
}

/** Fallback when `history.back()` is unavailable. */
export function mobileNavBackFallbackHref(pathname: string | null): string {
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
  if (isShopCategoryHeroPath(pathname)) return true;
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
