import type { Metadata } from "next";
import FeatureProblemSection from "./components/FeatureProblemSection";
import FeaturedProjects from "./components/FeatureProjects";
import HeroSection from "./components/Hero";
import ProcessStepSection from "./components/ProcessStepSection";
import WhyChoose from "./components/WhyChoose";
import WhatWeDo from "./components/WhatWeDo";

export const generateMetadata = (): Metadata => {
  return {
    title: "Creative Web Design & Animation",
    description:
      "We create bold, animated, and SEO-optimized websites using modern technologies like Next.js and GSAP.",
    openGraph: {
      title: "Creative Web Design & Animation",
      description:
        "High-performance digital experiences built with Next.js and GSAP.",
    },
  };
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProjects />
      <FeatureProblemSection />
      <ProcessStepSection />
      <WhatWeDo />
      <WhyChoose/>
    </div>
  );
}