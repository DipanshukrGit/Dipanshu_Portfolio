'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const sectionRef = useRef(null);

  const skills = [
    "React", "Next.js", "TailwindCSS", "Node.js", "REST APIs",
    "Express.js", "JWT", "Postgres", "MongoDB", "MySQL", "Prisma",
    "Firebase", "Git/Github", "AWS", "Docker", "C++", "Javascript",
    "Typescript", "GSAP", "UI UX Design"
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-image', {
        x: -100,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-image',
          start: 'top 85%',
        },
      });

      gsap.from('.about-text', {
        x: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-text',
          start: 'top 85%',
        },
      });

      gsap.from('.experience-box', {
        y: 100,
        opacity: 0,
        duration: 1.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.experience-box',
          start: 'top 90%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="text-gray-800 bg-white rounded-xl m-6 md:m-16 p-6 shadow-md overflow-hidden space-y-16"
    >
      {/* About Section */}
      <div className="flex flex-col xl:flex-row items-center xl:items-start space-y-10 xl:space-y-0 xl:space-x-10">
        <div className="about-image w-full xl:w-1/2 flex justify-center">
          <Image
            src="/img/about.jpg"
            alt="Dipanshu Kumar"
            width={400}
            height={520}
            className="rounded-xl shadow-xl object-cover"
          />
        </div>

        <div className="about-text xl:w-1/2 space-y-4">
          <h4 className="text-3xl font-bold text-blue-600">About Me</h4>

          <ul className="space-y-2 text-base text-gray-700">
            <li>
              🎓 <strong>Indian Institute of Information Technology Ranchi <br/>(B.Tech, Electronics and Communication Engineering)</strong><br />
              November 2022 – July 2026 | CGPA: <span className="text-blue-600 font-bold">7.17/ 10</span>
            </li>
            <li>
              🏫 <strong>Central Karimia +2 High School,Jamshedpur(Class XII)</strong><br />
              April 2020 – March 2022 | <span className="text-blue-600 font-bold">8.0/10</span>
            </li>
          
          </ul>

          <p className="text-base text-gray-700 mt-4">
            I’m a final-year Electronics and Communication Engineering student at Indian Institute of Information Technology Ranchi. I love building performant and elegant full-stack applications, working with scalable systems, and continuously exploring new tools and frameworks.
          </p>

          <h2 className="text-2xl font-semibold text-blue-600 mt-6">My Tech Stack</h2>
          <div className="flex flex-wrap gap-3 mt-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-800 rounded-full shadow-sm hover:bg-blue-200 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="experience-box bg-blue-50 border border-blue-200 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Experience</h2>

        <h3 className="text-lg font-semibold">Full Stack Developer Intern</h3>
        <p className="text-sm text-gray-500">Alpixn Technology Pvt. Ltd. | Remote | May 2025 – July 2025</p>

        <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-2 leading-relaxed">
          <li>
            Built 100% responsive, pixel-perfect frontend from Figma designs using <strong>Next.js 14</strong>, <strong>Tailwind CSS</strong>, and <strong>TypeScript</strong>, with smooth Dark/Light mode toggle (20% faster theme switching).
          </li>
          <li>
            Boosted UI interactivity by 15% using <strong>GSAP animations</strong> and <strong>shadcn/ui components</strong>, delivering a modern and engaging experience.
          </li>
          <li>
            Created secure <strong>RESTful APIs</strong> using <strong>Node.js</strong> and <strong>Express</strong>, and built SEO-optimized, accessible components, improving page performance by 30%.
          </li>
          <li>
            Improved clarity and navigation by redesigning page flow — users started exploring 35% more content, leading to higher product understanding and session time.
          </li>
        </ul>
      </div>
    </section>
  );
}
