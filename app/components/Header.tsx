"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Button from "./ui/Button";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const hoverBgRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ---------------- Entrance ---------------- */
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      /* ---------------- Hover Background ---------------- */
      const hoverBg = hoverBgRef.current!;
      const links = linksRef.current!.querySelectorAll("a");
      const linksContainer = linksRef.current!;

      gsap.set(hoverBg, { opacity: 0 });

      links.forEach((link) => {
        link.addEventListener("mouseenter", () => {
          const { width, height, left, top } = link.getBoundingClientRect();
          const linksRect = linksRef.current!.getBoundingClientRect();

          gsap.to(hoverBg, {
            x: left - linksRect.left,
            y: top - linksRect.top,
            width,
            height,
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "power3.out",
          });
        });
      });

      const hideBg = () => {
        gsap.killTweensOf(hoverBg);
        gsap.to(hoverBg, {
          opacity: 0,
          scale: 0.95,
          duration: 0.2,
          ease: "power2.out",
        });
      };

      const showBg = () => {
        gsap.killTweensOf(hoverBg);
        gsap.to(hoverBg, {
          opacity: 1,
          scale: 1,
          duration: 0.15,
          ease: "power2.out",
        });
      };

      linksContainer.addEventListener("mouseenter", showBg);
      linksContainer.addEventListener("mouseleave", hideBg);

      /* ---------------- Scroll Behavior ---------------- */
      ScrollTrigger.create({
        trigger: "#hero",
        start: "top top",
        onEnter: () =>
          gsap.to(navRef.current, {
            backgroundColor: "rgba(0,0,0,0.3)",
            backdropFilter: "blur(10px)",
            duration: 0.3,
          }),
        onLeaveBack: () =>
          gsap.to(navRef.current, {
            backgroundColor: "transparent",
            backdropFilter: "blur(0px)",
            duration: 0.35,
            ease: "power3.out",
          }),
      });
    });
    ScrollTrigger.create({
      trigger: "#hero",
      start: "center top",
      onEnter: () =>
        gsap.to(navRef.current, {
          maxWidth: "42rem",
          duration: 0.5,
          ease: "power2.out",
        }),
      onLeaveBack: () =>
        gsap.to(navRef.current, {
          duration: 0.5,
          maxWidth: "56rem",
          ease: "power3.out",
        }),
    });

    return () => ctx.revert();
  }, []);

  return (
    <nav className="fixed mx-auto z-50 px-6 py-1 transition-colors w-full">
      <div
        ref={navRef}
        className="relative max-w-4xl mx-auto flex items-center justify-between rounded-full px-4 py-1 border-transparent"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="logo"
              width={140}
              height={140}
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Nav Links */}
        <div
          ref={linksRef}
          className="relative hidden md:flex items-center gap-2 ml-20"
        >
          {/* Hover background */}
          <div
            ref={hoverBgRef}
            className="absolute rounded-full bg-[#262626] z-0 pointer-events-none"
          />

          {["Features", "Testimonials", "Pricing", "Faq"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative z-10 px-4 py-2 text-sm rounded-full"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Button size="md">Book a call</Button>
      </div>
    </nav>
  );
};

export default Header;
