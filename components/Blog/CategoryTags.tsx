import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

export interface CategoryTagProps {
  color: string;
  category: string;
}

const CategoryTag: React.FC<CategoryTagProps> = ({ color, category }) => {
  return (
    <Flex bgColor={color} px={3} py={1} alignItems="center" rounded="full" w="fit-content" mr={3.5}>
      <Box bgColor="white" w={3} h={3} rounded="full" mr={2} />
      <Box color="white">{category}</Box>
    </Flex>
  );
};

export default CategoryTag;
