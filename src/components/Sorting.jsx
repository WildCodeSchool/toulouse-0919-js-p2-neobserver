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
  foundSafe,
  handleNeoByName,
  findNeoByName,
  searchedInputName,
  foundNeo
}) => {
  return (
    <div className="Btn-Sorting">
      <div className="All-btn">
        <div className="BigDivFilterName"></div>
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
        <div className="Filter-Name">
          <label htmlFor="name" />
          <input
            className="Input-Name"
            onChange={event => handleNeoByName(event)}
            id="searchName"
            type="text"
            value={searchedInputName}
          />
          <button className="Btn-Name" onClick={() => findNeoByName(searchedInputName)}>
            Search by Name
          </button>
        </div>
      </div>
      <div className="AllNeos">
        {foundNeo && <DisplayCardNeo className="ResultNameFilter" infoNeo={foundNeo} />}
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
