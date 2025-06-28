import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Left Side */}
          <div className="flex items-center">
            <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Navigation Right Side */}
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection("project")}
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-200"
            >
              Our Project
            </button>
            <button
              onClick={() => scrollToSection("happy-client")}
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-200"
            >
              Happy Client
            </button>
            <button
              onClick={() => scrollToSection("newsletter")}
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-200"
            >
              Newsletter Subscription
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-200"
            >
              Contact Form
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
