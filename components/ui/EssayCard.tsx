import Image from "next/image";
import Link from "next/link";
import type { EssayMeta } from "@/lib/essays";
import { essayCardImageUrl, essayCardSubtitle } from "@/lib/essay-visuals";

type Props = {
  essay: EssayMeta;
  variant?: "default" | "home";
  /** Home only: `restraint` = narrow image band (Mode C) */
  homeImage?: "full" | "restraint";
};

export function EssayCard({
  essay,
  variant = "default",
  homeImage = "full",
}: Props) {
  const home = variant === "home";
  const restraint = home && homeImage === "restraint";
  const src = essayCardImageUrl(essay);
  const sub = essayCardSubtitle(essay);

  const frameClasses = restraint
    ? "aspect-[2.6/1] min-h-[140px] sm:min-h-[min(22vw,200px)]"
    : home
      ? "aspect-[3/4] min-h-[min(72vw,340px)] sm:min-h-[min(38vw,420px)]"
      : "aspect-[5/4]";

  return (
    <Link
      href={`/essays/${essay.slug}`}
      className="qa-cta group block min-w-0 shrink-0 no-underline sm:min-w-0"
    >
      <div
        className={`${
          home
            ? "qa-media-frame qa-media-frame--archival"
            : "qa-media-frame qa-media-frame--lift"
        } relative w-full bg-[#1c1815] ${frameClasses}`}
      >
        <Image
          src={src}
          alt=""
          fill
          sizes={
            restraint
              ? "(max-width: 1024px) 100vw, 42vw"
              : home
                ? "(max-width: 1024px) 90vw, min(480px, 42vw)"
                : "(max-width: 640px) 100vw, (max-width: 1024px) 46vw, 520px"
          }
          unoptimized
          className={`qa-presence-img object-cover object-center transition-opacity duration-[var(--motion-base)] ease-out group-hover:opacity-[0.88] ${
            home
              ? "!brightness-[1.06] !contrast-[1.02] opacity-[0.92]"
              : "opacity-[0.9]"
          }`}
        />
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${
            restraint
              ? "from-[#0c0a09]/18 to-transparent"
              : home
                ? "from-[#0c0a09]/30 to-transparent"
                : "from-[#0c0a09]/25 to-transparent"
          }`}
          aria-hidden
        />
      </div>
      <div
        className={`mt-4 space-y-1.5 ${
          home ? "max-w-[min(100%,20ch)] sm:max-w-none" : "max-w-[32ch]"
        }`}
      >
        <h3 className="font-[family-name:var(--font-serif)] text-[clamp(1.05rem,2vw,1.2rem)] font-medium leading-snug tracking-[-0.025em] text-[var(--qa-text)] transition-opacity duration-[var(--motion-base)] group-hover:opacity-75">
          {essay.title}
        </h3>
        <p
          className={`font-[family-name:var(--font-sans)] text-[12px] leading-[1.5] tracking-[0.02em] text-[color-mix(in_srgb,var(--qa-muted)_80%,var(--qa-text))] ${
            restraint ? "line-clamp-2 max-w-[42ch]" : home ? "line-clamp-1" : "line-clamp-2"
          }`}
        >
          {sub}
        </p>
      </div>
    </Link>
  );
}
