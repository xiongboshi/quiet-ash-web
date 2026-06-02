import type { Metadata } from "next";
import { ContactRequestForm } from "@/components/info/contact-request-form";
import { CustomerCarePage } from "@/components/info/customer-care-page";
import { contactPage } from "@/data/customer-care";

export const metadata: Metadata = {
  title: "Contact Us",
  description: contactPage.description,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <CustomerCarePage content={contactPage}>
      <ContactRequestForm />
    </CustomerCarePage>
  );
}
