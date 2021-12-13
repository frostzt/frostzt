import React from 'react';
import NextLink from 'next/link';
import { Link, useColorModeValue } from '@chakra-ui/react';

interface LinkItemProps {
  href: string;
  path: string;
  children: React.ReactNode;
}

const LinkItem: React.FC<LinkItemProps> = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('grey200', 'whiteAlpha900');

  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default LinkItem;
