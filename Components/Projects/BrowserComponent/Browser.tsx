import cx from "classnames";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Browser.module.scss";

interface Props {
  slug: string;
  image: string;
  primaryColor: string;
}

const Browser: React.FC<Props> = ({ primaryColor, image, slug }) => {
  return (
    <Link href={slug} passHref>
      <div className={styles.browser}>
        <motion.div
          whileHover={{
            opacity: 1,
            transition: {
              duration: 0.3,
            },
          }}
          className={styles.blackout}
        ></motion.div>
        <div className={styles.topBar} style={{ backgroundColor: primaryColor }}>
          <div className={styles.buttons}>
            <div className={cx([styles.buttons_btn, styles.green])} />
            <div className={cx([styles.buttons_btn, styles.orange])} />
            <div className={cx([styles.buttons_btn, styles.red])} />
          </div>
          <div className={styles.urlBar} />
        </div>
        <div className={styles.content}>
          <Image className={styles.image} src={image} alt="Althemic Project" layout="fill" />
        </div>
      </div>
    </Link>
  );
};

export default Browser;
