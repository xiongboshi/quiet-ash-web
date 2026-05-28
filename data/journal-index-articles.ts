import type { JournalCategoryId, JournalTagId } from "@/data/journal-index";

export type JournalIndexArticleCard = {
  slug: string;
  categoryId: Exclude<JournalCategoryId, "all" | "popular-questions">;
  categoryLabel: string;
  /** H1 — human, emotional brand language (hero + index cards) */
  headline: string;
  /** `<title>` / OG — keyword-rich for search & discovery */
  seoTitle: string;
  /** @deprecated Use `headline`; kept for related cards & legacy callers */
  title: string;
  description: string;
  readMinutes: number;
  date: string;
  imageSrc: string;
  imageAlt: string;
  tags: readonly JournalTagId[];
};

/** Hand-authored guide templates — topic-clustered for discovery hubs. */
export const journalGuidesTipsHandCards: readonly JournalIndexArticleCard[] = [
  {
    slug: "best-incense-for-sleep",
    categoryId: "better-sleep",
    categoryLabel: "BETTER SLEEP",
    headline: "Best Incense for Sleep and Relaxing Evenings",
    seoTitle: "Best Incense for Sleep and Relaxing Evenings",
    title: "Best Incense for Sleep and Relaxing Evenings",
    description:
      "Discover the best incense scents for sleep, calming evenings, and nighttime relaxation with softer fragrances, low-smoke incense, and gentle bedroom atmosphere.",
    readMinutes: 8,
    date: "2026-05-19",
    imageSrc: "/images/generated/essay-night-incense-ritual.webp",
    imageAlt: "Incense stick burning in a ceramic bowl with soft evening light",
    tags: ["sleep", "relaxation"],
  },
  {
    slug: "is-incense-safe-for-pets",
    categoryId: "guides-care",
    categoryLabel: "GUIDES & CARE",
    headline: "Is Incense Safe for Pets?",
    seoTitle:
      "Is Incense Safe for Pets? What Cat and Dog Owners Should Know",
    title: "Is Incense Safe for Pets?",
    description:
      "Learn how to use incense more safely around cats and dogs with ventilation, low-smoke incense, and softer scent choices for everyday indoor spaces.",
    readMinutes: 7,
    date: "2026-05-19",
    imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
    imageAlt:
      "Soft incense smoke in a calm home with natural light — gentle everyday use",
    tags: ["relaxation", "stress-relief"],
  },
  {
    slug: "best-incense-for-small-apartments",
    categoryId: "small-space-living",
    categoryLabel: "SMALL SPACE LIVING",
    headline: "Best Incense for Small Apartments and Bedrooms",
    seoTitle: "Best Incense for Small Apartments and Bedrooms",
    title: "Best Incense for Small Apartments and Bedrooms",
    description:
      "Discover low-smoke incense and softer scent profiles that work well in apartments, bedrooms, and smaller indoor spaces without overwhelming the room.",
    readMinutes: 7,
    date: "2026-05-19",
    imageSrc: "/images/generated/essay-night-incense-ritual.webp",
    imageAlt:
      "Incense with soft smoke in a small bedroom — calm light and restrained fragrance",
    tags: ["sleep", "relaxation"],
  },
  {
    slug: "incense-after-work",
    categoryId: "calm-evenings",
    categoryLabel: "CALM EVENINGS",
    headline: "Incense After Work: Softer Scents for Slower Evenings",
    seoTitle: "Best Incense After Work for Relaxing Evenings",
    title: "Incense After Work: Softer Scents for Slower Evenings",
    description:
      "Discover softer incense scents and calming evening rituals that help create a quieter atmosphere after long workdays.",
    readMinutes: 8,
    date: "2026-05-19",
    imageSrc: "/images/generated/essay-good-incense-not-loud.webp",
    imageAlt: "Soft incense smoke in a calm living room after work",
    tags: ["relaxation", "stress-relief"],
  },
  {
    slug: "tea-and-incense-rituals",
    categoryId: "quiet-routines",
    categoryLabel: "QUIET ROUTINES",
    headline: "Tea and Incense Rituals for Slower Evenings",
    seoTitle: "Tea and Incense Rituals for Calm Evenings",
    title: "Tea and Incense Rituals for Slower Evenings",
    description:
      "Discover simple tea and incense rituals that create softer evenings, calmer atmosphere, and slower daily routines at home.",
    readMinutes: 8,
    date: "2026-05-19",
    imageSrc: "/images/generated/essay-incense-patience.webp",
    imageAlt: "Tea and incense on a quiet desk in soft evening light",
    tags: ["relaxation", "stress-relief"],
  },
];

/** @deprecated Use `journalGuidesTipsHandCards[0]` */
export const journalDesignShowcaseCard: JournalIndexArticleCard =
  journalGuidesTipsHandCards[0]!;
