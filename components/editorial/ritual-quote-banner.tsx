import { Container } from "@/components/ui/Container";

type Props = {
  quote: string;
  eyebrow?: string;
};

/** Typographic pause — dark band into soft light, single column. */
export function RitualQuoteBanner({
  quote,
  eyebrow = "Atmosphere",
}: Props) {
  return (
    <section className="border-t border-[var(--qa-border)] bg-[#141110] text-[#ebe4dc]">
      <Container variant="wide" className="qa-section--transition">
        <div
          className="h-px w-24 max-w-full bg-gradient-to-r from-[color-mix(in_srgb,#f2ebe6_45%,transparent)] to-transparent"
          aria-hidden
        />
        <p className="qa-eyebrow-brand mt-8 text-[color-mix(in_srgb,#ece6dc_55%,#8a8178)]">
          {eyebrow}
        </p>
        <blockquote className="mt-6 max-w-[min(40ch,100%)] font-[family-name:var(--font-serif)] text-[clamp(1.2rem,3.4vw,1.55rem)] font-normal italic leading-[1.48] tracking-[-0.02em] text-[color-mix(in_srgb,#f7f1ea_94%,#c9bfb4)]">
          {quote}
        </blockquote>
      </Container>
    </section>
  );
}
