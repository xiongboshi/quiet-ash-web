import { JournalArticleBody } from "@/components/journal/article/journal-article-body";
import { JournalArticleBodyEditorial } from "@/components/journal/article/journal-article-body-editorial";
import { JournalArticleHero } from "@/components/journal/article/journal-article-hero";
import { JournalArticleInsight } from "@/components/journal/article/journal-article-insight";
import { JournalArticleProducts } from "@/components/journal/article/journal-article-products";
import { JournalArticleRelated } from "@/components/journal/article/journal-article-related";
import type { JournalArticleTemplate } from "@/types/journal-article";

type Props = {
  article: JournalArticleTemplate;
};

export function JournalArticlePage({ article }: Props) {
  const isEditorial = article.bodyFormat === "editorial";

  return (
    <article
      className={`journal-article${isEditorial ? " journal-article--editorial" : ""}`}
    >
      <JournalArticleHero hero={article.hero} />
      {article.bodyFormat === "guide" ? (
        <JournalArticleInsight
          quickAnswer={article.quickAnswer}
          keyTakeaways={article.keyTakeaways}
        />
      ) : null}
      <div className="journal-article__shell">
        <div className="journal-article__main">
          {article.bodyFormat === "guide" ? (
            <JournalArticleBody sections={article.sections} />
          ) : (
            <JournalArticleBodyEditorial
              paragraphs={article.editorialParagraphs ?? []}
              epigraph={article.epigraph}
            />
          )}
          <JournalArticleProducts block={article.products} />
          <JournalArticleRelated block={article.related} />
        </div>
      </div>
    </article>
  );
}
