import styles from "./Header.module.scss";
import { DivButton } from "../Buttons/Buttons";
import NavigationBar from "../NavigationBar/NavigationBar";
import ProfilePicture from "../ProfilePicture/ProfilePicture";

const Header = () => {
  return (
    <div className={styles.container}>
      <NavigationBar />
      <div className={styles.wrapper}>
        <ProfilePicture />
        <p className={styles.content}>Hi! I am Sourav.</p>
      </div>
    </div>
  );
};

export default Header;
