import type { JournalTopicHubId } from "@/data/journal-topic-hubs";
import { evergreenGuides } from "@/data/evergreen-guides";
import { journalPopularQuestions } from "@/data/journal-popular-questions";
import { guidePath, journalPath } from "@/lib/site-paths";

/** Explore by topic — design order (5 pills, no Cozy Home). */
export const journalDiscoveryExploreTopics = [
  { id: "better-sleep" as const, label: "Better Sleep", href: journalPath("better-sleep") },
  {
    id: "small-apartment-living" as const,
    label: "Small Apartment Living",
    href: journalPath("small-apartment-living"),
  },
  { id: "calm-evenings" as const, label: "Calm Evenings", href: journalPath("calm-evenings") },
  { id: "quiet-routines" as const, label: "Quiet Routines", href: journalPath("quiet-routines") },
  { id: "guides-care" as const, label: "Guides & Care", href: journalPath("guides-care") },
] as const satisfies readonly {
  id: JournalTopicHubId;
  label: string;
  href: string;
}[];

/** Browse topic hubs — hub card copy overrides per design. */
export const journalDiscoveryHubCopy: Partial<
  Record<JournalTopicHubId, { tagline: string }>
> = {
  "guides-care": {
    tagline: "Helpful guides for using incense with intention.",
  },
};

/** Hub card art — portrait tiles in Browse topic hubs. */
export const journalDiscoveryHubCardImages: Record<
  JournalTopicHubId,
  { imageSrc: string; imageAlt: string }
> = {
  "better-sleep": {
    imageSrc: "/images/generated/essay-night-incense-ritual.webp",
    imageAlt: "Soft evening light in a calm bedroom",
  },
  "small-apartment-living": {
    imageSrc: "/images/generated/essay-incense-patience.webp",
    imageAlt: "Desk by a window in a compact home",
  },
  "calm-evenings": {
    imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
    imageAlt: "Lit candle in warm evening light",
  },
  "quiet-routines": {
    imageSrc: "/images/generated/essay-why-scholars-burned-incense.webp",
    imageAlt: "Open book and tea on a wooden table",
  },
  "guides-care": {
    imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
    imageAlt: "Incense in a ceramic holder on a light surface",
  },
  "cozy-home": {
    imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
    imageAlt: "Cozy interior with soft light",
  },
};

export const journalDiscoveryHubOrder: readonly JournalTopicHubId[] = [
  "better-sleep",
  "small-apartment-living",
  "calm-evenings",
  "quiet-routines",
  "guides-care",
];

/** Explore common searches — design labels. */
export const journalDiscoverySearchIntents = [
  { label: "what is sleep", href: journalPath("what-is-sleep") },
  { label: "sleep well naturally", href: journalPath("how-to-sleep-well-naturally") },
  { label: "sleep stages explained", href: journalPath("sleep-stages-explained") },
  { label: "why is sleep important", href: journalPath("why-is-sleep-important") },
  { label: "sleep cycle explained", href: journalPath("sleep-cycle-explained") },
  { label: "how to get more deep sleep", href: journalPath("how-to-get-more-deep-sleep") },
  { label: "why bad sleep happens", href: journalPath("why-bad-sleep-happens") },
  { label: "green noise for sleep", href: journalPath("green-noise-for-sleep") },
  { label: "sleep hygiene guide", href: journalPath("sleep-hygiene-guide") },
  { label: "best incense for sleep", href: journalPath("best-incense-for-sleep") },
  {
    label: "burn incense before bed",
    href: journalPath("should-you-burn-incense-before-bed"),
  },
  { label: "low smoke incense", href: guidePath("incense-care-guide") },
  { label: "incense for apartments", href: journalPath("best-incense-for-small-apartments") },
  {
    label: "evening wind-down rituals",
    href: journalPath("evening-wind-down-rituals-for-better-sleep"),
  },
  { label: "incense safe for pets", href: journalPath("is-incense-safe-for-pets") },
  { label: "incense after work", href: journalPath("incense-after-work") },
] as const;

