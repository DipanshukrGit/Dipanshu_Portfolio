'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(logoRef.current, {
      y: -20,
      opacity: 0,
      duration: 1,
    });

    tl.from(navRef.current?.querySelectorAll('li'), {
      y: -10,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
    }, "-=0.5");
  }, []);

  useEffect(() => {
    if (menuOpen) {
      gsap.to(mobileMenuRef.current, {
        x: 0,
        duration: 0.5,
        ease: 'power3.out',
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        x: '100%',
        duration: 0.5,
        ease: 'power3.inOut',
      });
    }
  }, [menuOpen]);

  return (
    <nav className="sticky top-4 z-50 w-full flex justify-center px-4">
      <div className="bg-white/80 backdrop-blur-md shadow-md rounded-full px-6 py-3 flex items-center justify-between w-full max-w-7xl">
        {/* Left: Logo */}
        <a href="#home" ref={logoRef} className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={40}
            className="object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <ul
          ref={navRef}
          className="hidden md:flex items-center space-x-8 text-base font-medium"
        >
          <li><a href="#home" className="hover:text-blue-600 transition">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600 transition">About Me</a></li>
          <li><a href="#projects" className="hover:text-blue-600 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition">Contact Me</a></li>
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 h-screen w-full sm:w-3/4 bg-white z-[100] p-8 transform translate-x-full"
      >
        <div className="flex justify-between items-center mb-8">
          <Image src="/logo.png" alt="Logo" width={80} height={40} />
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={28} />
          </button>
        </div>
        <ul className="space-y-6 text-lg font-semibold">
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About Me</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact Me</a></li>
        </ul>
      </div>
    </nav>
  );
}
