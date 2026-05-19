import type { Metadata } from "next";
import { SHOP_INDEX, shopPath } from "@/lib/site-paths";
import { notFound } from "next/navigation";
import { ObjectDetailLayout } from "@/components/objects/object-detail-layout";
import { getAllProducts, getProductBySlug } from "@/lib/catalog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.line,
    alternates: { canonical: shopPath(slug) },
  };
}

export default async function ObjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return <ObjectDetailLayout product={product} />;
}
