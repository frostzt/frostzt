import React from 'react';
import { Badge } from '@chakra-ui/react';

interface ProjectMetaProps {
  children: React.ReactNode;
}

const ProjectMeta: React.FC<ProjectMetaProps> = ({ children }) => {
  return (
    <Badge colorScheme="green" mr={2}>
      {children}
    </Badge>
  );
};

export default ProjectMeta;
