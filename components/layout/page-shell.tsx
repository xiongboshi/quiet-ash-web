import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/** Inner pages (about, etc.): same vertical rhythm as editorial sections */
export function PageShell({ children, className = "" }: Props) {
  return (
    <main className={`qa-page-shell flex-1 ${className}`.trim()}>
      {children}
    </main>
  );
}
