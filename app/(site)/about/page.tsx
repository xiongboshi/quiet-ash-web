import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Quiet Ash exists — a room for slower notes on incense, ritual, and quiet habits.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <PageShell>
      <Container className="max-w-[min(100%,38rem)] space-y-[var(--rhythm-xl)]">
        <p className="qa-eyebrow text-[var(--wood)]">About</p>
        <div className="space-y-[var(--rhythm-md)] font-[family-name:var(--font-serif)] text-[clamp(1.08rem,2.6vw,1.22rem)] font-normal leading-[1.72] tracking-[-0.02em] text-[var(--ash)]">
          <p>Quiet Ash began as a place to keep slower notes.</p>
          <p className="text-[color-mix(in_srgb,var(--ash)_92%,var(--wood))]">
            On incense.
            <br />
            On ritual.
            <br />
            On the quiet habits that survive modern speed.
          </p>
          <p className="text-[color-mix(in_srgb,var(--wood)_88%,var(--ash))]">
            Not a magazine.
            <br />
            Not a storehouse of content.
            <br />
            Only a room for careful things.
          </p>
        </div>
        <p className="pt-[var(--rhythm-sm)]">
          <Link
            href="/"
            className="qa-meta text-[var(--wood)] underline decoration-[color-mix(in_srgb,var(--wood)_30%,transparent)] underline-offset-[0.3em] transition-opacity duration-[var(--motion-base)] hover:opacity-70"
          >
            ← Home
          </Link>
        </p>
      </Container>
    </PageShell>
  );
}
