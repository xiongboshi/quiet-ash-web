import type { Metadata } from "next";
import { InfoPage } from "@/components/info/info-page";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Questions about Quiet Ash — orders, incense, and the archive.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <InfoPage
      eyebrow="Info"
      title="FAQ"
      blocks={[
        {
          heading: "Orders",
          paragraphs: [
            "You will receive confirmation by email. Tracking follows when the parcel is handed to the carrier.",
          ],
        },
        {
          heading: "Incense & materials",
          paragraphs: [
            "Copy on the site describes ritual and culture; it is not medical advice. Burn incense only on heat-safe surfaces and with ventilation.",
          ],
        },
        {
          heading: "Essays & archive",
          paragraphs: [
            "Essays are free to read. Collections may grow slowly — the room is curated, not a daily feed.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "For anything not answered here, use the email link in the footer. We read messages in order, without an auto-reply theatre.",
          ],
        },
      ]}
    />
  );
}
