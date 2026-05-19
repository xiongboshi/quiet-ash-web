/**
 * Ritual editorial ordering — slugs must exist as `content/rituals/*.mdx`.
 * Bodies and metadata live in content files for future CMS / Contentlayer.
 */

export const homeRitualSlugs = [
  "incense-before-writing",
  "smoke-and-silence",
  "why-agarwood-matters",
  "evening-room-ritual",
  "quiet-desk-ritual",
] as const;

export type HomeRitualSlug = (typeof homeRitualSlugs)[number];

export type { Ritual, RitualMeta, RitualStep, ObjectsSectionSpec } from "@/lib/rituals";
