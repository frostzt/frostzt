import Head from 'next/head';
import type { NextPage } from 'next';

import styles from '../styles/home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>frostzt | Portfolio</title>
        <meta name="description" content="frostzt's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}></div>
    </div>
  );
};

export default Home;
