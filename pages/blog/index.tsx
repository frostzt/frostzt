import dynamic from 'next/dynamic';
import { SearchIcon } from '@chakra-ui/icons';
import { Box, Container, Heading, Input, InputGroup, InputRightElement, Text, useColorMode } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import React, { useState } from 'react';
const BlogPost = dynamic(() => import('../../components/Blog/BlogPost'));
const Layout = dynamic(() => import('../../components/layouts/article'));
import { getAllFilesFrontMatter } from '../../lib/mdx';

interface IFilesMetaData {
  title: string;
  sub: string;
  slug: string;
  publishedAt: string;
  content: string;
  category: string;
}

interface BlogIndexProps {
  posts: IFilesMetaData[];
}

const Blog: React.FC<BlogIndexProps> = ({ posts }) => {
  const [searchValue, setSearchValue] = useState('');
  const { colorMode } = useColorMode();
  const primaryTextColor = {
    light: `gray.600`,
    dark: `whiteAlpha.300`,
  };

  const filteredBlogPosts = posts
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
    .filter(frontMatter => frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <Layout title="Blog">
      <Container>
        <Heading as="h1" my={4} size="2xl">
          Blog
        </Heading>
        <Text my={4}>
          I love to write, but unfortunately started this blog pretty late. Guess this is my new diary now! More than
          just programming.
        </Text>
        <InputGroup>
          <Input
            aria-label="Search by post title"
            placeholder="Thoughts on life!"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
            borderColor={primaryTextColor[colorMode]}
          />
          <InputRightElement>
            <SearchIcon />
          </InputRightElement>
        </InputGroup>
        <Box>
          {!filteredBlogPosts.length && <Box my={4}>No posts found, try searching for something else.</Box>}
          {filteredBlogPosts.map(post => (
            <BlogPost key={post.title} {...post} />
          ))}
        </Box>
      </Container>
    </Layout>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFilesFrontMatter('posts');

  return {
    props: {
      posts,
    },
  };
};
