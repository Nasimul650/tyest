'use client';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Button from './Button';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const navRef = useRef<HTMLElement>(null);
  const hoverBgRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ---------------- Entrance ---------------- */
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      /* ---------------- Hover Background ---------------- */
      const hoverBg = hoverBgRef.current!;
      const links = linksRef.current!.querySelectorAll('a');

      gsap.set(hoverBg, { opacity: 0 });

      links.forEach((link) => {
        link.addEventListener('mouseenter', () => {
          const { width, height, left, top } = link.getBoundingClientRect();
          const linksRect = linksRef.current!.getBoundingClientRect();

          gsap.to(hoverBg, {
            x: left - linksRect.left,
            y: top - linksRect.top,
            width,
            height,
            opacity: 1,
            duration: 0.3,
            ease: 'power3.out',
          });
        });
      });

      linksRef.current!.addEventListener('mouseleave', () => {
        gsap.to(hoverBg, { opacity: 0, duration: 0.2 });
      });

      /* ---------------- Scroll Behavior ---------------- */
      ScrollTrigger.create({
        trigger: '#hero', // 👈 hero section ID
        start: 'bottom top',
        onEnter: () =>
          gsap.to(navRef.current, {
            backgroundColor: 'rgba(0,0,0,0.3)',
            backdropFilter: 'blur(10px)',
            duration: 0.3,
          }),
        onLeaveBack: () =>
          gsap.to(navRef.current, {
            backgroundColor: 'transparent',
            backdropFilter: 'blur(0px)',
            duration: 0.3,
          }),
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-colors"
    >
      <div className="relative max-w-5xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#d4ff00] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.87-.96-7-5.54-7-10V8.3l7-3.11 7 3.11V10c0 4.46-3.13 9.04-7 10z"/>
              </svg>
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

          {['Features', 'Testimonials', 'Pricing', 'Faq'].map((item) => (
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
