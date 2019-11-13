import React from 'react';
import DisplayCardNeo from './DisplayCardNeo';
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
      <label htmlFor="small">Size</label>
      <button onClick={() => getSmallNeos()}>Small</button>
      {foundSmalls && foundSmalls.map(small => <DisplayCardNeo infoNeo={small} />)}
      <button onClick={() => getMediumNeos()}>Medium</button>
      {foundMediums && foundMediums.map(medium => <DisplayCardNeo infoNeo={medium} />)}
      <button onClick={() => getBigNeos()}>Big</button>
      {foundBigs && foundBigs.map(big => <DisplayCardNeo infoNeo={big} />)}
    </div>
  );
};

export default SizeFilter;
