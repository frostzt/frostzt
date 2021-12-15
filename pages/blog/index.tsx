import { Container, Heading } from '@chakra-ui/react';

import Layout from '../../components/layouts/article';

const Blog = () => {
  return (
    <Layout title="Blog">
      <Container>
        <Heading as="h4" mb={4} fontSize={20}>
          Coming Soon,
          <br /> Yes I do write good stuff. Just wait for it!
        </Heading>
      </Container>
    </Layout>
  );
};

export default Blog;
