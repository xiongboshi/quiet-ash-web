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

export function JournalTopicHubFeaturedArticles({
  articles,
  resolvedBySlug,
  viewAllHref,
}: Props) {
  return (
    <section
      className="journal-topic-page__featured-articles"
      aria-labelledby="journal-topic-featured-articles-heading"
    >
      <header className="journal-topic-page__section-head">
        <h2 id="journal-topic-featured-articles-heading" className="journal-topic-page__section-title">
          Featured Articles
        </h2>
        <Link href={viewAllHref} className="journal-topic-page__section-link">
          View all articles →
        </Link>
      </header>
      <ul className="journal-topic-page__featured-articles-grid">
        {articles.map((item) => {
          const resolved = resolvedBySlug.get(item.slug);
          if (!resolved) return null;
          return (
            <li key={`${item.slug}-${item.title}`}>
              <article className="journal-topic-page__article-card">
                <Link href={journalPath(item.slug)} className="journal-topic-page__article-card-link">
                  <figure className="journal-topic-page__article-card-media">
                    <Image
                      src={resolved.imageSrc}
                      alt={resolved.imageAlt}
                      fill
                      sizes="(max-width: 767px) 100vw, 25vw"
                      className="object-cover"
                    />
                  </figure>
                  <h3 className="journal-topic-page__article-card-title">
                    <span className="journal-topic-page__article-card-title-text">{item.title}</span>
                  </h3>
                  <p className="journal-topic-page__article-card-desc">{item.description}</p>
                  <p className="journal-topic-page__article-card-meta">
                    {resolved.readMinutes} min read
                  </p>
                </Link>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
