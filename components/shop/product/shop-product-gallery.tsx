"use client";

import { QaImage as Image } from "@/components/ui/qa-image";
import { ChevronDown, ChevronUp, Expand, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type Props = {
  title: string;
  badge: string;
  gallery: readonly string[];
};

/** Match --shop-pdp-main-ratio in shop-product.css; keep catalog shots at this size */
const PDP_IMAGE_WIDTH = 960;
const PDP_IMAGE_HEIGHT = 1200;
const THUMB_SIZE = 136;

function ThumbButton({
  src,
  title,
  index,
  isActive,
  onSelect,
}: {
  src: string;
  title: string;
  index: number;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      className="shop-product-gallery__thumb-btn"
      aria-label={`Show image ${index + 1}`}
      aria-current={isActive ? "true" : undefined}
      onClick={onSelect}
    >
      {index === 4 ? (
        <span className="shop-product-gallery__thumb-play" aria-hidden>
          <span className="shop-product-gallery__thumb-play-icon" />
        </span>
      ) : null}
      <Image
        src={src}
        alt={`${title}, product image ${index + 1}`}
        width={THUMB_SIZE}
        height={THUMB_SIZE}
        sizes={`${THUMB_SIZE}px`}
        className="shop-product-gallery__thumb-img object-cover"
      />
    </button>
  );
}

export function ShopProductGallery({ title, badge, gallery }: Props) {
  const thumbs = gallery.slice(0, 5);
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const safe = Math.min(active, Math.max(thumbs.length - 1, 0));
  const mainSrc = thumbs[safe] ?? thumbs[0];

  const openLightbox = useCallback(() => setLightboxOpen(true), []);
  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxOpen, closeLightbox]);

  const scrollThumbs = (dir: -1 | 1) => {
    setActive((i) => {
      const next = i + dir;
      if (next < 0) return thumbs.length - 1;
      if (next >= thumbs.length) return 0;
      return next;
    });
  };

  return (
    <>
      <div className="shop-product-gallery">
        <div className="shop-product-gallery__thumbs-col">
          <button
            type="button"
            className="shop-product-gallery__thumb-nav"
            aria-label="Previous thumbnail"
            onClick={() => scrollThumbs(-1)}
          >
            <ChevronUp size={14} strokeWidth={1.25} aria-hidden />
          </button>
          <ul className="shop-product-gallery__thumbs">
            {thumbs.map((src, index) => (
              <li key={`${src}-${index}`} className="shop-product-gallery__thumb-item">
                <ThumbButton
                  src={src}
                  title={title}
                  index={index}
                  isActive={safe === index}
                  onSelect={() => setActive(index)}
                />
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="shop-product-gallery__thumb-nav"
            aria-label="Next thumbnail"
            onClick={() => scrollThumbs(1)}
          >
            <ChevronDown size={14} strokeWidth={1.25} aria-hidden />
          </button>
        </div>

        <div className="shop-product-gallery__main-wrap">
          <div className="shop-product-gallery__main">
            <Image
              key={`${mainSrc}-backdrop`}
              src={mainSrc}
              alt={title}
              aria-hidden
              width={PDP_IMAGE_WIDTH}
              height={PDP_IMAGE_HEIGHT}
              priority={safe === 0}
              sizes="(max-width: 1023px) 100vw, min(50vw, 560px)"
              className="shop-product-gallery__main-img shop-product-gallery__main-img--backdrop"
            />
            <Image
              key={`${mainSrc}-photo`}
              src={mainSrc}
              alt={title}
              width={PDP_IMAGE_WIDTH}
              height={PDP_IMAGE_HEIGHT}
              priority={safe === 0}
              sizes="(max-width: 1023px) 100vw, min(50vw, 560px)"
              className="shop-product-gallery__main-img shop-product-gallery__main-img--photo"
            />
            {badge ? <span className="shop-product-gallery__badge">{badge}</span> : null}
            <button
              type="button"
              className="shop-product-gallery__expand"
              aria-label="View larger image"
              onClick={openLightbox}
            >
              <Expand size={15} strokeWidth={1.35} aria-hidden />
            </button>
            <button
              type="button"
              className="shop-product-gallery__main-hit"
              aria-label={`View larger image: ${title}`}
              onClick={openLightbox}
            />
          </div>

          <ul className="shop-product-gallery__thumbs shop-product-gallery__thumbs--mobile">
            {thumbs.map((src, index) => (
              <li key={`m-${src}-${index}`} className="shop-product-gallery__thumb-item">
                <ThumbButton
                  src={src}
                  title={title}
                  index={index}
                  isActive={safe === index}
                  onSelect={() => setActive(index)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {lightboxOpen ? (
        <div
          className="shop-product-gallery__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} — enlarged`}
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="shop-product-gallery__lightbox-close"
            aria-label="Close"
            onClick={closeLightbox}
          >
            <X size={22} strokeWidth={1.25} aria-hidden />
          </button>
          <Image
            src={mainSrc}
            alt={title}
            width={PDP_IMAGE_WIDTH}
            height={PDP_IMAGE_HEIGHT}
            sizes="100vw"
            className="shop-product-gallery__lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </>
  );
}
