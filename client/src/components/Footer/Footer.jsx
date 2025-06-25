import styles from "../Footer/Fotter.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>© 2025 Flipper Company. All rights reserved.</p>
        <p>Contact: support@flipper.com </p>
      </div>
    </footer>
  );
};

export default Footer;
