import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Quiet Ash help centre — orders, shipping, returns, and product care.",
  alternates: { canonical: "/help" },
};

/** Legacy `/faq` → unified help centre. */
export default function FaqPage() {
  redirect("/help");
}
