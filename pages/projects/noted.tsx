import React from 'react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';

import Layout from '../../components/layouts/article';
import ProjectMeta from '../../components/Project/ProjectMeta';
import ProjectTitle from '../../components/Project/ProjectTitle';
import Paragraph from '../../components/CustomCoreComponents/Paragraph';

const ProjectNoted: React.FC = () => {
  return (
    <Layout title="Noted">
      <Container>
        <ProjectTitle>
          Noted <Badge>2021</Badge>
        </ProjectTitle>
        <Paragraph>
          Yet another <span style={{ textDecoration: 'line-through' }}>breathtaking</span> note-taking web app!
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <ProjectMeta>Live Demo</ProjectMeta>
            <Link href="https://getnoted.vercel.app" target="_blank" rel="noreferrer">
              https://getnoted.vercel.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ProjectMeta>Stack</ProjectMeta>
            Nextjs, Nestjs, TypeORM, TypeScript, PostgreSQL, TailwindCSS
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default ProjectNoted;
