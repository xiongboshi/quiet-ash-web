import type { EditorialCollection } from "@/data/collections";
import { editorialCollections } from "@/data/collections";
import type { CatalogProduct } from "@/lib/catalog";
import { getProductBySlug } from "@/lib/catalog";

export type EditorialCollectionWithProducts = EditorialCollection & {
  products: CatalogProduct[];
};

function resolveProducts(slugs: string[]): CatalogProduct[] {
  const out: CatalogProduct[] = [];
  for (const s of slugs) {
    const p = getProductBySlug(s);
    if (p) out.push(p);
  }
  return out;
}

export function getAllEditorialCollections(): EditorialCollection[] {
  return [...editorialCollections];
}

export function getEditorialCollectionBySlug(
  slug: string,
): EditorialCollection | undefined {
  return editorialCollections.find((c) => c.slug === slug);
}

export function getEditorialCollectionWithProducts(
  slug: string,
): EditorialCollectionWithProducts | undefined {
  const c = getEditorialCollectionBySlug(slug);
  if (!c) return undefined;
  return {
    ...c,
    products: resolveProducts(c.relatedProductSlugs),
  };
}

export function getAllEditorialCollectionsWithProducts(): EditorialCollectionWithProducts[] {
  return editorialCollections.map((c) => ({
    ...c,
    products: resolveProducts(c.relatedProductSlugs),
  }));
}
