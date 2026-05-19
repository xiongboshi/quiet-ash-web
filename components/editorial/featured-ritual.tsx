import Image from "next/image";
import Link from "next/link";
import type { Ritual } from "@/lib/rituals";
import { Container } from "@/components/ui/Container";

type Props = {
  ritual: Ritual | null | undefined;
  eyebrow: string;
  ctaLabel: string;
};

/**
 * Homepage featured ritual — optical rhythm: intro sits slightly high, image settles lower.
 */
export function FeaturedRitual({ ritual, eyebrow, ctaLabel }: Props) {
  if (!ritual) return null;

  const href = `/moods/${ritual.slug}`;
  const src = ritual.coverImage ?? "/images/hero-objects.svg";

  return (
    <section className="hidden border-t border-[#DDD7CF] bg-paper md:block md:pt-20 md:pb-16 lg:pt-[132px] lg:pb-[108px]">
      <Container variant="wide">
        <div className="grid grid-cols-1 items-start gap-10 sm:gap-12 lg:grid-cols-[360px_1fr] lg:gap-[72px]">
          <div className="max-w-[320px] min-w-0 md:max-w-[min(100%,36rem)] lg:-mt-1 lg:max-w-[320px]">
            <p className="mb-5 font-[family-name:var(--font-sans)] text-[12px] font-medium uppercase tracking-[0.22em] text-[#6F6A63]">
              {eyebrow}
            </p>
            <h2 className="qa-spec-section-title mb-8 max-w-[min(18ch,100%)] tracking-[-0.038em] text-[var(--qa-text)] md:max-w-[min(100%,36rem)] md:text-pretty lg:max-w-[min(18ch,100%)]">
              {ritual.title}
            </h2>
            <p className="mb-12 max-w-[min(46ch,100%)] whitespace-pre-line font-[family-name:var(--font-sans)] text-[17px] font-normal leading-[32px] text-[color-mix(in_srgb,#1A1A1A_92%,#6F6A63)] md:max-w-[min(100%,40rem)] md:whitespace-normal md:text-pretty lg:max-w-[min(46ch,100%)] lg:whitespace-pre-line">
              {ritual.excerpt}
            </p>
            <Link
              href={href}
              className="qa-cta qa-cta--still inline-block font-[family-name:var(--font-sans)] text-[13px] font-medium uppercase tracking-[0.18em] text-[#6F6A63] underline decoration-[color-mix(in_srgb,#6F6A63_28%,transparent)] underline-offset-[6px] transition-opacity duration-[600ms] ease-out"
            >
              {ctaLabel}
            </Link>
          </div>

          <Link
            href={href}
            className="qa-cta qa-cta--still group block min-w-0 shrink-0 no-underline lg:mt-10"
          >
            <figure className="relative h-[min(420px,72vw)] w-full overflow-hidden bg-[#161210] sm:h-[460px] lg:h-[520px]">
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover object-center brightness-[0.9] contrast-[1.04] saturate-[0.9] transition-transform duration-[600ms] ease-out group-hover:scale-[1.01]"
                unoptimized
              />
            </figure>
          </Link>
        </div>
      </Container>
    </section>
  );
}
