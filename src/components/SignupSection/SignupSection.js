// SignupSection.js
import React from 'react';

import { SignupSectionContainer, SignupButton } from './SignupSectionStyles';


const SignupSection = () => {
  return (
    <SignupSectionContainer>
      <h2>Sign up for Smart Container</h2>
      <p>Join us today and enjoy the benefits of Smart Container.</p>
      <SignupButton>Sign Up</SignupButton>
    </SignupSectionContainer>
  );
};

export default SignupSection;
