import Image from "next/image";
import Link from "next/link";
import { HomeProductCardAdd } from "@/components/home/home-product-card-add";
import { HomeStarRating } from "@/components/home/home-icons";
import type { HomeBestSellerCard } from "@/data/home-redesign";
import { formatPriceDisplayCard } from "@/lib/cart/pricing";
import { shopPath } from "@/lib/site-paths";

type Props = { item: HomeBestSellerCard };

export function HomeProductCard({ item }: Props) {
  const href = shopPath(item.slug);

  return (
    <article className="home-product-card">
      <div className="home-product-card__media">
        <Link href={href} className="home-product-card__image-link">
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            fill
            sizes="(max-width: 767px) 92vw, (max-width: 1279px) 45vw, 220px"
            className="home-product-card__img object-cover"
            style={
              item.imageObjectPosition
                ? { objectPosition: item.imageObjectPosition }
                : undefined
            }
          />
        </Link>
      </div>
      <div className="home-product-card__body">
        <Link href={href} className="home-product-card__text-link">
          <h3 className="home-product-card__title">{item.title}</h3>
          <p className="home-product-card__notes">{item.scentNotes}</p>
          <div className="home-product-card__rating">
            <HomeStarRating />
            <span>({item.reviewCount})</span>
          </div>
        </Link>
        <div className="home-product-card__footer">
          <span className="home-product-card__price">
            {formatPriceDisplayCard(item.priceDisplay)}
          </span>
          <HomeProductCardAdd
            slug={item.slug}
            title={item.title}
            imageSrc={item.imageSrc}
            scentNotes={item.scentNotes}
          />
        </div>
      </div>
    </article>
  );
}
