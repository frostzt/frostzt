import React from 'react';
import { Image } from '@chakra-ui/react';

interface ProjectImageProps {
  src: string;
  alt: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt }) => {
  return <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />;
};

export default ProjectImage;
