import React from "react";

// Styles
import styles from "./Scroll.module.scss";

const Scroll: React.FC = ({ children }) => {
  return <div className={styles.scroll}>{children}</div>;
};

export default Scroll;
