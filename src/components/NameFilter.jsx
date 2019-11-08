import React from 'react';
import DisplayCardNeoOTD from './DisplayCardNeoOTD';

const NameFilter = ({ handleNeoByName, findNeoByName, searchedInputName, foundNeo }) => {
  return (
    <div>
      <label htmlFor="name"> Name :</label>
      <input
        onChange={event => handleNeoByName(event)}
        id="searchName"
        type="text"
        value={searchedInputName}
      />
      <button onClick={() => findNeoByName(searchedInputName)}>SEARCH</button>
      {foundNeo && <DisplayCardNeoOTD neo={foundNeo} />}
    </div>
  );
};

export default NameFilter;
