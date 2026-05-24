import { journalIndexArticleCards } from "@/data/journal-index-articles";
import { getEssayBySlug } from "@/lib/essays";
import type { JournalIndexArticleResolved } from "@/lib/journal-index-articles";

export function getJournalIndexArticles(): JournalIndexArticleResolved[] {
  return journalIndexArticleCards.map((card) => {
    const essay = getEssayBySlug(card.slug);
    return {
      ...card,
      readMinutes: essay?.readingMinutes ?? card.readMinutes,
      date: essay?.date ?? card.date,
    };
  });
}
