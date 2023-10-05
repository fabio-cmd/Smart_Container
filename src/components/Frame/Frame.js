import React from 'react';

import { ImageContainer, Image, TextContainer, FindPointButton } from './FrameStyles';

import reciclagemOrg from '../../images/reciclagem-orgânica.png';

const Frame = ({TextSectionRef}) => {
  const handleClick = () => {
    console.log('ssss');
    TextSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Image>
      <ImageContainer src={reciclagemOrg} alt='reciclagem' />
      <TextContainer>
        Smart Container
      </TextContainer>
      <FindPointButton onClick={() => handleClick()}>
        Encontre um ponto de coleta perto de você
      </FindPointButton>
    </Image>
  );
};

export default Frame;
