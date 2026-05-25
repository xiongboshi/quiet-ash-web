import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { CartPageGate } from "@/components/cart/cart-page-gate";
import { CartRecommendations } from "@/components/cart/cart-recommendations";

export const metadata: Metadata = {
  title: "Your cart",
  description:
    "Review your Quiet Ash cart — incense sticks, order summary, and checkout.",
  alternates: { canonical: "/cart" },
  robots: { index: false, follow: false },
};

export default function CartPage() {
  return (
    <PageShell>
      <CartPageGate />
      <CartRecommendations />
    </PageShell>
  );
}
