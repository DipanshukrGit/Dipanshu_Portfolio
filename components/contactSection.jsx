'use client';

import { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const formRef = useRef(null);
  const formFieldsRef = useRef([]);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const sectionEl = sectionRef.current;

    gsap.fromTo(
      sectionEl,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionEl,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionEl,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      paraRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionEl,
          start: 'top 80%',
        },
      }
    );
  }, []);

  useEffect(() => {
    if (videoEnded && formRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 90%',
        },
      });

      tl.fromTo(
        formRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      ).fromTo(
        formFieldsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power3.out',
        },
        '-=0.5'
      );
    }
  }, [videoEnded]);

  return (
    <section className="max-w-6xl mx-auto pt-10 pb-20 px-4" ref={sectionRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[70vh]">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h2
            ref={headingRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white"
          >
            <span className="text-black dark:text-white">Reach out </span>
            <span className="text-blue-600">to me</span>
          </h2>
          <p
            ref={paraRef}
            className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-lg mx-auto md:mx-0"
          >
            I am currently exploring new job opportunities. If you have any relevant roles or would like to connect
            for networking, collaboration, or even a staring contest, feel free to reach out! My inbox is always open.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full rounded-xl overflow-hidden shadow-lg">
          {!videoEnded ? (
            <video
              src="/contactvideo.mp4"
              controls={false}
              autoPlay
              muted
              playsInline
              className="w-full h-auto rounded-xl"
              onEnded={() => setVideoEnded(true)}
            />
          ) : (
          <form
  ref={formRef}
  action={process.env.NEXT_PUBLIC_GETFORM_URL}
  method="POST"
  className="space-y-6 bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
>

              <div ref={(el) => (formFieldsRef.current[0] = el)}>
                <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-200">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 bg-white dark:bg-zinc-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div ref={(el) => (formFieldsRef.current[1] = el)}>
                <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-200">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 bg-white dark:bg-zinc-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div ref={(el) => (formFieldsRef.current[2] = el)}>
                <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-200">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 bg-white dark:bg-zinc-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <div ref={(el) => (formFieldsRef.current[3] = el)} className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Social Links */}
      <div className="text-center mt-16">
        <p className="text-md text-gray-600 dark:text-gray-300 mb-6">
          If you don’t want to fill the form, feel free to contact me on my social accounts 👇
        </p>

        <div className="flex justify-center space-x-6 text-2xl text-gray-700 dark:text-gray-200">
          <a
            href="https://github.com/DipanshukrGit"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/dipanshukumar04"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/dipanshu.kr04"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/dipanshu_kr04"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
}
