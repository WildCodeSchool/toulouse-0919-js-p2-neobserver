import { Link } from 'react-router-dom';
import React from 'react';
import DisplayCardNeo from './DisplayCardNeo';
import './AllFilter.css';
import './AllNeos.css';

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
    <div className="Btn-Sorting">
      <div className="All-btn">
        <label htmlFor="small"></label>
        <button className="Btn-Small" onClick={getSmallNeos}>
          Small
        </button>

        <button className="Btn-Medium" onClick={getMediumNeos}>
          Medium
        </button>

        <button className="Btn-Big" onClick={getBigNeos}>
          Big
        </button>

        <button className="Btn-Dangerous" onClick={getDangerousNeos}>
          Dangerous
        </button>

        <button className="Btn-Safe" onClick={getSafeNeos}>
          Safe
        </button>
      </div>
      <div className="AllNeos">
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
