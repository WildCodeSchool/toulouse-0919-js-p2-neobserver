import React from 'react';
import DisplayCardNeo from './DisplayCardNeo';
import { getFlattenArrayFromObject } from './utils/utils';
import './AllNeos.css';

const ListNeo = ({ arrayResults }) => {
  const flattenArray = getFlattenArrayFromObject(arrayResults);
  return (
    <div className="AllNeos">
      {flattenArray.map(infoNeo => {
        return <DisplayCardNeo infoNeo={infoNeo} />;
      })}
    </div>
  );
};

export default ListNeo;
