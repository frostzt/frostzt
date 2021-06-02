import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

// Styles
import ScrollSnap from "scroll-snap";
import { motion, useAnimation } from "framer-motion";
import styles from "../styles/Home.module.scss";

type HTMLNull = HTMLDivElement | null;

export default function Home() {
  // Refs
  const mainContainer = useRef<HTMLNull>(null);

  // Intersection Observer
  const [aboutRef, aboutInView] = useInView({ threshold: 0.5 });

  // Animation Controls
  const headerControl = useAnimation();
  const greetingControl = useAnimation();
  const nameControl = useAnimation();

  const paragraphControl = useAnimation();

  // Sequences
  const sequence = async () => {
    await headerControl.start(
      { border: "6rem solid #fff", opacity: 1 },
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
      { border: "0rem solid #fff", opacity: 0 },
      { duration: 1 }
    );
  };

  // Scroll snapping
  const bindScrollSnap = () => {
    let snapElement;
    const element: HTMLNull = mainContainer.current;
    if (element) {
      snapElement = new ScrollSnap(element, {
        snapDestinationY: "110%",
        threshold: 0.2,
        snapStop: false,
      });
    }

    snapElement?.bind();
  };

  // Play animation sequence and bind scroll snapping
  useEffect(() => {
    sequence();
    bindScrollSnap();
  }, []);

  // Play exit when scrolled
  useEffect(() => {
    if (aboutInView) {
      headerExitSequence();
    } else {
      sequence();
    }
  }, [aboutInView]);

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
          <motion.p className={styles.paragraph}>DEVELOPER AND</motion.p>
          <motion.p className={styles.paragraph}>DESIGNER WHO LIKES</motion.p>
          <motion.p className={styles.paragraph}>
            TO LEARN NEW THINGS
            <span style={{ color: "var(--primary-color)" }}>.</span>
          </motion.p>
          <motion.p className={styles.paragraph}>AND CREATE RANDOM</motion.p>
          <motion.p className={styles.paragraph}>
            STUFF FOR FUN
            <span style={{ color: "var(--primary-color)" }}>!</span>
          </motion.p>
        </div>
      </div>
    </div>
  );
}
