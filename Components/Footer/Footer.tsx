import cx from "classnames";
import { AiFillGithub, AiFillTwitterCircle, AiFillMail, AiFillLinkedin } from "react-icons/ai";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <hr className={styles.hr} />
      <div className={styles.content}>
        <div className={styles.about}>
          Built using <span className="make-special">Nextjs</span>, design and style by me!
        </div>
        <div className={styles.links}>
          <a target="_blank" rel="noreferrer" href="https://github.com/frostzt">
            <AiFillGithub className={styles.links_icon} />
          </a>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/souravsrawat">
            <AiFillTwitterCircle className={styles.links_icon} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:aidenfrostbite@gmail.com?subject=Important!"
          >
            <AiFillMail className={styles.links_icon} />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/frostzt/">
            <AiFillLinkedin className={styles.links_icon} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
