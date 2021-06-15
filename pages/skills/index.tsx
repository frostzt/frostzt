import Head from "next/head";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

// Styles and animations
import { motion } from "framer-motion";
import styles from "./index.module.scss";

// Components
import Skills from "../../Components/Skills/Skills";

// Layout
import Scroll from "../../Layouts/Scroll";

const ProjectsPage = () => {
  return (
    <Scroll>
      <motion.div className={styles.container}>
        <Head>
          <title>Projects</title>
        </Head>

        {/* Main Content */}
        <motion.div className={styles.projectsContainer}>
          <Skills />
          <Link href="/">
            <div className={styles.backlink}>back</div>
          </Link>
        </motion.div>
      </motion.div>
    </Scroll>
  );
};

export default ProjectsPage;
