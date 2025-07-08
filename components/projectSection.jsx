'use client';

import { useEffect, useRef } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "MediMeet - Doctor Appointment Platform",
    description:
      "A full-stack doctor appointment app with video calling, slot booking, and real-time scheduling using Next.js, Tailwind CSS, Neon DB, and Vonage.",
    image: "/project/project2.png",
    tags: ["Next.js", "TailwindCSS", "Neon", "Vonage", "Shadcn UI"],
    demoUrl:
      "https://medimeet-telemedicine-video-consultation-platform.vercel.app/",
    githubUrl: "https://github.com/DipanshukrGit/MediMeet",
  },
  {
    id: 2,
    title: "DriveLux – AI Car Marketplace",
    description:
      "An AI-powered car marketplace that lets users explore and purchase premium vehicles through image-based search, personalized recommendations, and a seamless browsing experience.",
    image: "/project/project1.png",
    tags: ["Next.js", "Google Gemini AI", "Supabase", "Tailwind CSS"],
    demoUrl: "https://trimrr-coral.vercel.app/",
    githubUrl: "https://github.com/DipanshukrGit/DriveLux",
  },
  {
    id: 3,
    title: "Webyansh",
    description:
      "A scalable e-commerce platform featuring secure user authentication, dynamic product listings, and seamless Stripe payment integration.",
    image: "/project/project3.png",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB", "JWT"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectsPage() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section id="projects" className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="text-blue-600">Projects</span>
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Some of the recent work I've done, focusing on UI, performance, and
          full-stack development.
        </p>

        <div
          ref={containerRef}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <Card
              key={project.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group opacity-0 transform transition-all duration-300 p-0 border border-gray-200 hover:-translate-y-2 hover:bg-zinc-50 hover:shadow-lg hover:border-blue-500"
            >
              <div className="w-full h-48 relative overflow-hidden rounded-t-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <CardContent className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors duration-300"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors duration-300"
                  >
                    <FaGithub size={18} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/DipanshukrGit"
            target="_blank"
            className="inline-flex items-center gap-2 text-blue-600 hover:underline font-medium"
          >
            <FaGithub size={18} />
            Visit My GitHub Profile
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
