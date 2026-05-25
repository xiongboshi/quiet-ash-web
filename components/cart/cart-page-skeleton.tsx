import { Container } from "@/components/ui/Container";

/** Placeholder while cart hydrates from localStorage. */
export function CartPageSkeleton() {
  return (
    <div className="cart-page">
    <Container
      variant="wide"
      className="cart-page__main pb-8 lg:pb-10"
    >
      <h1 className="cart-page__title">Your cart</h1>
      <div
        className="border-t border-[#DDD7CF] pt-14"
        aria-hidden
      >
        <div className="h-48 animate-pulse bg-[color-mix(in_srgb,#DDD7CF_35%,transparent)] lg:h-56" />
      </div>
    </Container>
    </div>
  );
}
