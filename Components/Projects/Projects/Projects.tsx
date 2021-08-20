import cx from "classnames";
import Project from "../Project/Project";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <div className={styles.container}>
      <h2 className={cx([styles.title, "heading-secondary", "make-special"])}>Projects</h2>
      <p className={styles.description}>
        All the projects are hosted on Heroku, and when using a free-account it creates dyno(s) and
        puts them to sleep if not used, so it is not the sites that are slow but Heroku in general!
      </p>
      <div className={styles.projectsContainer}>
        <Project
          slug="/projects/althemic"
          title="Althemic"
          primaryColor="#fe7f5b"
          description="A startup of my own. People today are more affected by depression rather than other diseases, Althemic tries to use internet and social media as a way to help people join and find people to talk to!"
          image="/images/projects/althemic/althemic.png"
        />
        <Project
          slug="/projects/natours"
          title="Natours"
          primaryColor="#55c57a"
          description="Learnt Expressjs, MongoDB, and Nodejs to create a highly scalable and maintainable API, with that also learnt how to use Pug to render server-side pages, and the right way to write code."
          image="/images/projects/natours/natours.png"
        />
        <Project
          slug="/projects/trillo"
          title="Trillo"
          primaryColor="#eb2f64"
          description="Learnt CSS and SASS with advanced SASS. Found my love for styling and writing my own styles, I love SCSS rather then indented SASS but comfortable in both. I just love colors!"
          image="/images/projects/trillo/trillo.png"
        />
        <Project
          slug="/projects/emageically"
          title="Emageically"
          primaryColor="#e74c3c"
          description="Just for fun created a site to host images just like unsplash. Created a way to align images into Masonry layout and styled and created the entire thing in Reactjs."
          image="/images/projects/emageically/emageically.png"
        />
        <Project
          slug="/projects/reactive-clothing"
          title="Reactive Clothing"
          primaryColor="#35363a"
          description="Learnt React and a lot of other stuff, mastered ContextAPI and Redux. I just hate copy paste, rather learnt the correct way to write huge react code that can be maintained since Redux is quite big!"
          image="/images/projects/reactive-clothing/reactive-clothing.png"
        />
        <Project
          slug="/projects/emage"
          title="Emage"
          primaryColor="#ffffff"
          description="Created API to host images for free, uses both Imgur API and an API that I created myself. The part is you don't need to authenticate with Imgur just upload get the link and get going!"
          image="/images/projects/emage/emage.png"
        />
      </div>
    </div>
  );
};

export default Projects;
