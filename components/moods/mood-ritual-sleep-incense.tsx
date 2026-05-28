import { QaImage as Image } from "@/components/ui/qa-image";
import Link from "next/link";
import type { CatalogProduct } from "@/lib/catalog";
import type { MoodRitualSleepIncenseSpec } from "@/data/mood-ritual-sections";
import { formatPriceDisplayCard } from "@/lib/cart/pricing";
import { moodRitualSleepIncenseShopHref } from "@/data/mood-ritual-sections";
import { MoodRitualIncenseAddButton } from "@/components/moods/mood-ritual-incense-add-button";

type Props = MoodRitualSleepIncenseSpec & {
  productsBySlug: Map<string, CatalogProduct>;
};

export function MoodRitualSleepIncense({
  label,
  items,
  productsBySlug,
}: Props) {
  return (
    <section
      id="the-ritual"
      className="mood-ritual-incense"
      aria-labelledby="mood-ritual-incense-label"
    >
      <div className="mood-ritual-rail mood-ritual-panel__inner mood-ritual-incense__shell">
        <h2 id="mood-ritual-incense-label" className="mood-ritual-incense__label">
          {label}
        </h2>

        <div className="mood-ritual-incense__grid">
          {items.map((item) => {
            const product = productsBySlug.get(item.slug);
            const shopHref = moodRitualSleepIncenseShopHref(item.slug);

            return (
              <article
                key={item.slug}
                className={`mood-ritual-incense__cell${
                  item.imageFirst ? "" : " mood-ritual-incense__cell--flip"
                }`}
              >
                <figure className="mood-ritual-incense__media">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1023px) 50vw, 25vw"
                    className="mood-ritual-incense__img"
                    unoptimized
                  />
                </figure>

                <div className="mood-ritual-incense__copy">
                  <h3 className="mood-ritual-incense__title">{item.title}</h3>
                  <p className="mood-ritual-incense__tags">{item.tags}</p>
                  <p className="mood-ritual-incense__desc">{item.description}</p>
                  <p className="mood-ritual-incense__price">
                    {formatPriceDisplayCard(item.priceDisplay)}
                  </p>

                  <div className="mood-ritual-incense__actions">
                    {product ? (
                      <MoodRitualIncenseAddButton
                        product={product}
                        displayTitle={item.title}
                      />
                    ) : (
                      <Link href={shopHref} className="mood-ritual-incense__cart-btn">
                        Add to cart
                      </Link>
                    )}
                    <Link href={shopHref} className="mood-ritual-incense__learn">
                      Learn more
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
