import React from 'react';
import DisplayCardNeo from './DisplayCardNeo';
import { getFlattenArrayFromObject } from './utils/utils';

const ListNeo = ({ arrayResults }) => {
  const flattenArray = getFlattenArrayFromObject(arrayResults);
  return (
    <div>
      {flattenArray.map(infoNeo => {
        return <DisplayCardNeo infoNeo={infoNeo} />;
      })}
    </div>
  );
};

export default ListNeo;
