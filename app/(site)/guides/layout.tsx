/** Guide pages only — do not import journal-index.css (unscoped hero rules bleed here). */
import "@/styles/evergreen-guide-page.css";

export default function GuidesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
