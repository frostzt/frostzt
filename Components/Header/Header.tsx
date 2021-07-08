import styles from "./Header.module.scss";
import { DivButton } from "../Buttons/Buttons";
import NavigationBar from "../NavigationBar/NavigationBar";

const Header = () => {
  return (
    <div className={styles.container}>
      <NavigationBar />
      <DivButton extraClasses={[styles.btn]}>Know more!</DivButton>
    </div>
  );
};

export default Header;
