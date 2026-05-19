import type { Metadata } from "next";
import { MoodHome } from "@/components/mood/mood-home";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "Quiet Ash — Mood Incense for soft living",
  description:
    "Modern emotional incense — tiny rituals for calm, focus, sleep, and rainy days. Soft living aesthetics for modern young people.",
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
      <MoodHome />
    </>
  );
}
