import React, { useState } from "react";
import axios from "axios";
import styles from "../Adminacess/PostClient.module.css";

const PostClient = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    description: "",
    image: null,
  });

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
      data.append("designation", formData.designation);
      data.append("description", formData.description);
      data.append("image", formData.image);

      const res = await axios.post("http://localhost:8000/clientPost", data);
      alert("Client added successfully!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Error adding client.");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Post New Client</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Client Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="designation"
          placeholder="Client Designation"
          value={formData.designation}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Client Description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>

        <label htmlFor="image" className={styles.fileLabel}>
          Upload Client Image
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

        <button type="submit">Submit Client</button>
      </form>
    </div>
  );
};

export default PostClient;
