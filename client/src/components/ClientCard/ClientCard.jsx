import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../ContactFrom/Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  // ✅ Dynamic BASE URL for backend
  const BASE_URL =
    window.location.hostname === "localhost"
      ? "http://localhost:8000"
      : "https://fliper-1-uzjb.onrender.com";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/contact`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success("Message sent successfully! 🎉");
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
      });
    } catch (err) {
      console.error("Error in POST request:", err);
      toast.error("Failed to send message ❌");
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.left}>
        <h1>Let's Connect</h1>
        <p>
          Have a question, idea, or just want to say hi? <br />
          Drop us a message and we'll get back to you shortly!
        </p>
      </div>

      <div className={styles.right}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="Area, City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
