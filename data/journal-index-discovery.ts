import type { JournalTopicHubId } from "@/data/journal-topic-hubs";
import { evergreenGuides } from "@/data/evergreen-guides";
import { journalPopularQuestions } from "@/data/journal-popular-questions";
import { guidePath, journalPath, moodPath } from "@/lib/site-paths";

/** Explore by topic — design order (5 pills, no Cozy Home). */
export const journalDiscoveryExploreTopics = [
  { id: "better-sleep" as const, label: "Better Sleep", href: journalPath("better-sleep") },
  {
    id: "small-space-living" as const,
    label: "Small Space Living",
    href: journalPath("small-space-living"),
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
  "small-space-living": {
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
  "small-space-living",
  "calm-evenings",
  "quiet-routines",
  "guides-care",
];

/** Explore common searches — design labels. */
export const journalDiscoverySearchIntents = [
  { label: "best incense for sleep", href: journalPath("best-incense-for-sleep") },
  { label: "low smoke incense", href: guidePath("incense-care-guide") },
  { label: "incense for apartments", href: journalPath("best-incense-for-small-apartments") },
  { label: "calming evening rituals", href: guidePath("evening-calm-guide") },
  { label: "incense safe for pets", href: journalPath("is-incense-safe-for-pets") },
  { label: "evening wind-down ideas", href: journalPath("calm-evenings") },
] as const;

/** Featured editorial — design copy. */
export const journalDiscoveryFeaturedEditorial = [
  {
    title: "Softer fragrance for smaller homes.",
    href: guidePath("small-apartment-fragrance-guide"),
    imageSrc: "/images/generated/essay-night-incense-ritual.webp",
    imageAlt: "Soft smoke in a compact bedroom",
  },
  {
    title: "A quieter room before sleep.",
    href: guidePath("sleep-guide"),
    imageSrc: "/images/generated/essay-night-incense-ritual.webp",
    imageAlt: "Evening incense beside a calm bed",
  },
  {
    title: "The atmosphere after long days.",
    href: guidePath("evening-calm-guide"),
    imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
    imageAlt: "Restrained incense in warm light",
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
    title: "Guide to Low-Smoke Incense",
    subtitle: "What it is and why it matters.",
    href: guidePath("incense-care-guide"),
    imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
    imageAlt: "Gentle incense smoke in a ventilated room",
  },
  {
    title: "Evening Ritual Handbook",
    subtitle: "Simple rituals for calmer evenings.",
    href: guidePath("evening-calm-guide"),
    imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
    imageAlt: "Quiet evening incense still life",
  },
  {
    title: "Small Apartment Fragrance Guide",
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

/** Explore moods column — design copy. */
export const journalDiscoveryMoodCards = [
  {
    title: "Calm Evenings",
    subtitle: "Slow down and unwind.",
    href: moodPath("evening-room-ritual"),
    imageSrc: "/images/generated/essay-night-incense-ritual.webp",
    imageAlt: "Dimly lit room with a candle",
  },
  {
    title: "Deep Rest",
    subtitle: "Prepare your space for sleep.",
    href: moodPath("evening-room-ritual"),
    imageSrc: "/images/generated/mood-poster-sleep-white-blossom.webp",
    imageAlt: "Soft bedding and calm bedroom light",
  },
  {
    title: "Creative Focus",
    subtitle: "Gentle atmosphere for your flow.",
    href: moodPath("quiet-desk-ritual"),
    imageSrc: "/images/generated/essay-incense-patience.webp",
    imageAlt: "Desk with branches in soft daylight",
  },
] as const;

/** Latest articles — design order and display titles. */
export const journalDiscoveryLatestSlugs = [
  { slug: "is-incense-safe-for-pets" },
  { slug: "best-incense-for-small-apartments" },
  { slug: "best-incense-for-sleep", displayTitle: "Best Incense for Sleep" },
  { slug: "good-incense-not-loud", displayTitle: "Good Incense Shouldn't Feel Loud" },
  { slug: "why-scholars-burned-incense", displayTitle: "Incense Before Writing" },
] as const;

export const journalDiscoveryFooterLinks = {
  guides: guidePath("sleep-guide"),
  faqs: journalPath("best-incense-for-sleep"),
  moods: moodPath(),
  articles: journalPath("better-sleep"),
} as const;
