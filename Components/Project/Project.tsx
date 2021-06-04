import React from "react";
import Image from "next/image";

// Styles
import { motion } from "framer-motion";
import styles from "./Project.module.scss";

const Project = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}></div>
      <h2 className={styles.title}></h2>
      <div className={styles.about}></div>
    </div>
  );
};

export default Project;
