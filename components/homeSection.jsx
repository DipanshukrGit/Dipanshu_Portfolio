'use client';

import { useEffect, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const images = ['/img/dipanshu.jpg', '/img/dipanshu1.jpg'];

export default function HomeSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    gsap.set(['.resume-button', '.social-links a'], { opacity: 1, y: 0 });

    tl.from('.loader h1', { x: 800, duration: 1.2 }, 'start')
      .from('.loader h2', { x: -800, duration: 1.2 }, 'start')
      .set('.loader h1', { clearProps: 'all' })
      .set('.loader h2', { clearProps: 'all' })

      .from('.h1-first', { y: -80, opacity: 0, duration: 1 }, 'nameStart')
      .from('.h1-last', { y: 80, opacity: 0, duration: 1 }, 'nameStart+=0.5')
      .from('.content p', { y: 30, opacity: 0, duration: 0.8 }, 'nameStart+=1.2')
      .from('.resume-button', { y: 20, opacity: 0, duration: 0.6 }, 'nameStart+=1.6')
      .from('.social-links a', {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
      }, 'nameStart+=1.8')
      .from('.image-stack', { y: 50, opacity: 0, duration: 1 }, 'nameStart+=1.6');

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-x-hidden w-full">
      <main id="home" className="relative min-h-screen w-full bg-white text-black font-[Poppins] z-0">


        {/* Loader Text */}
        <div className="absolute inset-0 z-0 pointer-events-none loader overflow-hidden">
          <h1 className="text-[60px] sm:text-[120px] md:text-[180px] absolute -top-10 -left-[150px] font-bold opacity-10 whitespace-nowrap">PortFolio</h1>
          <h2 className="text-[60px] sm:text-[120px] md:text-[180px] absolute bottom-4 sm:bottom-6 md:bottom-8 -right-[60px] sm:-right-[80px] md:-right-[100px] font-bold opacity-10 whitespace-nowrap">PAGE</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 md:px-12 pt-12 md:pt-24 pb-12 relative z-20 items-center max-w-screen-xl mx-auto">

          {/* Left Content */}
          <div className="content order-2 md:order-1 text-center md:text-left">
            <div className="h1 overflow-hidden">
              <h1 className="h1-first text-[32px] sm:text-[50px] md:text-[70px] leading-tight font-bold text-black">
                DIPANSHU
              </h1>
            </div>
            <div className="h1 overflow-hidden">
              <h1 className="h1-last text-[32px] sm:text-[50px] md:text-[70px] leading-tight font-bold text-blue-600">
                KUMAR
              </h1>
            </div>

            <p className="text-[15px] md:text-[18px] mt-6 max-w-xl mx-auto md:mx-0 px-2">
              Final Year ECE Student at IIIT Ranchi 🎓 | Full-Stack Web Developer 💻 | UI/UX Designer 🎨 | C++ Programmer ⚙️ | Tech Enthusiast 🚀
            </p>

            <div className="mt-6">
              <Button
                asChild
                className="resume-button bg-white border-2 border-blue-600 text-blue-600 rounded-xl px-6 py-3 text-base md:text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">Resume</a>
              </Button>
            </div>

            <div className="social-links mt-10 text-center md:text-left space-y-4 text-lg font-medium">
              <div className="flex justify-center md:justify-start gap-4 sm:gap-6 flex-wrap">
                <a href="https://github.com/DipanshukrGit" target="_blank" rel="noopener noreferrer"
                  className="hover:text-black hover:underline hover:scale-105 transition duration-200">GitHub</a>
                <a href="https://linkedin.com/in/dipanshukumar04" target="_blank" rel="noopener noreferrer"
                  className="hover:text-blue-700 hover:underline hover:scale-105 transition duration-200">LinkedIn</a>
                <a href="mailto:dipanshuhub0411@gmail.com" target="_blank" rel="noopener noreferrer"
                  className="hover:text-red-600 hover:underline hover:scale-105 transition duration-200">Gmail</a>
              </div>
              <div className="flex justify-center md:justify-start gap-4 sm:gap-6 flex-wrap">
                <a href="https://www.codechef.com/users/dipanshukr_04" target="_blank" rel="noopener noreferrer"
                  className="hover:text-purple-700 hover:underline hover:scale-105 transition duration-200">CodeChef</a>
                <a href="https://twitter.com/dipanshu_kr04" target="_blank" rel="noopener noreferrer"
                  className="hover:text-sky-500 hover:underline hover:scale-105 transition duration-200">Twitter</a>
                <a href="https://instagram.com/dipanshu.kr04" target="_blank" rel="noopener noreferrer"
                  className="hover:text-pink-600 hover:underline hover:scale-105 transition duration-200">Instagram</a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="image-stack relative w-full h-[250px] sm:h-[300px] md:w-[400px] md:h-[320px] mx-auto order-1 md:order-2">
            <div className="absolute inset-0 shadow-xl overflow-hidden rounded-md">
              <Image
                src={images[currentImage]}
                alt="Profile"
                fill
                className="object-cover transition-all duration-700 rounded-md"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
