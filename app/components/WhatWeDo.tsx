"use client";

import {
  BadgeCheck,
  CircleCheck,
  CircleCheckBig,
  Sparkles,
  Users,
} from "lucide-react";
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 bg-[#0D1320]">
          {/* UI/UX Design - Larger Card */}
          <div className="lg:col-span-7 relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-yellow-900/20 to-green-900/20 p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-accent-primary/5">
            {/* Badge */}
            <div className="mb-4 gap-x-3 flex items-center  md:mb-6">
              <span
                className="inline-flex items-center gap-2 px-3 py-2.5 text-xs font-medium border border-white/20 rounded-[12px]"
                style={{
                  backgroundColor: "oklab(0.930706 -0.124749 0.191517 / 0.2)",
                }}
              >
                <Users color="#cf0" />
              </span>
              <div className="text-[#cf0] text-[14px]">Service</div>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              UI/UX Design
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8 leading-relaxed">
              We're a full-service design agency specializing in branding, web
              design, and creative strategies that elevate businesses.
            </p>

            {/* Features */}
            <div className="mb-6 md:mb-8">
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <CircleCheckBig
                    color="#cf0"
                    className="w-5 h-5 text-accent-primary shrink-0 mt-0.5"
                  />
                  <span className="text-sm md:text-base text-gray-200">
                    Ongoing updates and maintenance
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CircleCheckBig
                    color="#cf0"
                    className="w-5 h-5 text-accent-primary shrink-0 mt-0.5"
                  />
                  <span className="text-sm md:text-base text-gray-200">
                    No-code build & launch
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CircleCheckBig
                    color="#cf0"
                    className="w-5 h-5 text-accent-primary shrink-0 mt-0.5"
                  />
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
          <div className="lg:col-span-5 relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-teal-900/20 p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-accent-primary/5">
            {/* Badge */}
            <div className="mb-4 gap-x-3 flex items-center md:mb-6 text-[14px]">
              <div className="text-[#cf0]">Service</div>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              Web Development
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8 leading-relaxed">
              Building responsive, fast, and scalable web applications using
              modern technologies and best practices.
            </p>

            {/* Tags */}
            <div className="mb-6 md:mb-8">
              <div className="flex flex-wrap gap-2">
                <span
                  className="inline-flex text-[#cf0] items-center gap-1.5 px-3 py-1.5 text-xs font-medium ring-1 ring-[#cf0]/30 rounded-full text-accent-primary"
                  style={{
                    backgroundColor: "oklab(0.930706 -0.124749 0.191517 / 0.2)",
                  }}
                >
                  <CircleCheckBig color="#cf0" className="w-3.5 h-3.5" />
                  Professional
                </span>
                <span
                  className="inline-flex text-[#cf0] items-center gap-1.5 px-3 py-1.5 text-xs font-medium ring-1 ring-[#cf0]/30 rounded-full text-accent-primary"
                  style={{
                    backgroundColor: "oklab(0.930706 -0.124749 0.191517 / 0.2)",
                  }}
                >
                  <CircleCheckBig color="#cf0" className="w-3.5 h-3.5" />
                  Fast Delivery
                </span>
              </div>
            </div>
          </div>

          {/* SEO - Smaller Card */}
          <div className="lg:col-span-5 relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-green-900/20 to-yellow-900/20 p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-accent-primary/5">
            {/* Badge */}
            <div className="mb-4 gap-x-3 flex items-center  md:mb-6">
              <span
                className="inline-flex items-center gap-2 px-3 py-2.5 text-xs font-medium border border-white/20 rounded-[12px]"
                style={{
                  backgroundColor: "oklab(0.930706 -0.124749 0.191517 / 0.2)",
                }}
              >
                <BadgeCheck color="#cf0" />
              </span>
              <div className="text-[#cf0]">Service</div>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Seo</h3>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8 leading-relaxed">
              Optimizing websites for search engines to improve visibility,
              drive traffic, and increase conversions.
            </p>

            {/* Features */}
            <div className="mb-6 md:mb-8">
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <CircleCheckBig
                    color="#cf0"
                    className="w-5 h-5 text-accent-primary shrink-0 mt-0.5"
                  />
                  <span className="text-sm md:text-base text-gray-200">
                    No upfront development charge
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CircleCheckBig
                    color="#cf0"
                    className="w-5 h-5 text-accent-primary shrink-0 mt-0.5"
                  />
                  <span className="text-sm md:text-base text-gray-200">
                    No-code build & launch
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CircleCheckBig
                    color="#cf0"
                    className="w-5 h-5 text-accent-primary shrink-0 mt-0.5"
                  />
                  <span className="text-sm md:text-base text-gray-200">
                    Ongoing updates and maintenance
                  </span>
                </div>
              </div>
            </div>

            <Button
              className="bg-transparent border-white px-12 py-4"
              size="md"
            >
              <span className="text-[#CCFF00]">Contact us</span>
            </Button>
          </div>

          {/* Digital Marketing - Larger Card */}
          <div className="lg:col-span-7 relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-lime-900/20 to-green-900/20 p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-accent-primary/5">
            {/* Badge */}
            <div className="mb-4 gap-x-3 flex items-center  md:mb-6">
              <span
                className="inline-flex items-center gap-2 px-3 py-2.5 text-xs font-medium border border-white/20 rounded-[12px]"
                style={{
                  backgroundColor: "oklab(0.930706 -0.124749 0.191517 / 0.2)",
                }}
              >
                <Sparkles color="#cf0" />
              </span>
              <div className="text-[#cf0]">Digital Marketing</div>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              Digital Marketing
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8 leading-relaxed">
              Crafting compelling visual content and campaigns that drive
              engagement and conversions.
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
                    <CircleCheckBig
                      color="#cf0"
                      className="w-5 h-5 text-accent-primary shrink-0 mt-0.5"
                    />
                    <span className="text-sm md:text-base text-gray-200">
                      No upfront development charge
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CircleCheck
                      color="#cf0"
                      className="w-5 h-5 text-accent-primary shrink-0 mt-0.5"
                    />
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
                    <CircleCheckBig
                      color="#cf0"
                      className="w-5 h-5 text-accent-primary shrink-0 mt-0.5"
                    />
                    <span className="text-sm md:text-base text-gray-200">
                      Ongoing updates and maintenance
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Button */}
            <Button className="w-full md:w-auto px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg bg-accent-primary text-black">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
