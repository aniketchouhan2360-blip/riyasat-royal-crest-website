import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { VideoSection } from "@/components/sections/VideoSection";
import { Amenities } from "@/components/sections/Amenities";
import { UnitTypes } from "@/components/sections/UnitTypes";
import { Gallery } from "@/components/sections/Gallery";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { InquiryPopup } from "@/components/ui/InquiryPopup";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <VideoSection />
        <Amenities />
        <UnitTypes />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppCTA />
      <InquiryPopup />
    </>
  );
}
