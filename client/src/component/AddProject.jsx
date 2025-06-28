import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProject = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image || !name || !description) {
      return toast.error("Please fill in all fields");
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("description", description);

    const renderURL = "https://fliper-1-uzjb.onrender.com/projectPost";
    const localURL = "http://localhost:8000/projectPost";

    setLoading(true);
    try {
      await axios.post(renderURL, formData);
      toast.success("Project added successfully (Render)");
      resetForm();
    } catch (err) {
      try {
        await axios.post(localURL, formData);
        toast.success("Project added successfully (Localhost)");
        resetForm();
      } catch (error) {
        toast.error("Failed to add project");
      }
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setImage(null);
    setPreview(null);
    setName("");
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-xl space-y-6"
        encType="multipart/form-data"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">
          Add New Project
        </h2>

        {/* Image Preview */}
        <div className="flex flex-col items-center">
          <img
            src={
              preview ||
              "https://via.placeholder.com/300x200.png?text=Preview+Image"
            }
            alt="preview"
            className="w-64 h-40 object-cover rounded-md shadow-md mb-4"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border rounded-md p-2"
          />
        </div>

        {/* Name Input */}
        <div>
          <label className="block text-gray-700 mb-1">Project Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter project name"
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description Input */}
        <div>
          <label className="block text-gray-700 mb-1">
            Project Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter project description"
            rows={4}
            className="w-full border px-4 py-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 text-white font-semibold rounded-md transition ${
            loading
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Uploading..." : "Submit Project"}
        </button>
      </form>

      <ToastContainer position="top-center" />
    </div>
  );
};

export default AddProject;
