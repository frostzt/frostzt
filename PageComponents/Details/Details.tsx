import React from 'react';
import Container from '../../Layout/Container/Container';

import styles from './Details.module.scss';

const Details: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        Full stack developer and designer, but a learner at core. I like to devour books every morning and then sing in
        the evening. But what do I do in the middle, you ask? Well, You&#39;re looking at it!
      </div>
    </div>
  );
};

export default Details;
