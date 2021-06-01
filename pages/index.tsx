import Head from "next/head";
import Image from "next/image";

// Styles
import { motion } from "framer-motion";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Sourav Rawat | Web Developer and Desingner</title>
        <meta
          name="description"
          content="Sourav Rawat's Portfolio, a web developer and designer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.header className={styles.header}>
        <motion.div className={styles.greeting}>
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
        <motion.div className={styles.name}>I am Sourav!</motion.div>
      </motion.header>
    </main>
  );
}
