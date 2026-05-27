import Image from "next/image";
import Link from "next/link";
import { JournalIndexArticleCard } from "@/components/journal/journal-index-article-card";
import { JournalIndexQuestions } from "@/components/journal/journal-index-questions";
import type { JournalTopicHub } from "@/data/journal-topic-hubs";
import type { JournalIndexArticleResolved } from "@/lib/journal-index-articles";
import { JOURNAL_INDEX, moodPath } from "@/lib/site-paths";
import { siteRailExemptClass } from "@/lib/site-rail";

type Props = {
  hub: JournalTopicHub;
  articles: readonly JournalIndexArticleResolved[];
};

export function JournalTopicHubPage({ hub, articles }: Props) {
  return (
    <div className="journal-topic-hub">
      <header className={`journal-topic-hub__hero ${siteRailExemptClass}`}>
        <figure className="journal-topic-hub__hero-media">
          <Image
            src={hub.heroImageSrc}
            alt={hub.heroImageAlt}
            fill
            priority
            sizes="100vw"
            className="journal-topic-hub__hero-img object-cover"
          />
        </figure>
        <div className="journal-topic-hub__hero-scrim" aria-hidden />
        <div className="journal-topic-hub__hero-copy">
          <nav className="journal-topic-hub__crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden>/</span>
            <Link href={JOURNAL_INDEX}>Journal</Link>
          </nav>
          <h1 className="journal-topic-hub__title">{hub.title}</h1>
          <p className="journal-topic-hub__tagline">{hub.tagline}</p>
          <p className="journal-topic-hub__desc">{hub.description}</p>
          <ul className="journal-topic-hub__keywords" aria-label="Topics">
            {hub.semanticKeywords.map((kw) => (
              <li key={kw}>{kw}</li>
            ))}
          </ul>
        </div>
      </header>

      <div className="journal-topic-hub__body">
        {hub.relatedMoodSlug ? (
          <section className="journal-topic-hub__mood" aria-label="Related mood">
            <Link
              href={moodPath(hub.relatedMoodSlug)}
              className="journal-topic-hub__mood-link"
            >
              {hub.relatedMoodLabel ?? "Explore mood ritual"}
              <span aria-hidden>→</span>
            </Link>
          </section>
        ) : null}

        <section aria-labelledby="journal-hub-articles-heading">
          <header className="journal-topic-hub__section-head">
            <h2 id="journal-hub-articles-heading" className="journal-topic-hub__section-title">
              Articles in this topic
            </h2>
            <p className="journal-topic-hub__section-sub">
              {articles.length} {articles.length === 1 ? "story" : "stories"}
            </p>
          </header>
          <ul className="journal-topic-hub__grid">
            {articles.map((article) => (
              <li key={article.slug}>
                <JournalIndexArticleCard article={article} />
              </li>
            ))}
          </ul>
        </section>

        <JournalIndexQuestions />
      </div>
    </div>
  );
}
