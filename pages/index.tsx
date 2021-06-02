import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

// Styles
import { motion, useAnimation } from "framer-motion";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const headerControl = useAnimation();
  const greetingControl = useAnimation();
  const nameControl = useAnimation();

  const sequence = async () => {
    await headerControl.start({ border: "6rem solid #fff" }, { duration: 1 });
    await greetingControl.start({ opacity: 1, y: 0 }, { duration: 0.5 });
    return await nameControl.start({ opacity: 1, y: 0 }, { duration: 0.5 });
  };

  useEffect(() => {
    sequence();
  });

  return (
    <main className={styles.main}>
      <Head>
        <title>Sourav Rawat | Web Developer and Designer</title>
        <meta
          name="description"
          content="Sourav Rawat's Portfolio, a web developer and designer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.header
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
      </motion.header>
    </main>
  );
}
