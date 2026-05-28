import { QaImage as Image } from "@/components/ui/qa-image";
import Link from "next/link";
import type { JournalIndexArticleResolved } from "@/lib/journal-index-articles";
import { formatJournalArticleDate } from "@/lib/journal-index-articles";
import { journalPath } from "@/lib/site-paths";

type Props = {
  article: JournalIndexArticleResolved;
};

export function JournalIndexArticleCard({ article }: Props) {
  const dateLabel = formatJournalArticleDate(article.date);

  return (
    <article className="journal-index-card">
      <Link href={journalPath(article.slug)} className="journal-index-card__link">
        <figure className="journal-index-card__media">
          <Image
            src={article.imageSrc}
            alt={article.imageAlt}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="journal-index-card__img"
            unoptimized
          />
        </figure>
        <div className="journal-index-card__body">
          <p className="journal-index-card__category">{article.categoryLabel}</p>
          <h3 className="journal-index-card__title">{article.title}</h3>
          <p className="journal-index-card__desc">{article.description}</p>
          <p className="journal-index-card__meta">
            {dateLabel}
            <span aria-hidden> • </span>
            {article.readMinutes} min read
          </p>
        </div>
      </Link>
    </article>
  );
}
