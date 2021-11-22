import React, { Fragment, useState } from 'react';
import type { AppProps } from 'next/app';

import '../styles/globals.scss';
import GlobalMenu from '../PageComponents/GlobalMenu/GlobalMenu';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const triggerMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <Fragment>
      <GlobalMenu />
      <Component triggerMenu={triggerMenu} {...pageProps} />
    </Fragment>
  );
};

export default MyApp;
