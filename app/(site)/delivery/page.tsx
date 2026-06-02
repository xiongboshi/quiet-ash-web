import type { Metadata } from "next";
import { CustomerCarePage } from "@/components/info/customer-care-page";
import { shippingDeliveryPage } from "@/data/customer-care";

export const metadata: Metadata = {
  title: "Shipping & Delivery",
  description: shippingDeliveryPage.description,
  alternates: { canonical: "/delivery" },
};

export default function DeliveryPage() {
  return <CustomerCarePage content={shippingDeliveryPage} />;
}
