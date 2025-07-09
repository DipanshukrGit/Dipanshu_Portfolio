'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const AboutSection = () => {
  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        gsap.to('.marque', {
          x: '-200%',
          duration: 4,
          repeat: -1,
          ease: 'none',
        });
        gsap.to('.marque img', {
          rotate: 180,
        });
      } else {
        gsap.to('.marque', {
          x: '0%',
          duration: 4,
          repeat: -1,
          ease: 'none',
        });
        gsap.to('.marque img', {
          rotate: 0,
        });
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  return (
    <div className="hidden sm:flex w-full bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden p-[1vw] z-10 relative">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="marque flex items-center gap-[4vw] px-[2vw] flex-shrink-0 -translate-x-full whitespace-nowrap"
          >
            <h1 className="text-[28px] sm:text-[38px] md:text-[48px] font-light font-sans text-white">
              ABOUT ME
            </h1>
            <Image
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
              alt="arrow"
              width={40}
              height={40}
              className="h-[30px] sm:h-[40px] md:h-[45px] w-auto"
            />
          </div>
        ))}
    </div>
  );
};

export default AboutSection;
