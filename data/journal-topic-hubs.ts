import type { JournalCategoryId } from "@/data/journal-index";
import { journalPath, moodPath } from "@/lib/site-paths";

/** Topic-first hub slugs — same as `JournalTopicHubId` / filter category ids. */
export const JOURNAL_TOPIC_HUB_IDS = [
  "better-sleep",
  "small-space-living",
  "calm-evenings",
  "quiet-routines",
  "guides-care",
] as const;

export type JournalTopicHubId = (typeof JOURNAL_TOPIC_HUB_IDS)[number];

export type JournalTopicHub = {
  id: JournalTopicHubId;
  pathname: string;
  title: string;
  tagline: string;
  description: string;
  semanticKeywords: readonly string[];
  heroImageSrc: string;
  heroImageAlt: string;
  /** Filter index cards by `categoryId`. */
  categoryId: JournalTopicHubId; // matches article `categoryId` filter
  /** Optional mood ritual cross-link. */
  relatedMoodSlug?: string;
  relatedMoodLabel?: string;
  featuredSlugs?: readonly string[];
};

export const journalTopicHubs: readonly JournalTopicHub[] = [
  {
    id: "better-sleep",
    pathname: journalPath("better-sleep"),
    title: "Better Sleep",
    tagline: "Warm woods, quieter evenings, deeper rest.",
    description:
      "Sleep, rest, nighttime atmosphere, and calming rituals — incense, soft light, and slower evenings.",
    semanticKeywords: [
      "sleep",
      "rest",
      "calming evenings",
      "bedtime rituals",
      "sandalwood",
      "deeper rest",
      "warm lighting",
    ],
    heroImageSrc: "/images/generated/essay-night-incense-ritual.png",
    heroImageAlt: "Soft evening light with incense and calm bedroom atmosphere",
    categoryId: "better-sleep",
    relatedMoodSlug: "evening-room-ritual",
    relatedMoodLabel: "Explore Calm Evenings",
    featuredSlugs: [
      "best-incense-for-sleep",
      "night-incense-ritual",
      "what-is-agarwood",
    ],
  },
  {
    id: "small-space-living",
    pathname: journalPath("small-space-living"),
    title: "Small Space Living",
    tagline: "Low-smoke fragrance and softer indoor atmosphere.",
    description:
      "Apartments, bedrooms, and compact homes — ventilation, subtle scent, and low-smoke incense.",
    semanticKeywords: [
      "apartments",
      "bedrooms",
      "compact homes",
      "low smoke",
      "ventilation",
      "subtle fragrance",
    ],
    heroImageSrc: "/images/generated/essay-night-incense-ritual.png",
    heroImageAlt: "Incense with restrained smoke in a small bedroom",
    categoryId: "small-space-living",
    featuredSlugs: ["best-incense-for-small-apartments", "good-incense-not-loud"],
  },
  {
    id: "calm-evenings",
    pathname: journalPath("calm-evenings"),
    title: "Calm Evenings",
    tagline: "Slower rituals for overstimulated days.",
    description:
      "Emotional decompression, nervous-system reset, and softer evening atmosphere at home.",
    semanticKeywords: [
      "calm evenings",
      "decompression",
      "softer atmosphere",
      "quiet living",
      "emotional rest",
    ],
    heroImageSrc: "/images/generated/essay-good-incense-not-loud.png",
    heroImageAlt: "Quiet incense still life in warm evening light",
    categoryId: "calm-evenings",
    relatedMoodSlug: "evening-room-ritual",
    relatedMoodLabel: "Explore Calm Evenings",
    featuredSlugs: ["good-incense-not-loud", "incense-patience", "forgotten-incense-culture"],
  },
  {
    id: "quiet-routines",
    pathname: journalPath("quiet-routines"),
    title: "Quiet Routines",
    tagline: "Writing, tea, reading, and quiet focus.",
    description:
      "Desk rituals, tea, reading, and creative solitude — atmosphere without noise.",
    semanticKeywords: [
      "writing rituals",
      "reading atmosphere",
      "tea rituals",
      "focus",
      "solitude",
      "quiet mornings",
    ],
    heroImageSrc: "/images/generated/essay-incense-patience.png",
    heroImageAlt: "Writing desk with tea and incense in soft daylight",
    categoryId: "quiet-routines",
    relatedMoodSlug: "incense-before-writing",
    relatedMoodLabel: "Incense Before Writing",
    featuredSlugs: [
      "why-scholars-burned-incense",
      "incense-ink-silence",
      "incense-patience",
    ],
  },
  {
    id: "guides-care",
    pathname: journalPath("guides-care"),
    title: "Guides & Care",
    tagline: "Practical answers for safer, cleaner indoor fragrance.",
    description:
      "Pet safety, low-smoke incense, ventilation, burn times, and everyday care — clear guides for home use.",
    semanticKeywords: [
      "pet safety",
      "low smoke incense",
      "incense care",
      "ventilation",
      "indoor fragrance",
    ],
    heroImageSrc: "/images/generated/essay-good-incense-not-loud.png",
    heroImageAlt: "Gentle incense smoke in a well-ventilated home",
    categoryId: "guides-care",
    featuredSlugs: [
      "is-incense-safe-for-pets",
      "best-incense-for-small-apartments",
      "what-is-agarwood",
    ],
  },
];

