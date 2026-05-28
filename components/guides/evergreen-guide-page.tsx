import { JournalEditorialHero } from "@/components/journal/journal-editorial-hero";
import { EvergreenGuideFaq } from "@/components/guides/evergreen-guide-faq";
import { EvergreenGuideFeatures } from "@/components/guides/evergreen-guide-features";
import { EvergreenGuideQuickAnswer } from "@/components/guides/evergreen-guide-quick-answer";
import { EvergreenGuideRelatedArticles } from "@/components/guides/evergreen-guide-related-articles";
import { EvergreenGuideSaveShare } from "@/components/guides/evergreen-guide-save-share";
import { EvergreenGuideScents } from "@/components/guides/evergreen-guide-scents";
import { EvergreenGuideToc } from "@/components/guides/evergreen-guide-toc";
import type { EvergreenGuide } from "@/data/evergreen-guides";
import { isJournalGuideArticle } from "@/data/journal-guide-slugs";
import { getEvergreenGuidePageContent } from "@/data/evergreen-guide-page-content";
import type { TopicPageFeaturedArticle } from "@/data/journal-topic-page-content";
import type { JournalIndexArticleResolved } from "@/lib/journal-index-articles";

type Props = {
  guide: EvergreenGuide;
  articles: readonly JournalIndexArticleResolved[];
};

function relatedArticlesForGuide(
  guide: EvergreenGuide,
  resolvedBySlug: Map<string, JournalIndexArticleResolved>,
): readonly TopicPageFeaturedArticle[] {
  return (guide.featuredSlugs ?? [])
    .filter((slug) => isJournalGuideArticle(slug))
    .map((slug) => {
      const resolved = resolvedBySlug.get(slug);
      if (!resolved) return null;
      return {
        slug,
        title: resolved.headline,
        description: resolved.description,
      };
    })
    .filter((item): item is TopicPageFeaturedArticle => Boolean(item));
}

export function EvergreenGuidePage({ guide, articles }: Props) {
  const content = getEvergreenGuidePageContent(guide.slug);
  const resolvedBySlug = new Map(articles.map((a) => [a.slug, a]));
  const relatedArticles = relatedArticlesForGuide(guide, resolvedBySlug);

  return (
    <div className="evergreen-guide">
      <JournalEditorialHero
        title={guide.title}
        tagline={content.heroTagline}
        lede={content.heroLede}
        imageSrc={guide.heroImageSrc}
        imageAlt={guide.heroImageAlt}
        headingId="evergreen-guide-hero-heading"
      />

      <div className="evergreen-guide__body">
        <EvergreenGuideQuickAnswer
          title={content.quickAnswerTitle}
          paragraphs={content.quickAnswer}
          imageSrc={content.quickAnswerImageSrc}
          imageAlt={content.quickAnswerImageAlt}
        />
        <EvergreenGuideToc heading={content.tocHeading} items={content.toc} />
        <EvergreenGuideScents section={content.scents} />
        <EvergreenGuideFeatures cards={content.features} />
        <div id="how-to-use-incense" className="evergreen-guide__anchor" tabIndex={-1} />
        <EvergreenGuideFaq items={content.faq} />
        {content.closingThoughts && content.closingThoughts.length > 0 ? (
          <section
            className="evergreen-guide__closing"
            aria-labelledby="evergreen-guide-closing-heading"
          >
            <h2 id="evergreen-guide-closing-heading" className="evergreen-guide__section-title">
              Final Thoughts
            </h2>
            <div className="evergreen-guide__closing-body">
              {content.closingThoughts.map((paragraph, index) => (
                <p key={index} className="evergreen-guide__closing-text">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ) : null}
        <EvergreenGuideRelatedArticles
          articles={relatedArticles}
          resolvedBySlug={resolvedBySlug}
          viewAllHref={content.relatedArticlesViewAllHref}
        />
        <EvergreenGuideSaveShare saveSub={content.saveShareSub} />
      </div>
    </div>
  );
}
