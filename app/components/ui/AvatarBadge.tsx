"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import "../../globals.css";

const AvatarBadge = () => {
  const badgeRef = useRef<HTMLDivElement>(null);
  const avatarsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!badgeRef.current) return;

    /* ---------------- Center Glow Pulse ---------------- */
    gsap.to(".glow-layer", {
      opacity: 1,
      scale: 1.05,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    /* ---------------- Avatar Hover ---------------- */
    avatarsRef.current.forEach((el) => {
      if (!el) return;

      el.addEventListener("mouseenter", () => {
        gsap.to(el, {
          scale: 1.08,
          rotate: gsap.utils.random(-6, 6),
          duration: 0.25,
          ease: "power3.out",
        });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(el, {
          scale: 1,
          rotate: 0,
          duration: 0.25,
          ease: "power3.out",
        });
      });
    });
  }, []);

  return (
    <div
      ref={badgeRef}
      className="
        relative overflow-hidden
        inline-flex items-center gap-3
        rounded-full px-6 py-3 mb-12
        border border-white/10 backdrop-blur-sm
        transition-transform duration-300 ease-out
        hover:scale-[1.04] cursor-pointer md:w-md w-96
      "
      style={{
        background:
          "linear-gradient(90deg, rgba(237,255,230,0.05) 0%, rgba(220,255,214,0.05) 100%)",
      }}
    >
      {/* CENTER GLOW (inside only) */}
      <span className="absolute inset-0 rounded-full pointer-events-none glow-layer" />

      {/* CONTENT */}
      <div className="relative z-10 flex items-center md:gap-3 gap-1">
        {/* Avatars */}
        <div className="flex -space-x-2">
          {["user1.png", "user2.png", "user3.png"].map((img, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) avatarsRef.current[i] = el;
              }}
              className="
                w-9 h-9 rounded-full
                border-2 border-[#9AE600]
                bg-gradient-to-br from-[#9AE600]/30 to-[#9AE600]/10
                flex items-center justify-center
                cursor-pointer
              "
            >
              <Image
                src={`/assets/${img}`}
                alt="user"
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
          ))}
        </div>

        {/* Text */}
        <span className="md:text-sm text-xs  text-gray-300 whitespace-nowrap">
          60+ startups & founders chose Algorize Tech
        </span>
      </div>
    </div>
  );
};

export default AvatarBadge;
