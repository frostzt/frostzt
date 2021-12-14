import React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { Global } from '@emotion/react';
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';

import AppRoutes from '../../enums/routes.enum';

interface GridItemProps {
  href: string;
  title: string;
  thumbnail: string;
  children: React.ReactNode;
}

export const GridItem: React.FC<GridItemProps> = ({ children, href, title, thumbnail }) => {
  return (
    <Box w="100%" align="center">
      <LinkBox cursor="pointer">
        <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder="blur" loading="lazy" />
        <LinkOverlay href={href} target="_blank" rel="noreferrer">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  );
};

interface ProjectGridItemProps {
  id: string;
  title: string;
  children: React.ReactNode;
  thumbnail: StaticImageData;
}

export const ProjectGridItem: React.FC<ProjectGridItemProps> = ({ children, id, title, thumbnail }) => {
  return (
    <Box w="100%" align="center">
      <NextLink href={`${AppRoutes.PROJECTS}/${id}`}>
        <LinkBox cursor="pointer">
          <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder="blur" loading="lazy" />
          <LinkOverlay href={`${AppRoutes.PROJECTS}/${id}}`} target="_blank" rel="noreferrer">
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </NextLink>
    </Box>
  );
};

export const GridItemStyle = () => {
  return (
    <Global
      styles={`
    .grid-item-thumbnail {
      border-radius: 12px;
    }
    `}
    />
  );
};
