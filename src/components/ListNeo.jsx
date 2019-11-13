import React from 'react';
import DisplayCardNeo from './DisplayCardNeo';

const ListNeo = ({ arrayResults }) => {
  const finalArray = Object.keys(arrayResults).map(date => {
    return arrayResults[date];
  });
  function flattenMap(carry, current) {
    carry = [...carry, ...current];
    return carry;
  }
  const flattenArray = finalArray.reduce(flattenMap, []);
  console.log(flattenArray);

  return (
    <div>
      {flattenArray.map(infoNeo => {
        return <DisplayCardNeo infoNeo={infoNeo} />;
      })}
    </div>
  );
};

export default ListNeo;
