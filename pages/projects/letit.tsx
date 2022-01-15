import React from 'react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';

import Layout from '../../components/layouts/article';
import ProjectMeta from '../../components/Project/ProjectMeta';
import ProjectTitle from '../../components/Project/ProjectTitle';
import Paragraph from '../../components/CustomCoreComponents/Paragraph';

const ProjectLetit: React.FC = () => {
  return (
    <Layout title="Weeee">
      <Container>
        <ProjectTitle>
          Letit <Badge>2021</Badge>
        </ProjectTitle>
        <Paragraph>An application just like Reddit, built for Letting out your frustration.</Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <ProjectMeta>Live Demo</ProjectMeta>
            <Link href="https://getletit.com" target="_blank" rel="noreferrer">
              https://getletit.com <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ProjectMeta>Stack</ProjectMeta>
            Nextjs, GraphQL, TypeScript, Apollo, PostgreSQL, Redis
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default ProjectLetit;
