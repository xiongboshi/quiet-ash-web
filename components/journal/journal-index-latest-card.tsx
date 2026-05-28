import { QaImage as Image } from "@/components/ui/qa-image";
import Link from "next/link";
import type { JournalIndexArticleResolved } from "@/lib/journal-index-articles";
import { formatJournalArticleDate } from "@/lib/journal-index-articles";
import { journalPath } from "@/lib/site-paths";

type Props = {
  article: JournalIndexArticleResolved;
  displayTitle?: string;
};

export function JournalIndexLatestCard({ article, displayTitle }: Props) {
  const title = displayTitle ?? article.seoTitle ?? article.headline;
  const dateLabel = formatJournalArticleDate(article.date);

  return (
    <article className="journal-discovery-latest-card">
      <Link href={journalPath(article.slug)} className="journal-discovery-latest-card__link">
        <figure className="journal-discovery-latest-card__media">
          <Image
            src={article.imageSrc}
            alt={article.imageAlt}
            fill
            sizes="(max-width: 767px) 72vw, 240px"
            className="journal-discovery-latest-card__img object-cover"
          />
        </figure>
        <p className="journal-discovery-latest-card__category">{article.categoryLabel}</p>
        <h3 className="journal-discovery-latest-card__title">
          <span className="journal-discovery-latest-card__title-text">{title}</span>
        </h3>
        <p className="journal-discovery-latest-card__date">{dateLabel}</p>
      </Link>
    </article>
  );
}
