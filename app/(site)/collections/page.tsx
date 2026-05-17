import type { Metadata } from "next";
import { CollectionGrid } from "@/components/editorial/collection-grid";
import { PageShell } from "@/components/layout/page-shell";
import { getAllEditorialCollectionsWithProducts } from "@/lib/collections";
import { defaultCollectionsPageIntro } from "@/data/home";

export const metadata: Metadata = {
  title: "Collections · Quiet Ash",
  description:
    "Curated atmospheres — evening, desk, rain, tea — each collection is a mood, not a catalog aisle.",
  alternates: { canonical: "/collections" },
};

export default function CollectionsIndexPage() {
  const collections = getAllEditorialCollectionsWithProducts();
  return (
    <PageShell>
      <CollectionGrid
        collections={collections}
        eyebrow={defaultCollectionsPageIntro.eyebrow}
        title={defaultCollectionsPageIntro.title}
        description={defaultCollectionsPageIntro.description}
      />
    </PageShell>
  );
}
