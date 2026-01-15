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
  className,
  as,
  timelineRef,
  once = false,
  ...props
}: TimelineContentProps<T>) => {
  const elRef = useRef<HTMLElement | null>(null);
  const hasAnimatedRef = useRef(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    // ⚠️ Avoid filter animations (very expensive)
    gsap.set(el, {
      opacity: 0,
      y: 24,
      willChange: "transform, opacity",
    });

    const animateIn = () => {
      if (once && hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.45,
        delay: animationNum * 0.12,
        ease: "power3.out",
        clearProps: "willChange",
      });
    };

    const reset = () => {
      if (once) return;
      gsap.set(el, {
        opacity: 0,
        y: 24,
      });
    };

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateIn();
          if (once) observerRef.current?.disconnect();
        } else {
          reset();
        }
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observerRef.current.observe(el);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [animationNum, once]);

  const Component = (as || "div") as React.ElementType;

  return (
    <Component ref={elRef} className={className} {...props}>
      {children}
    </Component>
  );
};
