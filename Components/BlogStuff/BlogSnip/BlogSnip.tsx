import cx from "classnames";
import styles from "./BlogSnip.module.scss";

const BlogSnip = () => {
  return (
    <div className={styles.container}>
      <h2 className={cx([styles.title, "heading-secondary", "make-special"])}>Philosophy?</h2>
      <div className={styles.postsContainer}></div>
    </div>
  );
};

export default BlogSnip;
