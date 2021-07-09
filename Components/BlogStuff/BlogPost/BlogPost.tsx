import styles from "./BlogPost.module.scss";

interface Props {
  title: string;
  link: string;
  description: string;
}

const BlogPost: React.FC<Props> = ({ title, description, link }) => {
  return (
    <div className={styles.post}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <a className="make-special" href={link} target="_blank" rel="noreferrer">
        Read more.
      </a>
    </div>
  );
};

export default BlogPost;
