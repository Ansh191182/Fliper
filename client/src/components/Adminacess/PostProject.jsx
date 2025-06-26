import React, { useState } from "react";
import axios from "axios";
import styles from "../Adminacess/PostProject.module.css";

const PostProject = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null,
  });

  // ✅ Smart backend URL selection
  const BASE_URL =
    window.location.hostname === "localhost"
      ? "http://localhost:8000"
      : "https://fliper-1-uzjb.onrender.com";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("image", formData.image);

      const res = await axios.post(`${BASE_URL}/projectPost`, data);
      alert("Project submitted successfully!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Error submitting project.");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Post New Project</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Project Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
          rows="5"
          required
        ></textarea>

        <label htmlFor="image" className={styles.fileLabel}>
          Upload Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleFileChange}
          className={styles.fileInput}
          required
        />

        <button type="submit">Submit Project</button>
      </form>
    </div>
  );
};

export default PostProject;
