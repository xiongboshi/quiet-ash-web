import type { Metadata } from "next";
import { CustomerCarePage } from "@/components/info/customer-care-page";
import { TrackOrderLookup } from "@/components/info/track-order-lookup";
import { trackOrderPage } from "@/data/customer-care";

export const metadata: Metadata = {
  title: "Track My Order",
  description: trackOrderPage.description,
  alternates: { canonical: "/track-order" },
};

export default function TrackOrderPage() {
  return (
    <CustomerCarePage content={trackOrderPage} afterIntro={<TrackOrderLookup />} />
  );
}
