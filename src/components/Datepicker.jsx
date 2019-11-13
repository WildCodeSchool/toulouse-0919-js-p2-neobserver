import React from 'react';
import { getFlattenArrayLength } from './utils/utils';

const Datepicker = ({ handlerCreateArrayDate, arrayDate, getNeos, arrayResults }) => {
  return (
    <div>
      <input
        type="date"
        value={arrayDate ? arrayDate[0] : ''}
        onChange={event => handlerCreateArrayDate(event)}
      />
      <input type="date" value={arrayDate ? arrayDate[7] : ''} disabled />
      <button type="button" onClick={getNeos}>
        Search by week
      </button>
      <p>{arrayResults && `We found ${getFlattenArrayLength(arrayResults)} NEOs`}</p>
    </div>
  );
};

export default Datepicker;
