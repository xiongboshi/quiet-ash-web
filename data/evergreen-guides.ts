import type { JournalTopicHubId } from "@/data/journal-topic-hubs";
import { guidePath } from "@/lib/site-paths";

export const EVERGREEN_GUIDE_SLUGS = [
  "sleep-guide",
  "small-apartment-fragrance-guide",
  "evening-calm-guide",
  "slow-living-ritual-guide",
  "incense-care-guide",
] as const;

export type EvergreenGuideSlug = (typeof EVERGREEN_GUIDE_SLUGS)[number];

export type EvergreenGuide = {
  slug: EvergreenGuideSlug;
  pathname: string;
  title: string;
  tagline: string;
  description: string;
  heroImageSrc: string;
  heroImageAlt: string;
  topicHubId: JournalTopicHubId;
  featuredSlugs?: readonly string[];
  relatedMoodSlug?: string;
  relatedMoodLabel?: string;
  semanticKeywords: readonly string[];
};

export const evergreenGuides: readonly EvergreenGuide[] = [
  {
    slug: "sleep-guide",
    pathname: guidePath("sleep-guide"),
    title: "The Quiet Ash Sleep Guide",
    tagline: "Warm woods, quieter evenings, deeper rest.",
    description:
      "A long-form guide to sleep, rest, and bedtime atmosphere — sandalwood, soft light, and slower evenings at home.",
    heroImageSrc: "/images/generated/essay-night-incense-ritual.webp",
    heroImageAlt: "Soft evening light with incense and calm bedroom atmosphere",
    topicHubId: "better-sleep",
    relatedMoodSlug: "evening-room-ritual",
    relatedMoodLabel: "Explore Calm Evenings",
    semanticKeywords: [
      "sleep",
      "bedtime rituals",
      "calming evenings",
      "sandalwood",
      "deeper rest",
    ],
    featuredSlugs: ["best-incense-for-sleep"],
  },
  {
    slug: "small-apartment-fragrance-guide",
    pathname: guidePath("small-apartment-fragrance-guide"),
    title: "The Small Apartment Fragrance Guide",
    tagline:
      "Softer scent, lower smoke, and calmer indoor living for compact spaces.",
    description:
      "How to use incense comfortably in apartments, bedrooms, and modern indoor environments — ventilation, low smoke, and softer scent profiles.",
    heroImageSrc: "/images/generated/essay-night-incense-ritual.webp",
    heroImageAlt: "Incense with restrained smoke in a small bedroom",
    topicHubId: "small-space-living",
    semanticKeywords: [
      "apartments",
      "low smoke",
      "ventilation",
      "subtle fragrance",
      "compact homes",
    ],
    featuredSlugs: ["best-incense-for-small-apartments"],
  },
  {
    slug: "evening-calm-guide",
    pathname: guidePath("evening-calm-guide"),
    title: "The Evening Wind-Down Guide",
    tagline:
      "Softer evenings, slower rituals, and calmer atmosphere after overstimulated days.",
    description:
      "How lighting, fragrance, and simple routines can help evenings feel quieter and more balanced at home.",
    heroImageSrc: "/images/generated/essay-good-incense-not-loud.webp",
    heroImageAlt: "Quiet incense still life in warm evening light",
    topicHubId: "calm-evenings",
    relatedMoodSlug: "evening-room-ritual",
    relatedMoodLabel: "Explore Calm Evenings",
    semanticKeywords: [
      "calm evenings",
      "decompression",
      "softer atmosphere",
      "emotional rest",
    ],
    featuredSlugs: [],
  },
  {
    slug: "slow-living-ritual-guide",
    pathname: guidePath("slow-living-ritual-guide"),
    title: "The Quiet Ritual Handbook",
    tagline:
      "Gentle routines for reading, tea, writing, reflection, and slower living.",
    description:
      "Simple daily rituals that help indoor spaces feel quieter, calmer, and more intentional.",
    heroImageSrc: "/images/generated/essay-incense-patience.webp",
    heroImageAlt: "Writing desk with tea and incense in soft daylight",
    topicHubId: "quiet-routines",
    relatedMoodSlug: "incense-before-writing",
    relatedMoodLabel: "Incense Before Writing",
    semanticKeywords: [
      "slow living",
      "writing rituals",
      "tea rituals",
      "quiet mornings",
      "focus",
    ],
    featuredSlugs: [],
  },
  {
    slug: "incense-care-guide",
    pathname: guidePath("incense-care-guide"),
    title: "The Quiet Ash Care Guide",
    tagline:
      "Practical guidance for safer, softer, and more comfortable incense use indoors.",
    description:
      "Indoor fragrance, low-smoke incense, ventilation, pets, and everyday comfort — clear guidance for home use.",
    heroImageSrc: "/images/generated/essay-good-incense-not-loud.webp",
    heroImageAlt: "Gentle incense smoke in a well-ventilated home",
    topicHubId: "guides-care",
    semanticKeywords: [
      "low smoke incense",
      "pet safety",
      "ventilation",
      "indoor fragrance",
      "incense care",
    ],
    featuredSlugs: ["is-incense-safe-for-pets"],
  },
];

export const evergreenGuideBySlug: Record<EvergreenGuideSlug, EvergreenGuide> =
  Object.fromEntries(evergreenGuides.map((g) => [g.slug, g])) as Record<
    EvergreenGuideSlug,
    EvergreenGuide
  >;

export function isEvergreenGuideSlug(value: string): value is EvergreenGuideSlug {
  return (EVERGREEN_GUIDE_SLUGS as readonly string[]).includes(value);
}

/** Journal discovery — evergreen guide links. */
export const journalDiscoveryEvergreenGuides = evergreenGuides.map((guide) => ({
  title: guide.title,
  href: guide.pathname,
})) as readonly { title: string; href: string }[];
