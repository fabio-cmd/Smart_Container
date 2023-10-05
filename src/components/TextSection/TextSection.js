import React from 'react';

import { Text, TextSectionContainer } from './TextSectionStyles';

const TextSection = ({TextSectionRef}) => {
  return (
    <TextSectionContainer>
      <Text ref={TextSectionRef}>Encontre o container mais próximo de você no mapa. 
      </Text>
    </TextSectionContainer>
  );
};

export default TextSection;
