"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";

type TimelineContentProps<T extends keyof HTMLElementTagNameMap> = {
  children?: React.ReactNode;
  animationNum: number;
  className?: string;
  timelineRef: React.RefObject<HTMLElement | null>;
  as?: T;
  once?: boolean;
} & React.HTMLAttributes<HTMLElement>;

export const TimelineContent = <T extends keyof HTMLElementTagNameMap = "div">({
  children,
  animationNum,
  timelineRef,
  className,
  as,
  once = false,
  ...props
}: TimelineContentProps<T>) => {
  const elRef = useRef<HTMLElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!elRef.current || !timelineRef.current) return;

    const el = elRef.current;

    // Initial hidden state (matches Framer "hidden")
    gsap.set(el, {
      opacity: 0,
      filter: "blur(20px)",
      y: 0,
    });

    const animateIn = () => {
      if (once && hasAnimated.current) return;
      hasAnimated.current = true;

      gsap.to(el, {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        delay: animationNum * 0.2,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateIn();
          if (once) observer.disconnect();
        } else if (!once) {
          // Reset when leaving viewport (Framer behavior)
          gsap.set(el, {
            opacity: 0,
            filter: "blur(0px)",
          });
        }
      },
      {
        root: null,
        threshold: 0.2,
      }
    );

    observer.observe(timelineRef.current);

    return () => observer.disconnect();
  }, [animationNum, once, timelineRef]);

  const Component = (as || "div") as React.ElementType;

  return (
    <Component ref={elRef} className={className} {...props}>
      {children}
    </Component>
  );
};
