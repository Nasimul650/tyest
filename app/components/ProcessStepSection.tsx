"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import StepCard from "./ui/StepCard";
import { homeData } from "../data/data";


gsap.registerPlugin(ScrollTrigger);

export default function ProcessStepSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const footerRef = useRef(null);

  const steps = homeData.data.processList;

  const step = [
    {
      number: "01",
      title: "Strategize & Plan",
      description:
        "We develop a strategic roadmap tailored to your goals, including planning, SEO audits, design wireframes, and tech decisions.",
      position: "left",
    },
    {
      number: "02",
      title: "Discover & Define",
      description:
        "We understand your brand, business goals, and audience to clearly define objectives and challenges.",
      position: "right",
    },
    {
      number: "03",
      title: "Design Experience",
      description:
        "Our UI/UX designers craft intuitive, visually compelling interfaces aligned with your brand.",
      position: "left",
    },
    {
      number: "04",
      title: "Develop Solutions",
      description:
        "We build scalable, secure, and high-performance solutions using modern frameworks.",
      position: "right",
    },
    {
      number: "05",
      title: "Optimize & Launch",
      description:
        "We optimize for SEO, speed, and responsiveness before delivering a smooth launch.",
      position: "left",
    },
    {
      number: "06",
      title: "Promote & Grow",
      description:
        "Post-launch growth through analytics, optimization, and targeted marketing.",
      position: "right",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(footerRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        },
      });

      gsap.utils.toArray(".step-card").forEach((card, index) => {
        gsap.from(card, {
          x: index % 2 === 0 ? -120 : 120,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-24 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* HEADER */}
        <div ref={headerRef} className="text-center mb-24">
          <span className="inline-block px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-full text-gray-400 text-sm mb-6">
            Process
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Process <br />
            Step <span className="text-[#d4ff00]">by</span> Step
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A proven workflow designed to deliver premium digital experiences
            that drive real growth.
          </p>
        </div>

        {/* STEPS */}
        <div className="relative space-y-0">
          <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dotted border-zinc-700 hidden md:block" />

          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>

        {/* FOOTER */}
        <div ref={footerRef} className="text-center mt-32">
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Your <span className="text-[#d4ff00]">All-in-One</span>
            <br />
            <span className="text-[#d4ff00]">Software Development Partner</span>
          </h3>
        </div>
      </div>
    </section>
  );
}
