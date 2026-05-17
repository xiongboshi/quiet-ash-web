import { Fragment, type ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { QuoteSeal } from "@/components/editorial/quote-seal";

type Props = {
  line: string;
  signature?: string;
  spacing?: "full" | "compact";
  showSeal?: boolean;
  embedded?: boolean;
  showTopRule?: boolean;
  /** Reference quote band — desktop wide; mobile is a separate editorial composition. */
  tone?: "default" | "spec-quote";
  /** `spec-quote` only — render the mobile band (default true). */
  renderMobile?: boolean;
  /** `spec-quote` only — render the desktop band (default true). */
  renderDesktop?: boolean;
};

/**
 * Philosophy / quote strip — default editorial or `spec-quote` for homepage reference.
 */
export function EditorialFinale({
  line,
  signature,
  spacing = "full",
  showSeal = false,
  embedded = false,
  showTopRule = true,
  tone = "default",
  renderMobile = true,
  renderDesktop = true,
}: Props) {
  if (tone === "spec-quote") {
    const lineParts = line.split(/\n/);
    const quoted: ReactNode = (
      <>
        <span className="qa-spec-quote-ldquo" aria-hidden>
          &ldquo;
        </span>
        {lineParts.map((part, i) => (
          <Fragment key={i}>
            {i > 0 ? <br /> : null}
            {part}
          </Fragment>
        ))}
        <span className="qa-spec-quote-rdquo" aria-hidden>
          &rdquo;
        </span>
      </>
    );

    return (
      <>
        {renderMobile ? (
          <section className="qa-spec-quote-mobile border-b border-[#c5c0b6] bg-[#d5d0c7] px-6 py-[28px] lg:hidden">
          <div className="mx-auto max-w-[min(34rem,calc(100vw-3rem))] text-center text-balance">
            <blockquote className="m-0 font-[family-name:var(--font-serif)] text-[clamp(1.65rem,5.2vw,2rem)] font-light not-italic leading-[1.42] tracking-[-0.02em] text-[#342E29]">
              {quoted}
            </blockquote>
            {showSeal ? (
              <div className="mt-0 flex justify-center">
                <QuoteSeal />
              </div>
            ) : null}
            {signature ? (
              <p className="qa-eyebrow-brand mt-10 text-[#6F6A63]">
                {signature}
              </p>
            ) : null}
          </div>
        </section>
        ) : null}

        {renderDesktop ? (
          <section className="qa-spec-quote-desktop relative hidden overflow-hidden border-t border-[#c5c0b6] bg-[#d5d0c7] pb-5 pt-[15px] lg:block">
          <div className="qa-spec-quote-desktop-decor" aria-hidden />
          <Container variant="wide" className="relative z-[1]">
            <div className="qa-spec-quote-desktop-inner mx-auto max-w-[min(56rem,calc(100vw-3rem))] px-4 text-center text-balance sm:px-6">
              <blockquote className="m-0 font-[family-name:var(--font-serif)] text-[32px] font-light not-italic leading-[1.45] tracking-[-0.02em] text-[#342E29] sm:text-[34px] lg:text-[36px] lg:leading-[1.2]">
                {quoted}
              </blockquote>
              {showSeal ? (
                <div className="mt-0 flex justify-center">
                  <QuoteSeal />
                </div>
              ) : null}
              {signature ? (
                <p className="qa-eyebrow-brand mt-10 text-[#6F6A63]">
                  {signature}
                </p>
              ) : null}
            </div>
          </Container>
        </section>
        ) : null}
      </>
    );
  }

  const py =
    spacing === "compact"
      ? "py-[clamp(2.35rem,7.5vw,4.75rem)]"
      : "py-[clamp(5.5rem,16vw,11rem)]";
  const shell = embedded
    ? `relative z-10 ${py}`.trim()
    : `border-t border-[#DDD7CF] bg-[var(--qa-bg)] ${py}`.trim();

  const inner = (
    <>
      <Container variant="wide">
        {showTopRule ? (
          <div className="qa-line-thin mx-auto" aria-hidden />
        ) : null}
        <blockquote
          className={`mx-auto max-w-[min(34ch,100%)] text-center font-[family-name:var(--font-serif)] text-[clamp(1.15rem,2.8vw,1.45rem)] font-light italic leading-[1.5] tracking-[-0.02em] text-[color-mix(in_srgb,var(--qa-text)_90%,var(--qa-muted))] ${showTopRule ? "mt-10" : "mt-0"}`}
        >
          {line}
        </blockquote>
        {showSeal ? (
          <div className="mt-0 flex justify-center">
            <QuoteSeal />
          </div>
        ) : null}
        {signature ? (
          <p className="qa-eyebrow-brand mt-10 text-center text-[#6F6A63]">
            {signature}
          </p>
        ) : null}
      </Container>
    </>
  );

  if (embedded) {
    return <div className={shell}>{inner}</div>;
  }

  return <section className={shell}>{inner}</section>;
}
