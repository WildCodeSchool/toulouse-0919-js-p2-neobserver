import React, { Component } from 'react';
import axios from 'axios';
import DisplayCardNeoOTD from './DisplayCardNeoOTD';

class Datepicker extends Component {
  constructor(props) {
    super(props);
    this.s.handleChange.bind(this);
    this.getNeos = this.getNeos.bind(this);
  }

  componentDidUpdate() {
    this.getNeos();
  }

  createArrayDate(event) {
    this.setState({ arrayDate: getWeekDates(event.target.value) });
  }

  render() {
    const { arrayDate } = this.state;
    return (
      <div>
        <input type="date" value={arrDate ? arrDate[0] : ''} onChange={createArrayDate} />
        <input type="date" value={arrDate ? arrDate[7] : ''} disabled />
      </div>
    );
  }
}

export default Datepicker;
