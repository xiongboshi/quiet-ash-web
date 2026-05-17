import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RitualEditorialLayout } from "@/components/rituals/ritual-editorial-layout";
import { getProductBySlug } from "@/lib/catalog";
import { getEssayBySlug } from "@/lib/essays";
import {
  getNextRitualAfter,
  getRitualBySlug,
  getRitualSlugs,
} from "@/lib/rituals";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getRitualSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ritual = getRitualBySlug(slug);
  if (!ritual) return {};
  return {
    title: `${ritual.title} · Rituals`,
    description: ritual.excerpt.replace(/\s+/gu, " ").trim(),
    alternates: { canonical: `/rituals/${slug}` },
  };
}

export default async function RitualPage({ params }: Props) {
  const { slug } = await params;
  const ritual = getRitualBySlug(slug);
  if (!ritual) notFound();

  const products = ritual.relatedProducts
    .map((s) => getProductBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const nextRitual =
    (ritual.nextRitualSlug && getRitualBySlug(ritual.nextRitualSlug)) ||
    getNextRitualAfter(slug) ||
    ritual;

  const essaySlug = ritual.relatedEssaySlug ?? "why-scholars-burned-incense";
  const relatedEssay =
    getEssayBySlug(essaySlug) ?? getEssayBySlug("why-scholars-burned-incense");

  if (!relatedEssay) notFound();

  return (
    <RitualEditorialLayout
      ritual={ritual}
      products={products}
      nextRitual={nextRitual}
      relatedEssay={relatedEssay}
    />
  );
}
