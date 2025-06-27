'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-12 py-8">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-2xl font-bold">DK</div>
        <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm font-medium">
          <Link href="#home" className="hover:text-white transition">Home</Link>
          <Link href="#about" className="hover:text-white transition">About Me</Link>
          <Link href="#projects" className="hover:text-white transition">Projects</Link>
          <Link href="#contact" className="hover:text-white transition">Contact Me</Link>
        </div>
      </div>

      <hr className="border-t border-gray-700 my-4" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-400">© 2025 All rights reserved</div>
        <div className="flex items-center gap-4">
          <a
            href="/Dipanshu_Kumar_CV.pdf"
            download
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-full text-sm text-white transition"
          >
            Download CV
          </a>
          <div className="flex gap-3">
            <a
              href="https://github.com/DipanshukrGit"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-white hover:text-black transition text-white text-lg"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/dipanshukumar04"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-600 transition text-white text-lg"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:dipanshuhub0411@gmail.com"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-red-600 transition text-white text-lg"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

