import React from 'react';
import { FooterContainer, FooterSocialMedia } from './FooterStyles';

function Footer() {
  return (
    <FooterContainer>
      <FooterSocialMedia>
        <a href='facebook.com/' target='_blank'><img src="sociais/facebook.svg" alt="Logo Facebook" /></a>
        <a href='instagram.com/' target='_blank'><img src="sociais/instagram.svg" alt="Logo Instagram" /></a>
        <a href='twitter.com/' target='_blank'><img src="sociais/twitter.svg" alt="Logo Twitter" /></a>
      </FooterSocialMedia>
    </FooterContainer>
  );
}

export default Footer;