"use client";

import React from "react";
import { CircleCheck, CircleCheckBig } from "lucide-react";
import Button from "./Button";

interface Feature {
  text: string;
}

export default function WhatWeDo(): React.JSX.Element {
  return (
    <section className="min-h-screen bg-black text-white py-12 md:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4 md:mb-6">
            <span className="px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-medium bg-white/10 border border-white/20 rounded-full">
              What We Do
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            What We Do
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Get a premium website or custom business solution
            <br className="hidden sm:block" />
            that meets your goals and drives measurable growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* UI/UX Design - Larger Card */}
          <div
            className="lg:col-span-7 relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-yellow-900/20 to-green-900/20 p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-accent-primary/5"
          >
            {/* Badge */}
            <div className="mb-4 md:mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-white/10 border border-white/20 rounded-full">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-accent-primary"
                >
                  <path
                    d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z"
                    fill="currentColor"
                  />
                </svg>
                Service
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              UI/UX Design
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8 leading-relaxed">
              We're a full-service design agency specializing in branding, web design, and creative strategies that elevate businesses.
            </p>

            {/* Features */}
            <div className="mb-6 md:mb-8">
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <CircleCheckBig color="#cf0" className="w-5 h-5 text-accent-primary shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-gray-200">
                    Ongoing updates and maintenance
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CircleCheckBig color="#cf0" className="w-5 h-5 text-accent-primary shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-gray-200">
                    No-code build & launch
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CircleCheckBig color="#cf0" className="w-5 h-5 text-accent-primary shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-gray-200">
                    No upfront development charge
                  </span>
                </div>
              </div>
            </div>

            {/* Button */}
            <Button size="md">Learn more</Button>
          </div>

          {/* Web Development - Smaller Card */}
          <div
            className="lg:col-span-5 relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-teal-900/20 p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-accent-primary/5"
          >
            {/* Badge */}
            <div className="mb-4 md:mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-white/10 border border-white/20 rounded-full">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-accent-primary"
                >
                  <path
                    d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z"
                    fill="currentColor"
                  />
                </svg>
                Service
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              Web Development
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8 leading-relaxed">
              Building responsive, fast, and scalable web applications using modern technologies and best practices.
            </p>

            {/* Tags */}
            <div className="mb-6 md:mb-8">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex text-[#cf0] items-center gap-1.5 px-3 py-1.5 text-xs font-medium ring-1 ring-[#cf0]/30 rounded-full text-accent-primary" style={{ backgroundColor: 'oklab(0.930706 -0.124749 0.191517 / 0.2)' }}>
                  <CircleCheckBig color="#cf0" className="w-3.5 h-3.5" />
                  Professional
                </span>
                <span className="inline-flex text-[#cf0] items-center gap-1.5 px-3 py-1.5 text-xs font-medium ring-1 ring-[#cf0]/30 rounded-full text-accent-primary" style={{ backgroundColor: 'oklab(0.930706 -0.124749 0.191517 / 0.2)' }}>
                  <CircleCheckBig color="#cf0" className="w-3.5 h-3.5" />
                  Fast Delivery
                </span>
              </div>
            </div>
          </div>

          {/* SEO - Smaller Card */}
          <div
            className="lg:col-span-5 relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-green-900/20 to-yellow-900/20 p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-accent-primary/5"
          >
            {/* Badge */}
            <div className="mb-4 md:mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-white/10 border border-white/20 rounded-full">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-accent-primary"
                >
                  <path
                    d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z"
                    fill="currentColor"
                  />
                </svg>
                Service
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              Seo
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8 leading-relaxed">
              Optimizing websites for search engines to improve visibility, drive traffic, and increase conversions.
            </p>

            {/* Features */}
            <div className="mb-6 md:mb-8">
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <CircleCheckBig color="#cf0" className="w-5 h-5 text-accent-primary shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-gray-200">
                    No upfront development charge
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CircleCheckBig color="#cf0" className="w-5 h-5 text-accent-primary shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-gray-200">
                    No-code build & launch
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CircleCheckBig color="#cf0" className="w-5 h-5 text-accent-primary shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-gray-200">
                    Ongoing updates and maintenance
                  </span>
                </div>
              </div>
            </div>
        
            <Button size="md">Contact us</Button>
          </div>

          {/* Digital Marketing - Larger Card */}
          <div
            className="lg:col-span-7 relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-lime-900/20 to-green-900/20 p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-accent-primary/5"
          >
            {/* Badge */}
            <div className="mb-4 md:mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-white/10 border border-white/20 rounded-full">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-accent-primary"
                >
                  <path
                    d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z"
                    fill="currentColor"
                  />
                </svg>
                Digital Marketing
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              Digital Marketing
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8 leading-relaxed">
              Crafting compelling visual content and campaigns that drive engagement and conversions.
            </p>

            {/* Features in Two Columns */}
            <div className="mb-6 md:mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Key Features */}
                <div className="space-y-3">
                  <span className="text-sm font-medium text-accent-primary block">
                    Key Features
                  </span>
                  <div className="flex items-start gap-2.5">
                    <CircleCheckBig color="#cf0" className="w-5 h-5 text-accent-primary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-gray-200">
                      No upfront development charge
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CircleCheck color="#cf0" className="w-5 h-5 text-accent-primary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-gray-200">
                      No-code build & launch
                    </span>
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-3">
                  <span className="text-sm font-medium text-accent-primary block">
                    Benefits
                  </span>
                  <div className="flex items-start gap-2.5">
                    <CircleCheckBig color="#cf0" className="w-5 h-5 text-accent-primary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-gray-200">
                      Ongoing updates and maintenance
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Button */}
            <button className="w-full md:w-auto px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg bg-accent-primary text-black">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
