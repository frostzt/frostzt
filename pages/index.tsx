import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

// Styles
import ScrollSnap from "scroll-snap";
import styles from "../styles/Home.module.scss";
import { motion, useAnimation } from "framer-motion";

type HTMLNull = HTMLDivElement | null;

export default function Home() {
  // Refs
  const mainContainer = useRef<HTMLNull>(null);

  // Intersection Observers
  const [aboutRef, aboutInView] = useInView({ threshold: 0.5 });
  const [projectRef, projectInView] = useInView({ threshold: 0.5 });
  const [contactRef, contactInView] = useInView({ threshold: 0.5 });

  // Animation Controls
  const headerControl = useAnimation();
  const greetingControl = useAnimation();
  const nameControl = useAnimation();
  const paragraphControl = useAnimation();
  const projectControl = useAnimation();

  // Sequences
  const sequence = async () => {
    await headerControl.start(
      { border: "6rem solid #fff", opacity: 1, zIndex: 1 },
      { duration: 1 }
    );
    await greetingControl.start({ opacity: 1, y: 0, x: 0 }, { duration: 0.5 });
    return await nameControl.start(
      { opacity: 1, y: 0, x: 0 },
      { duration: 0.5 }
    );
  };

  const headerExitSequence = async () => {
    greetingControl.start({ opacity: 0, x: 200 }, { duration: 0.3 });
    nameControl.start({ opacity: 0, x: 200 }, { duration: 0.3 });
    return await headerControl.start(
      { border: "0rem solid #fff", opacity: 0, zIndex: -1 },
      { duration: 1 }
    );
  };

  const aboutSequence = async () => {
    return paragraphControl.start(
      { opacity: 1, x: 0 },
      { duration: 1, delay: 0.4 }
    );
  };

  const projectSequence = () => {
    return projectControl.start({ opacity: 1 }, { duration: 0.5 });
  };

  // Scroll snapping
  const bindScrollSnap = () => {
    let snapElement;
    const element: HTMLNull = mainContainer.current;
    if (element) {
      snapElement = new ScrollSnap(element, {
        snapDestinationY: "100%",
        threshold: 0.2,
        snapStop: false,
      });
    }

    snapElement?.bind();
  };

  // Reset body element
  useEffect(() => {
    document.body.style.height = `0px`;
  }, []);

  // Play animation sequence and bind scroll snapping
  useEffect(() => {
    sequence();
    bindScrollSnap();
  }, []);

  // Play exit when scrolled
  useEffect(() => {
    if (aboutInView) {
      headerExitSequence();
      aboutSequence();
    }

    if (projectInView) {
      projectSequence();
    }
  }, [aboutInView, projectInView]);

  // Replay the sequence if revisted header
  useEffect(() => {
    if (mainContainer.current?.scrollTop) {
      if (mainContainer.current?.scrollTop <= 500) {
        sequence();
      }
    }
  }, [mainContainer.current?.scrollTop]);

  return (
    <div ref={mainContainer} className={styles.container}>
      <Head>
        <title>Sourav Rawat | Web Developer and Designer</title>
        <meta
          name="description"
          content="Sourav Rawat's Portfolio, a web developer and designer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{
          border: "none",
          zIndex: 1,
        }}
        animate={headerControl}
        className={styles.header}
      >
        <motion.div
          initial={{ opacity: 0, y: 250 }}
          animate={greetingControl}
          className={styles.greeting}
        >
          <div className={styles.imageContainer}>
            <Image
              src="/images/illustrations/hand.png"
              className={styles.imageContainer__image}
              priority={true}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={styles.hi}>HI</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={nameControl}
          className={styles.name}
        >
          I am Sourav!
        </motion.div>
      </motion.div>
      <div className={styles.about} ref={aboutRef}>
        <div className={styles.about__container}>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            className={styles.paragraph}
            animate={paragraphControl}
          >
            <div className={styles.abilities}>DEVELOPER</div> AND
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            className={styles.paragraph}
            animate={paragraphControl}
          >
            <div className={styles.abilities}>DESIGNER</div> WHO LIKES
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            className={styles.paragraph}
            animate={paragraphControl}
          >
            TO LEARN NEW THINGS
            <span style={{ color: "var(--primary-color)" }}>.</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            className={styles.paragraph}
            animate={paragraphControl}
          >
            AND CREATE RANDOM
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            className={styles.paragraph}
            animate={paragraphControl}
          >
            STUFF FOR FUN
            <span style={{ color: "var(--primary-color)" }}>!</span>
          </motion.div>
        </div>
      </div>
      <motion.div ref={projectRef} className={styles.projects}>
        <Link href="/projects">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={projectControl}
            className={styles.projectTitle}
          >
            projects
          </motion.h2>
        </Link>
      </motion.div>
      <motion.div ref={contactRef} className={styles.contact}></motion.div>
    </div>
  );
}
