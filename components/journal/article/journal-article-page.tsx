import { JournalArticleBody } from "@/components/journal/article/journal-article-body";
import { JournalArticleBodyEditorial } from "@/components/journal/article/journal-article-body-editorial";
import { JournalArticleFaqSection } from "@/components/journal/article/journal-article-faq";
import { JournalArticleHero } from "@/components/journal/article/journal-article-hero";
import { JournalArticleInsight } from "@/components/journal/article/journal-article-insight";
import { JournalArticleIntro } from "@/components/journal/article/journal-article-intro";
import { JournalArticleProducts } from "@/components/journal/article/journal-article-products";
import { JournalArticleRelated } from "@/components/journal/article/journal-article-related";
import type { JournalArticleTemplate } from "@/types/journal-article";

type Props = {
  article: JournalArticleTemplate;
};

const FINAL_SECTION_ID = "final-thoughts";

export function JournalArticlePage({ article }: Props) {
  const isEditorial = article.bodyFormat === "editorial";
  const isGuide = article.bodyFormat === "guide";
  const finalSection = isGuide
    ? article.sections.find((s) => s.id === FINAL_SECTION_ID)
    : undefined;
  const bodySections = isGuide
    ? article.sections.filter((s) => s.id !== FINAL_SECTION_ID)
    : article.sections;

  return (
    <article
      className={`journal-article${isEditorial ? " journal-article--editorial" : ""}`}
    >
      <JournalArticleHero hero={article.hero} />
      {isGuide ? (
        <JournalArticleInsight
          quickAnswer={article.quickAnswer}
          keyTakeaways={article.keyTakeaways}
          keyTakeawayBullets={article.keyTakeawayBullets}
        />
      ) : null}
      <div className="journal-article__shell">
        <div className="journal-article__main">
          {isGuide && article.intro ? (
            <JournalArticleIntro paragraphs={article.intro.paragraphs} />
          ) : null}
          {isGuide ? <JournalArticleBody sections={bodySections} /> : null}
          {isGuide ? null : (
            <JournalArticleBodyEditorial
              paragraphs={article.editorialParagraphs ?? []}
              epigraph={article.epigraph}
            />
          )}
          {article.faq?.items.length ? (
            <JournalArticleFaqSection faq={article.faq} />
          ) : null}
          {finalSection ? <JournalArticleBody sections={[finalSection]} /> : null}
          <JournalArticleProducts block={article.products} />
          <JournalArticleRelated block={article.related} />
          {article.articleNote ? (
            <p className="journal-article__note">{article.articleNote}</p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
