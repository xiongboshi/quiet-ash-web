import Image from "next/image";
import Link from "next/link";
import {
  journalDiscoveryEvergreenGuides,
  journalDiscoveryFeaturedEditorial,
  journalDiscoveryMoodLinks,
  journalDiscoverySearchIntents,
  journalDiscoveryTopicPills,
  journalIndexTopicClusterIntro,
  journalTopicHubs,
} from "@/data/journal-topic-hubs";

export function JournalIndexDiscovery() {
  return (
    <div className="journal-discovery">
      <div className="journal-discovery__inner">
        <nav className="journal-discovery__pills" aria-label="Topic suggestions">
          {journalDiscoveryTopicPills.map((pill) => (
            <Link key={pill.label} href={pill.href} className="journal-discovery__pill">
              {pill.label}
            </Link>
          ))}
        </nav>

        <section className="journal-discovery__clusters" aria-labelledby="journal-clusters-heading">
          <header className="journal-discovery__section-head">
            <h2 id="journal-clusters-heading" className="journal-discovery__section-title">
              {journalIndexTopicClusterIntro.title}
            </h2>
            <p className="journal-discovery__section-sub">{journalIndexTopicClusterIntro.sub}</p>
          </header>
          <ul className="journal-discovery__cluster-grid">
            {journalTopicHubs.map((hub) => (
              <li key={hub.id}>
                <Link href={hub.pathname} className="journal-discovery__cluster-card">
                  <span className="journal-discovery__cluster-title">{hub.title}</span>
                  <span className="journal-discovery__cluster-tagline">{hub.tagline}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="journal-discovery__featured"
          aria-labelledby="journal-featured-heading"
        >
          <header className="journal-discovery__section-head">
            <h2 id="journal-featured-heading" className="journal-discovery__section-title">
              Featured editorial
            </h2>
          </header>
          <ul className="journal-discovery__featured-grid">
            {journalDiscoveryFeaturedEditorial.map((item) => (
              <li key={item.title}>
                <Link href={item.href} className="journal-discovery__featured-card">
                  <span className="journal-discovery__featured-media">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 767px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </span>
                  <span className="journal-discovery__featured-title">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="journal-discovery__intents" aria-label="Search intents">
          <p className="journal-discovery__intents-label">People also explore</p>
          <div className="journal-discovery__intents-row">
            {journalDiscoverySearchIntents.map((item) => (
              <Link key={item.label} href={item.href} className="journal-discovery__intent">
                {item.label}
              </Link>
            ))}
          </div>
        </section>

        <section
          className="journal-discovery__evergreen"
          aria-labelledby="journal-evergreen-heading"
        >
          <header className="journal-discovery__section-head">
            <h2 id="journal-evergreen-heading" className="journal-discovery__section-title">
              Evergreen guides
            </h2>
          </header>
          <ul className="journal-discovery__evergreen-list">
            {journalDiscoveryEvergreenGuides.map((guide) => (
              <li key={guide.title}>
                <Link href={guide.href} className="journal-discovery__evergreen-link">
                  {guide.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="journal-discovery__moods" aria-labelledby="journal-moods-heading">
          <header className="journal-discovery__section-head">
            <h2 id="journal-moods-heading" className="journal-discovery__section-title">
              Explore moods
            </h2>
            <p className="journal-discovery__section-sub">
              Journal → Mood → Product
            </p>
          </header>
          <ul className="journal-discovery__mood-grid">
            {journalDiscoveryMoodLinks.map((mood) => (
              <li key={mood.href}>
                <Link href={mood.href} className="journal-discovery__mood-card">
                  <span className="journal-discovery__mood-media">
                    <Image
                      src={mood.imageSrc}
                      alt=""
                      fill
                      sizes="(max-width: 767px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </span>
                  <span className="journal-discovery__mood-label">{mood.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
