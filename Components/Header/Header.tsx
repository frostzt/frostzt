import cx from "classnames";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import NavigationBar from "../NavigationBar/NavigationBar";

const Header = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter === 2) {
        setCounter(0);
      } else {
        setCounter((counter) => counter + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  console.log(counter);

  return (
    <div className={styles.container}>
      <NavigationBar />
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>
          <span className={cx([styles.heading__part, counter === 0 ? styles.animate : null])}>
            DESIGN
          </span>
          <span className={cx([styles.heading__part, counter === 1 ? styles.animate : null])}>
            DEVELOP
          </span>
          <span className={cx([styles.heading__part, counter === 2 ? styles.animate : null])}>
            IMPROVE
          </span>
        </h1>
        <p className={styles.content}>Hi! I am Sourav.</p>
      </div>
    </div>
  );
};

export default Header;
