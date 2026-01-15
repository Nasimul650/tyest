"use client";

import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { memo, useRef, useState } from "react";
import { homeData } from "../data/data";
import AnimatedDots from "./ui/animate-dots";
import Earth from "./ui/globe";
import Marquee from "./ui/marquee1";

interface Review {
  id: number;
  name: string;
  designation: string;
  rating: string;
  review: string;
  img: string | null;
}

// Get reviews from data

function Testimonials() {
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const reviews = homeData?.data.reviews;

  // State for toggle functionality
  const [activeView, setActiveView] = useState<"grid" | "list">("grid");

  // Calculate duration based on number of reviews to maintain consistent speed
  // Assuming each review card is ~450px width, we want consistent pixels per second
  const baseSpeed = 30; // pixels per second
  const cardWidth = 450; // approximate width of each card including gap
  const duration = (reviews.length * cardWidth) / baseSpeed;

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.1,
        duration: 0.2,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  return (
    <>
      <section
        className="relative h-full min-h-screen py-14 bg-black text-white max-w-7xl md:max-w-full"
        id="testimonials"
        ref={testimonialsRef}
      >
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4 md:mb-6">
            <span className="px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-medium bg-white/10 border border-white/20 rounded-full">
              Testimonials
            </span>
          </div>
          <h2 className="text-2xl md:text-5xl lg:text-[60px] font-bold mb-4 md:mb-6">
            Don&apos;t just listen to us,
          </h2>
          <h2 className="text-2xl md:text-5xl lg:text-[60px] font-bold mb-4 md:mb-6 bg-linear-to-r from-text-primary via-accent-primary/80 to-text-primary bg-clip-text text-transparent">
            people already have
          </h2>
          <p className="text-sm md:text-[20px] text-[#b8b8b8] max-w-2xl mx-auto px-4">
            Let&apos;s hear how our clients feel about our service
          </p>
        </div>

        <div className="absolute top-72 flex justify-center w-full hidden md:block">
          <div className="absolute h-fit w-fit left-160">
            <AnimatedDots />
          </div>
          <div className="absolute h-fit w-fit right-90">
            <AnimatedDots />
          </div>
          <Earth className="max-w-[650px] z-0" />
        </div>

        <div className="relative z-10 sm:pt-10 pt-24">
          <>
            {/* Removed fixed height container to prevent cropping */}
            <div className="overflow-hidden pb-2">
              <Marquee className="[--duration:20s] [--gap:3rem] pb-6">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-neutral-950 border border-gray-900 sm:w-[28rem] w-[20rem] sm:p-6 p-4 rounded-xl transition-all duration-300 testimonial-card hover:border-accent-primary flex flex-col h-full mx-4 text-left"
                    style={{
                      willChange: "transform",
                      transform: "translateZ(0)",
                      backfaceVisibility: "hidden",
                      perspective: "1000px",
                    }}
                  >
                    <div className="flex justify-between mb-3 items-center">
                      <div className="flex items-center gap-1">
                        {[...Array(Math.floor(parseFloat(review.rating)))].map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-accent-primary text-accent-primary"
                            />
                          )
                        )}
                        {parseFloat(review.rating) % 1 !== 0 && (
                          <Star className="w-4 h-4 fill-accent-primary/50 text-accent-primary" />
                        )}
                        <span className="text-xs text-accent-primary ml-1">
                          {review.rating}
                        </span>
                      </div>
                    </div>
                    <p className="sm:text-base text-sm mb-4 text-white font-medium leading-relaxed flex gap-2 py-2 testimonial-content grow">
                      <Quote className="fill-accent-primary sm:w-5 sm:h-5 w-4 h-4 shrink-0 rotate-180 mt-1" />
                      <span>{review.review}</span>
                    </p>
                    <div className="flex items-center mt-auto">
                      {review.img && (
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-accent-primary">
                          <Image
                            src={review.img}
                            alt={review.name}
                            width={48}
                            height={48}
                            className="object-cover"
                            quality={80}
                            sizes="48px"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div>
                        <p className="font-bold text-white text-base">
                          {review.name}
                        </p>
                        <p className="text-sm text-accent-primary">
                          {review.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>

            {/* Removed fixed height container to prevent cropping */}
            <div className="overflow-hidden">
              <Marquee
                // pauseOnHover
                reverse
                className={`[--duration:${duration}s]`}
              >
                {reviews.map((review) => (
                  <div
                    key={`reverse-${review.id}`}
                    className="bg-neutral-950 border border-gray-900 sm:w-[28rem] w-[20rem] sm:p-6 p-4 rounded-xl transition-all duration-300 testimonial-card hover:border-accent-primary flex flex-col h-full mx-4 text-left"
                    style={{
                      willChange: "transform",
                      transform: "translateZ(0)",
                      backfaceVisibility: "hidden",
                      perspective: "1000px",
                    }}
                  >
                    <div className="flex justify-between mb-3 items-center">
                      <div className="flex items-center gap-1">
                        {[...Array(Math.floor(parseFloat(review.rating)))].map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-accent-primary text-accent-primary"
                            />
                          )
                        )}
                        {parseFloat(review.rating) % 1 !== 0 && (
                          <Star className="w-4 h-4 fill-accent-primary/50 text-accent-primary" />
                        )}
                        <span className="text-xs text-accent-primary ml-1">
                          {review.rating}
                        </span>
                      </div>
                    </div>
                    <p className="sm:text-base text-sm mb-4 text-white font-medium leading-relaxed flex gap-2 py-2 testimonial-content grow">
                      <Quote className="fill-accent-primary sm:w-5 sm:h-5 w-4 h-4 shrink-0 rotate-180 mt-1" />
                      <span>{review.review}</span>
                    </p>
                    <div className="flex items-center mt-auto">
                      {review.img && (
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-accent-primary">
                          <Image
                            src={review.img}
                            alt={review.name}
                            width={48}
                            height={48}
                            className="object-cover"
                            quality={80}
                            sizes="48px"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div>
                        <p className="font-bold text-white text-base">
                          {review.name}
                        </p>
                        <p className="text-sm text-accent-primary">
                          {review.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
          </>
        </div>
      </section>
    </>
  );
}

export default memo(Testimonials);
