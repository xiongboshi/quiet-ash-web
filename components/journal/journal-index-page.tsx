import { Suspense } from "react";
import { JournalIndexContent } from "@/components/journal/journal-index-content";
import { JournalIndexHero } from "@/components/journal/journal-index-hero";
import { getJournalIndexArticles } from "@/lib/get-journal-index-articles";
import { resolveJournalIndexCategories } from "@/lib/journal-index-categories";

export function JournalIndexPage() {
  const articles = getJournalIndexArticles();
  const categories = resolveJournalIndexCategories(articles);

  return (
    <div className="journal-index">
      <JournalIndexHero />
      <Suspense fallback={null}>
        <JournalIndexContent articles={articles} categories={categories} />
      </Suspense>
    </div>
  );
}
