import type { Metadata } from "next";
import { CustomerCarePage } from "@/components/info/customer-care-page";
import { aboutProductsPage } from "@/data/customer-care";

export const metadata: Metadata = {
  title: "About the Products",
  description: aboutProductsPage.description,
  alternates: { canonical: "/help/products" },
};

export default function AboutProductsHelpPage() {
  return <CustomerCarePage content={aboutProductsPage} />;
}
