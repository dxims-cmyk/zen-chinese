import { Star } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function Reviews() {
  return (
    <section className="py-24 px-4 bg-[#F9F6F2]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <p className="text-[#C7A951] text-sm font-heading font-medium tracking-widest uppercase mb-3">
            Reviews
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1a1a1a]">
            What Dennistoun Says
          </h2>
        </div>

        <div className="flex items-center justify-center gap-2 mb-14">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${i < Math.floor(siteConfig.googleRating) ? "fill-[#C7A951] text-[#C7A951]" : "fill-[#C7A951]/30 text-[#C7A951]/30"}`}
              />
            ))}
          </div>
          <span className="text-[#1a1a1a]/60 text-sm font-body">
            {siteConfig.googleRating} from {siteConfig.reviewCount} Google reviews
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.reviews.map((review) => (
            <div
              key={review.author}
              className="bg-white p-6 border border-[#1a1a1a]/5 hover:border-[#D63031]/20 transition-colors"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C7A951] text-[#C7A951]" />
                ))}
              </div>
              <p className="text-[#1a1a1a]/80 text-sm leading-relaxed font-body mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="text-[#1a1a1a]/40 text-xs font-body font-medium">
                {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
