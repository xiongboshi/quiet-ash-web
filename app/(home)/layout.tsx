import "@/styles/qa-home-1920.css";
import "@/styles/home-redesign.css";
/* After home-redesign so About-style mood cards keep fill images + grid layout */
import "@/styles/scent-family-strip.css";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
