import Head from "next/head";
import { useState } from "react";

// Styles and animations
import cx from "classnames";
import { motion } from "framer-motion";
import styles from "./index.module.scss";

// Components
import Skills from "../../Components/Skills/Skills";
import Projects from "../../Components/Projects/Projects";

// Layout
import Scroll from "../../Layouts/Scroll";

const ProjectsPage = () => {
  const [currentSelect, setCurrentSelect] = useState<string>("projects");

  const projectVariant = {
    normal: {
      fontSize: "25rem",
      top: "25%",
      left: "50%",
      transform: "translate(-50%, -25%)",
    },
    animated: {
      left: "-15%",
      top: "35%",
      fontSize: "22rem",
      transform: "translate(-50%, -50%)",
      rotateZ: "-90deg",
    },
  };

  const skillsVariant = {
    normal: {
      fontSize: "25rem",
      top: "35%",
      right: "-20%",
      opacity: 0,
      transform: "translate(-50%, -50%)",
      rotateZ: "-90deg",
    },
    animated: {
      right: "-5%",
      top: "35%",
      opacity: 1,
      fontSize: "22rem",
      transform: "translate(-50%, -50%)",
      rotateZ: "-90deg",
    },
  };

  return (
    <Scroll>
      <motion.div className={styles.container}>
        <Head>
          <title>Projects</title>
        </Head>
        {/* Side Projects Heading */}
        <motion.h2
          initial="normal"
          animate="animated"
          variants={projectVariant}
          onClick={() => setCurrentSelect("projects")}
          transition={{ duration: 0.8 }}
          className={cx([
            styles.projectTitle,
            currentSelect === "projects" ? styles.selected : "",
          ])}
        >
          projects
        </motion.h2>
        <div className={styles.projectFixed}>&nbsp;</div>

        {/* Main Content */}
        <motion.div className={styles.projectsContainer}>
          {currentSelect === "projects" ? <Projects /> : <Skills />}
        </motion.div>

        {/* Side Skill Heading */}
        <div className={styles.skillFixed}>&nbsp;</div>
        <motion.h2
          initial="normal"
          animate="animated"
          variants={skillsVariant}
          transition={{ duration: 0.8 }}
          onClick={() => setCurrentSelect("skills")}
          className={cx([
            styles.projectTitle,
            currentSelect === "skills" ? styles.selected : "",
          ])}
        >
          skills
        </motion.h2>
      </motion.div>
    </Scroll>
  );
};

export default ProjectsPage;
