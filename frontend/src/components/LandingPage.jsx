import React from "react";
import { Navbar } from "./landing/Navbar";
import { HeroSection } from "./landing/HeroSection";
import { FeaturesSection } from "./landing/FeaturesSection";
import { HowItWorksSection } from "./landing/HowItWorksSection";
import { BenefitsSection } from "./landing/BenefitsSection";
import { TrustSection } from "./landing/TrustSection";
import { FinalCtaSection } from "./landing/FinalCtaSection";
import { Footer } from "./landing/Footer";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TrustSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
