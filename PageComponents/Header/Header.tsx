import React from 'react';

import { motion } from 'framer-motion';
import styles from './Header.module.scss';
import { childVariant, parentVariant } from './Header.variants';

const Header: React.FC = () => {
  return (
    <motion.div className={styles.content} variants={parentVariant} initial="initial" animate="visible">
      <motion.h1 variants={childVariant} className={styles.title}>
        Hi
      </motion.h1>
      <motion.h2 variants={childVariant} className={styles.title_sub}>
        I am Sourav<span className={styles.title_sub_dot}>.</span>
      </motion.h2>
    </motion.div>
  );
};

export default Header;
