import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-[#111] py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-heading text-xl font-bold text-[#F9F6F2]">
              {siteConfig.name}
            </p>
            <p className="text-[#F9F6F2]/30 text-sm font-body mt-1">
              {siteConfig.address.street}, {siteConfig.address.area}, {siteConfig.address.city} {siteConfig.address.postcode}
            </p>
          </div>

          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="text-[#F9F6F2]/50 hover:text-[#D63031] transition-colors"
            aria-label="Phone"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>

        <div className="border-t border-[#F9F6F2]/5 mt-8 pt-6 text-center">
          <a
            href="https://www.mediampm.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F9F6F2]/20 text-xs hover:text-[#F9F6F2]/40 transition-colors font-body"
          >
            Built by AM:PM Media
          </a>
        </div>
      </div>
    </footer>
  );
}
