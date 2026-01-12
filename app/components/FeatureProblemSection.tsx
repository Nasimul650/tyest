"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Button from "./ui/Button";

gsap.registerPlugin(ScrollTrigger);

const FeatureProblemSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      });

      // Left image animation
      gsap.from(leftImageRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: leftImageRef.current,
          start: "top 80%",
        },
      });

      // Right image animation
      gsap.from(rightImageRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: rightImageRef.current,
          start: "top 80%",
        },
      });

      // Circle animation
      gsap.from(circleRef.current, {
        scale: 0,
        rotation: -180,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: circleRef.current,
          start: "top 80%",
        },
      });

      // Text animation
      gsap.from(textRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      });

      // Button animation
      gsap.from(buttonRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative bg-black py-20 px-6 overflow-hidden"
    >
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-990/30 via-black to-purple-910/30"></div>
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading and Button */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-6 gap-3">
          <h2
            ref={headingRef}
            className="md:text-5xl md:text-center text-left text-[30px] font-bold text-white max-w-full leading-tight"
          >
            Digital agency problems
            <br />
            and their best solutions
          </h2>
          <Button
            href={"/"}
            className="text-black md:px-16 md:py-6 rounded-full font-medium transition-colors hidden md:block"
          >
            Consult with us
          </Button>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image */}
          <div ref={leftImageRef} className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                width={1500}
                height={1500}
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-[500px] object-cover grayscale"
              />
            </div>

            {/* Circular Badge */}
            <div
              className="relative overflow-visible left-3/4 -translate-x-1/2 w-32 h-32 bg-zinc-800 rounded-full hidden md:flex items-center justify-center shadow-xl m-5"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Rotating text */}
                <svg
                  className="absolute inset-0 w-full h-full animate-spin-slow"
                  viewBox="0 0 100 100"
                >
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text fill="#888" fontSize="8" fontWeight="500">
                    <textPath href="#circlePath">
                      LEADING DIGITAL AGENCY • SINCE 2005 •
                    </textPath>
                  </text>
                </svg>
                {/* Center arrow */}
                <div className="relative z-10 w-12 h-12 bg-[#d4ff00] rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text and Image */}
          <div className="space-y-8">
            <div>
              <p
                ref={textRef}
                className="text-gray-300 text-lg leading-relaxed"
              >
                Crafting compelling digital experiences that captivate audiences
                and drive meaningful connections. Our digital agency combines
                innovation, strategy, and expertise to fuel your online success.
                On the other hand we denounce righteous indignation and dislike
                men who are so beguiled and demoralized by the charms of
                pleasure of the moment.
              </p>
            </div>

            {/* Right Image */}
            <div
              ref={rightImageRef}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                width={1500}
                height={1500}
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                alt="Product review"
                className="w-full h-[400px] object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default FeatureProblemSection;
