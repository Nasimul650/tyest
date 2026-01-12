"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const IMAGES = [
  "/assets/logo1.svg",
  "/assets/logo2.svg",
  "/assets/logo3.svg",
  "/assets/logo4.svg",
  "/assets/logo5.svg",
];

const SPEED = 80; // Pixels per second

export default function LogoMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(0);

  const REPEAT_COUNT = 4;
  const logoSet = Array(REPEAT_COUNT).fill(IMAGES).flat();

  useEffect(() => {
    const context = gsap.context(() => {
      const container = containerRef.current;
      if (!container) return;

      const fullWidth = container.offsetWidth;
      const oneLoopDistance = fullWidth / 2;

      const calculatedDuration = oneLoopDistance / SPEED;

 
      gsap.to(container, {
        xPercent: -50,
        repeat: -1,
        duration: calculatedDuration,
        ease: "none", 
      });
    }, containerRef);

    return () => context.revert();
  }, []);

  return (
    <section className="overflow-hidden bg-black py-8">
      <div className="relative w-full select-none">
        {/* The Track */}
        <div ref={containerRef} className="flex w-fit will-change-transform">
          {/* Render Set 1 */}
          <LogoList logos={logoSet} />
          {/* Render Set 2 (The seamless clone) */}
          <LogoList logos={logoSet} />
        </div>
      </div>
    </section>
  );
}

// Sub-component to keep JSX clean
function LogoList({ logos }: { logos: string[] }) {
  return (
    <div className="flex shrink-0 items-center gap-24 px-12">
      {logos.map((src, i) => (
        <div
          key={i} // In a real app, use a unique ID if possible, but index is okay here
          className="relative flex h-[80px] w-[180px] shrink-0 items-center justify-center opacity-80 transition-opacity hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
        >
          <Image
            src={src}
            alt="company logo"
            fill
            sizes="180px"
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}
