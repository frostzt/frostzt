import React from 'react';
import cx from 'classnames';
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
    <React.Fragment>
      <Container wrapperClass={cx([styles.container, visible && styles.show])}>
        <div onClick={triggerMenu} className={cx([styles.menuHandle, visible && styles.showMenu])}>
          menu
        </div>
        <div className={styles.socialIcons}>
          <SocialIcon to="https://github.com/frostzt/" Icon={AiFillGithub} />
          <SocialIcon to="https://www.linkedin.com/in/frostzt/" Icon={TiSocialLinkedinCircular} />
        </div>
      </Container>
    </React.Fragment>
  );
};

export default GlobalMenu;
