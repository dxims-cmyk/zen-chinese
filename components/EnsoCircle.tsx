"use client";
import { useEffect, useRef } from "react";

export default function EnsoCircle({ className = "", color = "#7BC142" }: { className?: string; color?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !svgRef.current) return;
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        const path = svgRef.current?.querySelector("path");
        if (!path) return;
        const len = path.getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: { trigger: svgRef.current, start: "top 80%", once: true },
        });
      });
    });
  }, []);

  return (
    <div className={`flex justify-center py-6 ${className}`}>
      <svg ref={svgRef} viewBox="0 0 120 120" className="w-20 h-20" fill="none">
        <path d="M95 60 C95 80 80 100 55 100 C30 100 15 80 15 60 C15 35 35 20 60 20 C80 20 95 35 95 55" stroke={color} strokeWidth="4" strokeLinecap="round" opacity="0.5" />
      </svg>
    </div>
  );
}
