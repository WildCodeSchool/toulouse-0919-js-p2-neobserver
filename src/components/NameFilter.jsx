import React from 'react';
import DisplayCardNeo from './DisplayCardNeo';

const NameFilter = ({ handleNeoByName, findNeoByName, searchedInputName, foundNeo }) => {
  return (
    <div className="Filter-Name">
      <label htmlFor="name"> Name</label>
      <input
        className="Input-Name"
        onChange={event => handleNeoByName(event)}
        id="searchName"
        type="text"
        value={searchedInputName}
      />
      <button className="Btn-Name" onClick={() => findNeoByName(searchedInputName)}>
        Search
      </button>
      {foundNeo && <DisplayCardNeo infoNeo={foundNeo} />}
    </div>
  );
};

export default NameFilter;
