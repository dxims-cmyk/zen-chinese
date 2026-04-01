"use client";
import Image from "next/image";
import GSAPReveal from "@/components/GSAPReveal";

const PHOTOS = [
  { src: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80", alt: "Wok-fried noodles with vegetables and steam" },
  { src: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80", alt: "Crispy salt and chilli chicken with peppers" },
  { src: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80", alt: "Fresh Chinese dumplings on a steamer" },
  { src: "https://images.unsplash.com/photo-1552611052-33e04de1b100?w=600&q=80", alt: "Crispy aromatic duck with pancakes" },
];

export default function Gallery() {
  return (
    <section className="py-10 px-4 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-[#7BC142] text-sm font-heading font-medium tracking-widest uppercase mb-2">From the Wok</p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#F9F6F2]">Cooked fresh. Every time.</h2>
        </div>

        <GSAPReveal className="grid grid-cols-2 md:grid-cols-4 gap-3" stagger={0.12}>
          {PHOTOS.map((photo, i) => (
            <div key={i} className="relative aspect-square rounded-xl overflow-hidden group">
              <Image src={photo.src} alt={photo.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </GSAPReveal>

        <p className="text-center text-[#F9F6F2]/20 text-xs mt-4">Real food. Open kitchen. No shortcuts.</p>
      </div>
    </section>
  );
}
