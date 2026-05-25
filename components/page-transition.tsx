"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function PageTransition({ children, className }: Props) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [motionReady, setMotionReady] = useState(false);
  const hasEntered = useRef(false);

  useEffect(() => {
    setMotionReady(true);
  }, []);

  useEffect(() => {
    hasEntered.current = true;
  }, [pathname]);

  const shellClass = `min-h-dvh w-full min-w-0 max-w-full overflow-x-clip${
    className ? ` ${className}` : ""
  }`;

  if (!motionReady) {
    return <div className={shellClass}>{children}</div>;
  }

  const reduceMotion = prefersReducedMotion ?? false;
  const fadeOnEnter = !reduceMotion && hasEntered.current;

  return (
    <motion.div
      key={pathname}
      className={shellClass}
      initial={fadeOnEnter ? { opacity: 0 } : false}
      animate={{ opacity: 1 }}
      transition={{
        /* 0.42s = --motion-base (keep in sync in globals.css) */
        duration: reduceMotion ? 0 : 0.42,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
    >
      {children}
    </motion.div>
  );
}
