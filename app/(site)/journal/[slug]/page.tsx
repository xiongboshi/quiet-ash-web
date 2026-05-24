import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { EditorialBackLink } from "@/components/editorial/editorial-back-link";
import { EssaySeriesNav } from "@/components/essays/essay-series-nav";
import { EssayBody } from "@/components/mdx/essay-body";
import { EssayHeroImage } from "@/components/essays/essay-hero-image";
import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/layout/page-intro";
import { essaysCollectionHref } from "@/lib/archive";
import { essayCardImageUrl } from "@/lib/essay-visuals";
import {
  getAdjacentInSeries,
  getEssayBySlug,
  getEssaySlugs,
} from "@/lib/essays";
import { getSeriesBySlug } from "@/lib/series";
import { JOURNAL_INDEX, journalPath } from "@/lib/site-paths";
import { siteRailExemptClass } from "@/lib/site-rail";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getEssaySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);
  if (!essay) return {};
  return {
    title: essay.title,
    description: essay.excerpt,
    alternates: { canonical: journalPath(slug) },
    openGraph: {
      type: "article",
      publishedTime: essay.date,
      title: essay.title,
      description: essay.excerpt,
      url: journalPath(slug),
    },
  };
}

export default async function JournalArticlePage({ params }: Props) {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);
  if (!essay) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: essay.title,
    datePublished: essay.date,
    description: essay.excerpt,
    author: { "@type": "Person", name: "Quiet Ash" },
  };

  const { prev, next } = getAdjacentInSeries(essay.series, slug);
  const seriesMeta = getSeriesBySlug(essay.series);
  const heroSrc = essayCardImageUrl(essay);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="qa-article-shell w-full">
        <Container variant="wide" className={siteRailExemptClass}>
          <div className="mb-6 lg:mb-8">
            <EditorialBackLink fallbackHref={JOURNAL_INDEX} />
          </div>
          <EssayHeroImage src={heroSrc} title={essay.title} />
        </Container>
        <Container>
          <time
            dateTime={essay.date}
            className="qa-meta mt-10 block tabular-nums tracking-[0.14em] lg:mt-12"
          >
            {essay.date}
          </time>
          <PageIntro
            as="h1"
            title={essay.title}
            className="mt-[var(--rhythm-xs)]"
          />
          <p className="qa-body mt-[var(--rhythm-sm)] max-w-[56ch] text-[var(--wood)] line-clamp-3">
            {essay.excerpt}
          </p>
          <p className="mt-[var(--rhythm-sm)]">
            <Link
              href={essaysCollectionHref(essay.series)}
              className="qa-meta text-[var(--wood)] underline decoration-[color-mix(in_srgb,var(--wood)_35%,transparent)] underline-offset-[0.25em] transition-opacity duration-[var(--motion-base)] hover:opacity-70"
            >
              Collection · {seriesMeta?.title ?? essay.series}
            </Link>
          </p>
          {essay.epigraph ? (
            <blockquote className="mt-[var(--rhythm-md)] max-w-[min(48ch,100%)] border-l border-[color-mix(in_srgb,var(--wood)_22%,transparent)] pl-[var(--rhythm-sm)] font-[family-name:var(--font-serif)] text-[0.98rem] font-normal italic leading-snug tracking-[-0.01em] text-[color-mix(in_srgb,var(--wood)_82%,var(--charcoal))]">
              {essay.epigraph}
            </blockquote>
          ) : null}
          <div className="mt-[var(--rhythm-md)]">
            <div className="markdown markdown--article">
              <EssayBody source={essay.body} />
            </div>
          </div>
          <EssaySeriesNav prev={prev} next={next} />
          <p className="mt-[var(--reading-tail)]">
            <Link
              href={essaysCollectionHref(essay.series)}
              className="qa-cta qa-label inline-block text-[var(--wood)]"
            >
              ← All journal
            </Link>
          </p>
        </Container>
      </article>
    </>
  );
}
