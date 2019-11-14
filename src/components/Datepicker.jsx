import React from 'react';
import { getFlattenArrayLength } from './utils/utils';
import './AllFilter.css';

const Datepicker = ({ handlerCreateArrayDate, arrayDate, getNeos, arrayResults }) => {
  return (
    <div className="CalendarGlobal">
      <button className="CalendarBtn" type="button" onClick={getNeos}>
        Search by week
      </button>
      <input
        className="CalendarStart"
        type="date"
        value={arrayDate ? arrayDate[0] : ''}
        onChange={event => handlerCreateArrayDate(event)}
      />
      <input className="CalendarEnd" type="date" value={arrayDate ? arrayDate[7] : ''} disabled />
      <p>{arrayResults && `We found ${getFlattenArrayLength(arrayResults)} NEOs`}</p>
    </div>
  );
};

export default Datepicker;
