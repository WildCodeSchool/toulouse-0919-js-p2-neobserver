import React from 'react';
import DisplayCardNeoOTD from './DisplayCardNeoOTD';
// import arrNeo from './jason';

const SizeFilter = ({ arrNeo, foundSmalls, getSmallNeos }) => {
  return (
    <div>
      <label htmlFor="small">Size</label>
      <button onClick={() => getSmallNeos(arrNeo)}>Small</button>
      {foundSmalls && <DisplayCardNeoOTD infoNeo={foundSmalls} />}
    </div>
  );
};

export default SizeFilter;
