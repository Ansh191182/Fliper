import React from "react";
import styles from "../NewSletter/NewSletter.module.css";

const NewSletter = () => {
  return (
    <div className={styles.newsletter}>
      <div className={styles.links}>
        <p>Home</p>
        <p>Service</p>
        <p>Project</p>
        <p>Testimonials</p>
      </div>

      <div className={styles.inputGroup}>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewSletter;
