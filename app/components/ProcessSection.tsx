"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { homeData } from "../data/data";

// --- Data ---
const PROCESS_STEPS = homeData.data.processList;

// --- Sub-Components -A ---

// 1. SVG Connector Line (The "Snake" Line)
const ConnectorLine = ({
  direction,
}: {
  direction: "left-to-right" | "right-to-left";
}) => {
  return (
    // Positioned specifically to bridge the gap between rows
    <div
      className={`absolute top-[50%] w-full h-[180px] hidden md:block pointer-events-none z-0 overflow-visible 
  ${direction === "left-to-right" ? "right-[-250px]" : "right-90"}`}
    >
      <svg
        className="w-full h-full"
        viewBox="0 70 900 100" // Increased height for better curve
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d={
            direction === "right-to-left"
              ? "M2500,0 C900,98 380,40 300,180" // S-Curve: Start Right, curve to Left
              : "M190,55 C350,100 980,90 950,260" // S-Curve: Start Left, curve to Right
          }
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="2"
          strokeDasharray="10 10" // Matches the dotted style in video
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

// 2. Process Card
const ProcessCard = ({
  step,
  index,
}: {
  step: (typeof PROCESS_STEPS)[0];
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const isRightAligned = index % 2 === 0;
  const initialRotation = isRightAligned ? "md:-rotate-5" : "md:rotate-5";

  useEffect(() => {
    const card = cardRef.current;
    const glow = glowRef.current;

    if (!card || !glow) return;

    const onEnter = () => {
      // Lift + glow
      // gsap.to(card, {
      //   y: -8,
      //   duration: 0.35,
      //   ease: "power3.out",
      // });

      gsap.to(glow, {
        opacity: 15.45,
        scale: 1.3,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      // gsap.to(card, {
      //   y: 0,
      //   duration: 0.35,
      //   ease: "power3.out",
      // });

      gsap.to(glow, {
        opacity: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);

    return () => {
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      className={`relative w-full flex ${
        isRightAligned ? "md:justify-end md:pr-26" : "md:justify-start md:pl-26"
      } mb-12 md:mb-0`}
    >
      <div
        ref={cardRef}
        className={`relative group w-full max-w-90 p-8 md:p-10 max-h-135 rounded-[30px]
          bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10
          transition-transform duration-500 transform-gpu ${initialRotation}
          hover:z-50 origin-center text-left`}
      >
        {/* Glow */}
        <div
          ref={glowRef}
          className="
    absolute inset-[35px]
    rounded-[26px] aspect-square
    -z-10 opacity-0 pointer-events-none
  "
          style={{
            background: `
      linear-gradient(to right,
        rgba(0,0,0,0) 0%,
        oklab(0.930706 -0.124749 0.191517 / 0.18) 20%,
        oklab(0.930706 -0.124749 0.191517 / 0.35) 50%,
        oklab(0.930706 -0.124749 0.191517 / 0.18) 80%,
        rgba(0,0,0,0) 100%
      ),
      linear-gradient(to bottom,
        rgba(0,0,0,0) 0%,
        oklab(0.930706 -0.124749 0.191517 / 0.18) 20%,
        oklab(0.930706 -0.124749 0.191517 / 0.35) 50%,
        oklab(0.930706 -0.124749 0.191517 / 0.18) 80%,
        rgba(0,0,0,0) 100%
      )
    `,
            filter: "blur(20px)",
          }}
        />

        {/* Badge */}
        <div
          ref={badgeRef}
          className="absolute top-1 right-1 w-14 h-14 flex items-center justify-center rounded-full border border-[#8BB805] bg-black/40 shadow-inner"
        >
          <span
            ref={numberRef}
            className="font-mono rounded-full px-3.5 py-1.5 bg-[#303620] text-[#C6F128] font-bold text-xl"
          >
            {step.id}
          </span>
        </div>

        {/* Content */}
        <div
          className="mt-4 py-3 px-6 rounded-3xl"
          style={{
            background:
              "linear-gradient(180deg, rgba(52,62,24,0.35) 0%, rgba(52,62,24,0.85) 100%)",
          }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
            {step.title}
          </h3>
          <p className="text-white leading-relaxed text-sm md:text-[17px] font-light">
            {step.description}
          </p>
        </div>

        {index < PROCESS_STEPS.length && (
          <ConnectorLine
            direction={isRightAligned ? "right-to-left" : "left-to-right"}
          />
        )}
      </div>
    </div>
  );
};

// --- Main Component ---
export default function ProcessSection() {
  return (
    <section className="relative w-full bg-black py-32 px-4 overflow-hidden min-h-screen">
      {/* Ambient Background Light (Top Center) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-[#C6F128]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-32">
          <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 text-white text-xs uppercase tracking-[0.2em]">
            Process
          </div>
          <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight">
            Our Process <br />
            <span className="text-[#C6F128]">Step by Step</span>
          </h2>
          <p className="text-gray-400 mt-8 max-w-2xl mx-auto text-lg md:text-xl font-light">
            Get a premium website or custom business solution that meets your
            goals and drives measurable growth.
          </p>
        </div>

        {/* Steps Container */}
        {/* Added gap-y negative to pull them slightly closer vertically for the connector overlap */}
        <div className="flex flex-col gap-12 md:gap-y-0 relative w-full">
          {/* Mobile Vertical Line Guide */}
          <div className="absolute left-8 top-0 bottom-0 w-px border-l-2 border-dashed border-white/10 md:hidden z-0" />

          {PROCESS_STEPS.map((step, index) => (
            <ProcessCard key={step.id} step={step} index={index} />
          ))}

          <div className="flex flex-col ml-30 w-3/4 -rotate-5">
            <h2 className="text-left">Your <span className="text-[#ACE100]">all‑in‑one</span> </h2>
            <h2 className="text-left">Software Development Partner</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
