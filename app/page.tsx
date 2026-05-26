import type { Metadata } from "next";
import { QaHomePage } from "@/components/qa/qa-home-page";
import "@/styles/qa-home-1920.css";
import "@/styles/home-redesign.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "Quiet Ash — Natural Incense",
  description:
    "Scents that stay with you. Plant-based mood incense for slow mornings, quiet nights, and everything in between.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Quiet Ash",
    description:
      "Modern mood incense — emotional rituals for soft living.",
    url: siteUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <QaHomePage />
    </>
  );
}
