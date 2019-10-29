import React from 'react';
import News from './components/News';
import CardNeo from './components/CardNeo';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav />
      <CardNeo />
      <News />
      <Footer />
    </div>
  );
}

export default App;
