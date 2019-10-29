import React from 'react';
import News from './components/News';
import Header from './components/Header';
import CardNeo from './components/CardNeo';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <CardNeo />
      <News />
      <Footer />
    </div>
  );
}

export default App;
