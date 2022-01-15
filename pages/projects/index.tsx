import { Container, Heading, SimpleGrid } from '@chakra-ui/react';

import Layout from '../../components/layouts/article';
import Section from '../../components/Section/Section';
import { ProjectGridItem } from '../../components/CustomCoreComponents/GridItem';

// Images
import letitThumbnail from '../../public/images/projects/letit-overview.png';
import weeeeThumbnail from '../../public/images/projects/weeee-overview.png';
import notedThumbnail from '../../public/images/projects/noted-overview.png';

const Projects = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProjectGridItem id="weeee" title="Weeee" thumbnail={weeeeThumbnail}>
              Manage team, projects, and everything you need in just one place. Or simply management made easier!
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem id="noted" title="Noted" thumbnail={notedThumbnail}>
              Yet another <span style={{ textDecoration: 'line-through' }}>breathtaking</span> note-taking web
              application. Secure, small, and dead simple to use!
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem id="letit" title="Letit" thumbnail={letitThumbnail}>
              An application just like Reddit, built for Letting out your frustration.
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Projects;
