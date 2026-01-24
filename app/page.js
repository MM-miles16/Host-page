import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import SupportRiskSection from "./components/SupportRiskSection";
import StepsSection from "./components/StepsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <SupportRiskSection />
      <StepsSection />
      <Footer />
    </>
  );
}
