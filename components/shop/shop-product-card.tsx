"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { HomeStarRating } from "@/components/home/home-icons";
import type { ShopListingProduct } from "@/lib/shop-types";
import { formatPriceDisplayCard } from "@/lib/cart/pricing";
import { shopPath } from "@/lib/site-paths";
import { useCartStore } from "@/stores/cart-store";

type Props = { item: ShopListingProduct };

export function ShopProductCard({ item }: Props) {
  const addItem = useCartStore((s) => s.addItem);
  const href = shopPath(item.slug);

  const handleAdd = () =>
    addItem({
      slug: item.slug,
      title: item.title,
      priceCents: item.priceCents > 0 ? item.priceCents : 1800,
      image: item.imageSrc,
      line: item.scentNotes,
    });

  return (
    <article className="shop-product-card">
      <div className="shop-product-card__media">
        <Link href={href} className="shop-product-card__image-link">
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            fill
            sizes="(max-width: 639px) 46vw, (max-width: 767px) 50vw, (max-width: 1279px) 33vw, 25vw"
            className="shop-product-card__img object-cover"
          />
        </Link>
      </div>
      <div className="shop-product-card__body">
        <Link href={href} className="shop-product-card__text-link">
          <h3 className="shop-product-card__title">{item.title}</h3>
          <p className="shop-product-card__notes">{item.scentNotes}</p>
          <div className="shop-product-card__rating">
            <HomeStarRating />
            <span>({item.reviewCount})</span>
          </div>
        </Link>
        <div className="shop-product-card__footer">
          <span className="shop-product-card__price">
            {formatPriceDisplayCard(item.priceDisplay)}
          </span>
          <button
            type="button"
            className="shop-product-card__add"
            aria-label={`Add ${item.title} to cart`}
            onClick={handleAdd}
          >
            <ShoppingBag size={14} strokeWidth={1.25} aria-hidden />
          </button>
        </div>
      </div>
    </article>
  );
}
