import { QaImage as Image } from "@/components/ui/qa-image";
import Link from "next/link";
import type { TopicPageFeaturedGuide } from "@/data/journal-topic-page-content";

type Props = {
  guide: TopicPageFeaturedGuide;
};

export function JournalTopicHubFeaturedGuide({ guide }: Props) {
  return (
    <section
      className="journal-topic-page__featured-guide"
      aria-labelledby="journal-topic-featured-guide-heading"
    >
      <div className="journal-topic-page__featured-guide-card">
        <figure className="journal-topic-page__featured-guide-media">
          <Image
            src={guide.imageSrc}
            alt={guide.imageAlt}
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="object-cover"
          />
        </figure>
        <div className="journal-topic-page__featured-guide-body">
          <p className="journal-topic-page__eyebrow">Featured guide</p>
          <h2 id="journal-topic-featured-guide-heading" className="journal-topic-page__featured-guide-title">
            {guide.title}
          </h2>
          <p className="journal-topic-page__featured-guide-desc">{guide.description}</p>
          <Link href={guide.href} className="journal-topic-page__featured-guide-cta">
            Read the guide →
          </Link>
        </div>
      </div>
    </section>
  );
}
