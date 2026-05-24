"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { HomeStarRating } from "@/components/home/home-icons";
import type { HomeBestSellerCard } from "@/data/home-redesign";
import { shopPath } from "@/lib/site-paths";
import { useCartStore } from "@/stores/cart-store";

type Props = { item: HomeBestSellerCard };

export function HomeProductCard({ item }: Props) {
  const addItem = useCartStore((s) => s.addItem);
  const href = shopPath(item.slug);

  const handleAdd = () =>
    addItem({
      slug: item.slug,
      title: item.title,
      priceCents: 1800,
      image: item.imageSrc,
      line: item.scentNotes,
    });

  return (
    <article className="home-product-card">
      <div className="home-product-card__media">
        <Link href={href} className="home-product-card__image-link">
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            fill
            sizes="(max-width: 767px) 100vw, 260px"
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
          <span className="home-product-card__price">{item.priceDisplay}</span>
          <button
            type="button"
            className="home-product-card__add"
            aria-label={`Add ${item.title} to cart`}
            onClick={handleAdd}
          >
            <Plus size={14} strokeWidth={1.25} aria-hidden />
          </button>
        </div>
      </div>
    </article>
  );
}
