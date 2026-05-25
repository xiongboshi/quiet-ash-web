import type { JournalCategoryId, JournalTagId } from "@/data/journal-index";

/** Journal grid category + tags for each editorial essay slug. */
export const journalEssayCardMeta: Record<
  string,
  {
    categoryId: Exclude<JournalCategoryId, "all" | "popular-questions">;
    tags: readonly JournalTagId[];
  }
> = {
  "incense-patience": {
    categoryId: "rituals-practices",
    tags: ["meditation", "morning-routine"],
  },
  "good-incense-not-loud": {
    categoryId: "scents-ingredients",
    tags: ["relaxation", "focus"],
  },
  "agarwood-time-rain-injury": {
    categoryId: "scents-ingredients",
    tags: ["focus", "meditation"],
  },
  "forgotten-incense-culture": {
    categoryId: "living-lifestyle",
    tags: ["relaxation", "stress-relief"],
  },
  "king-of-incense": {
    categoryId: "scents-ingredients",
    tags: ["meditation", "relaxation"],
  },
  "incense-ink-silence": {
    categoryId: "rituals-practices",
    tags: ["focus", "meditation"],
  },
  "night-incense-ritual": {
    categoryId: "mind-wellness",
    tags: ["sleep", "relaxation"],
  },
  "incense-heaven-earth": {
    categoryId: "rituals-practices",
    tags: ["meditation", "relaxation"],
  },
  "why-scholars-burned-incense": {
    categoryId: "rituals-practices",
    tags: ["focus", "morning-routine"],
  },
  "what-is-agarwood": {
    categoryId: "scents-ingredients",
    tags: ["focus", "meditation"],
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
