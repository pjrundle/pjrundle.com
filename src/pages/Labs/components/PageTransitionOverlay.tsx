import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLocation } from "wouter";

import { GLYPH_PATH } from "./PJRGlyphAnimated.tsx";

const EASE = [0.76, 0, 0.24, 1] as const;
const DURATION = 0.55;

export const PageTransitionOverlay = () => {
  const [location, navigate] = useLocation();
  const controls = useAnimation();

  const isMountedRef = useRef(false);
  const isAnimatingRef = useRef(false);
  // Tracks paths navigated by the click handler so the popstate useEffect skips them
  const handledPathRef = useRef<string | null>(null);

  const animateIn = () =>
    controls.start({ y: "0%", transition: { duration: DURATION, ease: EASE } });

  const animateOut = async () => {
    await new Promise<void>((r) => setTimeout(r, 80));
    await controls.start({
      y: "-100%",
      transition: { duration: DURATION, ease: EASE },
    });
    controls.set({ y: "100%" });
  };

  // Handle browser back / forward buttons
  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }
    if (handledPathRef.current === location) {
      handledPathRef.current = null;
      return;
    }
    const run = async () => {
      isAnimatingRef.current = true;
      await animateIn();
      await animateOut();
      isAnimatingRef.current = false;
    };
    run();
  }, [location]);

  // Intercept link clicks before wouter handles them (capture phase)
  useEffect(() => {
    const handleClick = async (e: MouseEvent) => {
      const anchor = (e.target as Element).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href?.startsWith("/")) return;
      if (anchor.getAttribute("target") === "_blank") return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (href === window.location.pathname) return;
      if (isAnimatingRef.current) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      e.preventDefault();
      e.stopPropagation();
      isAnimatingRef.current = true;

      await animateIn();

      handledPathRef.current = href;
      navigate(href);

      await animateOut();
      isAnimatingRef.current = false;
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [navigate]);

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={controls}
      className="background-color:color-gray-25 color:color-gray-900"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width={100}
        height={157}
        viewBox="0 0 100 157"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        <path
          d={GLYPH_PATH}
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
        />
      </svg>
    </motion.div>
  );
};
