import { Phone, Clock, Star } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100vh] flex items-center justify-center bg-[#1a1a1a] px-4 py-20 overflow-hidden grain">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#F9F6F2 1px, transparent 1px), linear-gradient(90deg, #F9F6F2 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="relative text-center max-w-3xl mx-auto">
        <div className="mb-6">
          <div className="w-12 h-[2px] bg-[#D63031] mx-auto mb-10" />
          <h1 className="font-heading text-7xl sm:text-8xl md:text-9xl font-bold text-[#F9F6F2] tracking-tight leading-none">
            {siteConfig.name}
          </h1>
          <div className="w-12 h-[2px] bg-[#D63031] mx-auto mt-6" />
        </div>

        <p className="text-[#D63031] text-lg sm:text-xl font-heading font-medium tracking-wide mb-3">
          {siteConfig.tagline}
        </p>
        <p className="text-[#F9F6F2]/50 text-sm font-body mb-8">
          Chinese Takeaway &middot; {siteConfig.address.street}, {siteConfig.address.area}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-3 bg-[#D63031] hover:bg-[#E84142] text-[#F9F6F2] font-body font-semibold px-8 py-4 text-lg transition-colors">
            <Phone className="w-5 h-5" />
            Order Now
          </a>
          <div className="flex items-center gap-2 text-[#F9F6F2]/40 text-sm font-body">
            <Clock className="w-4 h-4" />
            <span>Open {siteConfig.hours}</span>
          </div>
        </div>

        {/* Trust badge */}
        <div className="inline-flex items-center gap-3 bg-white/[0.06] backdrop-blur-sm border border-[#F9F6F2]/10 rounded-full px-5 py-2.5">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < Math.floor(siteConfig.googleRating) ? "fill-[#C7A951] text-[#C7A951]" : "fill-[#C7A951]/30 text-[#C7A951]/30"}`} />
            ))}
          </div>
          <span className="text-[#F9F6F2]/50 text-sm font-body">{siteConfig.googleRating} on Google &middot; {siteConfig.reviewCount} reviews</span>
        </div>
      </div>
    </section>
  );
}
