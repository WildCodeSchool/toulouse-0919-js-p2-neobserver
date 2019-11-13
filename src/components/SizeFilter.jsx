import React from 'react';
import DisplayCardNeo from './DisplayCardNeo';
import { Link } from 'react-router-dom';

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
      <div>
        <label htmlFor="small">Size</label>
        <Link to="/AllNeos" alt="link to neos">
          <button onClick={getSmallNeos}>Small</button>
        </Link>

        <Link to="/AllNeos" alt="link to neos">
          <button onClick={getMediumNeos}>Medium</button>
        </Link>

        <Link to="/AllNeos" alt="link to neos">
          <button onClick={getBigNeos}>Big</button>
        </Link>
      </div>
      <div>
        {foundSmalls && foundSmalls.map(small => <DisplayCardNeo infoNeo={small} />)}
        {foundMediums && foundMediums.map(medium => <DisplayCardNeo infoNeo={medium} />)}
        {foundBigs && foundBigs.map(big => <DisplayCardNeo infoNeo={big} />)}
      </div>
    </div>
  );
};

export default SizeFilter;
