import React from 'react';
import './DisplayCardNeo.css';

function DisplayCardNeo({ object }) {
  return (
    <div className="DisplayCardNeo">
      <div className="card_title">
        <p>Name : </p>
        <p>{object.name}</p>
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
          <p>{object.close_approach_data['0'].close_approach_date_full}</p>
          <p>
            {parseFloat(
              object.close_approach_data['0'].relative_velocity.kilometers_per_hour
            ).toFixed(0)}{' '}
            km/h
          </p>
          <p>
            {(
              (object.estimated_diameter.meters.estimated_diameter_max +
                object.estimated_diameter.meters.estimated_diameter_min) /
              2
            ).toFixed(3)}{' '}
            m
          </p>
          <p>
            {parseFloat(object.close_approach_data['0'].miss_distance.kilometers).toFixed(0)} km
          </p>
          <p>{object.is_potentially_hazardous_asteroid ? 'YOU WILL DIE' : 'You are safe'}</p>
        </div>
      </div>
      <a href={object.nasa_jpl_url} target="_blank" rel="noopener noreferrer">
        More details on NASA JPL
      </a>
    </div>
  );
}

export default DisplayCardNeo;
