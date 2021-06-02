import Head from "next/head";
import Image from "next/image";
import ScrollSnap from "scroll-snap";
import { useEffect, useRef } from "react";

// Styles
import { motion, useAnimation } from "framer-motion";
import styles from "../styles/Home.module.scss";

type HTMLNull = HTMLDivElement | null;

export default function Home() {
  const mainContainer = useRef<HTMLNull>(null);

  const cb = () => {
    console.log("snapped");
  };

  // Animation Controls
  const headerControl = useAnimation();
  const greetingControl = useAnimation();
  const nameControl = useAnimation();

  // Sequences
  const sequence = async () => {
    await headerControl.start({ border: "6rem solid #fff" }, { duration: 1 });
    await greetingControl.start({ opacity: 1, y: 0 }, { duration: 0.5 });
    return await nameControl.start({ opacity: 1, y: 0 }, { duration: 0.5 });
  };

  // Scroll snapping
  const bindScrollSnap = () => {
    let snapElement;
    const element: HTMLNull = mainContainer.current;
    if (element) {
      snapElement = new ScrollSnap(element, {
        snapDestinationY: "90%",
      });
    }

    snapElement?.bind(cb);
  };

  useEffect(() => {
    sequence();
    bindScrollSnap();
  });

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
      <div className={styles.about}></div>
      <div className={styles.about}></div>
    </div>
  );
}
