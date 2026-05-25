import type { Metadata } from "next";
import { AboutPage } from "@/components/about/about-page";

export const metadata: Metadata = {
  title: "About",
  description:
    "Better incense for everyday spaces — clean, modern scents with less smoke from Quiet Ash.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutRoute() {
  return <AboutPage />;
}
