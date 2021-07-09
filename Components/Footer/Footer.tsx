import styles from "./Footer.module.scss";
import { AiFillGithub, AiFillTwitterCircle, AiFillMail, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <hr className={styles.hr} />
      <div className={styles.content}>
        <div className={styles.about}>Built using Nextjs, designed and style by me!</div>
        <div className={styles.links}>
          <figure>
            <AiFillGithub className={styles.links_icon} />
          </figure>
          <figure>
            <AiFillTwitterCircle className={styles.links_icon} />
          </figure>
          <figure>
            <AiFillMail className={styles.links_icon} />
          </figure>
          <figure>
            <AiFillLinkedin className={styles.links_icon} />
          </figure>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
