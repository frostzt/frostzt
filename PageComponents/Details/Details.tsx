import React from 'react';

import styles from './Details.module.scss';

const Details: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        Full stack developer and designer, but a learner at core. I like to devour books every morning and then sing in
        the evening. I figured out that I had a crush on computers and electronics when I messed my Dad&#39;s mobile
        phone by flashing a wrong ROM in it (SPOILER: I fixed it later). <br /> <br />
        Born in India, I have a hunger for knowledge and just want to know more, interests such as History, Biology, and
        most of all Mathematics. And unfortunately no I don&#39;t use Arch!
      </div>
    </div>
  );
};

export default Details;
