"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { CartProductSnapshot } from "@/lib/cart/types";
import { formatMoney } from "@/lib/cart/pricing";
import { useCartStore } from "@/stores/cart-store";
import { useCartHydrated } from "@/lib/cart/use-cart-hydrated";

type Props = {
  products: CartProductSnapshot[];
};

export function CartRecommendations({ products }: Props) {
  const [open, setOpen] = useState(true);
  const hydrated = useCartHydrated();
  const cartSlugKey = useCartStore((s) =>
    s.items.map((i) => i.slug).join("\0"),
  );

  const visible = useMemo(() => {
    if (!hydrated) return products.slice(0, 4);
    const inCart = new Set(
      cartSlugKey ? cartSlugKey.split("\0") : [],
    );
    return products.filter((p) => !inCart.has(p.slug)).slice(0, 4);
  }, [hydrated, cartSlugKey, products]);

  if (visible.length === 0) return null;

  return (
    <section className="m-0 bg-[#E8E4DC]">
      <Container variant="wide" className="py-[18px]">
        <button
          type="button"
          className="flex w-full items-center justify-between gap-4 text-left lg:pointer-events-none lg:cursor-default"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <h2 className="m-0 font-[family-name:var(--font-serif)] text-[clamp(1.25rem,3vw,1.5rem)] font-light tracking-[-0.03em] text-[var(--qa-text)] lg:underline lg:decoration-[color-mix(in_srgb,#6F6A63_55%,transparent)] lg:underline-offset-[10px]">
            You might also love
          </h2>
          <span
            className="shrink-0 font-[family-name:var(--font-sans)] text-[22px] font-light leading-none text-[#6F6A63] lg:hidden"
            aria-hidden
          >
            {open ? "−" : "›"}
          </span>
        </button>

        <ul
          className={`m-0 grid list-none grid-cols-2 gap-x-5 gap-y-10 p-0 sm:grid-cols-4 sm:gap-x-7 lg:mt-10 ${
            open ? "mt-8" : "mt-0 hidden lg:grid"
          }`}
        >
          {visible.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/objects/${p.slug}`}
                className="qa-cta qa-cta--still group block no-underline"
              >
                <figure className="relative mb-3 aspect-square w-full overflow-hidden bg-[#161210] lg:mb-4">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 45vw, 220px"
                    className="object-cover object-center transition-transform duration-[600ms] ease-out group-hover:scale-[1.01]"
                    unoptimized
                  />
                </figure>
                <p className="font-[family-name:var(--font-serif)] text-[14px] font-light leading-[1.25] tracking-[-0.02em] text-[var(--qa-text)] lg:text-[15px]">
                  {p.title}
                </p>
                <p className="mt-1 font-[family-name:var(--font-sans)] text-[12px] tabular-nums text-[#6F6A63]">
                  {formatMoney(p.priceCents)}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
