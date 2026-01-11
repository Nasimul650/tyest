"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

const IMAGES: string[] = [
  "/assets/logo1.svg",
  "/assets/logo2.svg",
  "/assets/logo3.svg",
  "/assets/logo4.svg",
  "/assets/logo5.svg",
];

const MARQUEE_SPEED = 40; // seconds

function startMarquee(track: HTMLDivElement) {
  const totalWidth = track.scrollWidth / 2;

  gsap.to(track, {
    x: -totalWidth,
    duration: MARQUEE_SPEED,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: (x) => `${parseFloat(x) % totalWidth}px`,
    },
  });
}

export default function LogoMarquee(): React.JSX.Element {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    startMarquee(trackRef.current);

    return () => {
      gsap.killTweensOf(trackRef.current);
    };
  }, []);

  return (
    <section className="overflow-hidden pb-16">
      <div className="relative w-full">
        <div
          ref={trackRef}
          className="flex w-max items-center gap-24"
        >
          {[...IMAGES, ...IMAGES].map((src, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-80 hover:opacity-100 transition"
            >
              <Image
                src={src}
                alt="Partner logo"
                width={190}
                height={140}
                className="object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
