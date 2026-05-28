import { JournalEditorialHero } from "@/components/journal/journal-editorial-hero";
import { JournalTopicHubFeaturedArticles } from "@/components/journal/journal-topic-hub-featured-articles";
import { JournalTopicHubFeaturedGuide } from "@/components/journal/journal-topic-hub-featured-guide";
import { JournalTopicHubPeopleAlsoAsk } from "@/components/journal/journal-topic-hub-people-also-ask";
import { JournalTopicHubSaveShare } from "@/components/journal/journal-topic-hub-save-share";
import { getJournalTopicPageContent } from "@/data/journal-topic-page-content";
import type { TopicPageFeaturedArticle } from "@/data/journal-topic-page-content";
import type { JournalTopicHub } from "@/data/journal-topic-hubs";
import type { JournalIndexArticleResolved } from "@/lib/journal-index-articles";

type Props = {
  hub: JournalTopicHub;
  articles: readonly JournalIndexArticleResolved[];
};

function featuredArticlesForHub(
  hub: JournalTopicHub,
  resolvedBySlug: Map<string, JournalIndexArticleResolved>,
): readonly TopicPageFeaturedArticle[] {
  const slugs = hub.featuredSlugs ?? [];
  return slugs
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

export function JournalTopicHubPage({ hub, articles }: Props) {
  const content = getJournalTopicPageContent(hub.id);
  const resolvedBySlug = new Map(articles.map((a) => [a.slug, a]));
  const featuredArticles = featuredArticlesForHub(hub, resolvedBySlug);

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
