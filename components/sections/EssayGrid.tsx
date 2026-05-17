import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import type { EssayMeta } from "@/lib/essays";
import { defaultEssayGridIntro } from "@/data/home";
import { EssayCard } from "@/components/ui/EssayCard";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { essayCardImageUrl, essayCardSubtitle } from "@/lib/essay-visuals";
import { getHomeEditorialEssays } from "@/lib/essays";

export type EssayGridProps = {
  intro?: Partial<typeof defaultEssayGridIntro>;
  limit?: number;
  /**
   * `editorial` — two-up stagger.
   * `journal` — homepage: desktop two-column rail; narrow viewports use a separate stacked layout in `EssayGrid`.
   */
  layout?: "grid" | "editorial" | "journal";
  variant?: "default" | "restraint";
  /**
   * `journal` only — left intro column (eyebrow, lede, CTA): `void` matches footer rail (`#030303` + light type).
   */
  journalIntroSurface?: "default" | "void";
  /** @deprecated Journal layout always renders its own section shell. */
  embedded?: boolean;
};

function essayTagLine(e: EssayMeta): string | null {
  const t = e.threads?.[0]?.trim();
  return t ? t.toLowerCase() : null;
}

export function EssayGrid(props: EssayGridProps = {}) {
  const {
    intro: introOverrides,
    limit = 2,
    layout = "editorial",
    variant = "default",
    journalIntroSurface = "default",
  } = props;
  const intro = { ...defaultEssayGridIntro, ...introOverrides };
  const essays = getHomeEditorialEssays().slice(0, limit);

  const headerMb =
    variant === "restraint"
      ? "mb-11 sm:mb-16 lg:mb-20"
      : "mb-9 sm:mb-12 lg:mb-14";

  if (layout === "journal" && essays.length) {
    const journalTitleLines = intro.title.split(/\n/);
    const railColsClass =
      essays.length >= 3
        ? "lg:grid-cols-3"
        : essays.length === 2
          ? "lg:grid-cols-2"
          : "lg:grid-cols-1";

    const voidIntro = journalIntroSurface === "void";
    const sectionJournalClass = voidIntro
      ? "qa-home-journal qa-home-journal--void-intro"
      : "qa-home-journal";

    return (
      <section className={sectionJournalClass}>
        <div className="qa-home-journal-shell">
          {/* Mobile: own DOM — intro stack, then full-bleed figure + text stack per entry (not thumb+sidebar row) */}
          <div className="qa-journal-m-list lg:hidden">
            <header className="mb-[72px]">
              <p className="mb-7 font-[family-name:var(--font-sans)] text-[10px] font-normal uppercase tracking-[0.22em] text-[#8A8178]">
                {intro.eyebrow}
              </p>
              <h2 className="qa-journal-m-lede max-md:hidden md:block">
                <span className="qa-journal-m-lede-lines">
                  {journalTitleLines.map((line, i) => (
                    <span key={i} className="qa-journal-m-lede-line">
                      {line}
                    </span>
                  ))}
                </span>
                <span className="qa-journal-m-lede-oneline">
                  {journalTitleLines.join(" ")}
                </span>
              </h2>
              {intro.action ? (
                <Link
                  href={intro.action.href}
                  className="qa-cta qa-cta--still mt-7 inline-block font-[family-name:var(--font-sans)] text-[11px] font-normal uppercase tracking-[0.18em] text-[#1A1716] underline decoration-[rgba(0,0,0,0.35)] decoration-1 underline-offset-[6px] transition-none md:mt-[52px]"
                >
                  {intro.action.label}
                </Link>
              ) : null}
            </header>

            <ul className="m-0 flex list-none flex-col gap-[54px] p-0">
              {essays.map((e) => {
                const tag = essayTagLine(e);
                return (
                  <li key={e.slug} className="m-0 p-0">
                    <article className="m-0 border-0 p-0 shadow-none">
                      <Link
                        href={`/essays/${e.slug}`}
                        className="qa-cta qa-cta--still block no-underline transition-none"
                      >
                        <figure className="relative mb-0 aspect-[5/4] w-full overflow-hidden bg-[#161210]">
                          <Image
                            src={essayCardImageUrl(e)}
                            alt=""
                            fill
                            sizes="100vw"
                            className="object-cover object-center brightness-[0.84] contrast-[1.04] saturate-[0.72]"
                            unoptimized
                          />
                        </figure>
                        <div className="pt-5">
                          {tag ? (
                            <p className="mb-2.5 font-[family-name:var(--font-sans)] text-[10px] font-normal uppercase tracking-[0.18em] text-[#8A8178]">
                              {tag}
                            </p>
                          ) : null}
                          <h3 className="font-[family-name:var(--font-serif)] text-[24px] font-light leading-[0.96] tracking-[-0.045em] text-[#1A1716] text-pretty">
                            {e.title}
                          </h3>
                          <p className="mt-3.5 max-w-[32rem] font-[family-name:var(--font-sans)] text-[15px] font-normal leading-[1.7] text-[#6B645D]">
                            {essayCardSubtitle(e)}
                          </p>
                          <span className="mt-5 inline-block font-[family-name:var(--font-sans)] text-[11px] font-normal uppercase tracking-[0.16em] text-[#1A1716] underline decoration-[rgba(0,0,0,0.35)] decoration-1 underline-offset-[6px]">
                            READ ESSAY
                          </span>
                        </div>
                      </Link>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Desktop: intro + three column cards (reference row) */}
          <div className="qa-home-journal-desktop hidden lg:block">
            <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[360px_1fr] lg:items-stretch lg:gap-x-[72px] lg:gap-y-0">
              <aside className="qa-home-journal-intro-wrap">
                <p className="qa-home-journal-eyebrow">{intro.eyebrow}</p>
                <h2 className="qa-home-journal-lede">
                  {journalTitleLines.map((line, i) => (
                    <Fragment key={i}>
                      {i > 0 ? <br /> : null}
                      {line}
                    </Fragment>
                  ))}
                </h2>
                {intro.action ? (
                  <Link
                    href={intro.action.href}
                    className="qa-home-journal-cta"
                  >
                    {intro.action.label}
                  </Link>
                ) : null}
              </aside>

              <div
                className={`grid min-w-0 grid-cols-1 gap-10 ${railColsClass} lg:gap-x-10 lg:gap-y-0`}
              >
                {essays.map((e) => (
                  <article
                    key={e.slug}
                    className="qa-home-journal-col flex h-full min-h-0 flex-col"
                  >
                    <Link
                      href={`/essays/${e.slug}`}
                      className="qa-home-journal-col-hit qa-cta qa-cta--still flex min-h-0 flex-1 flex-col text-inherit no-underline transition-none"
                    >
                      <div className="qa-home-journal-col-inner min-h-0 flex-1">
                        <div className="qa-home-journal-col-thumb">
                          <Image
                            src={essayCardImageUrl(e)}
                            alt=""
                            width={192}
                            height={292}
                            sizes="192px"
                            unoptimized
                          />
                        </div>
                        <div className="qa-home-journal-col-body flex min-h-[292px] min-w-0 flex-1 flex-col">
                          <span className="qa-home-journal-title">
                            {e.title}
                          </span>
                          <p className="qa-home-journal-dek qa-home-journal-dek--grow">
                            {essayCardSubtitle(e)}
                          </p>
                          <span className="qa-home-journal-read">READ ESSAY</span>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="qa-section--editorial-loose border-t border-[#DDD7CF] bg-[var(--qa-bg)]">
      <Container variant="wide">
        <SectionHeader
          eyebrow={intro.eyebrow}
          title={intro.title.split(/\n/).join(" ")}
          description={intro.description}
          action={intro.action}
          className={headerMb}
        />
        {layout === "editorial" && essays.length >= 2 ? (
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
            <div className="min-w-0">
              <EssayCard
                essay={essays[0]}
                variant="home"
                homeImage={variant === "restraint" ? "restraint" : "full"}
              />
            </div>
            <div className="min-w-0 lg:pt-[clamp(1.75rem,7vw,4.25rem)]">
              <EssayCard
                essay={essays[1]}
                variant="home"
                homeImage={variant === "restraint" ? "restraint" : "full"}
              />
            </div>
          </div>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            style={{ gap: "var(--qa-card-gap)" }}
          >
            {essays.map((e) => (
              <EssayCard
                key={e.slug}
                essay={e}
                variant="home"
                homeImage={variant === "restraint" ? "restraint" : "full"}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
