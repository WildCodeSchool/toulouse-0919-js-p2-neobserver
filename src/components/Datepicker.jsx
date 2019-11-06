import React, { Component } from 'react';
import axios from 'axios';
import DisplayCardNeoOTD from './DisplayCardNeoOTD';

function getEndDate(startDate) {
  const copy = new Date(startDate);
  copy.setDate(copy.getDate() + 7);
  return copy.toISOString().substring(0, 10);
}

class Datepicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayDate: null,
      arrayResults: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.getNeosByWeekRange = this.getNeosByWeekRange.bind(this);
  }

  componentDidUpdate() {
    this.getNeosByWeekRange();
  }

  getNeosByWeekRange() {
    axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.state.arrayDate[0]}&end_date=${
          this.state.arrayDate[1]
        }&api_key=Jr2an55MZH7pzYVTcL1DvZazu0oEgJils4o4KdjI`
      )
      .then(response => response.data)
      .then(data => {
        this.setState({
          arrayResults: data.near_earth_objects[`${this.state.arrayDate[0]}`]
        });
      });
  }

  handleChange(event) {
    this.setState({ arrayDate: [event.target.value, getEndDate(event.target.value)] });
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
