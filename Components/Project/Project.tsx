import React from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

// Styles
import styles from "./Project.module.scss";

interface Props {
  ltr?: Boolean;
  title: string;
  about: string;
  imgurl: string;
  to: string;
}

const Project: React.FC<Props> = ({ ltr, title, about, imgurl, to }) => {
  const isMobileLarge = useMediaQuery({ maxWidth: 425 });

  if (isMobileLarge) {
    return (
      <a href={to} className={styles.link} target="_blank">
        <div className={styles.container}>
          <div className={styles.content}>
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
      </a>
    );
  }

  if (ltr) {
    return (
      <a href={to} className={styles.link} target="_blank">
        <div className={styles.container}>
          <div
            className={styles.readmore}
            style={{ top: "50%", left: "5%", transform: "translateY(-50%)" }}
          >
            Check it out!
          </div>
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
      </a>
    );
  }

  return (
    <a href={to} className={styles.link} target="_blank">
      <div className={styles.container}>
        <div
          className={styles.readmore}
          style={{ top: "50%", right: "5%", transform: "translateY(-50%)" }}
        >
          Check it out!
        </div>
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
    </a>
  );
};

export default Project;
