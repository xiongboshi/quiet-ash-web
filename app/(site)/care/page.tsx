import type { Metadata } from "next";
import { InfoPage } from "@/components/info/info-page";

export const metadata: Metadata = {
  title: "Care",
  description: "How to live with ceramic, linen, wood, and incense tools from Quiet Ash.",
  alternates: { canonical: "/care" },
};

export default function CarePage() {
  return (
    <InfoPage
      eyebrow="Info"
      title="Care"
      blocks={[
        {
          paragraphs: [
            "These objects are meant for daily rooms, not display cases. A little attention keeps their surfaces honest.",
          ],
        },
        {
          heading: "Ceramic & stone",
          paragraphs: [
            "Rinse with warm water; avoid sudden heat. Dry before the next tea or incense session.",
          ],
        },
        {
          heading: "Wood & linen",
          paragraphs: [
            "Keep wood trays out of standing water. Linen may be washed gently and aired — never rushed in a hot dryer.",
          ],
        },
        {
          heading: "Incense",
          paragraphs: [
            "Burn on a stable, heat-safe surface. Ventilate the room; let ash cool before clearing.",
          ],
        },
      ]}
    />
  );
}
