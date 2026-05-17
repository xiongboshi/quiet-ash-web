import Link from "next/link";
import { Container } from "@/components/layout/container";
import { PageShell } from "@/components/layout/page-shell";

export default function NotFound() {
  return (
    <PageShell>
      <Container className="flex min-h-[50vh] flex-col items-center justify-center py-[var(--space-section)] text-center">
        <p className="qa-eyebrow text-[var(--wood)]">404</p>
        <h1 className="qa-title mt-[var(--space-text)] max-w-[20ch]">
          This path is empty.
        </h1>
        <p className="qa-body mt-[var(--space-text)] max-w-sm text-[var(--wood)]">
          The courtyard has no door here. Step back into the light.
        </p>
        <Link
          href="/"
          className="qa-cta qa-label mt-[var(--space-block)] inline-block text-[var(--wood)]"
        >
          Return
        </Link>
      </Container>
    </PageShell>
  );
}
