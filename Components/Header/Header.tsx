import cx from "classnames";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import NavigationBar from "../NavigationBar/NavigationBar";

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
        <h1 className={styles.heading}>
          <span
            className={cx([
              styles.heading__part,
              counter % 3 !== 2 && counter % 3 !== 0 ? styles.animate : null,
            ])}
          >
            DESIGN
          </span>
          <span className={cx([styles.heading__part, counter % 3 === 2 ? styles.animate : null])}>
            DEVELOP
          </span>
          <span className={cx([styles.heading__part, counter % 3 === 0 ? styles.animate : null])}>
            IMPROVE
          </span>
        </h1>
        <p className={styles.content}>Hi! I am Sourav.</p>
      </div>
    </div>
  );
};

export default Header;
