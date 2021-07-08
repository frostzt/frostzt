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
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:aidenfrostbite@gmail.com?subject=Important!"
          >
            contact
          </a>
        </div>
        <div className={styles.link}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1FAoBmLjnoeEryZuMoeun2ElRGHownOei/view?usp=sharing"
          >
            resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
