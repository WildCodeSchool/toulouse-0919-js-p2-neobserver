import React, { Component } from 'react';
import axios from 'axios';

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
    this.getNeos = this.getNeos.bind(this);
  }

  getNeos() {
    if (this.state.arrayDate !== null) {
      axios
        .get(
          `https://api.nasa.gov/neo/rest/v1/feed?
        start_date=${this.state.arrayDate[0]}&
        end_date=${this.state.arrayDate[1]}&
        api_key=Jr2an55MZH7pzYVTcL1DvZazu0oEgJils4o4KdjI`
        )
        .then(response => response.data)
        .then(data => {
          this.setState({
            arrayResults: [data.near_earth_objects[`${this.arrayDate[0]}`]]
          });
        });
    }
  }

  handleChange(event) {
    this.setState({ arrayDate: [event.target.value, getEndDate(event.target.value)] });
    this.getNeos();
    console.log(this.arrayResults);
  }

  render() {
    const { arrayDate } = this.state;
    return (
      <div>
        <input type="date" value={arrayDate ? arrayDate[0] : ''} onChange={this.handleChange} />
        <input type="date" value={arrayDate ? arrayDate[1] : ''} disabled />
      </div>
    );
  }
}

export default Datepicker;
