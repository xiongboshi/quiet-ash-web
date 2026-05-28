import { QaImage as Image } from "@/components/ui/qa-image";
import Link from "next/link";
import { Search } from "lucide-react";
import { JournalDiscoveryFaqColumn } from "@/components/journal/journal-discovery-faq-column";
import { JournalDiscoveryTopicIcon } from "@/components/journal/journal-discovery-topic-icon";
import { JournalIndexLatestCard } from "@/components/journal/journal-index-latest-card";
import {
  journalDiscoveryEvergreenList,
  journalDiscoveryExploreTopics,
  journalDiscoveryFeaturedEditorial,
  journalDiscoveryFooterLinks,
  journalDiscoveryHubCardImages,
  journalDiscoveryHubCopy,
  journalDiscoveryHubOrder,
  journalDiscoveryLatestSlugs,
  journalDiscoveryMoodCards,
  journalDiscoverySearchIntents,
} from "@/data/journal-index-discovery";
import { journalTopicHubById } from "@/data/journal-topic-hubs";
import type { JournalTopicHubId } from "@/data/journal-topic-hubs";
import type { JournalIndexArticleResolved } from "@/lib/journal-index-articles";
import { getJournalIndexArticles } from "@/lib/get-journal-index-articles";

type Props = {
  hubCounts: Record<JournalTopicHubId, number>;
};

function resolveLatestArticles(): {
  article: JournalIndexArticleResolved;
  displayTitle?: string;
}[] {
  const bySlug = new Map(getJournalIndexArticles().map((a) => [a.slug, a]));
  return journalDiscoveryLatestSlugs
    .map((entry) => {
      const article = bySlug.get(entry.slug);
      if (!article) return null;
      return {
        article,
        displayTitle: "displayTitle" in entry ? entry.displayTitle : undefined,
      };
    })
    .filter((row): row is NonNullable<typeof row> => Boolean(row));
}

