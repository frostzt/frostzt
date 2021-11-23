import cx from 'classnames';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

import Container from '../../Layout/Container/Container';
import styles from './GlobalMenu.module.scss';
import SocialIcon from '../../Components/Social/Social';

interface Props {
  visible: boolean;
  triggerMenu: () => void;
}

const GlobalMenu: React.FC<Props> = ({ triggerMenu, visible }) => {
  return (
    <Fragment>
      <Container wrapperClass={cx([styles.container, visible && styles.show])}>
        <div onClick={triggerMenu} className={cx([styles.menuHandle, visible && styles.showMenu])}>
          menu
        </div>
        <div className={styles.main}>
          <ul className={styles.list}>
            <li className={styles.list__item}>
              <Link href="/">home</Link>
            </li>
            <li className={styles.list__item}>
              <Link href="/blog">blog</Link>
            </li>
            <li className={styles.list__item}>
              <Link href="/projects">projects</Link>
            </li>
          </ul>
        </div>
        <div className={styles.socialIcons}>
          <SocialIcon to="https://github.com/frostzt/" Icon={AiFillGithub} />
          <SocialIcon to="https://www.linkedin.com/in/frostzt/" Icon={TiSocialLinkedinCircular} />
        </div>
      </Container>
    </Fragment>
  );
};

export default GlobalMenu;
