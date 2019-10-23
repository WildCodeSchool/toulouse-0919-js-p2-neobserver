import React from 'react';

function DisplayNews({ News }) {
  return (
    <div className="DisplayNews">
      <h4> {News.title} </h4>
      <p>{News.date} </p>
      <img src={News.url} alt={News.copyright} />
      <p>{News.explanation} </p>
    </div>
  );
}

export default DisplayNews;
