import type { Metadata } from "next";
import { RitualsArchiveBlock } from "@/components/rituals/rituals-archive-block";
import { EssayGrid } from "@/components/sections/EssayGrid";
import { RitualsTheEssence } from "@/components/sections/rituals-the-essence";
import { PageShell } from "@/components/layout/page-shell";
import { getAllRituals } from "@/lib/rituals";
import { MOODS_INDEX } from "@/lib/site-paths";

export const metadata: Metadata = {
  title: "Moods · Quiet Ash",
  description:
    "Small ceremonies — incense, tea, dusk — editorial guides that open onto objects without selling noise.",
  alternates: { canonical: MOODS_INDEX },
};

export default function MoodsIndexPage() {
  const rituals = getAllRituals();

  const rows = rituals.map((r) => ({
    slug: r.slug,
    title: r.title,
    excerpt: r.excerpt,
    mood: r.mood,
    coverImage: r.coverImage ?? "/images/hero-objects.svg",
  }));

  return (
    <>
      <RitualsTheEssence />
      <PageShell className="!pt-0">
        <RitualsArchiveBlock rituals={rows} />
      </PageShell>
      <EssayGrid limit={3} layout="journal" />
    </>
  );
}
