"use client";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import AvatarBadge from "./ui/AvatarBadge";
import Button from "./ui/Button";
import LogoMarquee from "./ui/LogoMarquee";

const HeroSection: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const trustedRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for sequential animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Navbar animation
      tl.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.8,
      });

      // Badge animation
      tl.from(
        badgeRef.current,
        {
          scale: 0,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.3"
      );

      // Heading animation (split by lines)
      tl.from(
        headingRef.current?.querySelectorAll(".line") || [],
        {
          y: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
        },
        "-=0.4"
      );

      // Subheading
      tl.from(
        subheadingRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.3"
      );

      // Button
      tl.from(
        buttonRef.current,
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.5,
        },
        "-=0.2"
      );

      // Trusted text
      tl.from(
        trustedRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
        },
        "-=0.2"
      );

      // Company logos
      tl.from(
        logosRef.current?.querySelectorAll(".logo") || [],
        {
          y: 30,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
        },
        "-=0.3"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen bg-black text-white relative overflow-hidden"
    >
      {/* Hero Content */}
      <div className="relative pt-32 pb-20 px-6 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <AvatarBadge />

          {/* Main Heading */}
          <h1
            ref={headingRef}
            className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <div className="line overflow-hidden">
              <span className="block">Premium Websites for</span>
            </div>
            <div className="line overflow-hidden">
              <span className="block bg-gradient-to-r from-[#d4ff00] via-[#b8e600] to-[#d4ff00] bg-clip-text text-transparent">
                SaaS & Startups
              </span>
            </div>
          </h1>

          {/* Subheading */}
          <p
            ref={subheadingRef}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            Every business needs a website, and its never been easier to get
            one.
          </p>

          {/* CTA Button */}
          <div ref={buttonRef}>
            <Button size="lg" className="shadow-xl shadow-[#d4ff00]/20">
              Book a 15-min call
            </Button>
          </div>

          {/* Trusted By */}
          <div className="mt-10">
            <p ref={trustedRef} className="text-sm text-gray-500">
              Trusted by innovative companies worldwide
            </p>

            {/* Company Logos */}
            <LogoMarquee />
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#d4ff00]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
