import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import FocusedExpertiseSection from "./components/FocusedExpertiseSection";
import PFASSection from "./components/PFASSection";
import CleanEnergySection from "./components/CleanEnergySection";
import ProgramCoordinationSection from "./components/ProgramCoordinationSection";
import PublicAccountabilitySection from "./components/PublicAccountabilitySection";
import MarketVerticalsSection from "./components/MarketVerticalsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <FocusedExpertiseSection />
      <PFASSection />
      <CleanEnergySection />
      <ProgramCoordinationSection />
      <PublicAccountabilitySection />
      <MarketVerticalsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
