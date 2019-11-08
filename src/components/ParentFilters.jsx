import React, { Component } from 'react';
import axios from 'axios';
import Datepicker from './Datepicker';
import NameFilter from './NameFilter';
// import SizeFilter from './SizeFilter';
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
      searchedName: '',
      foundNeo: null
    };

    this.getNeosByWeek = this.getNeosByWeek.bind(this);
    this.createArrayDate = this.createArrayDate.bind(this);
    this.handleNeoByName = this.handleNeoByName.bind(this);
    this.findNeoByName = this.findNeoByName.bind(this);
    // this.findSmallNeo = this.findSmallNeo.bind(this);
  }

  // elements concernant le filtre date et creation du tableau global

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

  // elements concernant la recherche par taille:

  // findSmallNeo(arrNeo) {
  //   const smallNeos = arrNeo.filter(neo => {
  //     return neo.estimated_diameter.meters.estimated_diameter_min < 5;
  //   });
  //   this.setState({ foundSmalls: smallNeos });
  // }

  render() {
    return (
      <div className="AllFilter">
        <Datepicker
          className="DateFilter"
          handlerCreateArrayDate={this.createArrayDate}
          arrayDate={this.state.arrayDate}
          getNeos={this.getNeosByWeek}
        />
        <NameFilter
          className="NameFilter"
          handleNeoByName={this.handleNeoByName}
          handleSearchByName={this.handleSearchByName}
          findNeoByName={this.findNeoByName}
          searchedInputName={this.state.searchedName}
          foundNeo={this.state.foundNeo}
        />
        {/* <SizeFilter />
        findSmallNeo={this.state.foundSmalls}
        foundSmalls={this.state.foundNeo} */}
      </div>
    );
  }
}

export default ParentFilters;
