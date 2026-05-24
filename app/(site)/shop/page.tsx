import type { Metadata } from "next";
import { ShopCategoryPage } from "@/components/shop/shop-category-page";
import { SHOP_INDEX } from "@/lib/site-paths";

export const metadata: Metadata = {
  title: "Incense Sticks",
  description:
    "Handcrafted incense sticks for sleep, stress relief, focus, and everyday rituals.",
  alternates: { canonical: SHOP_INDEX },
};

export default function ShopPage() {
  return <ShopCategoryPage />;
}
