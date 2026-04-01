import { siteConfig } from "@/lib/config";

export default function MenuHighlights() {
  return (
    <section id="menu" className="py-16 md:py-20 px-4 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#C7A951] text-sm font-heading font-medium tracking-widest uppercase mb-3">
            The Menu
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#F9F6F2]">
            Popular Dishes
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#F9F6F2]/10">
          {siteConfig.menuHighlights.map((item) => (
            <div
              key={item.name}
              className="bg-[#1a1a1a] p-6 hover:bg-[#222] transition-colors group"
            >
              <div className="w-8 h-[2px] bg-[#D63031] mb-4 group-hover:w-12 transition-all" />
              <h3 className="font-heading text-base font-bold text-[#F9F6F2] mb-3">
                {item.name}
              </h3>
              <p className="text-[#F9F6F2]/50 text-sm leading-relaxed font-body">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
