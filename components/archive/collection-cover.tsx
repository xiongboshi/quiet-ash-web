import { QaImage as Image } from "@/components/ui/qa-image";

type Props = {
  /** Path under `public/`, e.g. `/images/collections/incense-culture.svg` */
  src?: string;
  /** Context for screen readers when no decorative image. */
  title: string;
  /**
   * `archive` — essays / series index: shorter band so the page is not one giant dark field.
   * `default` — full-bleed hero proportion.
   */
  density?: "default" | "archive";
};

/** Single atmospheric frame — dim, grain-friendly, not product photography. */
export function CollectionCover({
  src,
  title,
  density = "default",
}: Props) {
  const archive = density === "archive";
  /** Archive band fills the parent column — parent owns max-width / rail padding (essays index). */
  const frame = archive
    ? "relative w-full aspect-[2.15/1] max-h-[min(32vh,300px)] overflow-hidden bg-[#0c0a09] sm:max-h-[min(30vh,340px)] lg:max-h-[min(28vh,380px)]"
    : "relative aspect-[3/4] w-full overflow-hidden bg-[#0c0a09] sm:aspect-[5/4] lg:aspect-[16/10]";

  return (
    <figure className={frame}>
      {src ? (
        <>
          <Image
            src={src}
            alt=""
            fill
            priority
            sizes={archive ? "(max-width: 1024px) 100vw, 900px" : "100vw"}
            unoptimized
            className={`object-cover object-center ${
              archive ? "opacity-[0.94]" : "opacity-[0.9]"
            }`}
          />
          <div
            className={`pointer-events-none absolute inset-0 ${
              archive
                ? "bg-[color-mix(in_srgb,#0c0a09_28%,transparent)]"
                : "bg-[color-mix(in_srgb,#0c0a09_42%,transparent)]"
            }`}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay"
            style={{
              backgroundImage: "url(/textures/grain.svg)",
              backgroundSize: "256px",
            }}
            aria-hidden
          />
        </>
      ) : (
        <>
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_45%_38%,#2a221c_0%,#161210_55%,#0c0a09_100%)]"
            aria-hidden
          />
          <div
            className="absolute inset-0 opacity-[0.16] mix-blend-soft-light"
            style={{
              backgroundImage: "url(/textures/grain.svg)",
              backgroundSize: "256px",
            }}
            aria-hidden
          />
          <span className="sr-only">{title}</span>
        </>
      )}
    </figure>
  );
}
