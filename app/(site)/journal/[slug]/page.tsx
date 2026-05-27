import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JournalArticlePage } from "@/components/journal/article/journal-article-page";
import { JournalTopicHubPage } from "@/components/journal/journal-topic-hub-page";
import { getJournalArticle, getJournalArticleSlugs } from "@/lib/journal-articles";
import { getJournalIndexArticles } from "@/lib/get-journal-index-articles";
import {
  getArticlesForTopicHub,
  getJournalTopicHub,
  journalTopicHubSlugs,
} from "@/lib/journal-topic-hubs";
import { journalPath } from "@/lib/site-paths";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [
    ...journalTopicHubSlugs().map((slug) => ({ slug })),
    ...getJournalArticleSlugs().map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const hub = getJournalTopicHub(slug);
  if (hub) {
    return {
      title: `${hub.title} · Journal`,
      description: hub.description,
      alternates: { canonical: journalPath(slug) },
      openGraph: {
        type: "website",
        title: hub.title,
        description: hub.description,
        url: journalPath(slug),
      },
    };
  }

  const article = getJournalArticle(slug);
  if (!article) return {};

  const title = article.seoTitle ?? article.hero.title;
  const description = article.seoDescription ?? article.hero.subtitle;

  return {
    title,
    description,
    alternates: { canonical: journalPath(slug) },
    openGraph: {
      type: "article",
      title,
      description,
      url: journalPath(slug),
    },
  };
}

export default async function JournalSlugPage({ params }: Props) {
  const { slug } = await params;

  const hub = getJournalTopicHub(slug);
  if (hub) {
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
      url: journalPath(slug),
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
  }

  const article = getJournalArticle(slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.hero.title,
    description: article.seoDescription ?? article.hero.subtitle,
    author: { "@type": "Organization", name: "Quiet Ash" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <JournalArticlePage article={article} />
    </>
  );
}
