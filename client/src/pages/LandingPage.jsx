import React from "react";
import Navbar from "../component/Navbar";
import HeroSection from "../component/HeroSection";
import OurProject from "../component/OurProject";
import Client from "../component/Client";
import NewSeltter from "../component/NewSeltter";
import Footer from "../component/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <OurProject />
      <Client />
      <NewSeltter />
      <Footer />
    </div>
  );
};

export default LandingPage;
