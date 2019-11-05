import React from 'react';
import CardNeoOTD from './CardNeoOTD';
import News from './News';
import Header from './Header';

function Home() {
  return (
    <div>
      <Header />
      <CardNeoOTD />
      <News />
    </div>
  );
}

export default Home;
