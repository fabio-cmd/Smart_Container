// SmartContainer.js
import React from 'react';
import styled from 'styled-components';
import Header from './Header/Header';

const SmartContainerContainer = styled.div`
  font-family: Arial, sans-serif;
`;

const SmartContainer = () => {
  return (
    <SmartContainerContainer>
      <Header />
    </SmartContainerContainer>
  );
};

export default SmartContainer;
