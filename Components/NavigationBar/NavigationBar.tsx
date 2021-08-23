import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./NavigationBar.module.scss";
import { linkVarient, parentVarient } from "./navigation-bar.varients";

const NavigationBar = () => {
  return (
    <div className={styles.container}>
      <motion.div
        variants={parentVarient}
        initial="initial"
        animate="animated"
        className={styles.links}
      >
        {/* <motion.div variants={linkVarient} className={styles.link}>
          <Link href="/skills">skills</Link>
        </motion.div> */}
        <motion.div variants={linkVarient} className={styles.link}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:aidenfrostbite@gmail.com?subject=Important!"
          >
            contact
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NavigationBar;
