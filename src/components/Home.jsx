import React from 'react';
import CardNeo from './CardNeo';
import News from './News';
import Header from './Header';

function Home() {
  return (
    <div>
      <Header />
      <CardNeo />
      <News />
    </div>
  );
}

export default Home;
