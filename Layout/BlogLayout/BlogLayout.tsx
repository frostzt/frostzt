import React from "react";

// Styling
import styles from "./BlogLayout.module.scss";

interface Props {
  children: React.ReactNode;
}

const BlogLayout: React.FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default BlogLayout;
