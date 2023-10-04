// Header.js
import React from 'react';
import { HeaderContainer, Logo } from './HeaderStyles.js'

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="/path/to/your/logo.png" alt="Logo" />
      <h1>Smart Container</h1>
    </HeaderContainer>
  );
};

export default Header;
