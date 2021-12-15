import React from 'react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';

import Layout from '../../components/layouts/article';
import ProjectMeta from '../../components/Project/ProjectMeta';
import ProjectTitle from '../../components/Project/ProjectTitle';
import Paragraph from '../../components/CustomCoreComponents/Paragraph';

const ProjectWeeee: React.FC = () => {
  return (
    <Layout title="Weeee">
      <Container>
        <ProjectTitle>
          Weeee <Badge>2021</Badge>
        </ProjectTitle>
        <Paragraph>
          Manage team, projects, and everything you need in just one place. Or should I say Management made easier!
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <ProjectMeta>Live Demo</ProjectMeta>
            <Link href="https://weeee.vercel.app">
              https://weeee.vercel.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ProjectMeta>Stack</ProjectMeta>
            Nextjs, Nestjs, MikroORM, TypeScript, PostgreSQL
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default ProjectWeeee;
