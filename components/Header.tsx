"use client";

import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-sm border-b border-[#F9F6F2]/5">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="font-heading text-2xl font-bold text-[#F9F6F2] tracking-tight">
          ZEN
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {["Menu", "Order", "Find Us"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-[#F9F6F2]/60 hover:text-[#F9F6F2] text-sm font-body transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 bg-[#D63031] hover:bg-[#E84142] text-[#F9F6F2] font-body font-medium px-5 py-2 text-sm transition-colors"
          >
            <Phone className="w-4 h-4" />
            Order Now
          </a>
        </nav>

        <button
          className="md:hidden text-[#F9F6F2]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#1a1a1a] border-t border-[#F9F6F2]/5 px-4 py-6 space-y-4">
          {["Menu", "Order", "Find Us"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="block text-[#F9F6F2]/70 hover:text-[#F9F6F2] font-body text-lg"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="block text-center bg-[#D63031] hover:bg-[#E84142] text-[#F9F6F2] font-body font-semibold px-6 py-3 mt-4 transition-colors"
          >
            Call to Order
          </a>
        </div>
      )}
    </header>
  );
}
