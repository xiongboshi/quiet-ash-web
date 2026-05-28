import { QaImage as Image } from "@/components/ui/qa-image";
import { SHOP_INDEX, shopPath } from "@/lib/site-paths";
import Link from "next/link";
import type { CatalogProduct } from "@/lib/catalog";
import { formatPriceDisplayCard } from "@/lib/cart/pricing";

type Props = {
  product: CatalogProduct;
  variant?: "default" | "showcase";
  showcaseHeight?: "tall" | "medium";
  /**
   * `archival` — sculptural, minimal commerce cues (The Row / Frama adjacency).
   * Softer shadow, almost no scale, generous type.
   */
  presentation?: "default" | "archival";
  /** Product frame proportion — `square` for reference-style home grids. */
  mediaRatio?: "5-4" | "1-1";
  /**
   * Homepage object grid — fixed 320px image height, 28px card title rhythm (spec).
   */
  homeGrid?: boolean;
  /**
   * Homepage reference rail — square frame, uppercase sans product line, no deck copy.
   */
  compactRail?: boolean;
  /**
   * With `compactRail` + `presentation="archival"`: show `product.line` under title (object catalog shelf).
   */
  shelfDeck?: boolean;
  /**
   * `/objects` archive — 3:2 image, serif title, `material — origin`, description, price (editorial grid).
   */
  objectsCatalogGrid?: boolean;
};

const showcaseFrame: Record<"tall" | "medium", string> = {
  tall: "min-h-[min(92vw,440px)] h-[clamp(500px,68vh,700px)] sm:min-h-[520px]",
  medium:
    "min-h-[min(88vw,400px)] h-[clamp(460px,54vh,620px)] sm:min-h-[480px]",
};

const archivalShowcase: Record<"tall" | "medium", string> = {
  tall: "min-h-[min(88vw,480px)] h-[clamp(520px,70vh,760px)] sm:min-h-[560px]",
  medium:
    "min-h-[min(82vw,420px)] h-[clamp(480px,58vh,680px)] sm:min-h-[500px]",
};

