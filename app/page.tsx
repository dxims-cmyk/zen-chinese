import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Reviews from "@/components/Reviews";
import MenuHighlights from "@/components/MenuHighlights";
import OrderSection from "@/components/OrderSection";
import FindUs from "@/components/FindUs";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Reviews />
      <MenuHighlights />
      <OrderSection />
      <FindUs />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
