import Link from "next/link";
import styles from "./NavigationBar.module.scss";

const NavigationBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <div className={styles.link}>
          <Link href="/skills">skills</Link>
        </div>
        <div className={styles.link}>
          <Link href="/contact">contact</Link>
        </div>
        <div className={styles.link}>
          <Link href="/contact">resume</Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
