import React from 'react';
import { getFlattenArrayLength } from './utils/utils';
import './AllFilter.css';

const Datepicker = ({ handlerCreateArrayDate, arrayDate, getNeos, arrayResults, clearSearch }) => {
  return (
    <div className="GrosseDiv">
      <div className="Tittle-filter">
        <br />
        <h2 className="h2DiscoverSpaceAndNeos">Discover Space and Neos</h2>
        <br />
        <h4 className="firstStep">First step: select a week</h4>
        <br />
      </div>
      <div className="CalendarGlobal">
        <button className="CalendarBtn" type="button" onClick={arrayDate ? getNeos : null}>
          Search by week
        </button>
        <input
          className="CalendarStart"
          type="date"
          value={arrayDate ? arrayDate[0] : ''}
          onChange={event => handlerCreateArrayDate(event)}
        />
        <input className="CalendarEnd" type="date" value={arrayDate ? arrayDate[7] : ''} disabled />
        <button className="clearSearch" onClick={clearSearch}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Datepicker;
