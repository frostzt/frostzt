import NextLink from 'next/link';
import { Box, Heading, Text, Container, Divider, Button } from '@chakra-ui/react';

const PageNotFound = () => {
  return (
    <Container>
      <Heading as="h1">Aaaaaaaand, you&apos;re lost!</Heading>
      <Text>Wait! There was something supposed to be here?!</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Sail with me back to the island!</Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default PageNotFound;