/** Featured editorial — three journal Q&A guides. */
export const journalDiscoveryFeaturedEditorial = [
  {
    slug: "best-incense-for-small-apartments",
    title: "Best incense for small apartments.",
    href: journalPath("best-incense-for-small-apartments"),
    imageSrc: "/images/generated/essay-night-incense-ritual.webp",
    imageAlt:
      "Incense with soft smoke in a small bedroom — calm light and restrained fragrance",
  },
  {
    slug: "best-incense-for-sleep",
    title: "Best incense for sleep.",
    href: journalPath("best-incense-for-sleep"),
    imageSrc: "/images/generated/essay-night-incense-ritual.webp",
    imageAlt: "Incense stick burning in a ceramic bowl with soft evening light",
  },
  {
    slug: "is-incense-safe-for-pets",
    title: "Is incense safe for pets?",
    href: journalPath("is-incense-safe-for-pets"),
    imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
    imageAlt:
      "Soft incense smoke in a calm home with natural light — gentle everyday use",
  },
] as const;

/** Evergreen guides column — first 4 from design. */
export const journalDiscoveryEvergreenList = [
  {
    title: "The Quiet Ash Sleep Guide",
    subtitle: "Build a better nighttime atmosphere.",
    href: guidePath("sleep-guide"),
    imageSrc: "/images/generated/essay-night-incense-ritual.webp",
    imageAlt: "Calm bedroom with soft evening light",
  },
  {
    title: "The Quiet Ash Care Guide",
    subtitle: "What it is and why it matters.",
    href: guidePath("incense-care-guide"),
    imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
    imageAlt: "Gentle incense smoke in a ventilated room",
  },
  {
    title: "The Evening Wind-Down Guide",
    subtitle: "Simple rituals for calmer evenings.",
    href: guidePath("evening-calm-guide"),
    imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
    imageAlt: "Quiet evening incense still life",
  },
  {
    title: "The Small Apartment Fragrance Guide",
    subtitle: "Make small spaces feel softer.",
    href: guidePath("small-apartment-fragrance-guide"),
    imageSrc: "/images/generated/essay-night-incense-ritual.webp",
    imageAlt: "Compact home with subtle fragrance",
  },
] as const;

const faqById = Object.fromEntries(journalPopularQuestions.map((q) => [q.id, q]));

/** Popular questions column — design copy (5 items). */
export const journalDiscoveryFaqItems = [
  {
    id: "discovery-best-sleep",
    question: "What incense is best for sleep?",
    answer: faqById["best-incense-for-sleep"]!.answer,
  },
  {
    id: "discovery-small-rooms",
    question: "Is incense safe to use in small rooms?",
    answer: [
      {
        type: "paragraph" as const,
        text: "Incense can be used in small rooms when you choose low-smoke options, keep sessions short, and ventilate the space. Lighter scents usually feel more comfortable than heavy smoke buildup.",
      },
    ],
  },
  {
    id: "discovery-bedroom-burn",
    question: "How long should incense burn in a bedroom?",
    answer: faqById["how-long-burn-incense"]!.answer,
  },
  {
    id: "discovery-calming-scents",
    question: "What incense scents feel the most calming?",
    answer: faqById["scents-for-anxiety"]!.answer,
  },
  {
    id: "discovery-pets",
    question: "Is incense safe for pets?",
    answer: [
      {
        type: "paragraph" as const,
        text: "Incense can be used around pets with ventilation, shorter burn times, and lighter scents. Watch for signs of irritation and keep smoke away from enclosed sleeping areas.",
      },
    ],
  },
] as const;

/** Latest articles rail order — `lib/journal-discovery-latest.ts` (newest first by `date`). */

export const journalDiscoveryFooterLinks = {
  guides: guidePath("sleep-guide"),
  faqs: journalPath("best-incense-for-sleep"),
  articles: journalPath("better-sleep"),
} as const;
