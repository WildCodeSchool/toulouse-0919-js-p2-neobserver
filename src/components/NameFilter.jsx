import React from 'react';
import DisplayCardNeo from './DisplayCardNeo';

const NameFilter = ({ handleNeoByName, findNeoByName, searchedInputName, foundNeo }) => {
  return (
    <div>
      <label htmlFor="name"> Name</label>
      <input
        onChange={event => handleNeoByName(event)}
        id="searchName"
        type="text"
        value={searchedInputName}
      />
      <button onClick={() => findNeoByName(searchedInputName)}>SEARCH</button>
      {foundNeo && <DisplayCardNeo infoNeo={foundNeo} />}
    </div>
  );
};

export default NameFilter;
