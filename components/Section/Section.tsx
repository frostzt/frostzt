import React from 'react';

import StyledDiv from '../CustomCoreComponents/StyledDiv';

interface SectionProps {
  delay?: number;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children, delay = 0 }) => {
  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      // @ts-expect-error duration can support numbers
      transition={{ duration: 0.8, delay }}
      mb={6}
    >
      {children}
    </StyledDiv>
  );
};

export default Section;
