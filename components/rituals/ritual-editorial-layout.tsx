import Image from "next/image";
import { SHOP_INDEX, shopPath } from "@/lib/site-paths";
import Link from "next/link";
import { EditorialBackLink } from "@/components/editorial/editorial-back-link";
import { getProductBySlug, type CatalogProduct } from "@/lib/catalog";
import type { Essay } from "@/lib/essays";
import type { Ritual } from "@/lib/rituals";
import { RitualBody } from "@/components/mdx/ritual-body";
import { Container } from "@/components/layout/container";
import { PageShell } from "@/components/layout/page-shell";
import { getMoodRitualHero } from "@/data/mood-ritual-heroes";
import {
  getMoodRitualPopularSearches,
  getMoodRitualSleepIncense,
  getMoodRitualEveningCta,
  getMoodRitualSleepJournal,
  getMoodRitualSleepRitual,
} from "@/data/mood-ritual-sections";
import { MoodRitualEveningCta } from "@/components/moods/mood-ritual-evening-cta";
import { MoodRitualPopularSearches } from "@/components/moods/mood-ritual-popular-searches";
import { MoodRitualSleepIncense } from "@/components/moods/mood-ritual-sleep-incense";
import { MoodRitualSleepJournal } from "@/components/moods/mood-ritual-sleep-journal";
import { MoodRitualSleepRitual } from "@/components/moods/mood-ritual-sleep-ritual";
import { MoodRitualSplitHero } from "@/components/moods/mood-ritual-split-hero";
import { siteRailExemptClass } from "@/lib/site-rail";

function productMetaLine(p: CatalogProduct): string {
  const bits = [p.material, p.origin].filter(Boolean);
  return bits.length ? bits.join(", ") : p.line;
}

function closingLine(ritual: Ritual): string {
  if (ritual.closingQuote?.trim()) return ritual.closingQuote.trim();
  const first = ritual.excerpt.split(/\n/).map((l) => l.trim()).find(Boolean);
  return first ?? ritual.title;
}

type Props = {
  ritual: Ritual;
  products: CatalogProduct[];
  nextRitual: Ritual;
  relatedEssay: Essay;
};

