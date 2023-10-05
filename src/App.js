import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/Header/Header';
import Frame from './components/Frame/Frame';
import TextSection from './components/TextSection/TextSection';
import NewPointForm from './components/NewPointForm/NewPointForm';
import SupportPointsMap from './components/SupportPointMap/SupportPointMap';
import Footer from './components/Footer/Footer';
import { useRef } from 'react';

function App() {
  const TextSectionRef = useRef(null);

  return (
    <Container className='m-0 p-0' style={{ maxWidth: 'none' }}>
      {/* <Header /> */}
      <Frame TextSectionRef={TextSectionRef}/>
      <TextSection TextSectionRef={TextSectionRef}/>
      <SupportPointsMap />
      
      <NewPointForm />
      
      <Footer />
    </Container>
  );
}

export default App;