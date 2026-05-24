/** Normalize pathname for layout / theme checks */
export function normalizeSitePath(pathname: string | null): string {
  const path = (pathname ?? "").split("?")[0]?.split("#")[0] ?? "";
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

/** Homepage: transparent nav over hero. All other routes: top bar in document flow. */
export function siteNavLayout(pathname: string | null): "overlay" | "stacked" {
  return normalizeSitePath(pathname) === "/" ? "overlay" : "stacked";
}

export type SiteNavTheme = "overlay" | "ink";

/** Nav type color — white on homepage hero, dark ink on inner pages */
export function siteNavTheme(pathname: string | null): SiteNavTheme {
  return siteNavLayout(pathname) === "overlay" ? "overlay" : "ink";
}
