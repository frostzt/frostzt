import React from "react";
import Image from "next/image";

// Styles
import styles from "./Project.module.scss";

interface Props {
  ltr?: Boolean;
  title: string;
  about: string;
  imgurl: string;
  to: string;
}

const Project: React.FC<Props> = ({
  ltr = false,
  title,
  about,
  imgurl,
  to,
}) => {
  return (
    <a href={to} className={styles.link} target="_blank">
      <div className={styles.container}>
        <div
          className={styles.readmore}
          style={{
            top: "50%",
            right: ltr ? "auto" : "5%",
            left: ltr ? "5%" : "auto",
            transform: "translateY(-50%)",
          }}
        >
          Check it out!
        </div>
        <div className={styles.imageContainer} style={{ order: ltr ? 3 : 2 }}>
          <Image
            className={styles.imageContainer__image}
            layout="fill"
            objectFit="cover"
            src={imgurl}
            alt={title}
          />
        </div>
        <div
          className={styles.content}
          style={{ marginLeft: "5rem", order: ltr ? 2 : 3 }}
        >
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.about}>{about}</div>
        </div>
      </div>
    </a>
  );
};

export default Project;
