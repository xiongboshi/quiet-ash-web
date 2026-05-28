"use client";

import { QaImage as Image } from "@/components/ui/qa-image";
import { useRouter } from "next/navigation";
import {
  FlaskConical,
  HandHeart,
  Leaf,
  Lock,
  Minus,
  Plus,
  RefreshCw,
  RotateCcw,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { HomeStarRating } from "@/components/home/home-icons";
import {
  CartAddedToast,
  useCartAddedToast,
} from "@/components/cart/cart-added-toast";
import type { ShopPdpHighlightIcon, ShopProductPdp } from "@/data/shop-product-pdp";
import { useCartStore } from "@/stores/cart-store";

const HIGHLIGHT_ICONS: Record<ShopPdpHighlightIcon, LucideIcon> = {
  leaf: Leaf,
  hand: HandHeart,
  flask: FlaskConical,
  refresh: RefreshCw,
};

const TRUST_ICONS = {
  truck: Truck,
  returns: RotateCcw,
  lock: Lock,
} as const;

type Props = {
  pdp: ShopProductPdp;
};

export function ShopProductBuyBox({ pdp }: Props) {
  const router = useRouter();
  const addItem = useCartStore((s) => s.addItem);
  const { toast, show, dismiss } = useCartAddedToast();
  const [qty, setQty] = useState(1);

  const addToCart = () => {
    addItem({
      slug: pdp.slug,
      title: pdp.title,
      priceCents: pdp.priceCents,
      image: pdp.gallery[0],
      line: pdp.tagline,
      quantity: qty,
    });
    show(pdp.title);
  };

  const buyNow = () => {
    addItem({
      slug: pdp.slug,
      title: pdp.title,
      priceCents: pdp.priceCents,
      image: pdp.gallery[0],
      line: pdp.tagline,
      quantity: qty,
    });
    router.push("/cart");
  };

  return (
    <>
      <div className="shop-product-buy">
        <h1 className="shop-product-buy__title">{pdp.title}</h1>
        <p className="shop-product-buy__tagline">{pdp.tagline}</p>

        <div
          className="shop-product-buy__rating"
          aria-label={`Rated ${pdp.rating.value} out of 5`}
        >
          <HomeStarRating variant="hero" value={pdp.rating.value} />
          <span className="shop-product-buy__rating-text">
            <span className="shop-product-buy__rating-score">{pdp.rating.score}</span>
            <span className="shop-product-buy__rating-count">
              ({pdp.rating.count} reviews)
            </span>
          </span>
        </div>

        <p className="shop-product-buy__price">{pdp.priceDisplay}</p>
        <p className="shop-product-buy__desc">{pdp.description}</p>

        <ul className="shop-product-buy__highlights">
          {pdp.highlights.map((item) => {
            const Icon = HIGHLIGHT_ICONS[item.icon];
            return (
              <li key={item.label} className="shop-product-buy__highlight">
                <Icon size={22} strokeWidth={1.15} aria-hidden />
                <span>{item.label}</span>
              </li>
            );
          })}
        </ul>

        <div className="shop-product-buy__field">
          <span className="shop-product-buy__label">SCENT</span>
          <div className="shop-product-buy__scent">
            <span className="shop-product-buy__scent-thumb">
              <Image
                src={pdp.gallery[0]}
                alt=""
                width={32}
                height={32}
                className="shop-product-buy__scent-img object-cover"
              />
            </span>
            <span className="shop-product-buy__scent-name">{pdp.scentName}</span>
          </div>
        </div>

        <div className="shop-product-buy__field shop-product-buy__field--purchase">
          <div className="shop-product-buy__purchase">
            <div className="shop-product-buy__qty-block">
              <span className="shop-product-buy__label">QUANTITY</span>
              <div className="shop-product-buy__qty">
                <button
                  type="button"
                  className="shop-product-buy__qty-btn"
                  aria-label="Decrease quantity"
                  onClick={() => setQty((n) => Math.max(1, n - 1))}
                >
                  <Minus size={14} strokeWidth={1.25} aria-hidden />
                </button>
                <span className="shop-product-buy__qty-value">{qty}</span>
                <button
                  type="button"
                  className="shop-product-buy__qty-btn"
                  aria-label="Increase quantity"
                  onClick={() => setQty((n) => n + 1)}
                >
                  <Plus size={14} strokeWidth={1.25} aria-hidden />
                </button>
              </div>
            </div>
            <button
              type="button"
              className="shop-product-buy__cta shop-product-buy__cta--cart"
              onClick={addToCart}
            >
              ADD TO CART — {pdp.priceDisplay}
            </button>
          </div>
        </div>
        <button type="button" className="shop-product-buy__cta shop-product-buy__cta--buy" onClick={buyNow}>
          BUY IT NOW
        </button>

        <ul className="shop-product-buy__trust">
          {pdp.trust.map((item) => {
            const Icon = TRUST_ICONS[item.icon];
            return (
              <li key={item.label} className="shop-product-buy__trust-item">
                <Icon size={18} strokeWidth={1.15} aria-hidden />
                <span>{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <CartAddedToast toast={toast} onDismiss={dismiss} />
    </>
  );
}
