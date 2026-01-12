"use client";

import React from "react";
import { CircleCheck } from "lucide-react";

interface Feature {
  text: string;
}

interface ServiceCard {
  badge: string;
  title: string;
  description: string;
  features?: Feature[];
  tags?: string[];
  buttonText: string;
  buttonColor: string;
  gradientFrom: string;
  gradientTo: string;
}

const services: ServiceCard[] = [
  {
    badge: "Service",
    title: "UI/UX Design",
    description:
      "We're a full-service design agency specializing in branding, web design, and creative strategies that elevate businesses.",
    features: [
      { text: "Ongoing updates and maintenance" },
      { text: "No-code build & launch" },
      { text: "No upfront development charge" },
    ],
    buttonText: "Learn more",
    buttonColor: "bg-accent-primary text-black",
    gradientFrom: "from-yellow-900/20",
    gradientTo: "to-green-900/20",
  },
  {
    badge: "Service",
    title: "Web Development",
    description:
      "Building responsive, fast, and scalable web applications using modern technologies and best practices.",
    tags: ["Professional", "Fast Delivery"],
    buttonText: "Get Started",
    buttonColor: "bg-accent-primary text-black",
    gradientFrom: "from-blue-900/20",
    gradientTo: "to-teal-900/20",
  },
  {
    badge: "Service",
    title: "Seo",
    description:
      "Optimizing websites for search engines to improve visibility, drive traffic, and increase conversions.",
    features: [
      { text: "No upfront development charge" },
      { text: "No-code build & launch" },
      { text: "Ongoing updates and maintenance" },
    ],
    buttonText: "Contact us",
    buttonColor: "border border-accent-primary text-accent-primary",
    gradientFrom: "from-green-900/20",
    gradientTo: "to-yellow-900/20",
  },
  {
    badge: "Digital Marketing",
    title: "Digital Marketing",
    description:
      "Crafting compelling visual content and campaigns that drive engagement and conversions.",
    features: [
      { text: "No upfront development charge" },
      { text: "No-code build & launch" },
      { text: "Ongoing updates and maintenance" },
    ],
    buttonText: "Get Started",
    buttonColor: "bg-accent-primary text-black",
    gradientFrom: "from-lime-900/20",
    gradientTo: "to-green-900/20",
  },
];

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-accent-primary/5`}
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
                  {service.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* Features or Tags */}
              {service.features && (
                <div className="mb-6 md:mb-8">
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-2.5"
                      >
                        <CircleCheck className="w-5 h-5 text-accent-primary shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base text-gray-200">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {service.tags && (
                <div className="mb-6 md:mb-8">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-accent-primary">
                      Key Features
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {service.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-accent-primary/20 border border-accent-primary/30 rounded-full text-accent-primary"
                      >
                        <CircleCheck className="w-3.5 h-3.5" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <span className="text-sm font-medium text-accent-primary">
                        Benefits
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CircleCheck className="w-5 h-5 text-accent-primary shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-gray-200">
                        Ongoing updates and maintenance
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Button */}
              <button
                className={`w-full md:w-auto px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${service.buttonColor}`}
              >
                {service.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
