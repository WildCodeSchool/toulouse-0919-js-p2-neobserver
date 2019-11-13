import React from 'react';
import DisplayCardNeoOTD from './DisplayCardNeoOTD';
import arrNeo from './jason';
import DisplayNews from './DisplayNews';

const SizeFilter = ({ findSmallNeo, findMediumNeo, findBigNeo, arrNeo, foundSmalls }) => {
  return (
    <div>
      <button onClick={() => findSmallNeo(arrNeo)}>SMALL</button>
      {foundSmalls && <DisplayCardNeoOTD neo={foundSmalls} />}
      <button onClick={() => findMediumNeo(arrNeo)}>MEDIUM</button>
      <button onClick={() => findBigNeo(arrNeo)}>BIG</button>
    </div>
  );
};

export default SizeFilter;
