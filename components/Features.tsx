import { ChefHat, Flame, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/config";

const icons = [ChefHat, Flame, MapPin];

export default function Features() {
  return (
    <section className="py-24 px-4 bg-[#F9F6F2]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#C7A951] text-sm font-heading font-medium tracking-widest uppercase mb-3">
            Why Zen
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1a1a1a]">
            What Makes Us Different
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.features.map((feature, i) => {
            const Icon = icons[i];
            return (
              <div key={feature.title} className="text-center group">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#1a1a1a] mb-6 group-hover:bg-[#D63031] transition-colors">
                  <Icon className="w-6 h-6 text-[#F9F6F2]" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#1a1a1a] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#1a1a1a]/60 text-sm leading-relaxed font-body">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
