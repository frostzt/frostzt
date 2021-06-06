import React from "react";

// Styles and animations
import { motion } from "framer-motion";
import styles from "./Skills.module.scss";

const Skills: React.FC = () => {
  return (
    <motion.div className={styles.container}>
      <motion.div style={{ marginTop: "5rem" }} className={styles.languages}>
        <motion.h2 className={styles.heading}>Languages</motion.h2>
        <motion.div className={styles.icons}>
          <i className="devicon-c-plain" />
          <i className="devicon-cplusplus-plain" />
          <i className="devicon-python-plain" />
          <i className="devicon-javascript-plain" />
          <i className="devicon-typescript-plain" />
          <i className="devicon-html5-plain" />
          <i className="devicon-css3-plain" />
          <i className="devicon-sass-original" />
        </motion.div>
      </motion.div>
      <motion.div className={styles.libraries}>
        <motion.h2 className={styles.heading}>Libraries</motion.h2>
        <motion.div className={styles.icons}>
          <i className="devicon-react-original" />
          <i className="devicon-nextjs-original" />
          <i className="devicon-graphql-plain" />
          <i className="devicon-express-original" />
          <i className="devicon-gatsby-plain" />
          <i className="devicon-nodejs-plain-wordmark" />
          <i className="devicon-redux-original" />
        </motion.div>
      </motion.div>
      <motion.div className={styles.databases}>
        <motion.h2 className={styles.heading}>Databases</motion.h2>
        <motion.div className={styles.icons}>
          <i className="devicon-mongodb-plain-wordmark" />
          <i className="devicon-postgresql-plain" />
          <i className="devicon-mysql-plain" />
        </motion.div>
      </motion.div>
      <motion.div className={styles.tools}>
        <motion.h2 className={styles.heading}>Tools</motion.h2>
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "var(--text-color)",
            fontSize: "6rem",
          }}
        >
          <div
            className={styles.pack}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "2rem",
            }}
          >
            <i className="devicon-aftereffects-plain" />
            <i className="devicon-babel-plain" />
            <i className="devicon-docker-plain" />
            <i className="devicon-figma-plain" />
            <i className="devicon-firefox-plain" />
            <i className="devicon-gimp-plain" />
            <i className="devicon-git-plain" />
            <i className="devicon-heroku-original" />
          </div>
          <div
            className={styles.pack}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <i className="devicon-illustrator-plain" />
            <i className="devicon-photoshop-plain" />
            <i className="devicon-premierepro-plain" />
            <i className="devicon-ubuntu-plain" />
            <i className="devicon-vim-plain" />
            <i className="devicon-visualstudio-plain" />
            <i className="devicon-webpack-plain" />
            <i className="devicon-xd-plain" />
          </div>
        </motion.div>
      </motion.div>
      <motion.div className={styles.extra}>
        <motion.h2 className={styles.heading}>Learning</motion.h2>
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "var(--text-color)",
            fontSize: "6rem",
          }}
        >
          <div
            className={styles.pack}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "2rem",
            }}
          >
            <i className="devicon-amazonwebservices-plain-wordmark" />
            <i className="devicon-dart-plain" />
            <i className="devicon-d3js-plain" />
            <i className="devicon-django-plain" />
            <i className="devicon-firebase-plain" />
            <i className="devicon-flutter-plain" />
            <i className="devicon-go-plain" />
          </div>
          <div
            className={styles.pack}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <i className="devicon-kubernetes-plain" />
            <i className="devicon-nestjs-plain" />
            <i className="devicon-nginx-original" />
            <i className="devicon-rails-plain" />
            <i className="devicon-redis-plain" />
            <i className="devicon-ruby-plain" />
            <i className="devicon-rust-plain" />
            <i className="devicon-vuejs-plain" />
          </div>
        </motion.div>
      </motion.div>
      <motion.div className={styles.extra}>
        <motion.h2 className={styles.heading}>Extra Stuff</motion.h2>
        <motion.div className={styles.icons}></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;

// Language = C C++ Python JS TS HTML CSS
