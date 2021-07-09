import styles from "./Header.module.scss";
import NavigationBar from "../NavigationBar/NavigationBar";

const Header = () => {
  return (
    <div className={styles.container}>
      <NavigationBar />
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>
          <span className={styles.heading__part}>DESIGN</span>
          <span className={styles.heading__part}>DEVELOP</span>
          <span className={styles.heading__part}>IMPROVE</span>
        </h1>
        <p className={styles.content}>Hi! I am Sourav.</p>
      </div>
    </div>
  );
};

export default Header;
