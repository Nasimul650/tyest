"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CurvedMarquee() {
  const textPathRef = useRef<SVGTextPathElement>(null);

useEffect(() => {
  if (!textPathRef.current) return;

  gsap.fromTo(
    textPathRef.current,
    { attr: { startOffset: "0%" } },
    {
      attr: { startOffset: "-40%" },
      duration: 5, // 👈 speed increased
      ease: "none",
      repeat: -1,
    }
  );
}, []);

  return (
    <section className="w-full bg-black  overflow-hidden border-y border-white/10">
      <svg
        viewBox="0 0 1600 300"
        width="100%"
        height="300"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* ARC PATH */}
        <path
          id="curve"
          d="M 0 200 Q 800 80 1600 200"
          fill="transparent"
        />

        {/* TEXT ON PATH */}
        <text
          fill="#cf0"
          fontSize="74"
          fontWeight="800"
          letterSpacing="6"
        >
          <textPath
            ref={textPathRef}
            href="#curve"
            startOffset="0%"
          >
            ✦ BE ✦ CREATIVE ✦ WITH ✦ ALGORIZE ✦ TECH ✦ BE ✦ CREATIVE ✦ WITH ✦
          </textPath>
        </text>
      </svg>
    </section>
  );
}
