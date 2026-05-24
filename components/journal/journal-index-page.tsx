import { JournalIndexContent } from "@/components/journal/journal-index-content";
import { JournalIndexHero } from "@/components/journal/journal-index-hero";
import { getJournalIndexArticles } from "@/lib/get-journal-index-articles";

export function JournalIndexPage() {
  const articles = getJournalIndexArticles();

  return (
    <div className="journal-index">
      <JournalIndexHero />
      <JournalIndexContent articles={articles} />
    </div>
  );
}
