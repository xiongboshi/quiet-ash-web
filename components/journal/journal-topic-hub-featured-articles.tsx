import { QaImage as Image } from "@/components/ui/qa-image";
import Link from "next/link";
import type { TopicPageFeaturedArticle } from "@/data/journal-topic-page-content";
import type { JournalIndexArticleResolved } from "@/lib/journal-index-articles";
import { journalPath } from "@/lib/site-paths";

type Props = {
  articles: readonly TopicPageFeaturedArticle[];
  resolvedBySlug: Map<string, JournalIndexArticleResolved>;
  viewAllHref: string;
};

function isVisible(
  item: TopicPageFeaturedArticle,
  resolvedBySlug: Map<string, JournalIndexArticleResolved>,
): boolean {
  return item.slug ? resolvedBySlug.has(item.slug) : false;
}

export function JournalTopicHubFeaturedArticles({
  articles,
  resolvedBySlug,
  viewAllHref,
}: Props) {
  const visible = articles.filter((item) => isVisible(item, resolvedBySlug));
  if (visible.length === 0) return null;

  return (
    <section
      className="journal-topic-page__featured-articles"
      aria-labelledby="journal-topic-featured-articles-heading"
    >
      <header className="journal-topic-page__section-head">
        <h2
          id="journal-topic-featured-articles-heading"
          className="journal-topic-page__section-title"
        >
          Featured articles
        </h2>
        <Link href={viewAllHref} className="journal-topic-page__section-link">
          All journal ?
        </Link>
      </header>
      <ul
        className="journal-topic-page__featured-articles-grid"
        aria-label="Featured articles"
      >
        {visible.map((item) => {
          const resolved = item.slug ? resolvedBySlug.get(item.slug) : undefined;
          const href = journalPath(item.slug);
          const imageSrc =
            resolved?.imageSrc ?? "/images/generated/essay-good-incense-not-loud.webp";
          const imageAlt = resolved?.imageAlt ?? item.title;

          return (
            <li key={`${href}-${item.title}`}>
              <article className="journal-topic-page__article-card">
                <Link href={href} className="journal-topic-page__article-card-link">
                  <figure className="journal-topic-page__article-card-media">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      sizes="(max-width: 767px) 100vw, 25vw"
                      className="object-cover"
                    />
                  </figure>
                  <h3 className="journal-topic-page__article-card-title">
                    <span className="journal-topic-page__article-card-title-text">
                      {item.title}
                    </span>
                  </h3>
                  <p className="journal-topic-page__article-card-desc">{item.description}</p>
                  {resolved?.readMinutes || item.readMinutes ? (
                    <p className="journal-topic-page__article-card-meta">
                      {item.readMinutes ?? resolved?.readMinutes} min read
                    </p>
                  ) : null}
                </Link>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
