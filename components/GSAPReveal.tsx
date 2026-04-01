"use client";
import { useEffect, useRef } from "react";

export default function GSAPReveal({ children, className = "", stagger = 0.1 }: {
  children: React.ReactNode; className?: string; stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        const els = ref.current?.children;
        if (!els) return;
        gsap.from(Array.from(els), {
          y: 30, opacity: 0, duration: 0.8, stagger, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        });
      });
    });
  }, [stagger]);

  return <div ref={ref} className={className}>{children}</div>;
}
