"use client";

import { cn } from "@/libs/utils";
import gsap from "gsap";
import { useEffect, useRef } from "react";

interface MarqueeProps {
  className?: string;
  children?: React.ReactNode;
  vertical?: boolean;
  reverse?: boolean;
  repeat?: number;
  speed?: number; // pixels per second
}

export default function ReverseMarquee({
  className,
  children,
  vertical = false,
  reverse = false,
  repeat = 2,
  speed = 80,
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      // Distance for one seamless loop
      const distance = vertical
        ? track.scrollHeight / repeat
        : track.scrollWidth / repeat;

      // Reset + correct start position
      gsap.set(track, {
        x: vertical ? 0 : reverse ? -distance : 0,
        y: vertical ? (reverse ? -distance : 0) : 0,
      });

      const duration = distance / speed;

      const tween = gsap.to(track, {
        x: vertical ? 0 : reverse ? 0 : -distance,
        y: vertical ? (reverse ? 0 : -distance) : 0,
        duration,
        ease: "none",
        repeat: -1,
      });

      return () => {
        tween.kill();
      };
    }, trackRef);

    return () => ctx.revert();
  }, [vertical, reverse, repeat, speed]);

  return (
    <div
      className={cn(
        "overflow-hidden p-2",
        vertical ? "flex flex-col" : "flex flex-row",
        className
      )}
    >
      {/* Track */}
      <div
        ref={trackRef}
        className={cn(
          "flex w-fit will-change-transform",
          vertical ? "flex-col" : "flex-row"
        )}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0", vertical ? "flex-col" : "flex-row")}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
