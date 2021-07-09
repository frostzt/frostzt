import cx from "classnames";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import NavigationBar from "../NavigationBar/NavigationBar";
import { nameVarient, parentVarient, spanVarient } from "./header.varients";

const Header = () => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log("In interval the value is: " + counter);
      if (counter === 3) {
        setCounter(1);
      } else {
        setCounter((counter) => counter + 1);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // console.log("Globally the value is: " + counter);

  return (
    <div className={styles.container}>
      <NavigationBar />
      <div className={styles.wrapper}>
        <motion.h1
          variants={parentVarient}
          initial="initial"
          animate="animated"
          className={styles.heading}
        >
          <motion.span
            variants={spanVarient}
            className={cx([
              styles.heading__part,
              counter % 3 !== 2 && counter % 3 !== 0 ? styles.animate : null,
            ])}
          >
            DESIGN
          </motion.span>
          <motion.span
            variants={spanVarient}
            className={cx([styles.heading__part, counter % 3 === 2 ? styles.animate : null])}
          >
            DEVELOP
          </motion.span>
          <motion.span
            variants={spanVarient}
            className={cx([styles.heading__part, counter % 3 === 0 ? styles.animate : null])}
          >
            IMPROVE
          </motion.span>
        </motion.h1>
        <motion.p
          variants={nameVarient}
          initial="initial"
          animate="animated"
          className={styles.content}
        >
          Hi! I am Sourav.
        </motion.p>
      </div>
    </div>
  );
};

export default Header;
