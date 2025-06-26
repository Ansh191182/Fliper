import React, { useRef } from "react";
import ProjectCard from "../components/ProjectSection/ProjectCard";
import Navbar from "../components/navbar/Navbar";
import ClientCard from "../components/ClientCard/ClientCard";
import HeroSection from "../components/HeroSection/HeroSection";
import Contact from "../components/ContactFrom/Contact";
import NewSletter from "../components/NewSletter/NewSletter";

const LandingPage = () => {
  const projectRef = useRef(null);
  const clientRef = useRef(null);
  const contactRef = useRef(null);
  const newsletterRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar
        onProjectClick={() => scrollToSection(projectRef)}
        onClientClick={() => scrollToSection(clientRef)}
        onContactClick={() => scrollToSection(contactRef)}
        onNewsletterClick={() => scrollToSection(newsletterRef)}
      />
      <HeroSection />
      <div ref={projectRef}>
        <ProjectCard />
      </div>
      <div ref={clientRef}>
        <ClientCard />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <div ref={newsletterRef}>
        <NewSletter />
      </div>
    </div>
  );
};

export default LandingPage;
