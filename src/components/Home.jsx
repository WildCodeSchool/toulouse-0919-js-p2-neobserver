import React from 'react';
import CardNeoOTD from './CardNeoOTD';
import News from './News';
import Header from './Header';
import './Home.css';

function Home() {
  return (
    <div>
      <Header />
      <div className="NeoAndFiltres">
        <CardNeoOTD />
        <News />
      </div>
    </div>
  );
}

export default Home;
