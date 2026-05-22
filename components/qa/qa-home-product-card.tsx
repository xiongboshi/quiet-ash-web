"use client";

import Image from "next/image";
import Link from "next/link";
import { shopPath } from "@/lib/site-paths";
import { useCartStore } from "@/stores/cart-store";
import type { HomeBestSeller } from "@/data/best-sellers-home";

type Props = { item: HomeBestSeller };

export function QaHomeProductCard({ item }: Props) {
  const addItem = useCartStore((s) => s.addItem);
  const href = shopPath(item.slug);

  return (
    <article className="product-card">
      <Link href={href} className="product-link-wrap">
        <div className="product-image">
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            fill
            sizes="(max-width: 767px) 100vw, 260px"
            className="object-cover"
            style={{ objectPosition: item.imageObjectPosition }}
          />
        </div>
        <div className="product-info">
          <h4>{item.title}</h4>
          <p>{item.scentNotes}</p>
          <div className="product-bottom">
            <span className="price">{item.priceDisplay}</span>
            <button
              type="button"
              className="plus"
              aria-label={`Add ${item.title} to cart`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem({
                  slug: item.slug,
                  title: item.title,
                  priceCents: 3600,
                  image: item.imageSrc,
                  line: item.scentNotes,
                });
              }}
            >
              <span className="plus-glyph" aria-hidden>
                +
              </span>
            </button>
          </div>
        </div>
      </Link>
    </article>
  );
}
