"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { homeData } from "../data/data";

// --- Data ---
const PROCESS_STEPS = homeData.data.processList;

// --- Sub-Components ---

// 1. SVG Connector Line (The "Snake" Line)
const ConnectorLine = ({
  direction,
}: {
  direction: "left-to-right" | "right-to-left";
}) => {
  return (
    <>
      {/* Desktop Connector */}
      <div
        className={`absolute top-[50%] w-full h-[180px] hidden md:block pointer-events-none z-0 overflow-visible 
    ${direction === "left-to-right" ? "right-[-250px]" : "right-90"}`}
      >
        <svg
          className="w-full h-full"
          viewBox="0 70 900 100"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d={
              direction === "right-to-left"
                ? "M2500,0 C900,98 380,40 300,180"
                : "M190,55 C350,100 980,90 950,260"
            }
            stroke="#ffffff"
            strokeOpacity="0.6"
            strokeWidth="2"
            strokeDasharray="10 10"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Mobile Connector */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-98px] w-[2px] h-[96px] md:hidden pointer-events-none z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 2 48"
          fill="none"
          preserveAspectRatio="none"
        >
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="48"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="2"
            strokeDasharray="6 6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </>
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
      gsap.to(glow, {
        opacity: 15.45,
        scale: 1.3,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
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
      className={`relative w-full flex justify-center ${
        isRightAligned ? "md:justify-end md:pr-26" : "md:justify-start md:pl-26"
      } mb-12 md:mb-0`}
    >
      <div
        ref={cardRef}
        className={`relative group w-full max-w-[340px] md:max-w-90 p-6 md:p-10 max-h-135 rounded-[24px] md:rounded-[30px]
          bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10
          transition-transform duration-500 transform-gpu ${initialRotation}
          hover:z-50 origin-center text-left`}
      >
        {/* Glow */}
        <div
          ref={glowRef}
          className="hidden md:block 
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
          className="absolute top-4 right-4 md:top-1 md:right-1 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border border-[#8BB805] bg-black/40 shadow-inner"
        >
          <span
            ref={numberRef}
            className="font-mono rounded-full px-2.5 py-1 md:px-3.5 md:py-1.5 bg-[#303620] text-[#C6F128] font-bold text-lg md:text-xl"
          >
            {step.id}
          </span>
        </div>

        {/* Content */}
        <div
          className="mt-3 md:mt-4 py-4 px-5 md:py-3 md:px-6 rounded-2xl md:rounded-3xl"
          style={{
            background:
              "linear-gradient(180deg, rgba(52,62,24,0.35) 0%, rgba(52,62,24,0.85) 100%)",
          }}
        >
          <h3 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4 tracking-tight">
            {step.title}
          </h3>
          <p className="text-white/90 leading-relaxed text-sm md:text-[17px] font-light">
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
            <span className="bg-linear-to-r from-text-primary via-accent-primary/80 to-text-primary bg-clip-text text-transparent">Step by Step</span>
          </h2>
          <p className="text-gray-400 mt-8 max-w-2xl mx-auto text-lg md:text-xl font-light">
            Get a premium website or custom business solution that meets your
            goals and drives measurable growth.
          </p>
        </div>

        {/* Steps Container */}
        <div className="flex flex-col gap-12 md:gap-y-0 relative w-full items-center md:items-stretch">
          {PROCESS_STEPS.map((step, index) => (
            <ProcessCard key={step.id} step={step} index={index} />
          ))}

          <div className="flex flex-col w-full md:w-3/4 md:ml-30 md:-rotate-5 mt-8 md:mt-0 px-4 md:px-0 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl">
              Your <span className="text-[#ACE100]">all‑in‑one</span>{" "}
            </h2>
            <h2 className="text-2xl md:text-4xl">
              Software Development Partner
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}