export function ProductCard({
  product,
  variant = "default",
  showcaseHeight = "tall",
  presentation = "default",
  mediaRatio = "5-4",
  homeGrid = false,
  compactRail = false,
  shelfDeck = false,
  objectsCatalogGrid = false,
}: Props) {
  const isShowcase = variant === "showcase";
  const archival = presentation === "archival";
  const isArchivalShowcase = archival && isShowcase;
  const objectsGrid = objectsCatalogGrid && archival && !isShowcase;
  const specRail = compactRail && archival && !isShowcase && !objectsGrid;
  const specHome = homeGrid && archival && !isShowcase && !specRail && !objectsGrid;

  const frameDefault = objectsGrid
    ? "aspect-[4/3] w-full"
    : specRail
      ? "aspect-square w-full"
      : specHome
        ? "h-[320px]"
        : archival && mediaRatio === "1-1"
          ? "aspect-square"
          : archival
            ? "aspect-[5/4]"
            : "aspect-[3/4]";

  const frame = isShowcase
    ? isArchivalShowcase
      ? archivalShowcase[showcaseHeight]
      : showcaseFrame[showcaseHeight]
    : frameDefault;

  const frameTone =
    specHome || specRail || objectsGrid
      ? ""
      : archival
        ? "qa-media-frame qa-media-frame--archival"
        : "qa-media-frame qa-media-frame--lift";

  const imgMotionArchival =
    "!brightness-[1.05] !contrast-[1.02] opacity-[0.95] duration-[var(--motion-slow)] group-hover:opacity-[0.9]";
  const imgMotionShowcase =
    "!brightness-[1.14] !contrast-[1.05] !saturate-[1.03] duration-700 group-hover:opacity-[0.92]";
  const imgMotionDefault =
    "!brightness-[1.06] !contrast-[1] opacity-[0.94] duration-[var(--motion-base)] group-hover:opacity-[0.9]";

  const imgClass =
    archival && isShowcase
      ? imgMotionArchival
      : isShowcase
        ? imgMotionShowcase
        : archival
          ? imgMotionArchival
          : imgMotionDefault;

  const squareGrid =
    archival &&
    mediaRatio === "1-1" &&
    !isShowcase &&
    !specHome &&
    !specRail &&
    !objectsGrid;
  const objectFit =
    specHome || specRail || objectsGrid || squareGrid ? "object-cover" : "object-contain";
  const imageMotion =
    objectsGrid
      ? "transition-transform duration-[600ms] ease-out group-hover:scale-[1.01]"
      : specHome || specRail
      ? "transition-transform duration-[600ms] ease-out group-hover:scale-[1.01] brightness-[0.94] contrast-[0.98] saturate-[0.9]"
      : squareGrid
      ? `${imgClass} transition-[opacity,transform,filter] duration-[var(--motion-slow)] ease-out group-hover:scale-[1.02] group-hover:opacity-[0.92]`
      : `${imgClass} transition-[opacity,filter] ease-out`;

  const sizes =
    objectsGrid
      ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, min(420px, 34vw)"
      : specHome || specRail
      ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 26vw, 240px"
      : isShowcase && archival
        ? "(max-width: 1024px) 100vw, min(640px, 50vw)"
        : isShowcase
          ? "(max-width: 1024px) 100vw, 50vw"
          : archival
            ? "(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 380px"
            : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 420px";

  const gradientOverlay =
    specHome || specRail || objectsGrid
      ? "from-[#0c0a09]/18 via-transparent to-transparent"
      : squareGrid
      ? "from-[#0c0a09]/22 via-transparent to-[color-mix(in_srgb,var(--qa-bg)_18%,transparent)]"
      : isShowcase
        ? archival
          ? "from-[#1a1410]/18 via-transparent to-[#faf6f1]/04"
          : "from-[#1a1410]/22 via-transparent to-[#faf6f1]/06"
        : "from-[#0c0a09]/40 to-transparent";

  /** Design: no border/shadow — faint card = text well only, ~1 step off page `#f5f2ed`. */
  const textBlockClass = objectsGrid
    ? "flex flex-col gap-1.5 bg-[#f0ede8] px-5 pb-6 pt-4 transition-colors duration-[var(--motion-base)] ease-out group-hover:bg-[#f3f1ec]"
    : specRail
      ? "mt-6 flex flex-col gap-1.5"
      : specHome
        ? "mt-8 flex flex-col"
        : archival
          ? "mt-6 space-y-1.5 sm:mt-7"
          : isShowcase
            ? "mt-6 space-y-1.5 sm:mt-7"
            : "mt-4 space-y-1.5";

  const titleClass = objectsGrid
    ? "m-0 font-[family-name:var(--font-serif)] text-[26px] font-normal leading-[1.12] tracking-[-0.02em] text-[#171412] sm:text-[28px] transition-opacity duration-[var(--motion-base)] group-hover:opacity-85"
    : specRail
      ? "m-0 max-w-[20ch] font-[family-name:var(--font-sans)] text-[14px] font-normal uppercase leading-[1.35] tracking-[0.2em] text-[color-mix(in_srgb,#1A1A1A_92%,#6F6A63)] lg:max-w-none lg:whitespace-nowrap lg:text-[14px] lg:font-medium"
      : specHome
        ? "mb-2 max-w-[22ch] font-[family-name:var(--font-serif)] text-[26px] font-light leading-[32px] tracking-[-0.03em] text-[color-mix(in_srgb,#1A1A1A_88%,#6F6A63)]"
        : `font-[family-name:var(--font-serif)] font-medium tracking-[-0.02em] text-[var(--qa-text)] transition-opacity duration-[var(--motion-base)] group-hover:opacity-75 ${
            archival
              ? "text-[clamp(1.1rem,2vw,1.35rem)] leading-snug"
              : isShowcase
                ? "text-[clamp(1.15rem,2.2vw,1.35rem)] leading-snug"
                : "text-[1.05rem]"
          }`;

  const metaLine =
    objectsGrid && (product.material || product.origin)
      ? [product.material, product.origin].filter(Boolean).join(" · ")
      : "";

  const descClass = objectsGrid
    ? "m-0 line-clamp-2 font-[family-name:var(--font-sans)] text-[14px] font-normal leading-[1.75] text-black/[0.55]"
    : specHome
      ? "mb-3 line-clamp-3 font-[family-name:var(--font-sans)] text-[14px] font-normal leading-[25px] text-[color-mix(in_srgb,#6F6A63_92%,#1A1A1A)]"
      : `line-clamp-3 font-[family-name:var(--font-sans)] leading-relaxed tracking-[0.03em] text-[color-mix(in_srgb,var(--qa-muted)_88%,var(--qa-text))] ${
          archival ? "text-[13px]" : isShowcase ? "text-[13px]" : "text-[12px]"
        }`;

  const metaClass = objectsGrid
    ? "m-0 font-[family-name:var(--font-sans)] text-[11px] font-medium uppercase leading-[1.45] tracking-[0.12em] text-black/[0.42]"
    : "m-0 font-[family-name:var(--font-sans)] text-[11px] font-medium uppercase leading-[1.45] tracking-[0.12em] text-[#171412] opacity-50";

  const priceClass =
    objectsGrid
      ? "m-0 mt-1 font-[family-name:var(--font-sans)] text-[14px] font-normal tabular-nums tracking-[0.02em] text-[#171412]"
      : specHome || specRail
        ? "m-0 font-[family-name:var(--font-sans)] text-[12px] font-normal tabular-nums tracking-[0.1em] text-[color-mix(in_srgb,#6F6A63_94%,#1A1A1A)] lg:font-semibold"
        : `pt-1 font-[family-name:var(--font-sans)] tabular-nums tracking-[0.08em] text-[color-mix(in_srgb,var(--qa-muted)_55%,var(--qa-text))] ${
            archival ? "text-[11px] font-normal" : "text-[13px] font-medium"
          }`;

  /** Homepage rail / home grid — never let flex/grid row stretch distort the media box */
  const specFrameLayout =
    specHome || specRail || objectsGrid ? "shrink-0 self-start" : "";

  const frameSurfaceClass = objectsGrid ? "bg-[#ece7e1]" : "bg-[#e8e4dc]";

  return (
    <Link
      href={shopPath(product.slug)}
      className="qa-cta qa-cta--still group flex flex-col no-underline"
    >
      <div
        className={`${frameTone} relative w-full overflow-hidden ${frameSurfaceClass} ${frame} ${specFrameLayout}`.trim()}
      >
        <Image
          src={product.image}
          alt=""
          fill
          sizes={sizes}
          unoptimized
          className={`${specHome || specRail || objectsGrid ? "" : "qa-presence-img "} ${objectFit} object-center ${imageMotion}`.trim()}
        />
        {specHome || specRail || objectsGrid ? null : (
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${gradientOverlay}`}
            aria-hidden
          />
        )}
      </div>
      <div className={textBlockClass}>
        <h3 className={titleClass}>
          {specRail ? product.title.toUpperCase() : product.title}
        </h3>
        {objectsGrid && metaLine ? (
          <p className={metaClass}>{metaLine}</p>
        ) : null}
        {specRail ? (
          shelfDeck && product.line ? (
            <p className="mt-2.5 max-w-[min(28ch,100%)] font-[family-name:var(--font-sans)] text-[12px] font-normal leading-relaxed tracking-[0.02em] text-[color-mix(in_srgb,#6F6A63_92%,#1A1A1A)] line-clamp-2">
              {product.line}
            </p>
          ) : null
        ) : (
          <p className={descClass}>{product.line}</p>
        )}
        {product.priceDisplay ? (
          <p className={priceClass}>{formatPriceDisplayCard(product.priceDisplay)}</p>
        ) : null}
      </div>
    </Link>
  );
}
