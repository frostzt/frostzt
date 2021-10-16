import React from "react";

// Styling
import styles from "./BlogBrief.module.scss";

interface Props {
  title: string;
  desc: string;
}

const BlogBrief: React.FC<Props> = ({ title, desc }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
};

export default BlogBrief;
