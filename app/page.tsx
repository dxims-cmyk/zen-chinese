import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Features from "@/components/Features";
import Reviews from "@/components/Reviews";
import MenuHighlights from "@/components/MenuHighlights";
import OrderSection from "@/components/OrderSection";
import FindUs from "@/components/FindUs";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import EnsoCircle from "@/components/EnsoCircle";
import Gallery from "@/components/Gallery";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <main>
      <ScrollReveal />
      <Header />
      <Hero />
      <Marquee />
      <Story />
      <EnsoCircle className="bg-[#F9F6F2]" />
      <Features />
      <Gallery />
      <MenuHighlights />
      <EnsoCircle className="bg-[#F9F6F2]" />
      <Reviews />
      <OrderSection />
      <FindUs />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
