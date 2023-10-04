// App.js
import React from 'react';
import SmartContainer from './components/SmartContainer'; 
import TextSection from './components/TextSection/TextSection';
import SignupSection from './components/SignupSection/SignupSection';

function App() {
  return (
    <div className="App">
      <SmartContainer />
      <TextSection/>
      <SignupSection/>
    </div>
  );
}

export default App;
