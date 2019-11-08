import React from 'react';
import CardNeoOTD from './CardNeoOTD';
import News from './News';
import Header from './Header';
import ParentFilters from './ParentFilters';
import './Home.css';

function Home() {
  return (
    <div>
      <Header />
      <div className="NeoAndFiltres">
        <CardNeoOTD />
        <ParentFilters className="Filters" />
      </div>
      <News />
    </div>
  );
}

export default Home;
