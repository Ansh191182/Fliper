import React from "react";
import ProjectCard from "../components/ProjectSection/ProjectCard";
import Navbar from "../components/navbar/Navbar";
import ClientCard from "../components/ClientCard/ClientCard";
import HeroSection from "../components/HeroSection/HeroSection";
import Contact from "../components/ContactFrom/Contact";
import NewSletter from "../components/NewSletter/NewSletter";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {<ProjectCard />}
      <ClientCard />
      <Contact />
      <NewSletter />
    </div>
  );
};

export default LandingPage;
