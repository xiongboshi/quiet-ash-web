import { JournalEditorialHero } from "@/components/journal/journal-editorial-hero";
import { JournalTopicHubFeaturedArticles } from "@/components/journal/journal-topic-hub-featured-articles";
import { JournalTopicHubFeaturedGuide } from "@/components/journal/journal-topic-hub-featured-guide";
import { JournalTopicHubPeopleAlsoAsk } from "@/components/journal/journal-topic-hub-people-also-ask";
import { JournalTopicHubPopularSearches } from "@/components/journal/journal-topic-hub-popular-searches";
import { JournalTopicHubTopicIntro } from "@/components/journal/journal-topic-hub-topic-intro";
import { JournalTopicHubSaveShare } from "@/components/journal/journal-topic-hub-save-share";
import { getJournalTopicPageContent } from "@/data/journal-topic-page-content";
import type { TopicPageFeaturedArticle } from "@/data/journal-topic-page-content";
import type { JournalTopicHub } from "@/data/journal-topic-hubs";
import { isJournalGuideArticle } from "@/data/journal-guide-slugs";
import type { JournalIndexArticleResolved } from "@/lib/journal-index-articles";
import { getJournalIndexArticles } from "@/lib/get-journal-index-articles";
import { JOURNAL_INDEX } from "@/lib/site-paths";

type Props = {
  hub: JournalTopicHub;
  articles: readonly JournalIndexArticleResolved[];
};

function topicArticlesForHub(
  hubArticles: readonly JournalIndexArticleResolved[],
  contentArticles: readonly TopicPageFeaturedArticle[],
  featuredSlugs?: readonly string[],
): readonly TopicPageFeaturedArticle[] {
  const bySlug = new Map(hubArticles.map((a) => [a.slug, a]));
  const contentBySlug = new Map(contentArticles.map((item) => [item.slug, item]));
  const seen = new Set<string>();
  const ordered: TopicPageFeaturedArticle[] = [];

  const slugOrder = featuredSlugs?.length
    ? featuredSlugs
    : contentArticles.map((item) => item.slug);

  for (const slug of slugOrder) {
    const resolved = bySlug.get(slug);
    if (!resolved || !isJournalGuideArticle(slug) || seen.has(slug)) continue;
    seen.add(slug);
    const override = contentBySlug.get(slug);
    ordered.push({
      slug,
      title: override?.title ?? resolved.headline,
      description: override?.description ?? resolved.description,
      readMinutes: override?.readMinutes ?? resolved.readMinutes,
    });
  }

  const hubByDate = [...hubArticles].sort((a, b) =>
    a.date > b.date ? -1 : a.date < b.date ? 1 : 0,
  );

  for (const resolved of hubByDate) {
    if (!isJournalGuideArticle(resolved.slug) || seen.has(resolved.slug)) continue;
    const override = contentBySlug.get(resolved.slug);
    ordered.push({
      slug: resolved.slug,
      title: override?.title ?? resolved.headline,
      description: override?.description ?? resolved.description,
      readMinutes: override?.readMinutes ?? resolved.readMinutes,
    });
  }

  return ordered;
}

export function JournalTopicHubPage({ hub, articles }: Props) {
  const content = getJournalTopicPageContent(hub.id);
  const resolvedBySlug = new Map(
    getJournalIndexArticles()
      .filter((a) => a.categoryId === hub.categoryId)
      .map((a) => [a.slug, a]),
  );
  const featuredArticles = topicArticlesForHub(
    articles,
    content.featuredArticles,
    hub.featuredSlugs,
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
        <JournalTopicHubPopularSearches pills={content.popularSearches} />
        <JournalTopicHubFeaturedGuide guide={content.featuredGuide} />
        {content.topicIntroduction?.paragraphs.length ? (
          <JournalTopicHubTopicIntro
            title={content.topicIntroduction.title}
            paragraphs={content.topicIntroduction.paragraphs}
          />
        ) : null}
        <JournalTopicHubFeaturedArticles
          articles={featuredArticles}
          resolvedBySlug={resolvedBySlug}
          viewAllHref={JOURNAL_INDEX}
        />
        <JournalTopicHubPeopleAlsoAsk items={content.peopleAlsoAsk} />
        {content.saveShareSub ? (
          <JournalTopicHubSaveShare saveSub={content.saveShareSub} />
        ) : null}
      </div>
    </div>
  );
}
