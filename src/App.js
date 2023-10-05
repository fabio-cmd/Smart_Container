import React from 'react';

import TextSection from './components/TextSection/TextSection';
import SignupSection from './components/SignupSection/SignupSection';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      <TextSection/>
      <SignupSection/>
    </div>
  );  
}

export default App;