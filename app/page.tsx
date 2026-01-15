import type { Metadata } from "next";
import FeatureProblemSection from "./components/FeatureProblemSection";
import FeaturedProjects from "./components/FeatureProjects";
import HeroSection from "./components/Hero";
import ProcessSection from "./components/ProcessSection";
import StackSection from "./components/StackSection";
import Testimonials from "./components/Testimonials";
import WhatWeDo from "./components/WhatWeDo";
import WhyChoose from "./components/WhyChoose";

export const generateMetadata = (): Metadata => {
  return {
    title: "Algorize Agency - Premium Websites for SaaS & Startups",
    description:
      "Every business needs a website, and its never been easier to get one.",
    openGraph: {
      title: "Algorize Agency - Premium Websites for SaaS & Startups",
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
      {/* <StackSection /> */}
      {/* <Testimonials /> */}
    </div>
  );
}
