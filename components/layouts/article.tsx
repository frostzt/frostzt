import React, { Fragment } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

import { GridItemStyle } from '../CustomCoreComponents/GridItem';

const variants = {
  hidden: { y: 20, x: 0, opacity: 0 },
  enter: { y: 0, x: 0, opacity: 1 },
  exit: { y: 20, x: 0, opacity: 0 },
};

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <Fragment>
        {title && (
          <Head>
            <title>{title} - frostzt</title>
          </Head>
        )}
        {children}
        <GridItemStyle />
      </Fragment>
    </motion.article>
  );
};

export default Layout;
