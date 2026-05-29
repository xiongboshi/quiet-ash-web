import { QaImage as Image } from "@/components/ui/qa-image";
import { HomeStarRating } from "@/components/home/home-icons";
import type { ShopProductPdp } from "@/data/shop-product-pdp";

type Props = { reviews: ShopProductPdp["reviews"] };

export function ShopProductReviews({ reviews }: Props) {
  return (
    <section className="shop-product-reviews" aria-labelledby="shop-product-reviews-heading">
      <div className="shop-product-reviews__inner">
        <div className="shop-product-reviews__summary">
          <h2 id="shop-product-reviews-heading" className="shop-product-reviews__heading">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <p className="shop-product-reviews__score">{reviews.average.toFixed(1)}</p>
          <HomeStarRating variant="hero" value={reviews.average} tone="ink" />
          <p className="shop-product-reviews__count">Based on {reviews.count} reviews</p>
          <button type="button" className="shop-product-reviews__all">
            VIEW ALL REVIEWS
          </button>
        </div>

        <ul className="shop-product-reviews__grid">
          {reviews.items.map((review) => (
            <li key={review.name} className="shop-product-reviews__card">
              <HomeStarRating tone="ink" />
              <p className="shop-product-reviews__quote">{review.quote}</p>
              <div className="shop-product-reviews__author">
                <span className="shop-product-reviews__avatar">
                  <Image
                    src={review.avatarSrc}
                    alt={`${review.name}, customer review`}
                    width={32}
                    height={32}
                    sizes="32px"
                    className="shop-product-reviews__avatar-img object-cover"
                  />
                </span>
                <span className="shop-product-reviews__name">{review.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
