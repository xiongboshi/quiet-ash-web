"use client";

import { Plus } from "lucide-react";
import { useCartStore } from "@/stores/cart-store";

type Props = {
  slug: string;
  title: string;
  imageSrc: string;
  scentNotes: string;
};

export function HomeProductCardAdd({ slug, title, imageSrc, scentNotes }: Props) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <button
      type="button"
      className="home-product-card__add"
      aria-label={`Add ${title} to cart`}
      onClick={() =>
        addItem({
          slug,
          title,
          priceCents: 1800,
          image: imageSrc,
          line: scentNotes,
        })
      }
    >
      <Plus size={14} strokeWidth={1.25} aria-hidden />
    </button>
  );
}