export function JournalIndexDiscovery({ hubCounts }: Props) {
  const latestRows = resolveLatestArticles();

  return (
    <div className="journal-discovery">
      {/* 1. Explore by topic */}
      <section className="journal-discovery__section" aria-labelledby="journal-explore-topics">
        <h2 id="journal-explore-topics" className="journal-discovery__eyebrow">
          Explore by topic
        </h2>
        <nav className="journal-discovery__topic-row" aria-label="Explore by topic">
          {journalDiscoveryExploreTopics.map((topic) => (
            <Link key={topic.id} href={topic.href} className="journal-discovery__topic-pill">
              <span
                className="journal-discovery__topic-pill-icon"
                data-topic={topic.id}
                aria-hidden
              >
                <JournalDiscoveryTopicIcon topicId={topic.id} />
              </span>
              <span className="journal-discovery__topic-pill-label">{topic.label}</span>
            </Link>
          ))}
        </nav>
      </section>

      {/* 2. Explore common searches */}
      <section className="journal-discovery__section" aria-labelledby="journal-common-searches">
        <h2 id="journal-common-searches" className="journal-discovery__eyebrow">
          Explore common searches
        </h2>
        <div className="journal-discovery__search-row">
          {journalDiscoverySearchIntents.map((item) => (
            <Link key={item.label} href={item.href} className="journal-discovery__search-pill">
              <Search size={14} strokeWidth={1.5} aria-hidden />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Browse topic hubs */}
      <section className="journal-discovery__section" aria-labelledby="journal-browse-hubs">
        <h2 id="journal-browse-hubs" className="journal-discovery__eyebrow">
          Browse topic hubs
        </h2>
        <ul className="journal-discovery__hub-grid">
          {journalDiscoveryHubOrder.map((hubId) => {
            const hub = journalTopicHubById[hubId];
            const copy = journalDiscoveryHubCopy[hubId];
            const cardImage = journalDiscoveryHubCardImages[hubId];
            const count = hubCounts[hubId] ?? 0;
            return (
              <li key={hubId}>
                <Link href={hub.pathname} className="journal-discovery__hub-card">
                  <span className="journal-discovery__hub-media">
                    <Image
                      src={cardImage.imageSrc}
                      alt={cardImage.imageAlt}
                      fill
                      sizes="(max-width: 767px) 80vw, 20vw"
                      className="object-cover"
                    />
                  </span>
                  <span className="journal-discovery__hub-overlay" aria-hidden />
                  <span className="journal-discovery__hub-copy">
                    <span className="journal-discovery__hub-title">{hub.title}</span>
                    <span className="journal-discovery__hub-desc">
                      {copy?.tagline ?? hub.tagline}
                    </span>
                    <span className="journal-discovery__hub-meta">
                      {count > 0
                        ? `${count} ${count === 1 ? "article" : "articles"} →`
                        : "Explore topic →"}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* 4. Featured editorial */}
      <section className="journal-discovery__section" aria-labelledby="journal-featured-editorial">
        <h2 id="journal-featured-editorial" className="journal-discovery__eyebrow">
          Featured editorial
        </h2>
        <ul className="journal-discovery__editorial-grid">
          {journalDiscoveryFeaturedEditorial.map((item) => (
            <li key={item.title}>
              <Link href={item.href} className="journal-discovery__editorial-card">
                <span className="journal-discovery__editorial-media">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                    className="object-cover"
                  />
                </span>
                <span className="journal-discovery__editorial-overlay" aria-hidden />
                <span className="journal-discovery__editorial-copy">
                  <span className="journal-discovery__editorial-title">{item.title}</span>
                  <span className="journal-discovery__editorial-cta">Read the guide →</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* 5. Three columns */}
      <section
        className="journal-discovery__section journal-discovery__triptych"
        aria-label="Guides, questions, and moods"
      >
        <div className="journal-discovery__column">
          <h2 className="journal-discovery__eyebrow">Evergreen guides</h2>
          <ul className="journal-discovery__guide-list">
            {journalDiscoveryEvergreenList.map((guide) => (
              <li key={guide.href}>
                <Link href={guide.href} className="journal-discovery__guide-row">
                  <span className="journal-discovery__guide-thumb">
                    <Image
                      src={guide.imageSrc}
                      alt={guide.imageAlt}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </span>
                  <span className="journal-discovery__guide-text">
                    <span className="journal-discovery__guide-title">{guide.title}</span>
                    <span className="journal-discovery__guide-sub">{guide.subtitle}</span>
                  </span>
                  <span className="journal-discovery__row-arrow" aria-hidden>
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href={journalDiscoveryFooterLinks.guides} className="journal-discovery__footer-link">
            View all guides →
          </Link>
        </div>

        <div className="journal-discovery__column">
          <h2 className="journal-discovery__eyebrow">Popular questions</h2>
          <JournalDiscoveryFaqColumn />
          <Link href={journalDiscoveryFooterLinks.faqs} className="journal-discovery__footer-link">
            View all FAQs →
          </Link>
        </div>

        <div className="journal-discovery__column">
          <h2 className="journal-discovery__eyebrow">Explore moods</h2>
          <ul className="journal-discovery__mood-list">
            {journalDiscoveryMoodCards.map((mood) => (
              <li key={mood.title}>
                <Link href={mood.href} className="journal-discovery__mood-row">
                  <span className="journal-discovery__mood-text">
                    <span className="journal-discovery__mood-title">{mood.title}</span>
                    <span className="journal-discovery__mood-sub">{mood.subtitle}</span>
                  </span>
                  <span className="journal-discovery__mood-thumb">
                    <Image
                      src={mood.imageSrc}
                      alt={mood.imageAlt}
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href={journalDiscoveryFooterLinks.moods} className="journal-discovery__footer-link">
            View all moods →
          </Link>
        </div>
      </section>

      {/* 6. Latest articles */}
      <section className="journal-discovery__section" aria-labelledby="journal-latest-articles">
        <header className="journal-discovery__latest-head">
          <h2 id="journal-latest-articles" className="journal-discovery__eyebrow">
            Latest articles
          </h2>
          <Link href={journalDiscoveryFooterLinks.articles} className="journal-discovery__footer-link">
            View all articles →
          </Link>
        </header>
        <ul className="journal-discovery__latest-grid">
          {latestRows.map(({ article, displayTitle }) => (
            <li key={article.slug}>
              <JournalIndexLatestCard article={article} displayTitle={displayTitle} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
