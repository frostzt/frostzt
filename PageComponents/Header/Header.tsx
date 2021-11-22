import React from 'react';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Hi</h1>
      <h2 className={styles.title_sub}>
        I am Sourav<span className={styles.title_sub_dot}>.</span>
      </h2>
    </div>
  );
};

export default Header;
