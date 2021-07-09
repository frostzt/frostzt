import cx from "classnames";
import Image from "next/image";
import styles from "./Browser.module.scss";

interface Props {
  primaryColor: string;
}

const Browser: React.FC<Props> = ({ primaryColor }) => {
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
      <div className={styles.content}>{/* <Image  /> */}</div>
    </div>
  );
};

export default Browser;
