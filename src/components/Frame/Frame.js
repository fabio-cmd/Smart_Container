import React from 'react';

import { ImageContainer, Image, TextContainer} from './FrameStyles';

import reciclagemOrg from '../../images/reciclagem-orgânica.png';

const Frame = () => {
  return (
    <Image>
    <ImageContainer src={reciclagemOrg} alt='reciclagem'/>
    <TextContainer>
    Lorem ipsum is placeholder text .<br/>
     commonlyused in the graphic.<br/>
    for previewing layouts and visual mockup
    </TextContainer>
 
    </Image>
  );
};

export default Frame;
