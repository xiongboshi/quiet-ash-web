"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronRight, Gift } from "lucide-react";
import {
  cartPageCopy,
  cartRecommendations,
  type CartRecommendation,
} from "@/data/cart-page";
import { formatMoney } from "@/lib/cart/pricing";
import { useCartStore } from "@/stores/cart-store";

function RecommendationCard({
  product,
  onAdd,
}: {
  product: CartRecommendation;
  onAdd: () => void;
}) {
  return (
    <li className="cart-rec__card">
      <div className="cart-rec__media-wrap">
        <Image
          src={product.image}
          alt=""
          fill
          sizes="(max-width: 1023px) 72vw, 22vw"
          className="cart-rec__img object-cover"
          unoptimized
        />
      </div>
      <div className="cart-rec__body">
        <p className="cart-rec__name">{product.title}</p>
        <p className="cart-rec__type">{product.type}</p>
        <p className="cart-rec__pack">{product.pack}</p>
        <p className="cart-rec__price">{formatMoney(product.priceCents)}</p>
        <button type="button" className="cart-rec__add" onClick={onAdd}>
          {cartPageCopy.recommendations.addToCart}
        </button>
      </div>
    </li>
  );
}

export function CartRecommendations() {
  const trackRef = useRef<HTMLUListElement>(null);
  const addItem = useCartStore((s) => s.addItem);

  function scrollNext() {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".cart-rec__card");
    const gap = 20;
    const step = card ? card.offsetWidth + gap : 280;
    el.scrollBy({ left: step, behavior: "smooth" });
  }

  function handleAdd(product: CartRecommendation) {
    addItem({
      slug: product.slug,
      title: product.title,
      priceCents: product.priceCents,
      image: product.image,
    });
  }

  return (
    <section className="cart-rec" aria-labelledby="cart-rec-heading">
      <div className="cart-rec__inner">
        <header className="cart-rec__header">
          <h2 id="cart-rec-heading" className="cart-rec__title">
            {cartPageCopy.recommendations.heading}
          </h2>
          <p className="cart-rec__sub">{cartPageCopy.recommendations.subheading}</p>
        </header>

        <div className="cart-rec__track-wrap">
          <ul ref={trackRef} className="cart-rec__track">
            {cartRecommendations.map((product) => (
              <RecommendationCard
                key={product.slug}
                product={product}
                onAdd={() => handleAdd(product)}
              />
            ))}
          </ul>
          <button
            type="button"
            className="cart-rec__next"
            onClick={scrollNext}
            aria-label="Scroll recommendations"
          >
            <ChevronRight size={18} strokeWidth={1.5} aria-hidden />
          </button>
        </div>

        <p className="cart-rec__promo">
          <Gift className="cart-rec__promo-icon" size={15} strokeWidth={1.25} aria-hidden />
          {cartPageCopy.recommendations.promo}
        </p>
      </div>
    </section>
  );
}
