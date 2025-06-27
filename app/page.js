'use client';

import AboutSection from "@/components/aboutGsap";
import AboutPage from "@/components/aboutSection";
import Contact from "@/components/contactGsap";
import ContactSection from "@/components/contactSection";
import Footer from "@/components/footer";
import HomeSection from "@/components/homeSection";
import ProjectSection from "@/components/projectGsap";
import ProjectsPage from "@/components/projectSection";


export default function Home() {
  return (
    <div className="overflow-x-hidden w-full">
      {/* Home Section */}
      <main id="home">
        <HomeSection />
      </main>

      {/* About Section */}
      <div id="about">
        <AboutSection />
        <AboutPage />
      </div>

      {/* Projects Section */}
      <div id="projects">
        <ProjectSection />
        <ProjectsPage />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <Contact/>
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