/** Hero search pills on `/journal`. */
export const journalDiscoveryTopicPills = [
  { label: "Better Sleep", href: journalPath("better-sleep") },
  { label: "Calm Evenings", href: journalPath("calm-evenings") },
  { label: "Small Apartments", href: journalPath("small-space-living") },
  { label: "Quiet Routines", href: journalPath("quiet-routines") },
  { label: "Cozy Home", href: journalPath("calm-evenings") },
  { label: "Low-Smoke Incense", href: journalPath("guides-care") },
] as const;

/** AI-style search intent phrases. */
export const journalDiscoverySearchIntents = [
  { label: "best incense for sleep", href: journalPath("best-incense-for-sleep") },
  { label: "low smoke incense", href: journalPath("guides-care") },
  { label: "incense safe for pets", href: journalPath("is-incense-safe-for-pets") },
  { label: "calming room scents", href: journalPath("calm-evenings") },
  { label: "incense for apartments", href: journalPath("best-incense-for-small-apartments") },
  { label: "evening ritual ideas", href: journalPath("calm-evenings") },
] as const;

/** Pinterest-style editorial feature cards. */
export const journalDiscoveryFeaturedEditorial = [
  {
    title: "Softer fragrance for smaller homes",
    href: journalPath("best-incense-for-small-apartments"),
    imageSrc: "/images/generated/essay-night-incense-ritual.png",
    imageAlt: "Soft smoke in a compact bedroom",
  },
  {
    title: "A quieter room before sleep",
    href: journalPath("best-incense-for-sleep"),
    imageSrc: "/images/generated/essay-night-incense-ritual.png",
    imageAlt: "Evening incense beside a calm bed",
  },
  {
    title: "The atmosphere after long days",
    href: journalPath("good-incense-not-loud"),
    imageSrc: "/images/generated/essay-good-incense-not-loud.png",
    imageAlt: "Restrained incense in warm light",
  },
] as const;

/** Long-form authority pages (existing + hub entry points). */
export const journalDiscoveryEvergreenGuides = [
  {
    title: "The Quiet Ash Sleep Guide",
    href: journalPath("best-incense-for-sleep"),
  },
  {
    title: "Guide to Low-Smoke Incense",
    href: journalPath("guides-care"),
  },
  {
    title: "Evening Ritual Handbook",
    href: journalPath("calm-evenings"),
  },
  {
    title: "Small Apartment Fragrance Guide",
    href: journalPath("best-incense-for-small-apartments"),
  },
] as const;

/** Journal → Mood conversion loops. */
export const journalDiscoveryMoodLinks = [
  {
    label: "Explore Calm Evenings",
    href: moodPath("evening-room-ritual"),
    imageSrc: "/images/generated/essay-night-incense-ritual.png",
  },
  {
    label: "Quiet Desk Ritual",
    href: moodPath("quiet-desk-ritual"),
    imageSrc: "/images/generated/essay-incense-patience.png",
  },
  {
    label: "Incense Before Writing",
    href: moodPath("incense-before-writing"),
    imageSrc: "/images/generated/essay-why-scholars-burned-incense.png",
  },
] as const;

export const journalTopicHubById: Record<JournalTopicHubId, JournalTopicHub> =
  Object.fromEntries(journalTopicHubs.map((h) => [h.id, h])) as Record<
    JournalTopicHubId,
    JournalTopicHub
  >;

export function isJournalTopicHubId(
  value: string,
): value is JournalTopicHubId {
  return (JOURNAL_TOPIC_HUB_IDS as readonly string[]).includes(value);
}

/** Legacy blog categories → topic hubs (MDX + old URLs). */
export const journalLegacyCategoryToTopicHub: Record<string, JournalTopicHubId> =
  {
    "mind-wellness": "better-sleep",
    "scents-ingredients": "small-space-living",
    "rituals-practices": "quiet-routines",
    "living-lifestyle": "calm-evenings",
    "guides-tips": "guides-care",
  };

export function normalizeJournalTopicCategoryId(
  raw: string | undefined,
): JournalCategoryId | undefined {
  if (!raw) return undefined;
  if (isJournalTopicHubId(raw)) return raw;
  const mapped = journalLegacyCategoryToTopicHub[raw];
  if (mapped) return mapped;
  if (raw === "all" || raw === "popular-questions") return raw;
  return undefined;
}

export const JOURNAL_INDEX_TOPIC_CLUSTER_HEADING = "Explore by topic";

export const journalIndexTopicClusterIntro = {
  title: JOURNAL_INDEX_TOPIC_CLUSTER_HEADING,
  sub: "Topic clusters — not a chronological archive.",
} as const;
