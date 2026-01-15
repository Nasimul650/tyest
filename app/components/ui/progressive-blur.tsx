"use client";

import { cn } from "@/libs/utils";
import { useEffect, useRef, useState } from "react";

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
  blurIntensity = 0.6,
}: ProgressiveBlurProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const layers = Math.max(blurLayers, 2);
  const segmentSize = 1 / (layers + 1);
  const angle = GRADIENT_ANGLES[direction];

  /* ---------------- Pause when offscreen ---------------- */
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
    >
      {visible &&
        Array.from({ length: layers }).map((_, index) => {
          const gradientStops = [
            index * segmentSize,
            (index + 1) * segmentSize,
            (index + 2) * segmentSize,
            (index + 3) * segmentSize,
          ].map(
            (pos, i) =>
              `rgba(31,31,31,${i === 1 || i === 2 ? 1 : 0}) ${pos * 100}%`
          );

          return (
            <div
              key={index}
              className="pointer-events-none absolute inset-0 rounded-[inherit]"
              style={{
                maskImage: `linear-gradient(${angle}deg, ${gradientStops.join(
                  ","
                )})`,
                WebkitMaskImage: `linear-gradient(${angle}deg, ${gradientStops.join(
                  ","
                )})`,
                backdropFilter: `blur(${index * blurIntensity}px)`,
                willChange: "backdrop-filter",
              }}
            />
          );
        })}
    </div>
  );
}
