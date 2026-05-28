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

export function EvergreenGuideRelatedArticles({
  articles,
  resolvedBySlug,
  viewAllHref,
}: Props) {
  return (
    <section
      id="related-articles"
      className="evergreen-guide__articles"
      aria-labelledby="evergreen-guide-articles-heading"
    >
      <header className="evergreen-guide__section-head evergreen-guide__section-head--articles">
        <h2 id="evergreen-guide-articles-heading" className="evergreen-guide__section-title">
          Related Articles
        </h2>
        <Link href={viewAllHref} className="evergreen-guide__section-link">
          View all articles →
        </Link>
      </header>
      <ul className="evergreen-guide__articles-grid">
        {articles.map((item) => {
          const resolved = resolvedBySlug.get(item.slug);
          if (!resolved) return null;
          return (
            <li key={item.slug}>
              <article className="evergreen-guide__article-card">
                <Link href={journalPath(item.slug)} className="evergreen-guide__article-link">
                  <figure className="evergreen-guide__article-media">
                    <Image
                      src={resolved.imageSrc}
                      alt={resolved.imageAlt}
                      fill
                      sizes="(max-width: 767px) 100vw, 25vw"
                      className="object-cover"
                    />
                  </figure>
                  <h3 className="evergreen-guide__article-title">
                    <span className="evergreen-guide__article-title-text">{item.title}</span>
                  </h3>
                  <p className="evergreen-guide__article-meta">
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
