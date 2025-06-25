import styles from "../Navbar/Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <img src="/logo.svg" alt="Logo" className={styles.logo} />

      <div className={styles.links}>
        <Link to="#">Our Project</Link>
        <Link to="#">Happy Client</Link>
        <Link to="#">Contact Form</Link>
        <Link to="#">Newsletter</Link>
      </div>
    </div>
  );
};

export default Navbar;
