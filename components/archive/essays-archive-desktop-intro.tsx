import Image from "next/image";
import type { SeriesMeta } from "@/lib/series";

const ESSAYS_ESSENCE_FALLBACK_IMG =
  "/images/generated/series-incense-culture.png";

type Props = {
  series: SeriesMeta;
  essayCount: number;
};

/**
 * Desktop current archive — 400px text + cover filling remaining width to viewport edge.
 * Parent must be `overflow-x-clip`; bleed uses shell padding + centered max-width gutter.
 */
export function EssaysArchiveDesktopIntro({ series, essayCount }: Props) {
  const body =
    series.description.trim() ||
    series.tagline?.trim() ||
    "Essays on ritual, restraint, and quiet rooms.";
  const threadsLine =
    series.threads?.map((t) => t.toLowerCase()).join(" · ") ?? "";
  return (
    <div
      aria-label="Current archive"
      className="grid w-full min-w-0 grid-cols-[minmax(0,400px)_minmax(0,1fr)] items-stretch bg-paper lg:min-h-[min(560px,58svh)]"
      style={{
        width:
          "calc(100% + 72px + max(0px, (100vw - min(100%, 1920px)) / 2))",
        marginRight:
          "calc(-72px - max(0px, (100vw - min(100%, 1920px)) / 2))",
      }}
    >
      <div className="relative z-10 flex flex-col py-10 lg:max-w-[400px] lg:py-12">
        <p className="mb-5 font-[family-name:var(--font-sans)] text-[11px] font-medium uppercase tracking-[0.12em] text-[#6F6A63]">
          Current archive
        </p>
        <h1 className="m-0 max-w-[min(28ch,100%)] font-[family-name:var(--font-serif)] text-[clamp(2.25rem,3.8vw,2.875rem)] font-normal leading-[1.08] tracking-[-0.035em] text-[#1A1A1A]">
          {series.title.trim()}
        </h1>
        <div className="mt-8 h-px w-12 bg-[#1A1A1A]" aria-hidden />
        <div className="mt-10 space-y-0">
          <p className="m-0 max-w-[42ch] font-[family-name:var(--font-sans)] text-[15px] font-normal leading-[1.75] text-[color-mix(in_srgb,#1A1A1A_88%,#6F6A63)]">
            {body}
          </p>
          <p className="m-0 mt-8 font-[family-name:var(--font-sans)] text-[11px] font-medium uppercase tracking-[0.14em] text-[#6F6A63]">
            {essayCount} {essayCount === 1 ? "essay" : "essays"}
          </p>
          {threadsLine ? (
            <p className="m-0 mt-2 font-[family-name:var(--font-sans)] text-[12px] font-normal normal-case tracking-[0.06em] text-[color-mix(in_srgb,#6F6A63_75%,#1A1A1A)]">
              {threadsLine}
            </p>
          ) : null}
        </div>
      </div>

      <figure className="relative min-h-[min(280px,45vw)] w-full overflow-hidden bg-[#161210] lg:min-h-0 lg:h-full">
        <Image
          src={series.cover ?? ESSAYS_ESSENCE_FALLBACK_IMG}
          alt=""
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 55vw"
          unoptimized
          className="object-cover object-center brightness-[0.94] contrast-[1.02] saturate-[0.92]"
        />
      </figure>
    </div>
  );
}
