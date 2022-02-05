import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import React from 'react';

const Layout = dynamic(() => import('../../components/layouts/article'));
const ProjectMeta = dynamic(() => import('../../components/Project/ProjectMeta'));
const ProjectTitle = dynamic(() => import('../../components/Project/ProjectTitle'));
const Paragraph = dynamic(() => import('../../components/CustomCoreComponents/Paragraph'));

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
            <Link href="https://weeee.vercel.app" target="_blank" rel="noreferrer">
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
