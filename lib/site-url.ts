const DEFAULT_SITE_URL = "https://www.quietash.life";

/** Canonical origin for sitemap, robots, and metadata (no trailing slash). */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
  return raw.replace(/\/$/, "");
}
