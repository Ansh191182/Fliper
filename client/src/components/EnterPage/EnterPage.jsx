import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../EnterPage/EnterPage.module.css";

const EnterPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Admin Access Portal</h2>
      <div className={styles.buttonGroup}>
        <button onClick={() => navigate("/getClient")}>Show Clients</button>
        <button onClick={() => navigate("/contact")}>Contact Form</button>
        <button onClick={() => navigate("/postclient")}>Post Client</button>
        <button onClick={() => navigate("/postProject")}>Post Project</button>
      </div>
    </div>
  );
};

export default EnterPage;
