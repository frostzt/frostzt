import React from "react";
import Image from "next/image";

// Styles
import { motion } from "framer-motion";
import styles from "./Project.module.scss";

interface Props {
  ltr?: Boolean;
}

const Project: React.FC<Props> = ({ ltr }) => {
  if (ltr) {
    return (
      <div className={styles.container}>
        <div className={styles.content} style={{ marginRight: "5rem" }}>
          <h2 className={styles.title}>Natours</h2>
          <div className={styles.about}>
            A travel booking website made using Nodejs, MongoDB, and Express.js.
            <br />
            This was my very first project through which I ever learned!
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.imageContainer__image}
            layout="fill"
            objectFit="cover"
            src="/images/projects/natours/natours-normal.png"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.imageContainer__image}
          layout="fill"
          objectFit="cover"
          src="/images/projects/natours/natours-normal.png"
        />
      </div>
      <div className={styles.content} style={{ marginLeft: "5rem" }}>
        <h2 className={styles.title}>Natours</h2>
        <div className={styles.about}>
          A travel booking website made using Nodejs, MongoDB, and Express.js.
          <br />
          This was my very first project through which I ever learned!
        </div>
      </div>
    </div>
  );
};

export default Project;
