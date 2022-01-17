import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import Layout from '../components/layouts/main';
import theme from '../lib/theme';
import '../styles/global.css';

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
