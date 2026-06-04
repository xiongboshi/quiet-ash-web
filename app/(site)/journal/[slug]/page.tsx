import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { JournalArticlePage } from "@/components/journal/article/journal-article-page";
import { JournalTopicHubPage } from "@/components/journal/journal-topic-hub-page";
import { getJournalArticle, getJournalArticleSlugs } from "@/lib/journal-articles";
import { getJournalIndexArticles } from "@/lib/get-journal-index-articles";
import { isJournalCoreTopicHubId } from "@/data/journal-topic-hubs";
import {
  getArticlesForTopicHub,
  getJournalTopicHub,
  journalTopicHubSlugs,
} from "@/lib/journal-topic-hubs";
import { buildJournalFaqPageJsonLd } from "@/lib/journal-faq-json-ld";
import { journalPath } from "@/lib/site-paths";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  const hubSlugs = journalTopicHubSlugs().filter((slug) => !isJournalCoreTopicHubId(slug));
  return [
    ...hubSlugs.map((slug) => ({ slug })),
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
  const documentTitle = article.documentTitle;

  return {
    title: documentTitle ? { absolute: documentTitle } : title,
    description,
    alternates: { canonical: journalPath(slug) },
    openGraph: {
      type: "article",
      title: documentTitle ?? title,
      description,
      url: journalPath(slug),
    },
  };
}

export default async function JournalSlugPage({ params }: Props) {
  const { slug } = await params;

  if (isJournalCoreTopicHubId(slug)) notFound();

  const hub = getJournalTopicHub(slug);
  if (hub) {
    if (slug !== hub.id) {
      redirect(journalPath(hub.id));
    }

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

  const pageUrl = new URL(journalPath(slug), siteUrl).toString();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.hero.title,
    description: article.seoDescription ?? article.hero.subtitle,
    author: { "@type": "Organization", name: "Quiet Ash" },
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
  };
  const faqJsonLd =
    article.faq?.items.length ?
      buildJournalFaqPageJsonLd(article.faq, pageUrl)
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}
      <JournalArticlePage article={article} />
    </>
  );
}
