import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';

import styles from '../styles/home.module.scss';
import Container from '../Layout/Container/Container';
import Header from '../PageComponents/Header/Header';
import Details from '../PageComponents/Details/Details';

interface Props {
  menuVisible: boolean;
  triggerMenu: () => void;
}

const Home: NextPage<Props> = ({}) => {
  return (
    <Container wrapperClass={styles.wrapper} containerClass={styles.container}>
      <Head>
        <title>frostzt | Portfolio</title>
        <meta name="description" content="frostzt's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Details />
    </Container>
  );
};

export default Home;
