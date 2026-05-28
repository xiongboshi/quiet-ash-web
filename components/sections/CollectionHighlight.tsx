import { QaImage as Image } from "@/components/ui/qa-image";
import Link from "next/link";
import { defaultCollectionHighlight } from "@/data/home";
import { essaysCollectionHref } from "@/lib/archive";
import { getSeriesBySlug } from "@/lib/series";
import { Container } from "@/components/ui/Container";

export type CollectionHighlightProps = Partial<typeof defaultCollectionHighlight>;

export function CollectionHighlight(props: CollectionHighlightProps = {}) {
  const cfg = { ...defaultCollectionHighlight, ...props };
  const series = getSeriesBySlug(cfg.seriesSlug);
  if (!series) return null;
  const href = essaysCollectionHref(cfg.seriesSlug);

  return (
    <section className="qa-section-pad border-t border-[var(--qa-border)] bg-[color-mix(in_srgb,var(--qa-bg-soft)_42%,var(--qa-bg))]">
      <Container variant="wide">
        <p className="qa-eyebrow-brand mb-6 sm:mb-8">{cfg.eyebrow}</p>
        <Link
          href={href}
          className="group grid gap-10 no-underline lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch lg:gap-16"
        >
          <div className="qa-media-frame qa-media-frame--lift relative min-h-[min(56vw,520px)] w-full overflow-hidden bg-[#ede6dc] lg:min-h-[560px] lg:max-h-[min(80vh,720px)]">
            {series.cover ? (
              <Image
                src={series.cover}
                alt=""
                fill
                className="qa-presence-img object-cover object-center !brightness-[1.1] !contrast-[1.03] transition-[opacity,transform] duration-700 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 560px"
                unoptimized
              />
            ) : null}
            <div
              className="pointer-events-none absolute inset-0 bg-[rgba(0,0,0,0.1)]"
              aria-hidden
            />
          </div>
          <div className="flex flex-col justify-center gap-6 lg:gap-8 lg:py-6">
            <h2 className="max-w-[14ch] font-[family-name:var(--font-serif)] text-[clamp(1.85rem,4.5vw,2.65rem)] font-medium leading-[1.05] tracking-[-0.035em] text-[var(--qa-text)] transition-opacity duration-[var(--motion-base)] group-hover:opacity-80 sm:max-w-[18ch]">
              {series.title}
            </h2>
            <p className="max-w-[22ch] font-[family-name:var(--font-serif)] text-[clamp(1.08rem,2.5vw,1.28rem)] font-normal italic leading-[1.45] tracking-[-0.02em] text-[color-mix(in_srgb,var(--qa-muted)_22%,var(--qa-text))] sm:max-w-[26ch]">
              {cfg.tagline}
            </p>
            <span className="qa-eyebrow-brand inline-block pt-1 text-[var(--qa-muted)] underline decoration-[color-mix(in_srgb,var(--qa-muted)_35%,transparent)] underline-offset-[0.4em]">
              {cfg.ctaLabel}
            </span>
          </div>
        </Link>
      </Container>
    </section>
  );
}
