import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JournalTopicHubPage } from "@/components/journal/journal-topic-hub-page";
import type { JournalTopicHubId } from "@/data/journal-topic-hubs";
import { getJournalIndexArticles } from "@/lib/get-journal-index-articles";
import {
  getArticlesForTopicHub,
  getJournalTopicHub,
} from "@/lib/journal-topic-hubs";
import { journalPath } from "@/lib/site-paths";

/** Core topic hub pages — `/journal/{id}` (see `JOURNAL_CORE_TOPIC_HUB_IDS`). */
export function createJournalTopicPageHandlers(topicId: JournalTopicHubId) {
  return {
    generateMetadata: async (): Promise<Metadata> => {
      const hub = getJournalTopicHub(topicId);
      if (!hub) return {};

      return {
        title: `${hub.title} · Journal`,
        description: hub.description,
        alternates: { canonical: journalPath(topicId) },
        openGraph: {
          type: "website",
          title: hub.title,
          description: hub.description,
          url: journalPath(topicId),
        },
      };
    },

    Page: async function JournalTopicPage() {
      const hub = getJournalTopicHub(topicId);
      if (!hub) notFound();

      const articles = getArticlesForTopicHub(
        getJournalIndexArticles(),
        hub.id,
        hub.featuredSlugs,
      );

      const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: hub.title,
        description: hub.description,
        url: journalPath(topicId),
      };

      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <JournalTopicHubPage hub={hub} articles={articles} />
        </>
      );
    },
  };
}
