import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useInView } from "react-intersection-observer";
import { Fragment, useEffect, useRef, useState } from "react";

// Styles
import styles from "../styles/Home.module.scss";
import { motion, useAnimation } from "framer-motion";
import cx from "classnames";

// Layout
import Scroll from "../Layouts/Scroll";

// Components
import NavBar from "../Components/NavBar/NavBar";
import Projects from "../Components/Projects/Projects";
import PreLoader from "../Components/PreLoader/PreLoader";

export default function Home() {
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  // Refs
  const mainContainer = useRef<any>(null);

  // Intersection Observers
  const [aboutRef, aboutInView] = useInView({ threshold: 0.5 });
  const [projectRef, projectInView] = useInView({ threshold: 0.2 });
  const [contactRef, contactInView] = useInView({ threshold: 0.5 });

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

  // Handlers
  const handleLoadingState = () => {
    return setIsLoading((prevState) => !prevState);
  };

  // Sequences
  const sequence = async () => {
    await headerControl.start(
      {
        opacity: 1,
      },
      { duration: 1 }
    );
    await greetingControl.start({ opacity: 1, y: 0, x: 0 }, { duration: 0.5 });
    return await nameControl.start(
      { opacity: 1, y: 0, x: 0 },
      { duration: 0.5 }
    );
  };

  const aboutSequence = async () => {
    return aboutControl.start("visible");
  };

  const projectSequence = () => {
    return projectControl.start(
      { opacity: 1 },
      { duration: 0.5, when: "beforeChildren" }
    );
  };

  const contactSequence = () => {
    return contactControl.start("visible");
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
      y: 50,
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
      y: 50,
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

  // Play animation sequence and bind scroll snapping
  useEffect(() => {
    sequence();
  }, []);

  // Play exit when scrolled
  useEffect(() => {
    if (aboutInView) {
      aboutSequence();
    }

    if (projectInView) {
      projectSequence();
    }

    if (contactInView) {
      contactSequence();
    }
  }, [aboutInView, projectInView, contactInView]);

  return (
    <Fragment>
      {/* <PreLoader currentState={isLoading} changeState={handleLoadingState} /> */}
      <NavBar />
      <div ref={mainContainer} id="main-container" className={styles.container}>
        <Head>
          <title>Sourav Rawat | Web Developer and Designer</title>
          <meta
            name="description"
            content="Sourav Rawat's Portfolio, a web developer and designer"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Scroll>
          {/* ----------------------------------------------HEADER---------------------------------------------- */}
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
              {isMobileLarge ? null : (
                <div className={styles.imageContainer}>
                  <Image
                    src="/images/illustrations/hand.png"
                    className={styles.imageContainer__image}
                    priority={true}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              )}
              <p className={cx([styles.hiText])}>HI</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={nameControl}
              className={styles.name}
            >
              {isMobileLarge ? (
                <>
                  I am
                  <br /> Sourav
                </>
              ) : (
                <>I am Sourav</>
              )}
            </motion.div>
            <motion.div
              animate={nameControl}
              initial={{ opacity: 0, y: -50 }}
              className={styles.titleDesc}
            >
              A full-stack developer.
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
          <motion.div
            ref={projectRef}
            id="all-projects"
            className={styles.projects}
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={projectControl}
              className={styles.projectTitle}
            >
              projects
            </motion.h2>
            <motion.h4
              initial={{ opacity: 0 }}
              animate={projectControl}
              className={styles.projectSub}
            >
              projects are deployed using Heroku free dynos, sites might take
              time to load (this is because it puts free dynos to sleep)
            </motion.h4>
            <Projects isVisible={projectInView} />
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
                  href="mailto:aidenfrostbite@gmail.com?subject=Important!"
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
        </Scroll>
      </div>
    </Fragment>
  );
}
