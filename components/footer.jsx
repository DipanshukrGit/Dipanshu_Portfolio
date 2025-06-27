'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white text-black px-6 md:px-12 py-8 border-t border-gray-200">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-2xl font-bold">DK</div>
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <Link href="#home" className="text-black-600 hover:text-blue-800 transition">Home</Link>
          <Link href="#about" className="text-black-600 hover:text-blue-800 transition">About Me</Link>
          <Link href="#projects" className="text-black-600 hover:text-blue-800 transition">Projects</Link>
          <Link href="#contact" className="text-black-600 hover:text-blue-800 transition">Contact Me</Link>
        </div>
      </div>

      <hr className="border-t border-gray-300 my-4" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-600">© 2025 All rights reserved</div>
        <div className="flex items-center gap-4">
          <a
            href="/Dipanshu_Kumar_CV.pdf"
            download
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full text-sm transition hover:bg-blue-600 hover:text-white"
          >
            Download CV
          </a>
          <div className="flex gap-3">
            <a
              href="https://github.com/DipanshukrGit"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-black hover:text-white transition text-black text-lg"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/dipanshukumar04"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white transition text-black text-lg"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:dipanshuhub0411@gmail.com"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-red-500 hover:text-white transition text-black text-lg"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
