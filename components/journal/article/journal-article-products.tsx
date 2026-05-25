import Image from "next/image";
import Link from "next/link";
import { HomeStarRating } from "@/components/home/home-icons";
import { shopPath } from "@/lib/site-paths";
import type { JournalArticleTemplate } from "@/types/journal-article";

type Props = {
  block: JournalArticleTemplate["products"];
};

export function JournalArticleProducts({ block }: Props) {
  return (
    <section
      id="recommended"
      className="journal-article-products"
      aria-labelledby="journal-article-products-heading"
    >
      <h2 id="journal-article-products-heading" className="journal-article-products__heading">
        {block.heading}
      </h2>
      <ul className="journal-article-products__grid">
        {block.items.map((item) => (
          <li key={item.slug} className="journal-article-products__cell">
            <article className="journal-article-products__card">
              <Link
                href={shopPath(item.slug)}
                className="journal-article-products__media-link"
              >
                <figure className="journal-article-products__media">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 639px) 50vw, 25vw"
                    className="journal-article-products__img"
                  />
                </figure>
              </Link>
              <div className="journal-article-products__body">
                <Link
                  href={shopPath(item.slug)}
                  className="journal-article-products__text-link"
                >
                  <h3 className="journal-article-products__title">{item.title}</h3>
                </Link>
                <div className="journal-article-products__rating">
                  <HomeStarRating variant="hero" value={item.rating} tone="gold" />
                  <span className="journal-article-products__reviews">
                    ({item.reviewCount})
                  </span>
                </div>
                <div className="journal-article-products__foot">
                  <p className="journal-article-products__price">{item.priceDisplay}</p>
                  <Link href={shopPath(item.slug)} className="journal-article-products__cta">
                    Shop →
                  </Link>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
