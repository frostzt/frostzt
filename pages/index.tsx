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
    <Container wrapperClass={styles.wrapper}>
      <Head>
        <title>frostzt | Portfolio</title>
        <meta name="description" content="frostzt's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi</h1>
      </div>
    </Container>
  );
};

export default Home;
