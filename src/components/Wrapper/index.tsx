import React from 'react';
import { Container } from './styles';

const GlobalContainer: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default GlobalContainer;
