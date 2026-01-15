"use client";

import { cn } from "@/libs/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

interface EarthProps {
  className?: string;
  theta?: number;
  dark?: number;
  scale?: number;
  diffuse?: number;
  mapSamples?: number;
  mapBrightness?: number;
  baseColor?: [number, number, number];
  markerColor?: [number, number, number];
  glowColor?: [number, number, number];
}

const Earth: React.FC<EarthProps> = ({
  className,
  theta = 0.25,
  dark = 1,
  scale = 1.1,
  diffuse = 1.2,
  mapSamples = 25000,
  mapBrightness = 6,
  baseColor = [0.08, 0.08, 0.08],
  markerColor = [0.8, 1, 0],
  glowColor = [0.72, 0.9, 0],
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);
  const phiRef = useRef(0);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const width = canvas.offsetWidth;

    globeRef.current = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: width * dpr,
      height: width * dpr,
      phi: 0,
      theta,
      dark,
      scale,
      diffuse,
      mapSamples,
      mapBrightness,
      baseColor,
      markerColor,
      glowColor,
      opacity: 1,
      offset: [0, 0],
      markers: [],
      onRender: (state) => {
        if (!isVisibleRef.current) return;
        state.phi = phiRef.current;
        phiRef.current += 0.003;
      },
    });

    /* ---------- Resize handling ---------- */
    const resizeObserver = new ResizeObserver(([entry]) => {
      if (!entry || !globeRef.current || !canvasRef.current) return;
      const newWidth = entry.contentRect.width;
      const canvas = canvasRef.current;
      canvas.width = newWidth * dpr;
      canvas.height = newWidth * dpr;
    });

    resizeObserver.observe(canvas);

    /* ---------- Pause when offscreen ---------- */
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      {
        threshold: 0.1,
      }
    );

    intersectionObserver.observe(canvas);

    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      globeRef.current?.destroy();
      globeRef.current = null;
    };
  }, [
    theta,
    dark,
    scale,
    diffuse,
    mapSamples,
    mapBrightness,
    baseColor,
    markerColor,
    glowColor,
  ]);

  return (
    <div
      className={cn(
        "flex items-center justify-center w-full max-w-[350px] mx-auto",
        className
      )}
    >
      <canvas ref={canvasRef} className="w-full aspect-square" />
    </div>
  );
};

export default Earth;
