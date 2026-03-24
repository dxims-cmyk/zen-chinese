import { Phone, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function OrderSection() {
  return (
    <section id="order" className="py-24 px-4 bg-[#F9F6F2]">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-[#C7A951] text-sm font-heading font-medium tracking-widest uppercase mb-3">
          Hungry?
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4">
          Order Now
        </h2>
        <p className="text-[#1a1a1a]/60 text-base mb-10 font-body">
          Call us direct for the fastest pickup. Or use your favourite delivery app.
        </p>

        <div className="flex flex-col gap-4 items-center">
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-3 bg-[#D63031] hover:bg-[#E84142] text-[#F9F6F2] font-body font-semibold px-10 py-5 text-xl transition-colors w-full max-w-sm justify-center"
          >
            <Phone className="w-6 h-6" />
            {siteConfig.phoneDisplay}
          </a>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
            <a
              href="#"
              className="flex-1 inline-flex items-center gap-2 justify-center border-2 border-[#1a1a1a]/15 hover:border-[#1a1a1a]/40 text-[#1a1a1a] font-body font-medium px-6 py-3 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Uber Eats
            </a>
            <a
              href="#"
              className="flex-1 inline-flex items-center gap-2 justify-center border-2 border-[#1a1a1a]/15 hover:border-[#1a1a1a]/40 text-[#1a1a1a] font-body font-medium px-6 py-3 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Just Eat
            </a>
          </div>

          <p className="text-[#1a1a1a]/40 text-sm mt-2 font-body">
            Order direct and skip the delivery fees
          </p>
        </div>
      </div>
    </section>
  );
}
