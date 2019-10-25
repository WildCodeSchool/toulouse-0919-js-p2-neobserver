import React from 'react';
import './News.css';
import propTypes from 'prop-types';

function DisplayNews({ News }) {
  return (
    <div className="contenerNews">
      <div className="DisplayNews">
        <h5 clasName="titleNews"> Today's News : </h5>
        <p>{News.date}</p>
      </div>
      <div className="infosNews">
        <div className="columnNews">
          <img className="NewsImage" src={News.url} alt={News.copyright} />
          <quote className="nameNews">{News.title}</quote>
        </div>
        <div id="scrollText" className="scrollNews">
          <div className="overflow">
            {' '}
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
