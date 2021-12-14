import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '../lib/theme';
import Layout from '../components/layouts/main';

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
};

export default App;
