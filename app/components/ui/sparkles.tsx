"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useId, useMemo, useRef, useState } from "react";

let engineInitialized = false;

interface SparklesProps {
  className?: string;
  size?: number;
  density?: number;
  speed?: number;
  opacity?: number;
  color?: string;
  hover?: boolean;
  background?: string;
  direction?: string;
  opacitySpeed?: number;
}

export function Sparkles({
  className,
  size = 1.2,
  density = 400,
  speed = 1,
  opacity = 0.8,
  color = "#ffffff",
  hover = false,
  background = "transparent",
}: SparklesProps) {
  const id = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  /* ---------- Init engine ONCE ---------- */
  useEffect(() => {
    if (engineInitialized) {
      setReady(true);
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      engineInitialized = true;
      setReady(true);
    });
  }, []);

  /* ---------- Pause when offscreen ---------- */
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  /* ---------- Memoized options ---------- */
  const options = useMemo(
    () => ({
      background: { color: { value: background } },
      fullScreen: { enable: false },
      fpsLimit: 60,
      detectRetina: true,

      interactivity: {
        events: {
          onHover: hover
            ? {
                enable: true,
                mode: "repulse",
              }
            : undefined,
          resize: true,
        },
      },

      particles: {
        number: {
          value:
            typeof window !== "undefined" && window.innerWidth < 768
              ? density * 0.5
              : density,
        },
        color: { value: color },
        opacity: {
          value: opacity,
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.3,
          },
        },
        size: {
          value: size,
        },
        move: {
          enable: true,
          speed,
          direction: "none",
          outModes: "out",
        },
      },
    }),
    [background, color, density, hover, opacity, size, speed]
  );

  return (
    <div ref={containerRef} className={className}>
      {ready && visible && (
        // @ts-expect-error tsParticles typing issue
        <Particles id={id} options={options} />
      )}
    </div>
  );
}
