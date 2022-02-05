import dynamic from 'next/dynamic';
import React from 'react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';

const Layout = dynamic(() => import('../../components/layouts/article'));
const ProjectMeta = dynamic(() => import('../../components/Project/ProjectMeta'));
const ProjectTitle = dynamic(() => import('../../components/Project/ProjectTitle'));
const Paragraph = dynamic(() => import('../../components/CustomCoreComponents/Paragraph'));

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
