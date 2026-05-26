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

/** Design-reference article (hand template at `/journal/best-incense-for-sleep`). */
export const journalDesignShowcaseCard: JournalIndexArticleCard = {
  slug: "best-incense-for-sleep",
  categoryId: "guides-tips",
  categoryLabel: "GUIDES & TIPS",
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
};
