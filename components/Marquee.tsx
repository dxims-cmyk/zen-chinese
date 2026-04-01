"use client";

export default function Marquee() {
  const text = "Cooked Fresh \u00b7 Right In Front Of You \u00b7 Open Kitchen \u00b7 Rice With Every Main \u00b7 ";
  const repeated = text.repeat(8);

  return (
    <section className="bg-[#F9F6F2] py-5 overflow-hidden select-none" aria-hidden="true">
      <div className="marquee-track flex whitespace-nowrap">
        <span className="font-heading text-sm md:text-base tracking-[0.2em] uppercase text-[#1a1a1a]/20 font-medium shrink-0 animate-marquee">
          {repeated}
        </span>
        <span className="font-heading text-sm md:text-base tracking-[0.2em] uppercase text-[#1a1a1a]/20 font-medium shrink-0 animate-marquee">
          {repeated}
        </span>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .marquee-track {
          width: max-content;
        }
      `}</style>
    </section>
  );
}
