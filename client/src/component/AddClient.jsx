import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddClient = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
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

    if (!image || !name || !designation || !description) {
      return toast.error("Please fill in all fields");
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("designation", designation);
    formData.append("description", description);

    const renderURL = "https://fliper-1-uzjb.onrender.com/clientPost";
    const localURL = "http://localhost:8000/clientPost";

    setLoading(true);
    try {
      await axios.post(renderURL, formData);
      toast.success("Client added successfully (Render)");
      resetForm();
    } catch (err) {
      try {
        await axios.post(localURL, formData);
        toast.success("Client added successfully (Localhost)");
        resetForm();
      } catch (error) {
        toast.error("Failed to add client");
      }
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setImage(null);
    setPreview(null);
    setName("");
    setDesignation("");
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-xl space-y-6"
        encType="multipart/form-data"
      >
        <h2 className="text-3xl font-bold text-center text-green-700 mb-4">
          Add Client
        </h2>

        {/* Image Preview */}
        <div className="flex flex-col items-center">
          <img
            src={
              preview ||
              "https://via.placeholder.com/300x200.png?text=Client+Image"
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

        {/* Name */}
        <div>
          <label className="block text-gray-700 mb-1">Client Name</label>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Designation */}
        <div>
          <label className="block text-gray-700 mb-1">Designation</label>
          <input
            type="text"
            placeholder="e.g. CEO, Designer"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 mb-1">Description</label>
          <textarea
            placeholder="Client feedback or description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full border px-4 py-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 text-white font-semibold rounded-md transition ${
            loading
              ? "bg-green-300 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {loading ? "Uploading..." : "Submit Client"}
        </button>
      </form>

      <ToastContainer position="top-center" />
    </div>
  );
};

export default AddClient;
