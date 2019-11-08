import React from 'react';

const Datepicker = ({ handlerCreateArrayDate, arrayDate }) => {
  return (
    <div>
      <input
        type="date"
        value={arrayDate ? arrayDate[0] : ''}
        onChange={event => handlerCreateArrayDate(event)}
      />
      <input type="date" value={arrayDate ? arrayDate[7] : ''} disabled />
    </div>
  );
};
export default Datepicker;
