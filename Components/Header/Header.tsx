import cx from "classnames";
import { motion } from "framer-motion";
import styles from "./Header.module.scss";
import { DivButton } from "../Buttons/Buttons";
import NavigationBar from "../NavigationBar/NavigationBar";
import { contentVarient, headingVarient } from "./varients";

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <NavigationBar />
      <motion.div
        variants={contentVarient}
        initial="initial"
        animate="animated"
        className={styles.content}
      >
        <motion.h1 variants={headingVarient} className={cx([styles.title, "heading-primary"])}>
          A Full-Stack Developer and Designer who loves to create things and wants to have an impact
          on the world!
        </motion.h1>
        <motion.div variants={headingVarient}>
          <DivButton extraClasses={[styles.btn]}>Know more!</DivButton>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
