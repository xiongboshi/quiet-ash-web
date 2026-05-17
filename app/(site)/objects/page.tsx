import type { Metadata } from "next";
import { ObjectsArchiveBlock } from "@/components/catalog/objects-archive-block";
import { ObjectsTheEssence } from "@/components/sections/objects-the-essence";
import { getAllProducts } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Objects",
  description:
    "Incense ritual, agarwood, eastern slow living, scholar objects — Quiet Ash objects for slower evenings.",
  alternates: { canonical: "/objects" },
};

export default function ObjectsPage() {
  const products = getAllProducts();

  return (
    <>
      <ObjectsTheEssence />
      <ObjectsArchiveBlock products={products} />
    </>
  );
}
