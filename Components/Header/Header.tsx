import styles from "./Header.module.scss";
import NavigationBar from "../NavigationBar/NavigationBar";

const Header = () => {
  return (
    <div className={styles.container}>
      <NavigationBar />
      <div className={styles.wrapper}>
        <h1>
          <span>DESIGN</span>
          <span>DEVELOP</span>
          <span>IMPROVE</span>
        </h1>
        <p className={styles.content}>Hi! I am Sourav.</p>
      </div>
    </div>
  );
};

export default Header;
