/**
 * Ritual editorial ordering — slugs must exist as `content/rituals/*.mdx`.
 * Bodies and metadata live in content files for future CMS / Contentlayer.
 */

export const homeRitualSlugs = [
  "incense-before-writing",
  "evening-room-ritual",
  "tea-after-rain",
  "smoke-and-silence",
  "why-agarwood-matters",
  "quiet-desk-ritual",
] as const;

export type HomeRitualSlug = (typeof homeRitualSlugs)[number];

export type { Ritual, RitualMeta, RitualStep, ObjectsSectionSpec } from "@/lib/rituals";
