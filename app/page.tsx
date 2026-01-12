import type { Metadata } from "next";
import HeroSection from "./components/Hero";
import WhyChoose from "./components/WhyChoose";

export const generateMetadata = (): Metadata => {
  return {
    title: "Creative Web Design & Animation",
    description:
      "We create bold, animated, and SEO-optimized websites using modern technologies like Next.js and GSAP.",
    openGraph: {
      title: "Creative Web Design & Animation",
      description:
        "High-performance digital experiences built with Next.js and GSAP."
    },
  };
};


export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyChoose/>
    </div>
  );
}
