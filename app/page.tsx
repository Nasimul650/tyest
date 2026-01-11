import type { Metadata } from "next";

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
    <div className="text-4xl text-center">Hello World</div>
  );
}
