import React, { Component } from 'react';
import axios from 'axios';
import DisplayCardNeoOTD from './DisplayCardNeoOTD';

function getEndDate(startDate) {
  let arrayConverted = [];
  const copy = new Date(startDate);
  for (let i = 0; i < 7; i++) {
    copy.setDate(copy.getDate() + 1);
    arrayConverted.push(copy.toISOString().substring(0, 10));
  }
  return arrayConverted;
}
console.log(getEndDate('2019-01-01'));

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
          this.state.arrayDate[1]
        }&api_key=w5E5Q3iswF021K4U1EXRhiuJRadRrkNXEg95144y`
      )
      .then(response => response.data)
      .then(data => {
        this.setState({
          arrayResults: data.near_earth_objects[`${this.state.arrayDate[0]}`]
        });
      });
  }

  handleChange(event) {
    this.setState({ arrayDate: getEndDate(event.target.value) });
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
