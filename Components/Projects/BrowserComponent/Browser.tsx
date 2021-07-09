import cx from "classnames";
import Image from "next/image";
import styles from "./Browser.module.scss";

interface Props {
  image: string;
  primaryColor: string;
}

const Browser: React.FC<Props> = ({ primaryColor, image }) => {
  return (
    <div className={styles.browser}>
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
  );
};

export default Browser;
