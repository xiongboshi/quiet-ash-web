import Link from "next/link";
import { Container } from "@/components/layout/container";
import { PageShell } from "@/components/layout/page-shell";

type Block = {
  heading?: string;
  paragraphs: readonly string[];
};

type Props = {
  eyebrow: string;
  title: string;
  blocks: readonly Block[];
};

export function InfoPage({ eyebrow, title, blocks }: Props) {
  return (
    <PageShell>
      <Container className="max-w-[min(100%,38rem)] space-y-[var(--rhythm-xl)]">
        <p className="qa-eyebrow text-[var(--wood)]">{eyebrow}</p>
        <h1 className="m-0 font-[family-name:var(--font-serif)] text-[clamp(1.75rem,4.2vw,2.15rem)] font-light leading-[1.12] tracking-[-0.035em] text-[var(--charcoal)]">
          {title}
        </h1>
        <div className="space-y-[var(--rhythm-xl)]">
          {blocks.map((block) => (
            <section key={block.heading ?? block.paragraphs[0]}>
              {block.heading ? (
                <h2 className="mb-[var(--rhythm-sm)] font-[family-name:var(--font-sans)] text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--wood)]">
                  {block.heading}
                </h2>
              ) : null}
              <div className="space-y-[var(--rhythm-md)] font-[family-name:var(--font-serif)] text-[clamp(1.02rem,2.4vw,1.15rem)] font-normal leading-[1.72] tracking-[-0.02em] text-[color-mix(in_srgb,var(--ash)_94%,var(--wood))]">
                {block.paragraphs.map((p) => (
                  <p key={p} className="m-0">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
        <p className="pt-[var(--rhythm-sm)]">
          <Link
            href="/about"
            className="qa-meta text-[var(--wood)] underline decoration-[color-mix(in_srgb,var(--wood)_30%,transparent)] underline-offset-[0.3em] transition-opacity duration-[var(--motion-base)] hover:opacity-70"
          >
            ← About
          </Link>
        </p>
      </Container>
    </PageShell>
  );
}
