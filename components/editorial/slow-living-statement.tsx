import { Container } from "@/components/ui/Container";

type Props = {
  eyebrow?: string;
  title: string;
  body: string;
};

/** Brand worldview — editorial, restrained. */
export function SlowLivingStatement({
  eyebrow = "Universe",
  title,
  body,
}: Props) {
  return (
    <section className="qa-section--editorial-loose bg-[var(--qa-bg)]">
      <Container variant="wide">
        <p className="qa-eyebrow-brand text-[var(--wood)]">{eyebrow}</p>
        <h2 className="mt-6 max-w-[22ch] font-[family-name:var(--font-serif)] text-[clamp(1.85rem,4.8vw,2.5rem)] font-medium leading-[1.06] tracking-[-0.035em] text-[var(--charcoal)]">
          {title}
        </h2>
        <p className="mt-10 max-w-[min(52ch,100%)] font-[family-name:var(--font-sans)] text-[0.98rem] leading-[1.88] tracking-[-0.01em] text-[color-mix(in_srgb,var(--ash)_94%,var(--wood))]">
          {body}
        </p>
      </Container>
    </section>
  );
}
