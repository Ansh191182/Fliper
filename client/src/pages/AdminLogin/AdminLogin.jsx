import React, { useRef, useState } from "react";
import styles from "../AdminLogin/AdminLogin.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const keyRef = useRef();
  const [showp, setShowP] = useState(false);

  const passwordHandler = () => {
    setShowP((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const key = keyRef.current.value;

    if (!key) {
      toast.warning("⚠️ Please enter the secret key");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/admin", {
        ADMIN_KEY: key,
      });

      if (response.data.success) {
        toast.success("✅ Welcome to the authorized panel 🔐");

        const expireTime = new Date().getTime() + 10 * 60 * 1000;
        localStorage.setItem("isAdmin", "true");
        localStorage.setItem("expireTime", expireTime);

        navigate("/EnterPage");
      } else {
        toast.error("❌ Invalid secret key");
      }
    } catch (error) {
      console.error("Error verifying secret key:", error.message);
      toast.error("❌ Server error! Please try again later.");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3 className={styles.heading}>Enter the Secret Key</h3>
        <div className={styles.inputWrapper}>
          <input
            type={showp ? "text" : "password"}
            ref={keyRef}
            placeholder="Enter the secret key"
            className={styles.input}
          />
          {showp ? (
            <FaEyeSlash onClick={passwordHandler} className={styles.icon} />
          ) : (
            <FaEye onClick={passwordHandler} className={styles.icon} />
          )}
        </div>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
