import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '../lib/theme';
import Layout from '../components/layouts/main';

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Component key={router.route} {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
