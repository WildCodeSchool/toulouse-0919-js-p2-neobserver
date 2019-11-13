import React from 'react';

const Datepicker = ({ handlerCreateArrayDate, arrayDate, getNeos }) => {
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
    </div>
  );
};
export default Datepicker;
