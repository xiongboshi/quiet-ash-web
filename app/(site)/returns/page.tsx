import type { Metadata } from "next";
import { CustomerCarePage } from "@/components/info/customer-care-page";
import { exchangeReturnsPage } from "@/data/customer-care";

export const metadata: Metadata = {
  title: "Exchange & Returns",
  description: exchangeReturnsPage.description,
  alternates: { canonical: "/returns" },
};

export default function ReturnsPage() {
  return <CustomerCarePage content={exchangeReturnsPage} />;
}
