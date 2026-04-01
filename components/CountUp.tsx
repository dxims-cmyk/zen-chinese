"use client";
import { useEffect, useRef, useState } from "react";

export default function CountUp({ end, suffix = "", duration = 1.5, className = "" }: {
  end: number; suffix?: string; duration?: number; className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const startTime = Date.now();
          const animate = () => {
            const elapsed = (Date.now() - startTime) / (duration * 1000);
            if (elapsed >= 1) { setCount(end); return; }
            const eased = 1 - Math.pow(1 - elapsed, 3);
            setCount(Math.round(end * eased * 10) / 10);
            requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, started]);

  return <span ref={ref} className={className}>{count}{suffix}</span>;
}
