import React from 'react';
import './App.css';
import News from './components/News';
import NewsPage from './components/NewsPage';
import FormatDateApi from './components/FormatDateApi';

function App() {
  const dispPage = true;
  return (
    <div>
      <FormatDateApi />
    </div>
    // <div>{dispPage && <NewsPage />}</div>
  );
}

export default App;
