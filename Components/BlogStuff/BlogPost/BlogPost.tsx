import Link from "next/link";
import styles from "./BlogPost.module.scss";

interface Props {
  title: string;
  description: string;
}

const BlogPost: React.FC<Props> = ({ title, description }) => {
  return (
    <div className={styles.post}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <a className="make-special" href="https://frostzt.netlify.app/failure/">
        Read more.
      </a>
    </div>
  );
};

export default BlogPost;
