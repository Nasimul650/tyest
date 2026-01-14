import type { Metadata } from "next";
import FeatureProblemSection from "./components/FeatureProblemSection";
import FeaturedProjects from "./components/FeatureProjects";
import HeroSection from "./components/Hero";
import ProcessSection from "./components/ProcessSection";
import WhatWeDo from "./components/WhatWeDo";
import WhyChoose from "./components/WhyChoose";

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
    <div className="text-4xl text-center">
      <HeroSection />
      <FeaturedProjects />
      <FeatureProblemSection />
      <ProcessSection />
      <WhatWeDo />
      <WhyChoose />
    </div>
  );
}
