import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';

import styles from '../styles/home.module.scss';
import Container from '../Layout/Container/Container';

interface Props {
  triggerMenu: () => void;
}

const Home: NextPage<Props> = ({ triggerMenu }) => {
  return (
    <Container wrapperClass={styles.wrapper} containerClass={styles.container}>
      <Head>
        <title>frostzt | Portfolio</title>
        <meta name="description" content="frostzt's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi</h1>
        <h2 className={styles.title_sub}>
          I am Sourav<span className={styles.title_sub_dot}>.</span>
        </h2>
      </div>
    </Container>
  );
};

export default Home;
