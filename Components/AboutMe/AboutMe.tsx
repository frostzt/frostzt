import cx from "classnames";
import { motion } from "framer-motion";
import styles from "./AboutMe.module.scss";
import { DivButton } from "../Buttons/Buttons";
import { contentVarient, headingVarient } from "./varients";

const AboutMe: React.FC = () => {
  return (
    <div className={styles.container}>
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
      </motion.div>
    </div>
  );
};

export default AboutMe;
