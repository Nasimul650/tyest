"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const SPEED = 80; // Pixels per second
const BASE_TEXT = "✦ BE ✦ CREATIVE ✦ WITH ✦ ALGORIZE ✦ TECH ";
const REPEAT_COUNT = 10; // High count to ensure it covers the curve + overflow

export default function CurvedMarquee() {
  const textRef = useRef<SVGTextElement>(null);
  const textPathRef = useRef<SVGTextPathElement>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const textElement = textRef.current;
      const textPathElement = textPathRef.current;
      
      if (!textElement || !textPathElement) return;

      // 1. Get the exact pixel length of the entire text string inside the SVG
      const totalWidth = textElement.getComputedTextLength();

      // 2. Logic from your reference: We move exactly half the distance
      // This assumes the text string is a doubled pattern (which we ensure via REPEAT_COUNT)
      const oneLoopDistance = totalWidth / 2;

      // 3. Calculate duration based on speed
      const calculatedDuration = oneLoopDistance / SPEED;

      // 4. Animate startOffset instead of xPercent
      // We go from 0 (start) to -oneLoopDistance (halfway)
      gsap.to(textPathElement, {
        attr: { startOffset: -oneLoopDistance }, // Move left by half the total length
        repeat: -1,
        duration: calculatedDuration,
        ease: "none",
      });
    });

    return () => context.revert();
  }, []);

  // Create a massive string to ensure we have enough content to loop seamlessly
  // We double the logic: The animation moves half, so the visual must look identical at 0% and 50%
  const content = Array(REPEAT_COUNT).fill(BASE_TEXT).join(" ");

  return (
    <section className="w-full overflow-hidden py-10">
      <svg
        viewBox="0 0 1600 300"
        width="100%"
        height="250"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto select-none"
      >
        <defs>
          {/* A wide, gentle curve path */}
          {/* Extended well beyond the viewbox to ensure text enters/exits smoothly */}
          <path
            id="curve-path"
            d="M -2000 200 Q 800 -90 3600 200"
          />
        </defs>

        <text
          ref={textRef}
          fill="#C6F128"
          fontSize="74"
          fontWeight="800"
          letterSpacing="4"
          className="uppercase"
        >
          <textPath
            ref={textPathRef}
            href="#curve-path"
            startOffset="0" // Start at the beginning
            method="stretch"
          >
            {content}
          </textPath>
        </text>
      </svg>
    </section>
  );
}