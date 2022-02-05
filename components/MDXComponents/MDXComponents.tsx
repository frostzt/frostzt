import {
  Alert,
  AlertProps,
  Box,
  BoxProps,
  chakra,
  Divider,
  Heading,
  HeadingProps,
  Link,
  LinkProps,
  Text,
  TextProps,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Highlight, { defaultProps } from 'prism-react-renderer';
import darkTheme from 'prism-react-renderer/themes/nightOwl';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';
import CategoryTag, { CategoryTagProps } from '../Blog/CategoryTags';

const ChakraHighlight = chakra(Highlight, {
  shouldForwardProp: prop => ['Prism', 'theme', 'code', 'language', 'children'].includes(prop),
});

const DocsHeading = (props: HeadingProps) => (
  <Heading
    css={{
      scrollMarginTop: '100px',
      scrollSnapMargin: '100px', // Safari
      '&[id]': {
        pointerEvents: 'none',
      },
      '&[id]:before': {
        display: 'block',
        height: ' 6rem',
        marginTop: '-6rem',
        visibility: 'hidden',
        content: `""`,
      },
      '&[id]:hover a': { opacity: 1 },
    }}
    {...props}
    mb="1em"
    mt="2em"
  >
    <Box pointerEvents="auto">
      {props.children}
      {props.id && (
        <Box
          aria-label="anchor"
          as="a"
          color="blue.500"
          fontWeight="normal"
          outline="none"
          _focus={{
            opacity: 1,
            boxShadow: 'outline',
          }}
          opacity="0"
          ml="0.375rem"
          href={`#${props.id}`}
        >
          #
        </Box>
      )}
    </Box>
  </Heading>
);

const CustomLink = (props: LinkProps) => {
  const { colorMode } = useColorMode();
  const color = {
    light: 'orange.500',
    dark: 'orange.500',
  };

  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color={color[colorMode]} {...props} />
      </NextLink>
    );
  }

  return <Link color={color[colorMode]} isExternal {...props} />;
};

const Quote = (props: AlertProps) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: 'blue.50',
    dark: 'blue.900',
  };

  return (
    <Alert
      mt={4}
      w="98%"
      bg={bgColor[colorMode]}
      variant="left-accent"
      status="info"
      css={{
        '> *:first-of-type': {
          marginTop: 0,
          marginLeft: 8,
        },
      }}
      {...props}
    />
  );
};

const Hr = () => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600',
  };

  return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};

const CodeHighlight = ({ children: codeString, className: language }: any) => {
  language = language.replace('language-', '');
  const theme = useColorModeValue(lightTheme, darkTheme);
  const lineNumberColor = useColorModeValue('blackAlpha.500', 'whiteAlpha.500');
  const preBackground = useColorModeValue('gray.50', 'gray.900');
  const showLineNumbers = !['shell', 'text'].includes(language);

  return (
    <ChakraHighlight {...defaultProps} code={codeString} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        tokens.pop();
        return (
          <div data-language={className}>
            <chakra.pre
              className={className}
              sx={{ ...style, backgroundColor: preBackground }}
              overflowX="auto"
              rounded="md"
              p={4}
              mx={-4}
            >
              {tokens.map((line, i) => {
                const lineProps = getLineProps({ line, key: i });
                return (
                  <chakra.div {...lineProps} display="table-row" key={i}>
                    {showLineNumbers && (
                      <chakra.span
                        w={8}
                        display="table-cell"
                        textAlign="right"
                        userSelect="none"
                        color={lineNumberColor}
                        pr={3}
                      >
                        {i + 1}
                      </chakra.span>
                    )}
                    {line.map((token, key) => {
                      return <chakra.span {...getTokenProps({ token, key })} key={`${i}.${key}`} />;
                    })}
                  </chakra.div>
                );
              })}
            </chakra.pre>
          </div>
        );
      }}
    </ChakraHighlight>
  );
};

const InlineCode = (props: any) => (
  <chakra.code
    apply="mdx.code"
    color={useColorModeValue('purple.500', 'purple.200')}
    bg={useColorModeValue('purple.50', 'purple.900')}
    px={1}
    py={0.5}
    rounded={{ base: 'none', md: 'md' }}
    {...props}
  />
);

const MDXComponents = {
  code: CodeHighlight,
  inlineCode: InlineCode,
  h1: (props: HeadingProps) => <Heading as="h1" fontWeight="black" size="2xl" my={4} {...props} />,
  h2: (props: HeadingProps) => <Heading as="h2" size="lg" fontWeight="bold" {...props} />,
  h3: (props: HeadingProps) => <DocsHeading as="h3" size="md" fontWeight="bold" {...props} />,
  h4: (props: HeadingProps) => <DocsHeading as="h4" size="sm" fontWeight="bold" {...props} />,
  h5: (props: HeadingProps) => <DocsHeading as="h5" size="sm" fontWeight="bold" {...props} />,
  h6: (props: HeadingProps) => <DocsHeading as="h6" size="xs" fontWeight="bold" {...props} />,
  br: (props: any) => <Box height="24px" {...props} />,
  hr: Hr,
  a: CustomLink,
  p: (props: TextProps) => (
    <Text as="p" mt={0} lineHeight="tall" fontSize="1.4rem" fontWeight="400" my={6} {...props} />
  ),
  ul: (props: BoxProps) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  ol: (props: BoxProps) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
  li: (props: BoxProps) => <Box as="li" pb={1} {...props} />,
  blockquote: Quote,
  CategoryTag: (props: CategoryTagProps) => <CategoryTag {...props} />,
};

export default MDXComponents;
