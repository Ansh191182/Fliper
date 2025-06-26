import styles from "../Navbar/Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = ({
  onProjectClick,
  onClientClick,
  onContactClick,
  onNewsletterClick,
}) => {
  return (
    <div className={styles.container}>
      <img src="/logo.svg" alt="Logo" className={styles.logo} />

      <div className={styles.links}>
        <button onClick={onProjectClick} className={styles.linkBtn}>
          Our Project
        </button>
        <button onClick={onClientClick} className={styles.linkBtn}>
          Happy Client
        </button>
        <button onClick={onContactClick} className={styles.linkBtn}>
          Contact Form
        </button>
        <button onClick={onNewsletterClick} className={styles.linkBtn}>
          Newsletter
        </button>
      </div>
    </div>
  );
};

export default Navbar;
