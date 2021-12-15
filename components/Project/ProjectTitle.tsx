import React from 'react';
import NextLink from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Heading, Box, Link } from '@chakra-ui/react';
import AppRoutes from '../../enums/routes.enum';

interface ProjectTitleProps {
  children: React.ReactNode;
}

const ProjectTitle: React.FC<ProjectTitleProps> = ({ children }) => {
  return (
    <Box>
      <NextLink href={AppRoutes.PROJECTS}>
        <Link>Projects</Link>
      </NextLink>
      <span>
        &nbsp;
        <ChevronRightIcon />
        &nbsp;
      </span>
      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        {children}
      </Heading>
    </Box>
  );
};

export default ProjectTitle;
