import React from "react";

const NewSeltter = () => {
  return (
    <div className="bg-blue-600 text-white px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
      {/* Left Links */}
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
        <p className="cursor-pointer hover:underline">Home</p>
        <p className="cursor-pointer hover:underline">Our Project</p>
        <p className="cursor-pointer hover:underline">Happy Client</p>
        <p className="cursor-pointer hover:underline">Contact Form</p>
      </div>

      {/* Right Input and Button */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Enter email address"
          className="px-4 py-2 rounded-md text-black bg-white focus:outline-none w-64"
        />
        <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-md hover:bg-gray-200">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewSeltter;
