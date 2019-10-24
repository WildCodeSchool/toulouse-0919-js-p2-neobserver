import React from 'react';
import './DisplayCardNeo.css';
import propTypes from 'prop-types';

// si c'est moche c'est à causde de ESLint et ses sauts de lignes dégueulasses

function DisplayCardNeo({ neo }) {
  return (
    <div className="DisplayCardNeo">
      <div className="card_title">
        <p>Name : </p>
        <p>{neo.name}</p>
      </div>
      <div className="card_texts">
        <div className="card_units">
          <p>Approach date : </p>
          <p>Relative velocity : </p>
          <p>Estimated diameter : </p>
          <p>Distance from Earth : </p>
          <p>Dangerousity : </p>
        </div>
        <div className="card_fetch_results">
          <p>{neo.close_approach_data['0'].close_approach_date_full}</p>
          <p>
            {parseFloat(neo.close_approach_data['0'].relative_velocity.kilometers_per_hour).toFixed(
              0
            )}
            km/h
          </p>
          <p>
            {(
              (neo.estimated_diameter.meters.estimated_diameter_max +
                neo.estimated_diameter.meters.estimated_diameter_min) /
              2
            ).toFixed(3)}
            m
          </p>
          <p>
            {parseFloat(neo.close_approach_data['0'].miss_distance.kilometers).toFixed(0)}
            km
          </p>
          <p>{neo.is_potentially_hazardous_asteroid ? 'YOU WILL DIE' : 'You are safe'}</p>
        </div>
      </div>
      <a href={neo.nasa_jpl_url} target="_blank" rel="noopener noreferrer">
        More details on NASA JPL
      </a>
    </div>
  );
}

DisplayCardNeo.propTypes = {
  neo: propTypes.string.isRequired
};

export default DisplayCardNeo;
