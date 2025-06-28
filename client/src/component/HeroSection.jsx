import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const renderURL = "https://fliper-1-uzjb.onrender.com/contact";
    const localURL = "http://localhost:8000/contact";

    try {
      await axios.post(renderURL, formData);
      toast.success("Submitted successfully ");
    } catch (err) {
      try {
        await axios.post(localURL, formData);
        toast.success("Submitted successfully to Localhost!");
      } catch (error) {
        toast.error("Submission failed! Try again later.");
      }
    }

    setFormData({ name: "", email: "", phone: "", city: "" });
  };

  return (
    <section className="relative min-h-screen w-full">
      {/* Background Image */}
      <img
        src="hero.svg"
        alt="hero background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div> */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center text-white min-h-screen">
        {/* Left Side */}
        <div className="space-y-4">
          <p className="text-lg text-blue-300 font-semibold">
            Consultation, Design, Marketing
          </p>
          <h2 className="text-4xl font-bold leading-tight">
            Get a Free Consultation
          </h2>
          <p className="text-gray-300">
            Connect with our expert team to grow your brand online and offline.
          </p>
        </div>

        {/* Right Side Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-blue-500 bg-opacity-40 rounded-2xl p-8 shadow-xl space-y-4 text-white backdrop-blur-md"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full p-3 border border-white bg-transparent text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full p-3 border border-white bg-transparent text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Mobile Number"
            required
            className="w-full p-3 border border-white bg-transparent text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Area / City"
            required
            className="w-full p-3 border border-white bg-transparent text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="w-full bg-white text-blue-700 py-3 rounded-md hover:bg-gray-100 font-semibold transition duration-200"
          >
            Get Quick Quote
          </button>
        </form>
      </div>

      <ToastContainer position="top-right" />
    </section>
  );
};

export default HeroSection;
