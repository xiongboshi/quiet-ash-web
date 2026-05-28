"use client";

import { QaImage as Image } from "@/components/ui/qa-image";
import Link from "next/link";
import { shopPath, SHOP_INDEX } from "@/lib/site-paths";
import type { CartItem } from "@/lib/cart/types";
import { formatMoney } from "@/lib/cart/pricing";
import { cartPageCopy } from "@/data/cart-page";
import { CartQuantityControl } from "@/components/cart/cart-quantity-control";

type Props = {
  item: CartItem;
  onDecrease: () => void;
  onIncrease: () => void;
  onRemove: () => void;
};

export function CartLineItem({
  item,
  onDecrease,
  onIncrease,
  onRemove,
}: Props) {
  const lineTotal = item.priceCents * item.quantity;

  return (
    <article className="cart-line">
      <div className="cart-line__product">
        <Link href={shopPath(item.slug)} className="cart-line__media">
          <Image
            src={item.image}
            alt=""
            fill
            sizes="112px"
            className="object-cover"
            unoptimized
          />
        </Link>
        <div className="cart-line__copy">
          <Link href={shopPath(item.slug)} className="cart-line__title">
            {item.title}
          </Link>
          <p className="cart-line__type">{cartPageCopy.productType}</p>
          <p className="cart-line__pack">{cartPageCopy.defaultPack}</p>
          <button type="button" onClick={onRemove} className="cart-line__remove">
            Remove
          </button>
        </div>
      </div>

      <p className="cart-line__price">{formatMoney(item.priceCents)}</p>

      <div className="cart-line__qty">
        <CartQuantityControl
          quantity={item.quantity}
          onDecrease={onDecrease}
          onIncrease={onIncrease}
        />
      </div>

      <p className="cart-line__total">{formatMoney(lineTotal)}</p>
    </article>
  );
}

export function CartContinueShopping() {
  return (
    <Link href={SHOP_INDEX} className="cart-continue">
      {cartPageCopy.continueShopping}
    </Link>
  );
}
