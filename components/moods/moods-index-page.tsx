import Image from "next/image";
import Link from "next/link";
import { MoodsIndexHeader } from "@/components/moods/moods-index-header";
import { MoodsIndexDayInScent } from "@/components/moods/moods-index-day-in-scent";
import { MoodsIndexMoodGrid } from "@/components/moods/moods-index-mood-grid";
import { MoodsIndexJournal } from "@/components/moods/moods-index-journal";
import { MoodsIndexPopularSearches } from "@/components/moods/moods-index-popular-searches";
import { MoodsIndexRitualBanner } from "@/components/moods/moods-index-ritual-banner";
import { MoodsIndexValueBar } from "@/components/moods/moods-index-value-bar";
import {
  moodsIndexCards,
  moodsIndexDayInScent,
  moodsIndexHero,
  moodsIndexJournal,
  moodsIndexPopularSearches,
  moodsIndexRitualBanner,
  moodsIndexValueBar,
} from "@/data/moods-index";

export function MoodsIndexPage() {
  return (
    <div className="moods-index">
      <section className="hero moods-hero-full">
        <div className="hero-bg">
          <Image
            src={moodsIndexHero.imageSrc}
            alt={moodsIndexHero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="mood-hero-photo"
          />
        </div>
        <div className="hero-overlay" aria-hidden />
        <MoodsIndexHeader />
        <div className="container hero-content">
          <div className="hero-copy">
            <div className="eyebrow">{moodsIndexHero.eyebrow}</div>
            <h1>{moodsIndexHero.title}</h1>
            <p className="hero-description">{moodsIndexHero.description}</p>
            <Link href={moodsIndexHero.cta.href} className="hero-cta">
              {moodsIndexHero.cta.label}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="shop-by-mood" className="mood-shop-section">
        <div className="container">
          <MoodsIndexMoodGrid cards={moodsIndexCards} />
        </div>
      </section>

      <MoodsIndexDayInScent
        title={moodsIndexDayInScent.title}
        subtitle={moodsIndexDayInScent.subtitle}
        cards={moodsIndexDayInScent.cards}
      />

      <MoodsIndexPopularSearches
        label={moodsIndexPopularSearches.label}
        pills={moodsIndexPopularSearches.pills}
      />

      <MoodsIndexRitualBanner
        imageSrc={moodsIndexRitualBanner.imageSrc}
        imageAlt={moodsIndexRitualBanner.imageAlt}
        title={moodsIndexRitualBanner.title}
        description={moodsIndexRitualBanner.description}
        cta={moodsIndexRitualBanner.cta}
        steps={moodsIndexRitualBanner.steps}
      />

      <MoodsIndexJournal
        title={moodsIndexJournal.title}
        viewAllLabel={moodsIndexJournal.viewAllLabel}
        articles={moodsIndexJournal.articles}
      />

      <MoodsIndexValueBar items={moodsIndexValueBar} />
    </div>
  );
}
