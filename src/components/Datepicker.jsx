import React, { Component } from 'react';
import axios from 'axios';
import DisplayCardNeoOTD from './DisplayCardNeoOTD';

function getWeekDates(startDate) {
  let arrayConverted = [startDate];
  const copy = new Date(startDate);
  for (let i = 0; i < 7; i++) {
    copy.setDate(copy.getDate() + 1);
    arrayConverted.push(copy.toISOString().substring(0, 10));
  }
  return arrayConverted;
}

class Datepicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayDate: null,
      arrayResults: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.getNeos = this.getNeos.bind(this);
  }

  componentDidUpdate() {
    this.getNeos();
  }

  getNeos() {
    axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.state.arrayDate[0]}&end_date=${
          this.state.arrayDate[0]
        }&api_key=ckBjfkOb7jdTYgZE0HyT1B9L5m0oe6lHQhSkLfkX`
      )
      .then(response => response.data)
      .then(data => {
        this.setState({
          arrayResults: data.near_earth_objects[`${this.state.arrayDate[0]}`]
        });
      });
  }

  handleChange(event) {
    this.setState({ arrayDate: getWeekDates(event.target.value) });
  }

  render() {
    const { arrayDate } = this.state;
    return (
      <div>
        <input type="date" value={arrayDate ? arrayDate[0] : ''} onChange={this.handleChange} />
        <input type="date" value={arrayDate ? arrayDate[1] : ''} disabled />
        {this.state.arrayResults && <DisplayCardNeoOTD neo={this.state.arrayResults[0]} />}
      </div>
    );
  }
}

export default Datepicker;
