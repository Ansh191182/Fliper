import styles from "../HeroSection/HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1>Welcome to Our Platform</h1>
        <p>We create solutions for your growth.</p>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default HeroSection;
