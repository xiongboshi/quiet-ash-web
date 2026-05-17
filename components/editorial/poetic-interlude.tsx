import { Container } from "@/components/ui/Container";

type Props = {
  line: string;
};

/** Single-line editorial beat — typographic pause, not a section header. */
export function PoeticInterlude({ line }: Props) {
  return (
    <div className="qa-section--transition border-t border-[var(--qa-border)] bg-[var(--qa-bg)]">
      <Container variant="wide">
        <div className="qa-line-thin" aria-hidden />
        <p className="mt-8 max-w-[36ch] font-[family-name:var(--font-serif)] text-[clamp(1.05rem,2.5vw,1.2rem)] font-normal italic leading-snug tracking-[-0.02em] text-[color-mix(in_srgb,var(--wood)_88%,var(--charcoal))]">
          {line}
        </p>
      </Container>
    </div>
  );
}
