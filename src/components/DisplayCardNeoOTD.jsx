import React from 'react';
import './DisplayCardNeoOTD.css';
import propTypes from 'prop-types';

// si c'est moche c'est à causde de ESLint et ses sauts de lignes dégueulasses
// usage d'espaces inséccables pour espacer les unités du résultat ex: 300&nbsp;km

function DisplayCardNeoOTD({ neo }) {
  return (
    <div className="DisplayCardNeoOTD">
      <div className="card_title">
        <h5>Neo of the day</h5>
      </div>
      <div className="card_texts">
        <div className="card_units">
          <ul>
            <li>Name : </li>
            <li>Approach date : </li>
            <li>Relative velocity : </li>
            <li>Estimated diameter : </li>
            <li>Distance from Earth : </li>
            <li>Dangerousity : </li>
          </ul>
        </div>
        <div className="card_fetch_results">
          <ul>
            <li>{neo.name}</li>
            <li>{neo.close_approach_data['0'].close_approach_date_full}</li>
            <li>
              {parseFloat(
                neo.close_approach_data['0'].relative_velocity.kilometers_per_hour
              ).toFixed(0)}
              &nbsp;km/h
            </li>
            <li>
              {(
                (neo.estimated_diameter.meters.estimated_diameter_max +
                  neo.estimated_diameter.meters.estimated_diameter_min) /
                2
              ).toFixed(3)}
              &nbsp;m
            </li>
            <li>
              {parseFloat(neo.close_approach_data['0'].miss_distance.kilometers).toFixed(0)}
              &nbsp;km
            </li>
            <li>
              {neo.is_potentially_hazardous_asteroid ? 'YOU WILL DIE (maybe)' : 'You are safe'}
            </li>
          </ul>
        </div>
      </div>
      <a className="JPLlink" href={neo.nasa_jpl_url} target="_blank" rel="noopener noreferrer">
        More details on NASA JPL
      </a>
    </div>
  );
}

DisplayCardNeoOTD.propTypes = {
  neo: propTypes.string.isRequired
};

export default DisplayCardNeoOTD;
