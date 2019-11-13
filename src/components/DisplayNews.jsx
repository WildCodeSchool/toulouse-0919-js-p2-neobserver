import React from 'react';
import './DisplayNews.css';
import propTypes from 'prop-types';

function DisplayNews({ News }) {
  return (
    <div className="GlobalNews">
    <div className="contenerNews">
      <div className="DisplayNews">
        <h5 className="titleNews"> Today's News : </h5>
        <p>{News.date}</p>
      </div>
      <div className="infosNews">
        <div>
          <p className="nameNews">{News.title}</p>
          <img className="NewsImage" src={News.url} alt={News.copyright} />
          <p className="NewsText">{News.explanation}</p>
        </div>
      </div>
    </div>
    </div>
  );
}

DisplayNews.propTypes = {
  News: propTypes.string.isRequired
};

export default DisplayNews;
