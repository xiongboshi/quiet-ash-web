"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
};

export function PageTransition({ children }: Props) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const hasEntered = useRef(false);

  useEffect(() => {
    hasEntered.current = true;
  }, [pathname]);

  const fadeOnEnter = !reduceMotion && hasEntered.current;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="min-h-dvh w-full min-w-0 max-w-full overflow-x-clip"
        initial={fadeOnEnter ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        exit={reduceMotion ? undefined : { opacity: 0 }}
        transition={{
          /* 0.42s = --motion-base (keep in sync in globals.css) */
          duration: reduceMotion ? 0 : 0.42,
          ease: [0.22, 1, 0.36, 1] as const,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
