"use client";

import Image from "next/image";
import { SHOP_INDEX, shopPath } from "@/lib/site-paths";
import Link from "next/link";
import type { CartItem } from "@/lib/cart/types";
import { formatMoney } from "@/lib/cart/pricing";
import { CartQuantityControl } from "@/components/cart/cart-quantity-control";
import {
  CART_LINE_DESC,
  CART_LINE_IMAGE,
  CART_LINE_META,
  CART_LINE_TITLE,
  CART_REMOVE_BTN,
  CART_TABLE_GRID,
} from "@/components/cart/cart-layout";

type Props = {
  item: CartItem;
  onDecrease: () => void;
  onIncrease: () => void;
  onRemove: () => void;
};

function LineCopy({
  item,
  showMobileControls,
  onDecrease,
  onIncrease,
  onRemove,
}: Props & { showMobileControls: boolean }) {
  return (
    <div className="min-w-0 flex-1">
      <Link href={shopPath(item.slug)} className={CART_LINE_TITLE}>
        {item.title}
      </Link>
      {item.line ? <p className={CART_LINE_DESC}>{item.line}</p> : null}
      {item.ritualSlug && item.ritualTitle ? (
        <p className={CART_LINE_META}>
          Appears in:{" "}
          <Link
            href={`/moods/${item.ritualSlug}`}
            className="qa-cta qa-cta--still text-[color-mix(in_srgb,#1A1A1A_88%,#6F6A63)] underline decoration-[color-mix(in_srgb,#6F6A63_40%,transparent)] underline-offset-[3px]"
          >
            {item.ritualTitle}
          </Link>
        </p>
      ) : null}

      {showMobileControls ? (
        <div className="mt-4 space-y-3.5">
          <p className="font-[family-name:var(--font-sans)] text-[14px] tabular-nums text-[var(--qa-text)]">
            {formatMoney(item.priceCents)}
          </p>
          <CartQuantityControl
            quantity={item.quantity}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
          />
          <button type="button" onClick={onRemove} className={CART_REMOVE_BTN}>
            Remove
          </button>
        </div>
      ) : null}
    </div>
  );
}

export function CartLineItem({ item, onDecrease, onIncrease, onRemove }: Props) {
  const lineTotal = item.priceCents * item.quantity;

  return (
    <article className="border-b border-[#DDD7CF] py-7 last:border-b-0 lg:py-9">
      <div className="flex gap-4 lg:hidden">
        <Link href={shopPath(item.slug)} className={CART_LINE_IMAGE}>
          <Image
            src={item.image}
            alt=""
            fill
            sizes="100px"
            className="object-cover object-center"
            unoptimized
          />
        </Link>
        <LineCopy
          item={item}
          showMobileControls
          onDecrease={onDecrease}
          onIncrease={onIncrease}
          onRemove={onRemove}
        />
      </div>

      <div className={`hidden ${CART_TABLE_GRID}`}>
        <div className="flex gap-6 xl:gap-7">
          <Link href={shopPath(item.slug)} className={CART_LINE_IMAGE}>
            <Image
              src={item.image}
              alt=""
              fill
              sizes="200px"
              className="object-cover object-center"
              unoptimized
            />
          </Link>
          <LineCopy
            item={item}
            showMobileControls={false}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
            onRemove={onRemove}
          />
        </div>

        <p className="pt-3 font-[family-name:var(--font-sans)] text-[14px] tabular-nums text-[var(--qa-text)]">
          {formatMoney(item.priceCents)}
        </p>

        <div className="pt-2">
          <CartQuantityControl
            quantity={item.quantity}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
          />
        </div>

        <div className="text-right">
          <p className="pt-3 font-[family-name:var(--font-sans)] text-[14px] tabular-nums text-[var(--qa-text)]">
            {formatMoney(lineTotal)}
          </p>
          <button
            type="button"
            onClick={onRemove}
            className={`${CART_REMOVE_BTN} mt-3 inline-block`}
          >
            Remove
          </button>
        </div>
      </div>
    </article>
  );
}
