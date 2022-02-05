import React from 'react';
import dynamic from 'next/dynamic';

interface TProps {
  children: React.ReactNode;
}

const NoSSR: React.FC<TProps> = ({ children }) => <React.Fragment>{children}</React.Fragment>;

export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
});
