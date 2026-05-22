import Image from "next/image";
import Link from "next/link";
import type { MoodsIndexJournalArticle } from "@/data/moods-index";
import { JOURNAL_INDEX } from "@/lib/site-paths";

type Props = {
  title: string;
  viewAllLabel: string;
  articles: readonly MoodsIndexJournalArticle[];
};

export function MoodsIndexJournal({ title, viewAllLabel, articles }: Props) {
  return (
    <section className="mood-journal-section">
      <div className="container">
        <div className="mood-journal-head">
          <h2 className="mood-journal-heading">{title}</h2>
          <Link href={JOURNAL_INDEX} className="mood-journal-view-all">
            {viewAllLabel}
            <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="mood-journal-grid">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="mood-journal-card"
            >
              <div className="mood-journal-visual">
                <Image
                  src={article.imageSrc}
                  alt={article.imageAlt}
                  width={640}
                  height={400}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="mood-journal-photo"
                />
              </div>
              <h3 className="mood-journal-title">{article.title}</h3>
              <p className="mood-journal-excerpt">{article.description}</p>
              <p className="mood-journal-meta">
                {article.category} · {article.readMinutes} MIN READ
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
