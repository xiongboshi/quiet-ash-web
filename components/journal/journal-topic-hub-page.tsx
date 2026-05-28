import { JournalEditorialHero } from "@/components/journal/journal-editorial-hero";
import { JournalTopicHubFeaturedArticles } from "@/components/journal/journal-topic-hub-featured-articles";
import { JournalTopicHubFeaturedGuide } from "@/components/journal/journal-topic-hub-featured-guide";
import { JournalTopicHubPeopleAlsoAsk } from "@/components/journal/journal-topic-hub-people-also-ask";
import { JournalTopicHubPopularSearches } from "@/components/journal/journal-topic-hub-popular-searches";
import { JournalTopicHubSaveShare } from "@/components/journal/journal-topic-hub-save-share";
import { getJournalTopicPageContent } from "@/data/journal-topic-page-content";
import type { TopicPageFeaturedArticle } from "@/data/journal-topic-page-content";
import type { JournalTopicHub } from "@/data/journal-topic-hubs";
import { isJournalGuideArticle } from "@/data/journal-guide-slugs";
import type { JournalIndexArticleResolved } from "@/lib/journal-index-articles";

type Props = {
  hub: JournalTopicHub;
  articles: readonly JournalIndexArticleResolved[];
};

function featuredArticlesForHub(
  contentArticles: readonly TopicPageFeaturedArticle[],
  resolvedBySlug: Map<string, JournalIndexArticleResolved>,
): readonly TopicPageFeaturedArticle[] {
  return contentArticles.filter(
    (item) => resolvedBySlug.has(item.slug) && isJournalGuideArticle(item.slug),
  );
}

export function JournalTopicHubPage({ hub, articles }: Props) {
  const content = getJournalTopicPageContent(hub.id);
  const resolvedBySlug = new Map(articles.map((a) => [a.slug, a]));
  const featuredArticles = featuredArticlesForHub(
    content.featuredArticles,
    resolvedBySlug,
  );

  return (
    <div className="journal-topic-page">
      <JournalEditorialHero
        title={hub.title}
        tagline={content.heroTagline}
        lede={content.heroLede}
        imageSrc={hub.heroImageSrc}
        imageAlt={hub.heroImageAlt}
        headingId="journal-topic-hero-heading"
      />

      <div className="journal-topic-page__body">
        <JournalTopicHubFeaturedGuide guide={content.featuredGuide} />
        <JournalTopicHubPopularSearches pills={content.popularSearches} />
        <JournalTopicHubFeaturedArticles
          articles={featuredArticles}
          resolvedBySlug={resolvedBySlug}
          viewAllHref={hub.pathname}
        />
        <JournalTopicHubPeopleAlsoAsk items={content.peopleAlsoAsk} />
        <JournalTopicHubSaveShare saveSub={content.saveShareSub} />
      </div>
    </div>
  );
}
