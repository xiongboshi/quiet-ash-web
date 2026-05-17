import type { Metadata } from "next";
import { InfoPage } from "@/components/info/info-page";

export const metadata: Metadata = {
  title: "Delivery",
  description: "How Quiet Ash ships objects — slow, careful, and tracked when needed.",
  alternates: { canonical: "/delivery" },
};

export default function DeliveryPage() {
  return (
    <InfoPage
      eyebrow="Info"
      title="Delivery"
      blocks={[
        {
          paragraphs: [
            "Objects leave in plain packaging — no loud branding on the outside of the box.",
            "Domestic orders are packed within a few working days. You will receive tracking when the carrier accepts the parcel.",
          ],
        },
        {
          heading: "Timing",
          paragraphs: [
            "Standard delivery is unhurried by design. If you need something by a date, write to us before ordering and we will say honestly what is possible.",
          ],
        },
      ]}
    />
  );
}
