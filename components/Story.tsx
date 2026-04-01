import { siteConfig } from "@/lib/config";

export default function Story() {
  return (
    <section className="py-16 md:py-20 px-4 bg-[#1a1a1a] relative overflow-hidden grain">
      {/* Background character */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[16rem] md:text-[22rem] text-[#F9F6F2]/[0.02] font-heading font-bold leading-none">鮮</span>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="reveal">
          <p className="text-[#C7A951] text-sm font-heading font-medium tracking-widest uppercase mb-3">The Kitchen</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#F9F6F2] mb-6">
            You can see everything.
          </h2>
          <p className="text-[#F9F6F2]/50 text-base leading-relaxed max-w-2xl mx-auto mb-4">
            Most takeaways hide behind a wall. Zen does the opposite. The kitchen is right there. Open. Every wok fired up in front of you, every dish cooked from scratch the moment you order it. Nothing pre-made, nothing reheated, nothing sitting under a lamp.
          </p>
          <p className="text-[#F9F6F2]/35 text-base leading-relaxed max-w-xl mx-auto">
            618 Alexandra Parade. Dennistoun. The locals know. The portions are honest, the rice comes with your meal, and the salt and chilli chicken has a queue for a reason.
          </p>
        </div>

        <div className="reveal mt-10 flex items-center justify-center gap-8">
          <div><p className="font-heading text-3xl font-bold text-[#D63031]">{siteConfig.googleRating}</p><p className="text-[#F9F6F2]/30 text-xs tracking-wide uppercase mt-1">Google</p></div>
          <div className="w-px h-10 bg-[#F9F6F2]/10" />
          <div><p className="font-heading text-3xl font-bold text-[#D63031]">{siteConfig.reviewCount}</p><p className="text-[#F9F6F2]/30 text-xs tracking-wide uppercase mt-1">Reviews</p></div>
          <div className="w-px h-10 bg-[#F9F6F2]/10" />
          <div><p className="font-heading text-3xl font-bold text-[#D63031]">Open</p><p className="text-[#F9F6F2]/30 text-xs tracking-wide uppercase mt-1">Kitchen</p></div>
        </div>
      </div>
    </section>
  );
}
