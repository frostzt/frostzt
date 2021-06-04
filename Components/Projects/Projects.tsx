import React from "react";

// Styles and animations
import { motion } from "framer-motion";
import styles from "./Projects.module.scss";

// Components
import Project from "../Project/Project";

const Projects: React.FC = () => {
  return (
    <div className={styles.container}>
      <Project
        title="Natours"
        about="A travel booking website made using Nodejs, MongoDB, and Express.js. This was my very first project through which I ever learned!"
        imgurl="/images/projects/natours/natours-normal.png"
      />
      <Project
        title="Emage"
        about="A web app to upload and host images for free. Provides a direct route to imgur API so there is no need of authentication."
        imgurl="/images/projects/emage/emage-normal.png"
        ltr
      />
      <Project
        title="Emageically"
        about="Website just like Unsplash where you can upload free-to-use images and can download them for free. The website also allows users to anonymously upload images."
        imgurl="/images/projects/emageically/emageically-normal.png"
      />
      <Project
        title="Reactive Clothing"
        about="An e-commerce site built using React and Redux. Light and fast as it can be!"
        imgurl="/images/projects/emageically/emageically-normal.png"
        ltr
      />
      <Project
        title="Trillo"
        about="A static website that I built to learn SASS and advanced CSS/SASS!"
        imgurl="/images/projects/trillo/trillo-normal.png"
      />
      <Project
        title="Snake Game"
        about="You can guess what this one does, eh? I mean who haven't played this! Its GOLD!"
        imgurl="/images/projects/snake/snake-normal.png"
        ltr
      />
    </div>
  );
};

export default Projects;
