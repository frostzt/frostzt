import Head from "next/head";

// Styles and animations
import { motion } from "framer-motion";
import styles from "./index.module.scss";

// Components
import Projects from "../../Components/Projects/Projects";

const ProjectsPage = () => {
  return (
    <motion.div className={styles.container}>
      <Head>
        <title>Projects</title>
      </Head>
      <motion.h2
        initial={{
          fontSize: "25rem",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          left: "-15%",
          top: "35%",
          fontSize: "22rem",
          transform: "translate(-50%, -50%)",
          rotateZ: "-90deg",
        }}
        transition={{ duration: 0.8 }}
        className={styles.projectTitle}
      >
        projects
      </motion.h2>
      <motion.div className={styles.fixed}>&nbsp;</motion.div>
      <motion.div className={styles.projectsContainer}>
        <Projects />
      </motion.div>
    </motion.div>
  );
};

export default ProjectsPage;
