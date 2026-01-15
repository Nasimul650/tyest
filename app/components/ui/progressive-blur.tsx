"use client";

import { cn } from "@/libs/utils";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export const GRADIENT_ANGLES = {
  top: 0,
  right: 90,
  bottom: 180,
  left: 270,
};

export type ProgressiveBlurProps = {
  direction?: keyof typeof GRADIENT_ANGLES;
  blurLayers?: number;
  className?: string;
  blurIntensity?: number;
};

export function ProgressiveBlur({
  direction = "bottom",
  blurLayers = 8,
  className,
  blurIntensity = 0.05,
}: ProgressiveBlurProps) {
  const layers = Math.max(blurLayers, 2);
  const segmentSize = 1 / (blurLayers + 1);

  const layerRefs = useRef<HTMLDivElement[]>([]);

  /* ---------------- GSAP ANIMATION ---------------- */
  useEffect(() => {
    if (!layerRefs.current.length) return;

    gsap.fromTo(
      layerRefs.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.05,
      }
    );
  }, []);

  return (
    <div className={cn("relative", className)}>
      {Array.from({ length: layers }).map((_, index) => {
        const angle = GRADIENT_ANGLES[direction];

        const gradientStops = [
          index * segmentSize,
          (index + 1) * segmentSize,
          (index + 2) * segmentSize,
          (index + 3) * segmentSize,
        ].map(
          (pos, posIndex) =>
            `rgba(31, 31, 31, ${posIndex === 1 || posIndex === 2 ? 1 : 0}) ${
              pos * 100
            }%`
        );

        const gradient = `linear-gradient(${angle}deg, ${gradientStops.join(
          ", "
        )})`;

        return (
          <div
            key={index}
            ref={(el) => {
              if (el) layerRefs.current[index] = el;
            }}
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{
              maskImage: gradient,
              WebkitMaskImage: gradient,
              backdropFilter: `blur(${index * blurIntensity}px)`,
            }}
          />
        );
      })}
    </div>
  );
}
