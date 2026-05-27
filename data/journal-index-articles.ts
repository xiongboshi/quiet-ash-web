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
    headline: "Let the Room Grow Quiet Before Sleep",
    seoTitle: "Best Incense for Sleep: Calming Scents for Better Rest",
    title: "Let the Room Grow Quiet Before Sleep",
    description:
      "Soft, calming scents that help you relax and sleep better — sandalwood, lavender, white tea, and how to use incense before bed.",
    readMinutes: 5,
    date: "2024-05-14",
    imageSrc: "/images/generated/essay-night-incense-ritual.png",
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
      "Can you burn incense around cats and dogs? Ventilation, low-smoke incense, lighter scents, and when fragrance may be too strong for pets.",
    readMinutes: 7,
    date: "2026-05-19",
    imageSrc: "/images/generated/essay-good-incense-not-loud.png",
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
      "Low-smoke incense and soft scents for apartments and bedrooms — shorter burn times, better airflow, and fragrances that stay comfortable in small spaces.",
    readMinutes: 7,
    date: "2026-05-19",
    imageSrc: "/images/generated/essay-night-incense-ritual.png",
    imageAlt:
      "Incense with soft smoke in a small bedroom — calm light and restrained fragrance",
    tags: ["sleep", "relaxation"],
  },
];

/** @deprecated Use `journalGuidesTipsHandCards[0]` */
export const journalDesignShowcaseCard: JournalIndexArticleCard =
  journalGuidesTipsHandCards[0]!;
