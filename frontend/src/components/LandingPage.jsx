import React from "react";
import { HeroSection } from "./landing/HeroSection";
import { FeaturesSection } from "./landing/FeaturesSection";
import { HowItWorksSection } from "./landing/HowItWorksSection";
import { BenefitsSection } from "./landing/BenefitsSection";
import { TrustSection } from "./landing/TrustSection";
import { FinalCtaSection } from "./landing/FinalCtaSection";

function LandingPage() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TrustSection />
      <FinalCtaSection />
    </div>
  );
}

export default LandingPage;
