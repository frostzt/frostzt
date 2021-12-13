import { motion } from 'framer-motion';
import { shouldForwardProp, chakra } from '@chakra-ui/react';

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition';
  },
});

export default StyledDiv;
