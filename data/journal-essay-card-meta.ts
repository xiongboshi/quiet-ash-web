import type { JournalCategoryId, JournalTagId } from "@/data/journal-index";

/** Dual-title standard: `headline` = H1 (brand); `seoTitle` = metadata (search/Pinterest). */
export type JournalEssayCardMeta = {
  categoryId: Exclude<JournalCategoryId, "all" | "popular-questions">;
  tags: readonly JournalTagId[];
  headline: string;
  seoTitle: string;
};

/** Journal grid category, tags, and dual titles per editorial essay slug. */
export const journalEssayCardMeta: Record<string, JournalEssayCardMeta> = {
  "incense-patience": {
    categoryId: "rituals-practices",
    tags: ["meditation", "morning-routine"],
    headline: "Patience Lives in the Smoke",
    seoTitle: "What Burning Incense Teaches About Patience",
  },
  "good-incense-not-loud": {
    categoryId: "scents-ingredients",
    tags: ["relaxation", "focus"],
    headline: "Good Incense Shouldn't Feel Loud",
    seoTitle: "Best Soft-Smelling Incense For Calm Evenings",
  },
  "agarwood-time-rain-injury": {
    categoryId: "scents-ingredients",
    tags: ["focus", "meditation"],
    headline: "Time, Rain, and the Wound That Makes Agarwood",
    seoTitle: "How Agarwood Forms Through Time, Rain, and Injury",
  },
  "forgotten-incense-culture": {
    categoryId: "living-lifestyle",
    tags: ["relaxation", "stress-relief"],
    headline: "A Culture We Almost Forgot to Smell",
    seoTitle: "The Forgotten Art of Chinese Incense Culture",
  },
  "king-of-incense": {
    categoryId: "scents-ingredients",
    tags: ["meditation", "relaxation"],
    headline: "The King of Incense Was Never Crowned Loudly",
    seoTitle: "Why Agarwood Was Called the King of Incense in Ancient China",
  },
  "incense-ink-silence": {
    categoryId: "rituals-practices",
    tags: ["focus", "meditation"],
    headline: "Ink, Silence, and a Stick of Incense",
    seoTitle:
      "Song Dynasty Scholar Rituals: Incense, Ink, and Silence",
  },
  "night-incense-ritual": {
    categoryId: "mind-wellness",
    tags: ["sleep", "relaxation"],
    headline: "The Night Belongs to Quiet Smoke",
    seoTitle: "The Quiet Ritual of Burning Incense at Night",
  },
  "incense-heaven-earth": {
    categoryId: "rituals-practices",
    tags: ["meditation", "relaxation"],
    headline: "Smoke Between Heaven and Earth",
    seoTitle:
      "Why Chinese Incense Was Believed to Connect Heaven and Earth",
  },
  "why-scholars-burned-incense": {
    categoryId: "rituals-practices",
    tags: ["focus", "morning-routine"],
    headline: "They Lit Incense Before the First Line",
    seoTitle:
      "Why Ancient Chinese Scholars Burned Incense Before Writing",
  },
  "what-is-agarwood": {
    categoryId: "scents-ingredients",
    tags: ["focus", "meditation"],
    headline: "Agarwood Forms in Wounds, Not Haste",
    seoTitle:
      "What Is Agarwood? Ancient China's Most Precious Incense",
  },
};

export const journalCategoryLabels: Record<
  Exclude<JournalCategoryId, "all" | "popular-questions">,
  string
> = {
  "mind-wellness": "MIND & WELLNESS",
  "scents-ingredients": "SCENTS & INGREDIENTS",
  "rituals-practices": "RITUALS & PRACTICES",
  "living-lifestyle": "LIVING & LIFESTYLE",
  "guides-tips": "GUIDES & TIPS",
};
