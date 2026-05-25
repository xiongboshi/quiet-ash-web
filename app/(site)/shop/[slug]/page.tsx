import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { ShopCategoryPage } from "@/components/shop/shop-category-page";
import { ShopProductDetailPage } from "@/components/shop/product/shop-product-detail-page";
import { getAllProducts, getProductBySlug } from "@/lib/catalog";
import {
  DEFAULT_SHOP_CATEGORY_SLUG,
  getShopCategoryBySegment,
  isShopCategorySegment,
  shopCategorySegmentsForStaticParams,
} from "@/lib/shop-catalog";
import { SHOP_INDEX, shopPath } from "@/lib/site-paths";
import type { ShopCatalogSlug } from "@/data/shop-catalog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [
    ...shopCategorySegmentsForStaticParams().map((slug) => ({ slug })),
    ...getAllProducts().map((p) => ({ slug: p.slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  if (isShopCategorySegment(slug)) {
    const category = getShopCategoryBySegment(slug)!;
    return {
      title: category.hero.title,
      description: category.hero.descriptionLines.join(" "),
      alternates: { canonical: category.pathname },
    };
  }

  const p = getProductBySlug(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.line,
    alternates: { canonical: shopPath(slug) },
  };
}

export default async function ShopSlugPage({ params }: Props) {
  const { slug } = await params;

  if (isShopCategorySegment(slug)) {
    const category = getShopCategoryBySegment(slug)!;
    if (category.slug === DEFAULT_SHOP_CATEGORY_SLUG && category.pathname === SHOP_INDEX) {
      redirect(SHOP_INDEX);
    }
    return <ShopCategoryPage categorySlug={slug as ShopCatalogSlug} />;
  }

  const product = getProductBySlug(slug);
  if (!product) notFound();

  return <ShopProductDetailPage product={product} />;
}
