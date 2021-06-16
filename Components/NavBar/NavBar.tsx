import React from "react";
import Link from "next/link";

// Styles and anim
import { motion } from "framer-motion";
import styles from "./NavBar.module.scss";

const NavBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link href="/skills">
        <div className={styles.links}>skills</div>
      </Link>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:aidenfrostbite@gmail.com?subject=Important!"
        style={{ textDecoration: "none" }}
      >
        <div className={styles.links}>contact me</div>
      </a>
      <a
        target="_blank"
        style={{ textDecoration: "none" }}
        href="https://drive.google.com/file/d/1FAoBmLjnoeEryZuMoeun2ElRGHownOei/view?usp=sharing"
      >
        <div className={styles.links}>resume</div>
      </a>
    </div>
  );
};

export default NavBar;