export function RitualEditorialLayout({
  ritual,
  products,
  nextRitual,
  relatedEssay,
}: Props) {
  const heroSrc = ritual.coverImage ?? "/images/hero-objects.svg";
  const asideSrc =
    ritual.introAsideImage ?? ritual.coverImage ?? "/images/generated/ritual-tea-rain.png";
  const readMin = ritual.readTime ?? 5;
  const eyebrow = ritual.mood.toUpperCase();
  const excerptLines = ritual.excerpt
    .split(/\n/)
    .map((l) => l.trim())
    .filter(Boolean);
  const quote = closingLine(ritual);
  const essayThumb =
    relatedEssay.coverImage ?? "/images/generated/essay-night-incense-ritual.png";
  const nextThumb = nextRitual.coverImage ?? "/images/generated/ritual-incense-writing.png";
  const steps = ritual.steps;
  const ritualSectionLabel = ritual.ritualSectionLabel;
  const objectsSection = ritual.objectsSection;

  const moodHero = getMoodRitualHero(ritual.slug);
  const moodPopularSearches = getMoodRitualPopularSearches(ritual.slug);
  const moodSleepRitual = getMoodRitualSleepRitual(ritual.slug);
  const moodSleepIncense = getMoodRitualSleepIncense(ritual.slug);
  const moodSleepJournal = getMoodRitualSleepJournal(ritual.slug);
  const moodEveningCta = getMoodRitualEveningCta(ritual.slug);
  const sleepIncenseProducts = moodSleepIncense
    ? new Map(
        moodSleepIncense.items
          .map((item) => {
            const product = getProductBySlug(item.slug);
            return product ? ([item.slug, product] as const) : null;
          })
          .filter((entry): entry is [string, CatalogProduct] => Boolean(entry)),
      )
    : undefined;
  const useMoodEditorialShell = Boolean(moodHero);
  const showLegacyContainer =
    !useMoodEditorialShell ||
    !moodEveningCta ||
    Boolean(products.length && !moodSleepIncense);
  const heroBleedW =
    "lg:w-[calc(100%+max(0px,((100vw-var(--qa-container-width))/2)))] lg:max-w-none";

  return (
    <PageShell className="!pt-0 !pb-0">
      <article className="qa-ritual-editorial w-full bg-[var(--qa-bg)] text-[var(--qa-text)]">
        {moodHero ? (
          <>
            <MoodRitualSplitHero spec={moodHero} />
            {moodPopularSearches ? (
              <MoodRitualPopularSearches {...moodPopularSearches} />
            ) : null}
            {moodSleepRitual ? <MoodRitualSleepRitual {...moodSleepRitual} /> : null}
            {moodSleepIncense ? (
              <MoodRitualSleepIncense
                {...moodSleepIncense}
                productsBySlug={sleepIncenseProducts ?? new Map()}
              />
            ) : null}
            {moodSleepJournal ? <MoodRitualSleepJournal {...moodSleepJournal} /> : null}
            {moodEveningCta ? <MoodRitualEveningCta {...moodEveningCta} /> : null}
          </>
        ) : (
          <section className={`${siteRailExemptClass} overflow-x-clip bg-[var(--qa-bg)]`}>
            <div className="mx-auto grid max-w-[var(--qa-container-width)] grid-cols-1 items-stretch lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:min-h-[min(640px,min(70svh,720px))]">
              <figure
                className={`relative order-1 aspect-[16/11] min-h-[min(240px,58vw)] w-full overflow-hidden bg-[#161210] sm:aspect-[16/9] lg:col-start-2 lg:row-start-1 lg:aspect-auto lg:min-h-0 lg:h-full ${heroBleedW}`}
              >
                <Image
                  src={heroSrc}
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 72vw"
                  unoptimized
                  className="object-cover object-center brightness-[0.92] contrast-[1.02] saturate-[0.88]"
                />
              </figure>

              <header className="order-2 flex min-w-0 flex-col px-4 py-8 sm:px-6 sm:py-10 lg:col-start-1 lg:row-start-1 lg:h-full lg:min-h-0 lg:px-12 lg:py-10">
                <EditorialBackLink fallbackHref="/journal" />
                <div className="mt-8 flex min-h-0 flex-1 flex-col justify-center lg:mt-10">
                  <p className="m-0 font-[family-name:var(--font-sans)] text-[11px] font-medium uppercase tracking-[0.22em] text-[#6f6a63]">
                    {eyebrow}
                  </p>
                  <h1 className="mt-4 max-w-full font-[family-name:var(--font-serif)] text-[clamp(2.25rem,4.8vw,3.35rem)] font-light leading-[1.08] tracking-[-0.04em] text-[#1a1816] text-pretty">
                    {ritual.title}
                  </h1>
                  <div className="mt-8 max-h-[12.5rem] max-w-[36ch] overflow-hidden font-[family-name:var(--font-serif)] text-[clamp(1.05rem,1.9vw,1.2rem)] font-light leading-[1.55] tracking-[-0.02em] text-[#342e29]">
                    {excerptLines.map((line, i) => (
                      <p key={i} className="m-0 mb-3 line-clamp-3 last:mb-0">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
                <p className="mt-10 font-[family-name:var(--font-sans)] text-[11px] font-normal uppercase tracking-[0.2em] text-[#1a1716] lg:mt-auto lg:pt-10">
                  <span className="border-b border-[color-mix(in_srgb,#1a1716_35%,transparent)] pb-0.5">
                    READ TIME {readMin} MIN
                  </span>
                </p>
              </header>
            </div>
          </section>
        )}

        {showLegacyContainer ? (
        <Container
          variant="wide"
          className="pb-0 pt-0"
        >
          {/* Intro — spec: editorial poem left (~2/3 rail), 3:2 inset ~1/3 width flush right, airy vertical padding */}
          {!useMoodEditorialShell ? (
          <div className="w-full border-t border-[#ddd7cf] pt-[clamp(4rem,10vw,6.5rem)] pb-[28px]">
            <div className="mx-auto flex w-full max-w-[min(100%,var(--qa-container-width))] flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-x-[clamp(1.5rem,4vw,3.5rem)]">
              <div className="markdown markdown--ritual-intro min-h-0 min-w-0 lg:max-w-[min(48rem,calc(66.666%-1rem))] lg:flex-1">
                <RitualBody source={ritual.body} />
              </div>
              <figure className="relative mx-auto aspect-[3/2] w-full max-w-[min(100%,22rem)] shrink-0 overflow-hidden bg-[#161210] sm:max-w-md lg:mx-0 lg:max-w-none lg:basis-1/3 lg:w-auto">
                <Image
                  src={asideSrc}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) min(100vw,28rem), 33vw"
                  unoptimized
                  className="object-cover object-center brightness-[0.88] contrast-[1.04] saturate-[0.78]"
                />
              </figure>
            </div>
          </div>
          ) : null}

          {/* The ritual — equal column heights, thumbs bottom-aligned */}
          {steps.length && !useMoodEditorialShell ? (
            <section
              id="the-ritual"
              className="mx-auto mt-0 max-w-[min(100%,var(--qa-container-width))] border-t border-[#ddd7cf] pt-[18px]"
              aria-label={ritualSectionLabel}
            >
              <p className="m-0 font-[family-name:var(--font-sans)] text-[11px] font-medium uppercase tracking-[0.22em] text-[#6f6a63]">
                {ritualSectionLabel}
              </p>
              <div className="mt-[8px] grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-0">
                {steps.map((s, idx) => {
                  const n = String(idx + 1).padStart(2, "0");
                  return (
                    <div
                      key={`${n}-${s.title}`}
                      className="flex min-h-0 flex-col lg:min-h-[520px]"
                    >
                      <div className="min-h-0 flex-1">
                        <p className="m-0 font-[family-name:var(--font-sans)] text-[11px] font-medium tabular-nums uppercase tracking-[0.24em] text-[#8a8178]">
                          {n}
                        </p>
                        <h2 className="mt-3 line-clamp-2 min-h-[2.75rem] font-[family-name:var(--font-serif)] text-[1.25rem] font-light leading-snug tracking-[-0.03em] text-[#1a1816]">
                          {s.title}
                        </h2>
                        <p className="mt-3 line-clamp-3 min-h-[4.5rem] font-[family-name:var(--font-serif)] text-[13px] font-light leading-[1.65] tracking-[-0.01em] text-[#6b645d]">
                          {s.body}
                        </p>
                      </div>
                      <figure className="relative m-0 aspect-square w-full shrink-0 overflow-hidden bg-[#161210]">
                        <Image
                          src={s.image}
                          alt=""
                          fill
                          sizes="(max-width: 640px) 100vw, 25vw"
                          unoptimized
                          className="object-cover object-center brightness-[0.88] contrast-[1.03] saturate-[0.8]"
                        />
                      </figure>
                    </div>
                  );
                })}
              </div>
            </section>
          ) : null}

          {products.length && !moodSleepIncense ? (
            <section
              className="mx-auto mt-[28px] max-w-[min(100%,var(--qa-container-width))] border-t border-[#ddd7cf] pt-[clamp(2.5rem,6vw,4rem)]"
              aria-label={objectsSection.label}
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div className="min-w-0">
                  <p className="m-0 font-[family-name:var(--font-sans)] text-[11px] font-medium uppercase tracking-[0.22em] text-[#6f6a63]">
                    {objectsSection.label}
                  </p>
                  <p className="mt-4 line-clamp-2 max-w-[28ch] min-h-[2.5rem] font-[family-name:var(--font-serif)] text-[clamp(1.45rem,2.6vw,1.85rem)] font-light leading-[1.15] tracking-[-0.035em] text-[#1a1816]">
                    {objectsSection.subtext}
                  </p>
                </div>
                <Link
                  href={objectsSection.ctaHref}
                  className="qa-cta qa-cta--still shrink-0 self-start font-[family-name:var(--font-sans)] text-[11px] font-normal uppercase tracking-[0.2em] text-[#1a1716] underline decoration-[rgba(0,0,0,0.35)] decoration-1 underline-offset-[6px] sm:self-end"
                >
                  {objectsSection.ctaLabel}
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5">
                {products.map((p) => (
                  <Link
                    key={p.slug}
                    href={shopPath(p.slug)}
                    className="qa-cta qa-cta--still group relative flex min-h-[440px] flex-col overflow-hidden bg-[#161210] no-underline"
                  >
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      unoptimized
                      className="object-cover object-center transition-transform duration-[650ms] ease-out group-hover:scale-[1.02] brightness-[0.9] contrast-[1.02] saturate-[0.85]"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0a09]/78 via-[#0c0a09]/18 to-transparent"
                      aria-hidden
                    />
                    <div className="relative z-[1] mt-auto flex min-h-[8.5rem] flex-col justify-end px-6 pb-7 pt-24 text-white">
                      <p className="m-0 line-clamp-2 font-[family-name:var(--font-serif)] text-[clamp(1.05rem,2vw,1.28rem)] font-light leading-[1.2] tracking-[-0.02em]">
                        {p.title}
                      </p>
                      <p className="mt-2 line-clamp-1 font-[family-name:var(--font-sans)] text-[12px] font-normal leading-relaxed text-[rgba(255,255,255,0.82)]">
                        {productMetaLine(p)}
                        {p.priceDisplay ? (
                          <span className="text-white/95"> · {p.priceDisplay}</span>
                        ) : null}
                      </p>
                      <span className="mt-5 inline-block shrink-0 font-[family-name:var(--font-sans)] text-[11px] font-normal uppercase tracking-[0.18em] text-white underline decoration-white/35 decoration-1 underline-offset-[6px]">
                        Add to ritual +
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          {!moodEveningCta ? (
          <section className="mx-auto mt-[clamp(3.5rem,9vw,5.5rem)] max-w-[min(100%,var(--qa-container-width))] border-t border-[#ddd7cf] pt-[clamp(2.25rem,5vw,3rem)]">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
              <blockquote className="m-0 max-w-[min(48rem,100%)] flex-1 text-left font-[family-name:var(--font-serif)] text-[clamp(1.65rem,3.2vw,2.35rem)] font-light leading-[1.25] tracking-[-0.03em] text-[#342e29]">
                {quote}
              </blockquote>
              <Link
                href={SHOP_INDEX}
                className="qa-cta qa-cta--still shrink-0 self-start font-[family-name:var(--font-sans)] text-[11px] font-normal uppercase tracking-[0.2em] text-[#1a1716] underline decoration-[rgba(0,0,0,0.35)] decoration-1 underline-offset-[6px] lg:self-end"
              >
                Shop the ritual →
              </Link>
            </div>
          </section>
          ) : null}

          {/* Next ritual / Related essay — spec: text left, image right per card; thin rules + column divider */}
          {!moodEveningCta ? (
          <div className="mx-auto mt-[clamp(3rem,8vw,4.5rem)] max-w-[min(100%,var(--qa-container-width))] border-t border-b border-[#ddd7cf] lg:mt-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x lg:divide-[#ddd7cf]">
              <Link
                href={`/moods/${nextRitual.slug}`}
                className="qa-cta qa-cta--still group flex flex-row items-stretch gap-6 border-b border-[#ddd7cf] bg-[var(--qa-bg)] p-8 no-underline sm:gap-8 sm:p-10 lg:border-b-0"
              >
                <div className="flex min-w-0 flex-1 flex-col justify-center">
                  <p className="m-0 font-[family-name:var(--font-sans)] text-[10px] font-normal uppercase tracking-[0.22em] text-[#6f6a63]">
                    Next ritual
                  </p>
                  <div className="mt-5 flex min-h-[3rem] items-start gap-2.5">
                    <span
                      className="shrink-0 pt-0.5 font-[family-name:var(--font-serif)] text-[1.1rem] font-light leading-none text-[#1a1816] transition-transform duration-[500ms] ease-out group-hover:-translate-x-0.5"
                      aria-hidden
                    >
                      ←
                    </span>
                    <h2 className="m-0 max-w-[14ch] line-clamp-2 font-[family-name:var(--font-serif)] text-[clamp(1.35rem,2.2vw,1.6rem)] font-light leading-[1.12] tracking-[-0.03em] text-[#1a1816]">
                      {nextRitual.title}
                    </h2>
                  </div>
                </div>
                <figure className="relative h-[168px] w-[min(46%,220px)] shrink-0 overflow-hidden bg-[#161210] sm:h-[188px] sm:w-[200px] lg:h-[200px] lg:w-[240px]">
                  <Image
                    src={nextThumb}
                    alt=""
                    fill
                    sizes="240px"
                    unoptimized
                    className="object-cover object-center brightness-[0.88] contrast-[1.03] saturate-[0.78] transition-transform duration-[650ms] ease-out group-hover:scale-[1.02]"
                  />
                </figure>
              </Link>

              <Link
                href={`/journal/${relatedEssay.slug}`}
                className="qa-cta qa-cta--still group flex flex-row items-stretch gap-6 bg-[var(--qa-bg)] p-8 no-underline sm:gap-8 sm:p-10"
              >
                <div className="flex min-w-0 flex-1 flex-col justify-center">
                  <p className="m-0 font-[family-name:var(--font-sans)] text-[10px] font-normal uppercase tracking-[0.22em] text-[#6f6a63]">
                    Related essay
                  </p>
                  <div className="mt-5 flex min-h-[3rem] items-start gap-2.5">
                    <h2 className="m-0 max-w-[16ch] line-clamp-2 font-[family-name:var(--font-serif)] text-[clamp(1.35rem,2.2vw,1.6rem)] font-light leading-[1.12] tracking-[-0.03em] text-[#1a1816]">
                      {relatedEssay.title}
                    </h2>
                    <span
                      className="shrink-0 pt-0.5 font-[family-name:var(--font-serif)] text-[1.1rem] font-light leading-none text-[#1a1816] transition-transform duration-[500ms] ease-out group-hover:translate-x-0.5"
                      aria-hidden
                    >
                      →
                    </span>
                  </div>
                </div>
                <figure className="relative h-[168px] w-[min(46%,220px)] shrink-0 overflow-hidden bg-[#161210] sm:h-[188px] sm:w-[200px] lg:h-[200px] lg:w-[240px]">
                  <Image
                    src={essayThumb}
                    alt=""
                    fill
                    sizes="240px"
                    unoptimized
                    className="object-cover object-center brightness-[0.84] contrast-[1.04] saturate-[0.72] transition-transform duration-[650ms] ease-out group-hover:scale-[1.02]"
                  />
                </figure>
              </Link>
            </div>
          </div>
          ) : null}
        </Container>
        ) : null}
      </article>
    </PageShell>
  );
}
