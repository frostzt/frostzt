import cx from "classnames";
import styles from "./Header.module.scss";
import NavigationBar from "../NavigationBar/NavigationBar";

const Header = () => {
  return (
    <header className={styles.container}>
      <NavigationBar />
      <div className={styles.content}>
        <h1 className={cx([styles.title, "heading-primary"])}>
          A Full-Stack Developer and Designer who loves to create things and
          wants to have an impact on the world!
        </h1>
      </div>
    </header>
  );
};

export default Header;
