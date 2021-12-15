import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';

const styles = {
  // @ts-expect-error props has type any
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#e63946',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    // @ts-expect-error props has type any
    baseStyle: props => ({
      color: mode('#e63946', '#e63946')(props),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: "'Inter', sans-serif",
};

const colors = {
  glassTeal: '#88ccca',
  teal: '#e63946',
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, colors, fonts });
export default theme;
