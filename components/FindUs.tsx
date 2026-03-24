import { MapPin, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function FindUs() {
  return (
    <section id="find-us" className="py-24 px-4 bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#C7A951] text-sm font-heading font-medium tracking-widest uppercase mb-3">
            Location
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#F9F6F2]">
            Find Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-[#D63031] mt-1 flex-shrink-0" />
              <div>
                <p className="text-[#F9F6F2] font-body font-medium">
                  {siteConfig.address.street}
                </p>
                <p className="text-[#F9F6F2]/50 font-body">
                  {siteConfig.address.area}, {siteConfig.address.city} {siteConfig.address.postcode}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-[#D63031] mt-1 flex-shrink-0" />
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="text-[#F9F6F2] hover:text-[#D63031] transition-colors font-body"
              >
                {siteConfig.phoneDisplay}
              </a>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-[#D63031] mt-1 flex-shrink-0" />
              <div>
                <p className="text-[#F9F6F2] font-body font-medium">Open 7 Days</p>
                <p className="text-[#F9F6F2]/50 font-body">{siteConfig.hours}</p>
              </div>
            </div>
          </div>

          <div className="h-64 md:h-80 bg-[#222]">
            <iframe
              src={siteConfig.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${siteConfig.fullName} location on Google Maps`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
