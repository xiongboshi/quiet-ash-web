import { Container } from "@/components/ui/Container";

/** Placeholder while cart hydrates from localStorage. */
export function CartPageSkeleton() {
  return (
    <Container
      variant="wide"
      className="pb-8 lg:pb-10"
    >
      <header className="mb-10 max-w-[42ch] lg:mb-14">
        <h1 className="font-[family-name:var(--font-serif)] text-[clamp(2.35rem,5.5vw,3.5rem)] font-light leading-[1.06] tracking-[-0.04em] text-[var(--qa-text)]">
          Your Ritual
        </h1>
      </header>
      <div
        className="border-t border-[#DDD7CF] pt-14"
        aria-hidden
      >
        <div className="h-48 animate-pulse bg-[color-mix(in_srgb,#DDD7CF_35%,transparent)] lg:h-56" />
      </div>
    </Container>
  );
}
