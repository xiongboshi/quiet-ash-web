import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EvergreenGuidePage } from "@/components/guides/evergreen-guide-page";
import type { EvergreenGuideSlug } from "@/data/evergreen-guides";
import { getJournalIndexArticles } from "@/lib/get-journal-index-articles";
import {
  getArticlesForEvergreenGuide,
  getEvergreenGuide,
} from "@/lib/evergreen-guides";
import { guidePath } from "@/lib/site-paths";

export function createEvergreenGuidePageHandlers(slug: EvergreenGuideSlug) {
  return {
    generateMetadata: async (): Promise<Metadata> => {
      const guide = getEvergreenGuide(slug);
      if (!guide) return {};

      return {
        title: `${guide.title} · Guides`,
        description: guide.description,
        alternates: { canonical: guidePath(slug) },
        openGraph: {
          type: "article",
          title: guide.title,
          description: guide.description,
          url: guidePath(slug),
        },
      };
    },

    Page: async function EvergreenGuideRoutePage() {
      const guide = getEvergreenGuide(slug);
      if (!guide) notFound();

      const articles = getArticlesForEvergreenGuide(
        getJournalIndexArticles(),
        guide,
      );

      const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: guide.title,
        description: guide.description,
        url: guidePath(slug),
      };

      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <EvergreenGuidePage guide={guide} articles={articles} />
        </>
      );
    },
  };
}
