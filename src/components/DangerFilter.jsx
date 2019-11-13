import React from 'react';
import DisplayCardNeo from './DisplayCardNeo';

const DangerFilter = ({ foundDangerous, getDangerousNeos, getSafeNeos, foundSafe }) => {
  return (
    <div>
      <div>
        <button onClick={getDangerousNeos}>Dangerous</button>
        <button onClick={getSafeNeos}>Safe</button>
      </div>
      <div>
        {foundDangerous && foundDangerous.map(dangerous => <DisplayCardNeo infoNeo={dangerous} />)}
        {foundSafe && foundSafe.map(safe => <DisplayCardNeo infoNeo={safe} />)}
      </div>
    </div>
  );
};

export default DangerFilter;
