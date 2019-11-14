import { Link } from 'react-router-dom';
import React from 'react';
import DisplayCardNeo from './DisplayCardNeo';

// import arrNeo from './jason';

const SizeFilter = ({
  foundSmalls,
  getSmallNeos,
  getMediumNeos,
  foundMediums,
  getBigNeos,
  foundBigs
}) => {
  return (
    <div>
      <label htmlFor="small">Size</label>
      <Link to="/AllNeos" alt="link to neos">
        <button onClick={() => getSmallNeos()}>Small</button>
        {foundSmalls && foundSmalls.map(small => <DisplayCardNeo infoNeo={small} />)}
      </Link>

      <Link to="/AllNeos" alt="link to neos">
        <button onClick={() => getMediumNeos()}>Medium</button>
        {foundMediums && foundMediums.map(medium => <DisplayCardNeo infoNeo={medium} />)}
      </Link>

      <Link to="/AllNeos" alt="link to neos">
        <button onClick={() => getBigNeos()}>Big</button>
        {foundBigs && foundBigs.map(big => <DisplayCardNeo infoNeo={big} />)}
      </Link>
    </div>
  );
};

export default SizeFilter;
