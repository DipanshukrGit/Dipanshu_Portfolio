'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function Navbar() {
  const logoRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(logoRef.current, {
      y: -20,
      opacity: 0,
      duration: 1,
    });

    tl.from(navRef.current.querySelectorAll('li'), {
      y: -10,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
    }, "-=0.5");
  }, []);

  return (
    <nav className="sticky top-4 z-50 w-full flex justify-center px-4">
      <div
        ref={navRef}
        className="bg-white/80 backdrop-blur-md shadow-md rounded-full px-6 py-3 flex flex-col items-center md:flex-row md:justify-center space-y-3 md:space-y-0 md:space-x-10 max-w-full w-full sm:w-auto"
      >
        {/* Logo with GSAP animation */}
        <a href="#home" className="logo hidden md:block" ref={logoRef}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={40}
            className="object-contain"
          />
        </a>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-base md:text-lg font-medium">
          <li><a href="#home" className="hover:text-blue-600 transition">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600 transition">About Me</a></li>
          <li><a href="#projects" className="hover:text-blue-600 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition">Contact Me</a></li>
        </ul>
      </div>
    </nav>
  );
}


