import {
  journalDesignShowcaseCard,
  type JournalIndexArticleCard,
} from "@/data/journal-index-articles";
import { getEssayBySlug } from "@/lib/essays";
import { buildJournalIndexCardsFromEssays } from "@/lib/journal-index-from-essays";
import type { JournalIndexArticleResolved } from "@/lib/journal-index-articles";

/** All journal index cards — design showcase + `incense-culture` essays (server-only). */
export function getJournalIndexArticleCards(): JournalIndexArticleCard[] {
  return [
    journalDesignShowcaseCard,
    ...buildJournalIndexCardsFromEssays("incense-culture"),
  ];
}

export function getJournalIndexArticles(): JournalIndexArticleResolved[] {
  return getJournalIndexArticleCards().map((card) => {
    const essay = getEssayBySlug(card.slug);
    return {
      ...card,
      readMinutes: essay?.readingMinutes ?? card.readMinutes,
      date: essay?.date ?? card.date,
    };
  });
}
