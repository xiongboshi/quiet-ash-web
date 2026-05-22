import type { Metadata } from "next";
import { MoodsIndexPage } from "@/components/moods/moods-index-page";
import { MOODS_INDEX } from "@/lib/site-paths";

export const metadata: Metadata = {
  title: "Mood",
  description:
    "Explore calming incense and emotional home scents for sleep, focus, rainy evenings, and quiet apartment rituals.",
  alternates: { canonical: MOODS_INDEX },
};

export default function MoodsRoutePage() {
  return <MoodsIndexPage />;
}
