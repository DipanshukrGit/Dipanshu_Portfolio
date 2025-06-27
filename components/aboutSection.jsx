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
            src="/images/poperpop.jpg"
            alt="Dipanshu Kumar"
            width={400}
            height={520}
            className="rounded-xl shadow-xl object-cover"
          />
        </div>

        <div className="about-text xl:w-1/2 space-y-4">
          <h4 className="text-3xl font-bold text-blue-600">About</h4>
          <h1 className="text-lg font-semibold">
            Indian Institute of Information Technology Ranchi
            <br />
            (Electronics and Communication Engineering)
            <br />
            <span className="text-sm text-gray-500">Nov 2022 – July 2026</span>
            <br />
            CGPA: <span className="text-blue-600 font-bold">7.21</span>
          </h1>

          <p className="text-base text-gray-700">
            Hi, I’m Dipanshu Kumar, a final year B.Tech student in ECE at IIIT Ranchi.
            I enjoy designing clean and user-friendly UIs with Figma, and turning them into real web apps via full-stack development.
            I also actively code in C++ for DSA and problem-solving.
          </p>

          <p className="text-base text-gray-700">
            I’m passionate about building real-world products that combine great design with functionality.
            I’m open to collaboration and love connecting with like-minded people.
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
        <p className="text-sm text-gray-500">Alpixn Technology Pvt. Ltd. | Jan 2024 – Mar 2024</p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Worked on multiple full-stack projects using the MERN stack and TailwindCSS. Built scalable frontend components and integrated backend APIs.
          Gained hands-on experience with deployment pipelines and version control using GitHub.
          Also participated in daily stand-ups and agile sprints, collaborating directly with senior developers and designers.
        </p>
      </div>
    </section>
  );
}
