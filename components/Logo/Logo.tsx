import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Text, useColorModeValue } from '@chakra-ui/react';

import styled from '@emotion/styled';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 20px;

  &:hover img {
    transform: scale(1.1);
  }
`;

const Logo = () => {
  const image = `/images/fire.png`;

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={image} width={20} height={20} alt="logo" />
          <Text color={useColorModeValue('grey.800', 'whiteAlpha.900')} fontFamily="Inter" fontWeight="bold" ml={3}>
            frostzt
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
