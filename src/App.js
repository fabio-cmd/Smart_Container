import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/Header/Header';
import Frame from './components/Frame/Frame';
import TextSection from './components/TextSection/TextSection';
import NewPointForm from './components/NewPointForm/NewPointForm';
import SupportPointsMap from './components/SupportPointMap/SupportPointMap';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Container className='m-0 p-0' style={{ maxWidth: 'none' }}>
      <Header />
      <Frame />
      <TextSection />
      <NewPointForm />
      <SupportPointsMap />
      <Footer />
    </Container>
  );
}

export default App;