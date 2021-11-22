import React from 'react';
import { IconType } from 'react-icons';

import styles from './Social.module.scss';

interface Props {
  to: string;
  Icon: IconType;
}

const SocialIcon: React.FC<Props> = ({ to, Icon }) => {
  return (
    <div className={styles.container}>
      <a target="_blank" rel="noreferrer" href={to} className={styles.link}>
        <Icon />
      </a>
    </div>
  );
};

export default SocialIcon;
