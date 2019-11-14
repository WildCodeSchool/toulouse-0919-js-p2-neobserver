import { Link } from 'react-router-dom';
import React from 'react';
import DisplayCardNeo from './DisplayCardNeo';

// import arrNeo from './jason';

const Sorting = ({
  foundSmalls,
  getSmallNeos,
  getMediumNeos,
  foundMediums,
  getBigNeos,
  foundBigs,
  foundDangerous,
  getDangerousNeos,
  getSafeNeos,
  foundSafe
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

        <Link to="/AllNeos" alt="link to neos">
          <button onClick={getDangerousNeos}>Dangerous</button>
        </Link>

        <Link to="/AllNeos" alt="link to neos">
          <button onClick={getSafeNeos}>Safe</button>
        </Link>
      </div>
      <div>
        {foundSmalls && foundSmalls.map(small => <DisplayCardNeo infoNeo={small} />)}
        {foundMediums && foundMediums.map(medium => <DisplayCardNeo infoNeo={medium} />)}
        {foundBigs && foundBigs.map(big => <DisplayCardNeo infoNeo={big} />)}
        {foundDangerous && foundDangerous.map(dangerous => <DisplayCardNeo infoNeo={dangerous} />)}
        {foundSafe && foundSafe.map(safe => <DisplayCardNeo infoNeo={safe} />)}
      </div>
    </div>
  );
};

export default Sorting;