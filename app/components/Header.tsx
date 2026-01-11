'use client'
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import Button from './Button';


const Header = () => {
    const navRef = useRef<HTMLElement>(null);
    useEffect(() =>{
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Navbar animation
      tl.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.8
      });
    })
        
    }, [])

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#d4ff00] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.87-.96-7-5.54-7-10V8.3l7-3.11 7 3.11V10c0 4.46-3.13 9.04-7 10z"/>
              </svg>
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm ml-20">
            <a href="#features" className="hover:text-[#d4ff00] transition-colors">Features</a>
            <a href="#testimonials" className="hover:text-[#d4ff00] transition-colors">Testimonials</a>
            <a href="#pricing" className="hover:text-[#d4ff00] transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-[#d4ff00] transition-colors">Faq</a>
          </div>

          {/* CTA Button */}
          <Button size="md">Book a call</Button>
        </div>
      </nav>
  )
}

export default Header