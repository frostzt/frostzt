import cx from "classnames";
import { motion } from "framer-motion";
import styles from "./AboutMe.module.scss";
import { contentVarient, headingVarient } from "./aboutme.varients";

const AboutMe: React.FC = () => {
  return (
    <div className={styles.container}>
      <motion.div
        variants={contentVarient}
        initial="initial"
        animate="animated"
        className={styles.content}
      >
        <motion.h2 variants={headingVarient} className={cx([styles.title, "heading-secondary"])}>
          A Full-Stack Developer and Designer who loves to create things and wants to have an impact
          on the world! I think a lot!
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default AboutMe;
