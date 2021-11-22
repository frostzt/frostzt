import React from 'react';
import cx from 'classnames';
import styles from './Container.module.scss';

interface Props {
  wrapperClass?: string;
  containerClass?: string;
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children, wrapperClass, containerClass }) => {
  return (
    <div className={cx([styles.wrapper, wrapperClass || null])}>
      <div className={cx([styles.container, containerClass || null])}>{children}</div>
    </div>
  );
};

export default Container;
