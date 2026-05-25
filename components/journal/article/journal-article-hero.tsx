import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { JournalArticleBackButton } from "@/components/journal/article/journal-article-back-button";
import { JournalArticleShare } from "@/components/journal/article/journal-article-share";
import { siteRailExemptClass } from "@/lib/site-rail";
import type { JournalArticleHero } from "@/types/journal-article";

type Props = {
  hero: JournalArticleHero;
};

export function JournalArticleHero({ hero }: Props) {
  return (
    <header
      className={`journal-article-hero ${siteRailExemptClass}`}
      aria-labelledby="journal-article-hero-heading"
    >
      <div className="journal-article-hero__inner">
        <figure className="journal-article-hero__media">
          <Image
            src={hero.imageSrc}
            alt={hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="journal-article-hero__img object-cover"
          />
        </figure>
        <div className="journal-article-hero__scrim" aria-hidden />
        <div className="journal-article-hero__copy">
          <div className="journal-article-hero__copy-inner">
            <JournalArticleBackButton breadcrumbs={hero.breadcrumbs} />
            <h1
              id="journal-article-hero-heading"
              className="journal-article-hero__title"
            >
              {hero.title}
            </h1>
            <p className="journal-article-hero__subtitle">{hero.subtitle}</p>
            <div className="journal-article-hero__meta">
              <div className="journal-article-hero__meta-start">
                <span className="journal-article-hero__meta-item">
                  <Clock size={14} strokeWidth={1.25} aria-hidden />
                  {hero.readMinutes} min read
                </span>
                <span className="journal-article-hero__meta-item">
                  <Calendar size={14} strokeWidth={1.25} aria-hidden />
                  {hero.updatedLabel}
                </span>
              </div>
              <JournalArticleShare />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
