"use client";

import { cn } from "@/libs/utils";
import gsap from "gsap";
import {
  forwardRef,
  RefObject,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

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
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  const animatedPathRef = useRef<SVGPathElement | null>(null);
  const gradientRef = useRef<SVGLinearGradientElement | null>(null);

  const strokeDasharray = dotted ? `${dotSpacing} ${dotSpacing}` : undefined;

  /* ---------------- PATH CALCULATION ---------------- */
  useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const rectA = fromRef.current.getBoundingClientRect();
      const rectB = toRef.current.getBoundingClientRect();

      setSvgDimensions({
        width: containerRect.width,
        height: containerRect.height,
      });

      const startX =
        rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
      const startY =
        rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
      const endX =
        rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
      const endY =
        rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

      const controlY = startY - curvature;

      setPathD(
        `M ${startX},${startY} Q ${
          (startX + endX) / 2
        },${controlY} ${endX},${endY}`
      );
    };

    const observer = new ResizeObserver(updatePath);
    containerRef.current && observer.observe(containerRef.current);

    updatePath();
    return () => observer.disconnect();
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
  ]);

  /* ---------------- GSAP ANIMATION (FIXED) ---------------- */
  useEffect(() => {
    if (!animatedPathRef.current || !gradientRef.current) return;

    gsap.set(animatedPathRef.current, {
      strokeOpacity: 0,
      strokeWidth: pathWidth,
    });

    gsap.to(animatedPathRef.current, {
      strokeOpacity: 1,
      strokeWidth: pathWidth * 1.5,
      duration: 1.2,
      delay,
      ease: "power2.out",
    });

    // Animate a plain object, NOT the gradient element
    const gradientState = reverse ? { x1: 90, x2: 100 } : { x1: 10, x2: 0 };

    const gradientTarget = reverse ? { x1: -10, x2: 0 } : { x1: 110, x2: 100 };

    gsap.to(gradientState, {
      ...gradientTarget,
      duration,
      delay,
      repeat: -1,
      ease: "expo.out",
      onUpdate: () => {
        if (!gradientRef.current) return;
        gradientRef.current.setAttribute("x1", `${gradientState.x1}%`);
        gradientRef.current.setAttribute("x2", `${gradientState.x2}%`);
      },
    });
  }, [delay, duration, pathWidth, reverse]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
      className={cn(
        "pointer-events-none absolute left-0 top-0 transform-gpu",
        className
      )}
    >
      {/* Static path */}
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
      />

      {/* Animated gradient path */}
      <path
        ref={animatedPathRef}
        d={pathD}
        stroke={`url(#${id})`}
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
      />

      <defs>
        <linearGradient
          ref={gradientRef}
          id={id}
          gradientUnits="userSpaceOnUse"
          x1="0%"
          x2="0%"
          y1="0%"
          y2="0%"
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} />
          <stop offset="32.5%" stopColor={gradientStopColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

AnimatedBeam.displayName = "AnimatedBeam";

/* ---------------- CIRCLE ---------------- */

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
