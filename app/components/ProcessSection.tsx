"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

// --- Data ---
const PROCESS_STEPS = [
  {
    id: "01",
    title: "Discover & Define",
    description:
      "We begin by understanding your brand, business goals, and target audience. This phase helps define the challenges and objectives for the project.",
  },
  {
    id: "02",
    title: "Strategize & Plan",
    description:
      "We develop a strategic roadmap tailored to your goals, including content planning, SEO audit, design wireframes, and tech stack decisions for development.",
  },
  {
    id: "03",
    title: "Design Experience",
    description:
      "Our UI/UX designers craft best intuitive and visually compelling interfaces that will resonate with users and align with your brand identity.",
  },
  {
    id: "04",
    title: "Develop Solutions",
    description:
      "We bring designs to life with scalable, secure, and high-performance web development using modern frameworks and clean code practices.",
  },
  {
    id: "05",
    title: "Optimize & Launch",
    description:
      "We fine-tune for SEO, page speed, and responsiveness before launching. Every detail is checked to ensure a smooth and impactful release.",
  },
  {
    id: "06",
    title: "Promote & Grow",
    description:
      "Post-launch, we support your digital growth through targeted marketing campaigns, analytics, and conversion optimization strategies.",
  },
  {
    id: "07",
    title: "Support & Evolve",
    description:
      "We provide ongoing support and maintenance to ensure your web app remains up-to-date, secure, and aligned with your evolving business needs.",
  },
];

// --- Sub-Components ---

// 1. SVG Connector Line (The "Snake" Line)
const ConnectorLine = ({
  direction,
}: {
  direction: "left-to-right" | "right-to-left";
}) => {
  return (
    // Positioned specifically to bridge the gap between rows
    <div
      className={`absolute top-[45%] w-full h-[180px] hidden md:block pointer-events-none z-0 overflow-visible 
  ${direction === "left-to-right" ? "right-[-200px]" : "right-90"}`}
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
              ? "M900,0 C900,98 380,40 300,180" // S-Curve: Start Right, curve to Left
              : "M639,35 C240,100 980,60 950,220" // S-Curve: Start Left, curve to Right
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

  // Layout Logic
  // Index 0 ("01") is Right aligned in the video
  const isRightAligned = index % 2 === 0;

  // Tilt Logic
  // Right aligned cards tilt Right (clockwise), Left cards tilt Left
  const initialRotation = isRightAligned ? "md:-rotate-5" : "md:rotate-5";

  useEffect(() => {
    const card = cardRef.current;
    const badge = badgeRef.current;
    const number = numberRef.current;
    const glow = glowRef.current;

    if (!card || !badge || !number || !glow) return;

    const onEnter = () => {
      // 1. Straighten the card
      // gsap.to(card, {
      //   rotation: 0,
      //   borderColor: "#C6F128",
      //   scale: 1.02,
      //   duration: 0.4,
      //   ease: "back.out(1.7)",
      // });

      // 2. Fill the badge
      gsap.to(badge, {
        backgroundColor: "#C6F128",
        borderColor: "#C6F128",
        duration: 0.3,
      });
      // 3. Change number color
      gsap.to(number, { color: "#000000", duration: 0.3 });
      // 4. Show the glow
      gsap.to(glow, { opacity: 0.6, scale: 1.5, duration: 0.4 });
    };

    const onLeave = () => {
      // Revert everything
      // gsap.to(card, {
      //   rotation: isRightAligned ? 3 : -3, // Return to specific tilt
      //   borderColor: "rgba(255,255,255,0.1)",
      //   scale: 1,
      //   duration: 0.4,
      //   ease: "power2.out",
      // });

      gsap.to(badge, {
        backgroundColor: "rgba(0,0,0,0.4)",
        borderColor: "rgba(255,255,255,0.1)",
        duration: 0.3,
      });
      gsap.to(number, { color: "#C6F128", duration: 0.3 });
      gsap.to(glow, { opacity: 0, scale: 1, duration: 0.4 });
    };

    // Note: We check window width to apply rotation logic only on desktop if needed,
    // but CSS handles the base layout.

    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);

    return () => {
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, [isRightAligned]);

  return (
    <div
      className={`relative w-full flex ${
        isRightAligned ? "md:justify-end" : "md:justify-start md:pl-4"
      } mb-12 md:mb-0`} // Removed large margins to let connectors work
    >
      {/* Container for the Card to ensure z-index layering works with connectors */}
      <div
        ref={cardRef}
        className={`relative group w-full max-w-[480px] p-8 md:p-10 rounded-[30px] 
          bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 
          transition-all duration-500 transform-gpu ${initialRotation} 
          hover:z-50 origin-center`}
      >
        {/* Glow Effect (Behind) */}
        <div
          ref={glowRef}
          className="absolute inset-0 bg-[#C6F128] rounded-[30px] blur-[60px] opacity-0 -z-10 transition-opacity duration-500 pointer-events-none"
        />

        {/* Badge */}
        <div
          ref={badgeRef}
          className="absolute top-8 right-8 w-14 h-14 flex items-center justify-center rounded-2xl border border-white/10 bg-black/40 shadow-inner"
        >
          <span
            ref={numberRef}
            className="font-mono text-[#C6F128] font-bold text-xl"
          >
            {step.id}
          </span>
        </div>

        {/* Content */}
        <div className="mt-4 pr-12">
          {" "}
          {/* Padding right to avoid text hitting badge */}
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
            {step.title}
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm md:text-[17px] font-light">
            {step.description}
          </p>
        </div>

        {/* The Connector Line (Rendered INSIDE the card container, but positioned absolutely outside) */}
        {/* Only show connector if it's not the last item */}
        {index < PROCESS_STEPS.length - 1 && (
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
        </div>
      </div>
    </section>
  );
}
