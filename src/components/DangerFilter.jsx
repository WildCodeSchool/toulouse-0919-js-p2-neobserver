import React from 'react';
import DisplayCardNeo from './DisplayCardNeo';

const DangerFilter = ({ foundDangerous, getDangerousNeos, getSafeNeos, foundSafe }) => {
  return (
    <div>
      <button onClick={() => getDangerousNeos()}>Dangerous</button>
      {foundDangerous && foundDangerous.map(dangerous => <DisplayCardNeo infoNeo={dangerous} />)}
      <button onClick={() => getSafeNeos()}>Safe</button>
      {foundSafe && foundSafe.map(safe => <DisplayCardNeo infoNeo={safe} />)}
    </div>
  );
};

export default DangerFilter;
