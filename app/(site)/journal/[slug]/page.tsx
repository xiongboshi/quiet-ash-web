import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JournalArticlePage } from "@/components/journal/article/journal-article-page";
import { getJournalArticle, getJournalArticleSlugs } from "@/lib/journal-articles";
import { journalPath } from "@/lib/site-paths";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getJournalArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
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

export default async function JournalArticleRoute({ params }: Props) {
  const { slug } = await params;
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
