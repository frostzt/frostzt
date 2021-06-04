import React from "react";
import Image from "next/image";

// Styles
import { motion } from "framer-motion";
import styles from "./Project.module.scss";

interface Props {
  ltr?: Boolean;
  title: string;
  about: string;
  imgurl: string;
}

const Project: React.FC<Props> = ({ ltr, title, about, imgurl }) => {
  if (ltr) {
    return (
      <div className={styles.container}>
        <div className={styles.content} style={{ marginRight: "5rem" }}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.about}>{about}</div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.imageContainer__image}
            layout="fill"
            objectFit="cover"
            src={imgurl}
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
          src={imgurl}
        />
      </div>
      <div className={styles.content} style={{ marginLeft: "5rem" }}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.about}>{about}</div>
      </div>
    </div>
  );
};

export default Project;
