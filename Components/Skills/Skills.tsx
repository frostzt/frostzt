import React from "react";

// Styles and animations
import { motion } from "framer-motion";
import styles from "./Skills.module.scss";

const Skills: React.FC = () => {
  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.languages}></motion.div>
      <motion.div className={styles.frontend}></motion.div>
      <motion.div className={styles.backend}></motion.div>
      <motion.div className={styles.databases}></motion.div>
      <motion.div className={styles.tools}></motion.div>
    </motion.div>
  );
};

export default Skills;
