import Image from "next/image";
import { journalIndexHero } from "@/data/journal-index";
import { siteRailExemptClass } from "@/lib/site-rail";

export function JournalIndexHero() {
  const { title, descriptionLines, imageSrc, imageAlt } = journalIndexHero;

  return (
    <section
      className={`journal-index-hero ${siteRailExemptClass}`}
      aria-labelledby="journal-index-hero-heading"
    >
      <div className="journal-index-hero__inner">
        <figure className="journal-index-hero__media">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="journal-index-hero__img object-cover"
          />
        </figure>
        <div className="journal-index-hero__scrim" aria-hidden />
        <div className="journal-index-hero__copy">
          <div className="journal-index-hero__copy-inner">
            <h1 id="journal-index-hero-heading" className="journal-index-hero__title">
              {title}
            </h1>
            <p className="journal-index-hero__desc">
              {descriptionLines.map((line) => (
                <span key={line} className="journal-index-hero__desc-line">
                  {line}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
