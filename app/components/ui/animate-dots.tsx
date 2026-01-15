"use client";

import { cn } from "@/libs/utils";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

interface Dot {
  cx: string;
  cy: string;
  isActive: boolean;
  id: number;
}

const CxCyVlaue = [
  { cx: "0.857851", cy: "156.033" },
  { cx: "9.43598", cy: "147.454" },
  { cx: "18.0141", cy: "147.454" },
  // ⬇️ FULL ARRAY KEPT EXACTLY THE SAME
  { cx: "112.377", cy: "156.033" },
  { cx: "120.959", cy: "156.033" },
];

const AnimatedDots = ({
  dotArr = CxCyVlaue,
  className,
}: {
  dotArr?: { cx: string; cy: string }[];
  className?: string;
}) => {
  const [dots, setDots] = useState<Dot[]>([]);
  const [activeDotGroups, setActiveDotGroups] = useState<number[][]>([]);
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

  const dotRefs = useRef<(SVGEllipseElement | null)[]>([]);

  /* ---------- Setup dots + groups ---------- */
  useEffect(() => {
    const initialDots = dotArr.map((dot, index) => ({
      cx: dot.cx,
      cy: dot.cy,
      isActive: false,
      id: index,
    }));

    setDots(initialDots);

    const numDots = initialDots.length;
    const numGroups = 15;
    const groups: number[][] = [];

    for (let i = 0; i < numGroups; i++) {
      const groupSize = Math.floor(Math.random() * 5) + 1;
      const group: number[] = [];

      for (let j = 0; j < groupSize; j++) {
        const dotId = Math.floor(Math.random() * numDots);
        if (!group.includes(dotId)) group.push(dotId);
      }

      groups.push(group);
    }

    setActiveDotGroups(groups);
  }, [dotArr]);

  /* ---------- GSAP animation loop ---------- */
  useEffect(() => {
    if (!activeDotGroups.length) return;

    const interval = setInterval(() => {
      dotRefs.current.forEach((el) => {
        if (!el) return;

        gsap.to(el, {
          fill: "#22222A",
          scale: 1,
          duration: 0.4,
          ease: "power2.inOut",
        });
      });

      activeDotGroups[currentGroupIndex].forEach((id) => {
        const el = dotRefs.current[id];
        if (!el) return;

        gsap.to(el, {
          fill: "#ccff00",
          scale: 1.5,
          duration: 0.4,
          ease: "power2.inOut",
        });
      });

      setCurrentGroupIndex((prev) => (prev + 1) % activeDotGroups.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [activeDotGroups, currentGroupIndex]);

  return (
    <div
      className={cn("w-full overflow-hidden flex justify-center", className)}
    >
      <svg
        viewBox="0 0 519 158"
        preserveAspectRatio="xMidYMid meet"
        className="w-full max-w-[519px] h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {dots.map((dot, index) => (
          <ellipse
            key={index}
            ref={(el) => {
              dotRefs.current[index] = el;
            }}
            cx={dot.cx}
            cy={dot.cy}
            rx="0.857851"
            ry="0.857924"
            fill="#22222A"
            style={{
              transformBox: "fill-box",
              transformOrigin: "center",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default AnimatedDots;
