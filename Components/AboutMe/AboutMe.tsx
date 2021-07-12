import cx from "classnames";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./AboutMe.module.scss";
import { contentVarient, headingVarient } from "./aboutme.varients";

const AboutMe: React.FC = () => {
  const [aboutMeRef, aboutMeInView] = useInView({
    threshold: 0.5,
  });
  const animSeq = useAnimation();

  const sequence = async () => {
    return await animSeq.start("animated");
  };

  useEffect(() => {
    if (aboutMeInView) {
      sequence();
    }
  }, [aboutMeInView]);

  return (
    <div ref={aboutMeRef} className={styles.container}>
      <motion.div
        variants={contentVarient}
        animate={animSeq}
        initial="initial"
        className={styles.content}
      >
        <motion.h2 variants={headingVarient} className={cx([styles.title, "heading-secondary"])}>
          A Full-Stack Developer and Designer who loves to create things and wants to have an impact
          on the world! I think a lot!
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default AboutMe;
