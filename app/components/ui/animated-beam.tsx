"use client";

import { cn } from "@/libs/utils";
import gsap from "gsap";
import { forwardRef, RefObject, useEffect, useId, useRef } from "react";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement>;
  fromRef: RefObject<HTMLElement>;
  toRef: RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
  dotted?: boolean;
  dotSpacing?: number;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = "#404040",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ccff00",
  gradientStopColor = "#a3d900",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  dotted = false,
  dotSpacing = 6,
}) => {
  const id = useId();

  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const animatedPathRef = useRef<SVGPathElement>(null);
  const gradientRef = useRef<SVGLinearGradientElement>(null);

  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const visibleRef = useRef(true);

  const strokeDasharray = dotted ? `${dotSpacing} ${dotSpacing}` : undefined;

  /* ---------------- PATH CALCULATION (NO STATE) ---------------- */
  const updatePath = () => {
    if (
      !containerRef.current ||
      !fromRef.current ||
      !toRef.current ||
      !svgRef.current ||
      !pathRef.current ||
      !animatedPathRef.current
    )
      return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const rectA = fromRef.current.getBoundingClientRect();
    const rectB = toRef.current.getBoundingClientRect();

    svgRef.current.setAttribute("width", `${containerRect.width}`);
    svgRef.current.setAttribute("height", `${containerRect.height}`);
    svgRef.current.setAttribute(
      "viewBox",
      `0 0 ${containerRect.width} ${containerRect.height}`
    );

    const startX =
      rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
    const startY =
      rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
    const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
    const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

    const controlY = startY - curvature;

    const d = `M ${startX},${startY} Q ${
      (startX + endX) / 2
    },${controlY} ${endX},${endY}`;

    pathRef.current.setAttribute("d", d);
    animatedPathRef.current.setAttribute("d", d);
  };

  /* ---------------- SETUP ---------------- */
  useEffect(() => {
    updatePath();

    const resizeObserver = new ResizeObserver(updatePath);
    containerRef.current && resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, [curvature, startXOffset, startYOffset, endXOffset, endYOffset]);

  /* ---------------- VISIBILITY CONTROL ---------------- */
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
        timelineRef.current?.paused(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  /* ---------------- GSAP ANIMATION ---------------- */
  useEffect(() => {
    if (!animatedPathRef.current || !gradientRef.current) return;

    const gradientState = reverse ? { x: 100 } : { x: 0 };

    timelineRef.current = gsap.timeline({
      delay,
      repeat: -1,
      paused: false,
    });

    gsap.set(animatedPathRef.current, {
      strokeOpacity: 1,
      strokeWidth: pathWidth,
    });

    timelineRef.current.to(gradientState, {
      x: reverse ? 0 : 100,
      duration,
      ease: "none",
      onUpdate: () => {
        gradientRef.current?.setAttribute("x1", `${gradientState.x - 20}%`);
        gradientRef.current?.setAttribute("x2", `${gradientState.x}%`);
      },
    });

    return () => {
      timelineRef.current?.kill();
      timelineRef.current = null;
    };
  }, [delay, duration, pathWidth, reverse]);

  return (
    <svg
      ref={svgRef}
      fill="none"
      className={cn("pointer-events-none absolute left-0 top-0", className)}
    >
      {/* Static path */}
      <path
        ref={pathRef}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
      />

      {/* Animated path */}
      <path
        ref={animatedPathRef}
        stroke={`url(#${id})`}
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
      />

      <defs>
        <linearGradient
          ref={gradientRef}
          id={id}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop offset="50%" stopColor={gradientStartColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

AnimatedBeam.displayName = "AnimatedBeam";

/* ---------------- CIRCLE (UNCHANGED) ---------------- */

export const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent-primary/30 bg-bg-card p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";
