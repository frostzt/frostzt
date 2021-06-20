import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

// Styles and animations
import styles from "./Projects.module.scss";
import { motion, useAnimation } from "framer-motion";

// Components
import Project from "../Project/Project";

interface Props {
  isVisible: Boolean;
}

const Projects: React.FC<Props> = ({ isVisible }) => {
  const containerControl = useAnimation();

  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });

  useEffect(() => {
    if (isVisible) {
      containerControl.start("visible");
    }
  }, [isVisible]);

  const containerVarients = {
    hidden: {
      x: 500,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8,
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const projectContainerVarients = {
    hidden: {
      y: 70,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      className={styles.container}
      variants={containerVarients}
      initial="hidden"
      animate={containerControl}
    >
      <motion.div
        className={styles.projectContainer}
        variants={projectContainerVarients}
        initial="hidden"
        animate="visible"
      >
        <Project
          title="Althemic"
          isMobile={isMobile}
          to="https://althemic-alpha.herokuapp.com/"
          imgurl="/images/projects/althemic/althemic-normal.png"
          about="A webapp for meeting new people and also keeping a personal space. Also uses a Chat Server for live chatting. It is a side project that I made and worked on it as a Startup!"
          ltr
        />
      </motion.div>
      <motion.div
        className={styles.projectContainer}
        variants={projectContainerVarients}
        initial="hidden"
        animate="visible"
      >
        <Project
          title="Natours"
          isMobile={isMobile}
          to="https://natours-sourav.herokuapp.com"
          imgurl="/images/projects/natours/natours-normal.png"
          about="A travel booking website made using Nodejs, MongoDB, and Express.js. This was my very first project through which I ever learned!"
        />
      </motion.div>
      <motion.div
        className={styles.projectContainer}
        variants={projectContainerVarients}
        initial="hidden"
        animate="visible"
      >
        <Project
          title="Emage"
          isMobile={isMobile}
          to="https://emageical.herokuapp.com"
          imgurl="/images/projects/emage/emage-normal.png"
          about="A web app to upload and host images for free. Provides a direct route to imgur API so there is no need of authentication."
          ltr
        />
      </motion.div>
      <motion.div
        className={styles.projectContainer}
        variants={projectContainerVarients}
        initial="hidden"
        animate="visible"
      >
        <Project
          isMobile={isMobile}
          title="Emageically"
          to="https://emageically.netlify.app/"
          about="Website just like Unsplash where you can upload free-to-use images and can download them for free. The website also allows users to anonymously upload images."
          imgurl="/images/projects/emageically/emageically-normal.png"
        />
      </motion.div>
      <motion.div
        className={styles.projectContainer}
        variants={projectContainerVarients}
        initial="hidden"
        animate="visible"
      >
        <Project
          isMobile={isMobile}
          title="Reactive Clothing"
          to="https://reactive-clothing-live.herokuapp.com/"
          about="An e-commerce site built using React and Redux. Light and fast as it can be!"
          imgurl="/images/projects/emageically/emageically-normal.png"
          ltr
        />
      </motion.div>
      <motion.div
        className={styles.projectContainer}
        variants={projectContainerVarients}
        initial="hidden"
        animate="visible"
      >
        <Project
          isMobile={isMobile}
          title="Trillo"
          to="https://frostzt.github.io/Trilloproject/"
          about="A static website that I built to learn SASS and advanced CSS/SASS!"
          imgurl="/images/projects/trillo/trillo-normal.png"
        />
      </motion.div>
      <motion.div
        className={styles.projectContainer}
        variants={projectContainerVarients}
        initial="hidden"
        animate="visible"
      >
        <Project
          isMobile={isMobile}
          title="Snake Game"
          to="https://frostzt.github.io/snake-game/"
          about="You can guess what this one does, eh? I mean who haven't played this! Its GOLD!"
          imgurl="/images/projects/snake/snake-normal.png"
          ltr
        />
      </motion.div>
    </motion.div>
  );
};

export default Projects;
