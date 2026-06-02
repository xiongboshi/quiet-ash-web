import type { Metadata } from "next";
import { CustomerCarePage } from "@/components/info/customer-care-page";
import { generalEnquiriesPage } from "@/data/customer-care";

export const metadata: Metadata = {
  title: "General Enquiries",
  description: generalEnquiriesPage.description,
  alternates: { canonical: "/help/general" },
};

export default function GeneralEnquiriesPage() {
  return <CustomerCarePage content={generalEnquiriesPage} />;
}
