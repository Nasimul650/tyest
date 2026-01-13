"use client";

import React from "react";

export default function AnimatedMarquee(): React.JSX.Element {
  const text = "BE CREATIVE WITH ALGORIZE TECH";
  const words = text.split(" ");

  return (
    <section className="w-full bg-black py-8 md:py-12 overflow-hidden border-y border-white/10">
      <div className="relative flex">
        {/* First marquee track */}
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center">
              {words.map((word, index) => (
                <React.Fragment key={`${i}-${index}`}>
                  <span className="text-4xl text-[#cf0] md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#cf0] px-4 md:px-6">
                    {word}
                  </span>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    className="mx-2 md:mx-4 text-accent-primary shrink-0"
                  >
                    <path
                      d="M20 0L25 15L40 20L25 25L20 40L15 25L0 20L15 15L20 0Z"
                      fill="#cf0"
                    />
                  </svg>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
