/**
 * Editorial list config — slugs must exist under `content/essays/**`.
 * Resolved at runtime via `lib/essays`.
 */
export const homeEditorialSlugs = [
  "why-scholars-burned-incense",
  "night-incense-ritual",
  "what-is-agarwood",
] as const;

export type HomeEditorialSlug = (typeof homeEditorialSlugs)[number];
