"use client";

import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
  className?: string;
};

/** Lightweight route shell — no framer-motion (saves ~30KB+ JS on every page). */
export function PageTransition({ children, className }: Props) {
  const pathname = usePathname();
  const shellClass = `min-h-dvh w-full min-w-0 max-w-full overflow-x-clip${
    className ? ` ${className}` : ""
  }`;

  return (
    <div key={pathname} className={shellClass}>
      {children}
    </div>
  );
}
