"use client";

import { QaImage as Image } from "@/components/ui/qa-image";
import type { ReactNode } from "react";
import { useState } from "react";

type Props = {
  images: string[];
  productTitle: string;
  infoMain: ReactNode;
};

export function ObjectHeroGallery({
  images,
  productTitle,
  infoMain,
}: Props) {
  const thumbs = images.slice(0, 5);
  const [active, setActive] = useState(0);
  const safeIndex = Math.min(active, thumbs.length - 1);
  const mainSrc = thumbs[safeIndex] ?? thumbs[0];

  return (
    <div className="mx-auto grid w-full max-w-[min(100%,var(--qa-container-width))] grid-cols-1 gap-10 px-[var(--qa-container-px)] pt-0 pb-[28px] lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:items-stretch lg:gap-x-14">
      {/* Mobile: image first; desktop: right column */}
      <div className="order-1 flex min-w-0 w-full flex-col gap-0 lg:order-none lg:col-start-2">
        <figure className="relative min-h-0 w-full aspect-[4/5] overflow-hidden bg-[#161210] sm:aspect-[16/11] lg:aspect-auto lg:h-full lg:min-h-[min(100%,28rem)]">
          <Image
            key={mainSrc}
            src={mainSrc ?? ""}
            alt={productTitle}
            fill
            priority
            className="object-cover object-center brightness-[0.9] contrast-[1.02] saturate-[0.88] transition-opacity duration-300 ease-out"
            sizes="(max-width: 1024px) 100vw, 58vw"
            unoptimized
          />
        </figure>

        <div className="m-0 mt-[18px] flex w-full min-w-0 flex-nowrap items-center justify-start gap-2 overflow-x-auto p-0 pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-2.5 [&::-webkit-scrollbar]:hidden">
          {thumbs.map((src, i) => (
            <button
              key={`${src}-${i}`}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show product image ${i + 1} of 5`}
              aria-current={safeIndex === i ? "true" : undefined}
              className={`relative m-0 h-[120px] w-[120px] shrink-0 overflow-hidden border-0 bg-[#161210] p-0 outline-none transition-opacity duration-200 focus-visible:ring-2 focus-visible:ring-[#1a1816]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--qa-bg)] ${
                safeIndex === i ? "opacity-100" : "opacity-65 hover:opacity-85"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover object-center brightness-[0.9] contrast-[1.02] saturate-[0.85]"
                sizes="120px"
                unoptimized
              />
            </button>
          ))}
        </div>
      </div>

      {/* Mobile: copy below image; desktop: left column */}
      <div className="order-2 min-h-0 min-w-0 lg:order-none lg:col-start-1 lg:row-start-1">
        {infoMain}
      </div>
    </div>
  );
}
