import React from 'react';
import Head from 'next/head';
import { Router } from 'next/router';
import { Box, Container } from '@chakra-ui/layout';

import NoSsr from './no-ssr';
import Navbar from '../Navbar/Navbar';
import LowPolyIsland from '../3DComponents/low-poly-island';

interface Props {
  router: Router;
  children: React.ReactNode;
}

const Main: React.FC<Props> = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>frostzt - Home</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.lg" pt={14}>
        <NoSsr>
          <LowPolyIsland />
        </NoSsr>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
