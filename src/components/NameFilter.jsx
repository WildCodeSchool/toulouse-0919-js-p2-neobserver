import React from 'react';
import DisplayCardNeo from './DisplayCardNeo';

const NameFilter = ({ handleNeoByName, findNeoByName, searchedInputName, foundNeo }) => {
  return (
    <div className="BigDivFilterName">
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
          Search by name
        </button>
      </div>
      <div className="CardName">{foundNeo && <DisplayCardNeo infoNeo={foundNeo} />}</div>
    </div>
  );
};

export default NameFilter;
