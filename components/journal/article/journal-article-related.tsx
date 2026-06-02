import { QaImage as Image } from "@/components/ui/qa-image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { resolveJournalArticleRelatedItems } from "@/lib/journal-article-related";
import { journalPath } from "@/lib/site-paths";
import type { JournalArticleTemplate } from "@/types/journal-article";

type Props = {
  block: JournalArticleTemplate["related"];
};

export function JournalArticleRelated({ block }: Props) {
  const items = resolveJournalArticleRelatedItems(block.items);
  if (!items.length) return null;

  return (
    <section
      id="related"
      className="journal-article-related"
      aria-labelledby="journal-article-related-heading"
    >
      <h2
        id="journal-article-related-heading"
        className="journal-article-related__heading"
      >
        {block.heading}
      </h2>
      <ul className="journal-article-related__grid">
        {items.map((item) => (
          <li key={`${item.href ?? item.slug}-${item.title}`}>
            <Link
              href={item.href ?? journalPath(item.slug)}
              className="journal-article-related__card"
            >
              <figure className="journal-article-related__media">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 639px) 28vw, 20vw"
                  className="journal-article-related__img"
                />
              </figure>
              <div className="journal-article-related__body">
                <h3 className="journal-article-related__title">{item.title}</h3>
                <p className="journal-article-related__meta">
                  {item.readMinutes} min read
                </p>
                <span className="journal-article-related__arrow" aria-hidden>
                  <ArrowRight size={16} strokeWidth={1.25} />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
