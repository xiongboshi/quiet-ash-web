"use client";

import { QaImage as Image } from "@/components/ui/qa-image";
import { useShopCategory } from "@/components/shop/shop-category-context";
import { siteRailExemptClass } from "@/lib/site-rail";

export function ShopCategoryHero() {
  const { hero } = useShopCategory();

  return (
    <section
      className={`shop-category-hero ${siteRailExemptClass}`}
      aria-labelledby="shop-category-hero-heading"
    >
      <div className="shop-category-hero__inner">
        <figure className="shop-category-hero__media">
          <Image
            src={hero.imageSrc}
            alt={hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="shop-category-hero__img object-cover"
          />
        </figure>
        <div className="shop-category-hero__scrim" aria-hidden />
        <div className="shop-category-hero__copy">
          <div className="shop-category-hero__copy-inner">
            <h1 id="shop-category-hero-heading" className="shop-category-hero__title">
              {hero.title}
            </h1>
            <p className="shop-category-hero__desc">
              {hero.descriptionLines.map((line) => (
                <span key={line} className="shop-category-hero__desc-line">
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
