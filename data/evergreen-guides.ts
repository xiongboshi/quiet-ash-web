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
    featuredSlugs: [
      "best-incense-for-sleep",
      "night-incense-ritual",
      "what-is-agarwood",
    ],
  },
  {
    slug: "small-apartment-fragrance-guide",
    pathname: guidePath("small-apartment-fragrance-guide"),
    title: "Small Apartment Fragrance Guide",
    tagline: "Low-smoke fragrance and softer indoor atmosphere.",
    description:
      "How to scent compact homes without overwhelm — ventilation, subtle smoke, and incense that stays in the background.",
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
    featuredSlugs: ["best-incense-for-small-apartments", "good-incense-not-loud"],
  },
  {
    slug: "evening-calm-guide",
    pathname: guidePath("evening-calm-guide"),
    title: "Evening Ritual Handbook",
    tagline: "Slower rituals for overstimulated days.",
    description:
      "Emotional decompression, nervous-system reset, and softer evening atmosphere — incense, light, and quiet at home.",
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
    featuredSlugs: ["good-incense-not-loud", "incense-patience", "forgotten-incense-culture"],
  },
  {
    slug: "slow-living-ritual-guide",
    pathname: guidePath("slow-living-ritual-guide"),
    title: "Slow Living Ritual Guide",
    tagline: "Writing, tea, reading, and quiet focus.",
    description:
      "Desk rituals, tea, reading, and creative solitude — building atmosphere without noise in everyday routines.",
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
    featuredSlugs: [
      "why-scholars-burned-incense",
      "incense-ink-silence",
      "incense-patience",
    ],
  },
  {
    slug: "incense-care-guide",
    pathname: guidePath("incense-care-guide"),
    title: "Guide to Low-Smoke Incense",
    tagline: "Practical answers for safer, cleaner indoor fragrance.",
    description:
      "Pet safety, ventilation, burn times, and everyday care — clear guidance for low-smoke incense at home.",
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
    featuredSlugs: [
      "is-incense-safe-for-pets",
      "best-incense-for-small-apartments",
      "what-is-agarwood",
    ],
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
