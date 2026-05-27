/**
 * @deprecated Import from `@/lib/shop-best-sellers-home` or edit `@/data/home-best-sellers`.
 */
import type { HomeBestSellerCard } from "@/data/home-redesign";
import { getHomeBestSellersProducts } from "@/lib/shop-best-sellers-home";

export type HomeBestSeller = HomeBestSellerCard;

export const homeBestSellers: HomeBestSeller[] = getHomeBestSellersProducts();
