'use client';

import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const handleLogoClick = (e) => {
    e.preventDefault();

    // Smooth scroll to the element with id="home"
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Agar #home nahi mila to top pe le jao
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 border-t border-gray-200 text-sm text-gray-600">
      {/* Logo on the left */}
      <button onClick={handleLogoClick} className="mb-2 md:mb-0 transition">
        <Image src="/logo.png" alt="Logo" width={80} height={30} />
      </button>

      {/* Text on the right */}
      <div className="text-center md:text-right">
        Designed with purpose. Developed with 💖
      </div>
    </div>
  );
};

export default Footer;
