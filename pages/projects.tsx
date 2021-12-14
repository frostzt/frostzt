import { Container, Heading, SimpleGrid } from '@chakra-ui/react';

import Section from '../components/Section/Section';
import { ProjectGridItem } from '../components/CustomCoreComponents/GridItem';

// Images
import weeeeThumbnail from '../public/images/projects/weeee-overview.png';
import Layout from '../components/layouts/article';

const Projects = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProjectGridItem id="Weeee" title="Weeee" thumbnail={weeeeThumbnail}>
              Manage team, projects, and everything you need in just one place. Or should I say Management made easier!
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Projects;
