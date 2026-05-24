import Image from "next/image";
import Link from "next/link";
import type { MoodRitualSleepJournalSpec } from "@/data/mood-ritual-sections";

type Props = MoodRitualSleepJournalSpec;

export function MoodRitualSleepJournal({
  label,
  viewAllLabel,
  viewAllHref,
  articles,
}: Props) {
  return (
    <section
      className="mood-ritual-journal"
      aria-labelledby="mood-ritual-journal-label"
    >
      <div className="mood-ritual-rail mood-ritual-journal__shell">
        <div className="mood-ritual-journal__head">
          <h2 id="mood-ritual-journal-label" className="mood-ritual-journal__label">
            {label}
          </h2>
          <Link href={viewAllHref} className="mood-ritual-journal__view-all">
            {viewAllLabel}
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mood-ritual-journal__grid">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="mood-ritual-journal__card"
            >
              <figure className="mood-ritual-journal__media">
                <Image
                  src={article.imageSrc}
                  alt={article.imageAlt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="mood-ritual-journal__img"
                  unoptimized
                />
              </figure>
              <div className="mood-ritual-journal__copy">
                <p className="mood-ritual-journal__category">{article.category}</p>
                <h3 className="mood-ritual-journal__title">{article.title}</h3>
                <p className="mood-ritual-journal__desc">{article.description}</p>
                <span className="mood-ritual-journal__read">
                  Read More
                  <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
