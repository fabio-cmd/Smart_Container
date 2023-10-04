import React from 'react';

import { SmartContainerContainer } from './components/SmartContainer/SmartContainerStyles';
import SmartContainer from './components/SmartContainer'; 
import TextSection from './components/TextSection/TextSection';
import SignupSection from './components/SignupSection/SignupSection';


function App() {
  return (
    <div className="App">
      <SmartContainerContainer/>
      <SmartContainer />
      <TextSection/>
      <SignupSection/>
    </div>
  );
}

export default App;