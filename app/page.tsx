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

export default function Home() {
  return (
    <main>
      <ScrollReveal />
      <Header />
      <Hero />
      <Story />
      <Features />
      <MenuHighlights />
      <Reviews />
      <OrderSection />
      <FindUs />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
