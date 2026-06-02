import type { Metadata } from "next";
import { HelpCenterHub } from "@/components/info/help-center-hub";
import { helpCenterHub } from "@/data/customer-care";

export const metadata: Metadata = {
  title: "Help Centre",
  description: helpCenterHub.description,
  alternates: { canonical: "/help" },
};

export default function HelpCentrePage() {
  return <HelpCenterHub content={helpCenterHub} />;
}
