import React from "react";

// Styles and animations
import { motion } from "framer-motion";
import styles from "./Skills.module.scss";

// Icons
import { FaGuitar } from "react-icons/fa";
import { AiFillBook } from "react-icons/ai";
import { TiDocumentText } from "react-icons/ti";
import { GiPencilBrush, GiSing } from "react-icons/gi";

const Skills: React.FC = () => {
  return (
    <motion.div className={styles.container}>
      <motion.div style={{ marginTop: "5rem" }} className={styles.languages}>
        <motion.h2 className={styles.heading}>Languages</motion.h2>
        <motion.div className={styles.icons}>
          <i title="JavaScript" className="devicon-javascript-plain" />
          <i title="TypeScript" className="devicon-typescript-plain" />
          <i title="HTML5" className="devicon-html5-plain" />
          <i title="CSS3" className="devicon-css3-plain" />
          <i title="SASS" className="devicon-sass-original" />
        </motion.div>
      </motion.div>
      <motion.div className={styles.libraries}>
        <motion.h2 className={styles.heading}>Libraries</motion.h2>
        <motion.div className={styles.icons}>
          <i title="Reactjs" className="devicon-react-original" />
          <i title="Nextjs" className="devicon-nextjs-original" />
          <i title="GraphQL" className="devicon-graphql-plain" />
          <i title="Expressjs" className="devicon-express-original" />
          <i title="Gatsby" className="devicon-gatsby-plain" />
          <i title="Nodejs" className="devicon-nodejs-plain-wordmark" />
          <i title="Redux" className="devicon-redux-original" />
        </motion.div>
      </motion.div>
      <motion.div className={styles.databases}>
        <motion.h2 className={styles.heading}>Databases</motion.h2>
        <motion.div className={styles.icons}>
          <i title="MongoDB" className="devicon-mongodb-plain-wordmark" />
          <i title="PostgreSql" className="devicon-postgresql-plain" />
          <i title="MySQL" className="devicon-mysql-plain" />
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
            <i title="After Effects" className="devicon-aftereffects-plain" />
            <i title="Babel" className="devicon-babel-plain" />
            <i title="Docker" className="devicon-docker-plain" />
            <i title="Figma" className="devicon-figma-plain" />
            <i title="Firefox" className="devicon-firefox-plain" />
            <i
              title="GNU Image Manipulation Tool (GIMP)"
              className="devicon-gimp-plain"
            />
            <i title="Git" className="devicon-git-plain" />
            <i title="Heroku" className="devicon-heroku-original" />
          </div>
          <div
            className={styles.pack}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <i title="Illustrator" className="devicon-illustrator-plain" />
            <i title="Photoshop" className="devicon-photoshop-plain" />
            <i title="Premiere Pro" className="devicon-premierepro-plain" />
            <i title="Ubuntu" className="devicon-ubuntu-plain" />
            <i title="VIM" className="devicon-vim-plain" />
            <i title="VSCode" className="devicon-visualstudio-plain" />
            <i title="WebPack" className="devicon-webpack-plain" />
            <i title="Adobe Xd" className="devicon-xd-plain" />
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
            <i
              title="AWS"
              className="devicon-amazonwebservices-plain-wordmark"
            />
            <i title="Dart" className="devicon-dart-plain" />
            <i title="D3js" className="devicon-d3js-plain" />
            <i title="Django" className="devicon-django-plain" />
            <i title="Firebase" className="devicon-firebase-plain" />
            <i title="Flutter" className="devicon-flutter-plain" />
            <i title="Go" className="devicon-go-plain" />
            <i title="C" className="devicon-c-plain" />
            <i title="C++" className="devicon-cplusplus-plain" />
          </div>
          <div
            className={styles.pack}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <i title="Kubernetes" className="devicon-kubernetes-plain" />
            <i title="Nestjs" className="devicon-nestjs-plain" />
            <i title="Nginx" className="devicon-nginx-original" />
            <i title="Ruby on Rails" className="devicon-rails-plain" />
            <i title="Redis" className="devicon-redis-plain" />
            <i title="Ruby" className="devicon-ruby-plain" />
            <i title="Rust" className="devicon-rust-plain" />
            <i title="Python" className="devicon-python-plain" />
            <i title="Vuejs" className="devicon-vuejs-plain" />
          </div>
        </motion.div>
      </motion.div>
      <motion.div className={styles.extra}>
        <motion.h2 className={styles.heading}>Extra Stuff</motion.h2>
        <motion.div className={styles.icons}>
          <FaGuitar title="Playing Guitar" />
          <GiPencilBrush title="Drawing" />
          <GiSing title="Singing" />
          <TiDocumentText title="Writing" />
          <AiFillBook title="Reading" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
