import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left: Text */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} All rights reserved by{" "}
          <span className="font-semibold">Fliper</span>
        </p>

        {/* Right: Social Icons */}
        <div className="flex space-x-4">
          <a href="#" target="_blank" rel="noreferrer">
            <img
              src="Linkedin.svg"
              alt="LinkedIn"
              className="w-6 h-6 hover:scale-110 transition-transform"
            />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <img
              src="Group.svg"
              alt="Facebook"
              className="w-6 h-6 hover:scale-110 transition-transform"
            />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <img
              src="Group2.svg"
              alt="Instagram"
              className="w-6 h-6 hover:scale-110 transition-transform"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
