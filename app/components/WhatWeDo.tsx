"use client";

import { BadgeCheck, CircleCheckBig, Sparkles, Users } from "lucide-react";
import Image from "next/image";
import React from "react";
import Button from "./ui/Button";

interface Feature {
  text: string;
}

export default function WhatWeDo(): React.JSX.Element {
  return (
    <section className="min-h-screen bg-black text-white py-12 md:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-left">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4 md:mb-6">
            <span className="px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-medium bg-white/10 border border-white/20 rounded-full">
              What We Do
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-[60px] lg:leading-[75px] font-bold mb-4 md:mb-6">
            What We Do
          </h2>
          <p className="text-sm md:text-[20px] text-[#b8b8b8] leading-[32px] max-w-2xl mx-auto px-4">
            Get a premium website or custom business solution
            <br className="hidden sm:block" />
            that meets your goals and drives measurable growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mx-auto max-w-7xl px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
            {/* Card 1 — Large */}
            <article className="relative overflow-hidden rounded-2xl bg-gray-900/80 ring-1 ring-white/10 backdrop-blur-sm lg:col-span-7 md:col-span-6">
              <div className="absolute -top-20 -right-24 w-72 h-72 rounded-full bg-[#CCFF00]/20 blur-3xl" />

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#CCFF00]/20 ring-1 ring-[#CCFF00]/30">
                    <Users className="w-5 h-5 text-[#CCFF00]" />
                  </div>
                  <span className="text-sm text-[#CCFF00]/90">Service</span>
                </div>

                <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  UI / UX Design
                </h2>

                <p className="mt-3 text-gray-400 text-[16px] leading-7">
                  We're a full-service design agency specializing in branding,
                  web design, and creative strategies that elevate businesses.
                </p>

                <ul className="mt-6 space-y-3">
                  {[
                    "Ongoing updates and maintenance",
                    "No-code build & launch",
                    "No upfront development charge",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CircleCheckBig className="w-5 h-5 text-[#CCFF00] mt-0.5" />
                      <span className="text-gray-300 text-[16px]">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button className="px-14 py-4 border border-white">
                    Learn more
                  </Button>
                </div>
              </div>
            </article>

            {/* Card 2 — Visual */}
            <article className="relative overflow-hidden rounded-2xl bg-gray-900/80 ring-1 ring-white/10 backdrop-blur-sm lg:col-span-5 md:col-span-6">
              <div className="absolute inset-0">
                <Image
                  src="https://res.cloudinary.com/dygyhxplr/image/upload/v1763040115/upload/service-image-2.jpg"
                  alt={"image"}
                  fill
                  className="object-cover opacity-15 mix-blend-luminosity pointer-events-none"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/30 via-gray-900/80 to-black/90" />
              <div className="relative p-6 sm:p-8">
                <p className="text-sm text-[#CCFF00]/90">Service</p>

                <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  Web Development
                </h3>

                <p className="mt-3 text-gray-400 text-[16px] leading-6">
                  Building responsive, fast, and scalable web applications using
                  modern technologies.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {["Professional", "Fast Delivery"].map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 rounded-full bg-[#CCFF00]/20 px-3 py-1 text-[#CCFF00] ring-1 ring-[#CCFF00]/30 text-sm"
                    >
                      <CircleCheckBig className="w-4 h-4" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Card 3 — Medium */}
            <article className="relative overflow-hidden rounded-2xl bg-gray-900/80 ring-1 ring-white/10 backdrop-blur-sm lg:col-span-5 md:col-span-6">
              <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-[#CCFF00]/20 blur-3xl" />

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#CCFF00]/20 ring-1 ring-[#CCFF00]/30">
                    <BadgeCheck className="w-5 h-5 text-[#CCFF00]" />
                  </div>
                  <span className="text-sm text-[#CCFF00]/90">Service</span>
                </div>

                <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  Seo
                </h2>

                <p className="mt-3 text-gray-400 text-[16px] leading-6">
                  Optimizing websites for search engines to improve visibility,
                  drive traffic, and increase conversions.
                </p>

                <ul className="mt-6 space-y-3">
                  {[
                    "No upfront development charge",
                    "No-code build & launch",
                    "Ongoing updates and maintenance",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CircleCheckBig className="w-5 h-5 text-[#CCFF00] mt-0.5" />
                      <span className="text-gray-300 text-[16px]">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button className="bg-transparent border-white px-14 py-4">
                    <span className="text-[#7bff00] text-[16px]">
                      Contact us
                    </span>
                  </Button>
                </div>
              </div>
            </article>

            {/* Card 4 — Split */}
            <article className="relative overflow-hidden rounded-2xl bg-gray-900/80 ring-1 ring-white/10 backdrop-blur-sm lg:col-span-7 md:col-span-6">
              <div className="absolute inset-0">
                <Image
                  src="https://res.cloudinary.com/dygyhxplr/image/upload/v1763039039/upload/service-image-3.jpg"
                  alt="image"
                  fill
                  className="object-cover opacity-10 mix-blend-luminosity pointer-events-none"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-gray-900/80 to-[#CCFF00]/20" />

              <div className="relative p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#CCFF00]/20 ring-1 ring-[#CCFF00]/30">
                    <Sparkles className="w-5 h-5 text-[#CCFF00]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                    Digital Marketing
                  </h3>
                </div>

                <p className="text-gray-400 mb-6 text-[16px] leading-6">
                  Crafting compelling visual content and campaigns that drive
                  engagement and conversions.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Key Features",
                      items: [
                        "No upfront development charge",
                        "No-code build & launch",
                      ],
                    },
                    {
                      title: "Benefits",
                      items: ["Ongoing updates and maintenance"],
                    },
                  ].map((col, i) => (
                    <div key={i}>
                      <p className="text-sm text-[#CCFF00]/90 mb-3">
                        {col.title}
                      </p>
                      <ul className="space-y-3">
                        {col.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CircleCheckBig className="w-5 h-5 text-[#CCFF00] mt-0.5" />
                            <span className="text-gray-300 text-[16px]">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button className="px-14 py-4 border border-white">
                    Get Started
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
