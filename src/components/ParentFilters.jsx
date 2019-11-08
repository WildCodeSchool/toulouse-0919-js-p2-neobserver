import React, { Component } from 'react';
import axios from 'axios';
import Datepicker from './Datepicker';
import NameFilter from './NameFilter';
import arrNeo from './jason';

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
      arrayResults: null,
      searchedName: '(2019 PA)',
      foundNeo: null
    };

    this.getNeosByWeek = this.getNeosByWeek.bind(this);
    this.createArrayDate = this.createArrayDate.bind(this);
    this.handleNeoByName = this.handleNeoByName.bind(this);
    this.findNeoByName = this.findNeoByName.bind(this);
  }

  // elements concernant le filtre date et creation du tableau global

  getNeosByWeek() {
    axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.state.arrayDate[0]}&end_date=${
          this.state.arrayDate[0]
        }&api_key=4l3K0DajH0fAUw0QH01CEhetumg7tRSpASgq9iIW`
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

  // elements concernant les filtres par nom:

  handleNeoByName(event) {
    this.setState({ searchedName: event.target.value });
  }

  findNeoByName(neoName) {
    const resultNeo = arrNeo.find(neo => {
      return neo.name === neoName;
    });
    this.setState({ foundNeo: resultNeo });
  }

  render() {
    return (
      <div>
        <Datepicker
          handlerCreateArrayDate={this.createArrayDate}
          arrayDate={this.state.arrayDate}
          getNeos={this.getNeosByWeek}
        />
        <NameFilter
          handleNeoByName={this.handleNeoByName}
          handleSearchByName={this.handleSearchByName}
          findNeoByName={this.findNeoByName}
          searchedInputName={this.state.searchedName}
          foundNeo={this.state.foundNeo}
        />
      </div>
    );
  }
}

export default ParentFilters;
