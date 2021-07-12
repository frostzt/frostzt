import cx from "classnames";
import styles from "./BlogSnip.module.scss";
import BlogPost from "../BlogPost/BlogPost";

const BlogSnip = () => {
  return (
    <div className={styles.container}>
      <h2 className={cx([styles.title, "heading-secondary", "make-special"])}>Philosophy?</h2>
      <div className={styles.postsContainer}>
        <BlogPost
          title="Failure, according to me"
          link="https://frostzt.netlify.app/failure/"
          description="Failure is a word I guess literally every person might fear in this world! Be it a man or woman, surprisingly even animals have a sense of it."
        />
      </div>
    </div>
  );
};

export default BlogSnip;
