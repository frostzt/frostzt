import cx from "classnames";
import Project from "../Project/Project";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <div className={styles.container}>
      <h2 className={cx([styles.title, "heading-secondary", "make-special"])}>Projects</h2>
      <div className={styles.projectsContainer}>
        <Project
          slug="/althemic"
          title="Althemic"
          primaryColor="#FE7F5B"
          description="A startup of my own. People today are more affected by depression rather than other diseases, Althemic tries to use internet and social media as a way to help people join and find people to talk to!"
          image="/images/projects/althemic/althemic.png"
        />
      </div>
    </div>
  );
};

export default Projects;
