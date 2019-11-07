import React, { Component } from 'react';
import axios from 'axios';
import Datepicker from './Datepicker';

function getWeekDates(startDate) {
  const arrayConverted = [startDate];
  const copy = new Date(startDate);
  for (let i = 0; i < 7; i++) {
    copy.setDate(copy.getDate() + 1);
    arrayConverted.push(copy.toISOString().substring(0, 10));
  }
  return arrayConverted;
}

class ParentFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayDate: null,
      arrayResults: null
    };
    this.getNeosByWeek = this.getNeosByWeek.bind(this);
    this.createArrayDate = this.createArrayDate.bind(this);
  }

  componentDidUpdate() {
    this.getNeosByWeek();
  }

  getNeosByWeek() {
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

  createArrayDate(event) {
    this.setState({ arrayDate: getWeekDates(event.target.value) });
  }

  render() {
    return (
      <div>
        <Datepicker
          handlerCreateArrayDate={this.createArrayDate}
          arrayDate={this.state.arrayDate}
        />
      </div>
    );
  }
}

export default ParentFilters;
