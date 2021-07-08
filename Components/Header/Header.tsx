import styles from "./Header.module.scss";
import NavigationBar from "../NavigationBar/NavigationBar";

const Header = () => {
  return (
    <header className={styles.container}>
      <NavigationBar />
    </header>
  );
};

export default Header;
