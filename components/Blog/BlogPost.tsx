import { Box, Flex, Heading, Link, Text, useColorMode } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import NextLink from 'next/link';
import React from 'react';

interface BlogPostProps {
  title: string;
  content: string;
  publishedAt: string;
  category: string;
  slug: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, content, publishedAt, category, slug }) => {
  const { colorMode } = useColorMode();
  const primaryTextColor = {
    light: `gray.800`,
    dark: `whiteAlpha.900`,
  };
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.300',
  };
  console.log(category);

  return (
    <NextLink href="/blog/[slug]" as={`/blog/${slug}`} passHref>
      <Link _hover={{ textDecoration: 'none' }}>
        <Box my={12} w="full">
          <Flex mb={4} alignItems="center" justifyContent="space-between">
            <Heading color={primaryTextColor[colorMode]} as="h3" size="md">
              {title}
            </Heading>
            <Text color={primaryTextColor[colorMode]}>{format(parseISO(publishedAt), 'MMMM dd, yyyy')}</Text>
          </Flex>
          <Text color={secondaryTextColor[colorMode]}>{content}</Text>
        </Box>
      </Link>
    </NextLink>
  );
};

export default BlogPost;
