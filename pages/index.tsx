import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useInView } from "react-intersection-observer";

// Styles
import ScrollSnap from "scroll-snap";
import styles from "../styles/Home.module.scss";
import { motion, useAnimation } from "framer-motion";

type HTMLNull = HTMLDivElement | null;

export default function Home() {
  // Refs
  const mainContainer = useRef<any>(null);

  // Intersection Observers
  const [aboutRef, aboutInView] = useInView({ threshold: 0.5 });
  const [projectRef, projectInView] = useInView({ threshold: 0.5 });
  const [contactRef, contactInView] = useInView({ threshold: 0.5 });
  const [headerCheckRef, headerCheckInView] = useInView({ threshold: 0.01 });

  // Animation Controls
  const headerControl = useAnimation();
  const greetingControl = useAnimation();
  const nameControl = useAnimation();
  const aboutControl = useAnimation();
  const projectControl = useAnimation();
  const contactControl = useAnimation();

  // Responsive checks
  const isTabletPortrait = useMediaQuery({ maxWidth: 768 });
  const isMobileLarge = useMediaQuery({ maxWidth: 425 });
  const isMobileSmall = useMediaQuery({ maxWidth: 320 });

  // Sequences
  const sequence = async () => {
    await headerControl.start(
      {
        border: isTabletPortrait ? "4rem solid #fff" : "6rem solid #fff",
        opacity: 1,
        zIndex: 1,
      },
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
    return aboutControl.start("visible");
  };

  const projectSequence = () => {
    return projectControl.start({ opacity: 1 }, { duration: 0.5 });
  };

  const contactSequence = () => {
    return contactControl.start("visible");
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

  // Varients
  const contentVarient = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const contentParagraphsVarients = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8,
      },
    },
  };

  const aboutVarient = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const aboutParagraphVarient = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8,
      },
    },
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

    if (contactInView) {
      contactSequence();
    }
  }, [aboutInView, projectInView, contactInView]);

  // Replay the sequence if revisted header
  useEffect(() => {
    sequence();
  }, [headerCheckInView]);

  return (
    <div ref={mainContainer} id="main-container" className={styles.container}>
      <Head>
        <title>Sourav Rawat | Web Developer and Designer</title>
        <meta
          name="description"
          content="Sourav Rawat's Portfolio, a web developer and designer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ----------------------------------------------HEADER---------------------------------------------- */}
      <div ref={headerCheckRef} className={styles.headcheck} />
      <motion.header
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
          {isMobileLarge ? (
            <>
              I am
              <br />
              Sourav!
            </>
          ) : (
            "I am Sourav!"
          )}
        </motion.div>
      </motion.header>

      {/* ----------------------------------------------ABOUT---------------------------------------------- */}
      <motion.div className={styles.about} ref={aboutRef}>
        <motion.div
          variants={aboutVarient}
          initial="hidden"
          animate={aboutControl}
          className={styles.about__container}
        >
          <motion.div
            className={styles.paragraph}
            variants={aboutParagraphVarient}
          >
            <div className={styles.abilities}>DEVELOPER</div> AND
          </motion.div>
          <motion.div
            className={styles.paragraph}
            variants={aboutParagraphVarient}
          >
            {isTabletPortrait ? (
              <>
                <div className={styles.abilities}>DESIGNER</div> WHO
              </>
            ) : (
              <>
                <div className={styles.abilities}>DESIGNER</div> WHO LIKES
              </>
            )}
          </motion.div>
          <motion.div
            className={styles.paragraph}
            variants={aboutParagraphVarient}
          >
            {isTabletPortrait ? (
              <>LIKES TO LEARN</>
            ) : (
              <>
                TO LEARN NEW THINGS
                <span style={{ color: "var(--primary-color)" }}>.</span>
              </>
            )}
          </motion.div>
          <motion.div
            className={styles.paragraph}
            variants={aboutParagraphVarient}
          >
            {isTabletPortrait ? (
              <>
                NEW THINGS
                <span style={{ color: "var(--primary-color)" }}>.</span> AND
              </>
            ) : (
              <>AND CREATE RANDOM</>
            )}
          </motion.div>
          <motion.div
            className={styles.paragraph}
            variants={aboutParagraphVarient}
          >
            {isTabletPortrait ? (
              <>
                CREATE RANDOM STUFF FOR FUN
                <span style={{ color: "var(--primary-color)" }}>!</span>
              </>
            ) : (
              <>
                STUFF FOR FUN
                <span style={{ color: "var(--primary-color)" }}>!</span>
              </>
            )}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ----------------------------------------------PROJECTS---------------------------------------------- */}
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

      {/* ----------------------------------------------CONTACT---------------------------------------------- */}
      <motion.div ref={contactRef} className={styles.contact}>
        <motion.div
          variants={contentVarient}
          initial="hidden"
          animate={contactControl}
          className={styles.content}
        >
          <motion.div
            variants={contentParagraphsVarients}
            className={styles.content__para}
          >
            open to work
          </motion.div>
          <motion.div
            variants={contentParagraphsVarients}
            className={styles.content__para}
          >
            feel free to
          </motion.div>
          <motion.div
            variants={contentParagraphsVarients}
            className={styles.content__para}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={styles.content__para_link}
              href=" mailto:aidenfrostbite@gmail.com?subject=Important!"
            >
              contact me!
            </a>
          </motion.div>
        </motion.div>
        <motion.div className={styles.contact__links}>
          <a
            className={styles.contact__links_link}
            href="https://github.com/frostzt"
          >
            github
          </a>
          <a
            className={styles.contact__links_link}
            href="https://twitter.com/souravsrawat"
          >
            twitter
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
