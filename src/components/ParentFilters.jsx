import React, { Component } from 'react';
import axios from 'axios';
import Datepicker from './Datepicker';
import NameFilter from './NameFilter';
// import SizeFilter from './SizeFilter';
import arrNeo from './jason';
import DisplayCardNeo from './DisplayCardNeo';
import ListNeo from './ListNeo';
import { getFlattenArrayFromObject } from './utils/utils';

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
  }

  // elements concernant le filtre date et creation du tableau global

  getNeosByWeek() {
    axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.state.arrayDate[0]}&end_date=${
          this.state.arrayDate[6]
        }&api_key=9LS4vKfBfNWbLDCdomOSdhqNhTpib0qw6G6p8nVJ`
      )
      .then(response => response.data)
      .then(data => {
        this.setState({
          arrayResults: data.near_earth_objects
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
    const flattenArray = getFlattenArrayFromObject(this.state.arrayResults);
    const resultNeo = flattenArray.find(neo => {
      return neo.name === neoName;
    });
    this.setState({ foundNeo: resultNeo });
  }

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
        <div>{this.state.arrayResults && <ListNeo arrayResults={this.state.arrayResults} />}</div>
      </div>
    );
  }
}

export default ParentFilters;
