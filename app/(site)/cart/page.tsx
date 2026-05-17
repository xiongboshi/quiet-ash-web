import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { CartPageGate } from "@/components/cart/cart-page-gate";
import { CartRecommendations } from "@/components/cart/cart-recommendations";
import { getFeaturedProducts } from "@/lib/catalog";
import { cartSnapshotFromProduct } from "@/lib/cart/from-product";

export const metadata: Metadata = {
  title: "Your Ritual",
  description:
    "Objects gathered for your space — Quiet Ash cart with calm, editorial checkout.",
  alternates: { canonical: "/cart" },
  robots: { index: false, follow: false },
};

export default function CartPage() {
  const recommendations = getFeaturedProducts(6).map(cartSnapshotFromProduct);

  return (
    <PageShell className="qa-page-shell--pad-28">
      <CartPageGate />
      <CartRecommendations products={recommendations.slice(0, 4)} />
    </PageShell>
  );
}
