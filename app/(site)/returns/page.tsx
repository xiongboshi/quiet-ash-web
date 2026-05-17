import type { Metadata } from "next";
import { InfoPage } from "@/components/info/info-page";

export const metadata: Metadata = {
  title: "Returns",
  description: "Returns and exchanges for Quiet Ash objects.",
  alternates: { canonical: "/returns" },
};

export default function ReturnsPage() {
  return (
    <InfoPage
      eyebrow="Info"
      title="Returns"
      blocks={[
        {
          paragraphs: [
            "If something arrives damaged or not as described, please write to us within three days of delivery. We would rather hear early than guess.",
            "We can accept a return when the original packaging is still intact, the piece has not been used, and it shows no marks from handling or daily use.",
            "Return postage is kindly yours to arrange. When the parcel reaches us, we will look it over together and offer repair, replacement, or a refund — whichever fits the situation.",
          ],
        },
      ]}
    />
  );
}
