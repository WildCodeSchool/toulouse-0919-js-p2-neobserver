import React, { Component } from 'react';
import axios from 'axios';
import Datepicker from './Datepicker';
import NameFilter from './NameFilter';
import Sorting from './Sorting';
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
      foundNeo: null,
      foundSmalls: null,
      foundMediums: null,
      foundBigs: null,
      foundDangerous: null,
      foundSafe: null
    };

    this.getNeosByWeek = this.getNeosByWeek.bind(this);
    this.createArrayDate = this.createArrayDate.bind(this);
    this.handleNeoByName = this.handleNeoByName.bind(this);
    this.findNeoByName = this.findNeoByName.bind(this);
    this.getSmallNeos = this.getSmallNeos.bind(this);
    this.getMediumNeos = this.getMediumNeos.bind(this);
    this.getBigNeos = this.getBigNeos.bind(this);
    this.getDangerousNeos = this.getDangerousNeos.bind(this);
    this.getSafeNeos = this.getSafeNeos.bind(this);
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
    const resultNeo = flattenArray.find(infoNeo => {
      return infoNeo.name === neoName;
    });
    this.setState({ foundNeo: resultNeo });
  }

  // elements concernant la recherche par taille:
  getSmallNeos() {
    const flattenArray = getFlattenArrayFromObject(this.state.arrayResults);
    const resultSmalls = flattenArray.filter(infoNeo => {
      return infoNeo.estimated_diameter.meters.estimated_diameter_min < 10;
    });
    this.setState({ foundSmalls: resultSmalls, foundMediums: null, foundBigs: null });
  }

  getMediumNeos() {
    const flattenArray = getFlattenArrayFromObject(this.state.arrayResults);
    const resultMediums = flattenArray.filter(infoNeo => {
      return (
        (infoNeo.estimated_diameter.meters.estimated_diameter_min > 10) &&
        (infoNeo.estimated_diameter.meters.estimated_diameter_max < 150)
      );
    });
    this.setState({ foundMediums: resultMediums, foundSmalls: null, foundBigs: null });
  }

  getBigNeos() {
    const flattenArray = getFlattenArrayFromObject(this.state.arrayResults);
    const resultBigs = flattenArray.filter(infoNeo => {
      return infoNeo.estimated_diameter.meters.estimated_diameter_max > 150;
    });
    this.setState({ foundBigs: resultBigs, foundSmalls: null, foundMediums: null });
  }

  getDangerousNeos() {
    const flattenArray = getFlattenArrayFromObject(this.state.arrayResults);
    const resultDangerous = flattenArray.filter(infoNeo => {
      return infoNeo.is_potentially_hazardous_asteroid === true;
    });
    this.setState({ foundDangerous: resultDangerous, foundSafe: null, foundSmalls: null, foundMediums: null, foundBigs: null });
  }

  getSafeNeos() {
    const flattenArray = getFlattenArrayFromObject(this.state.arrayResults);
    const resultSafe = flattenArray.filter(infoNeo => {
      return infoNeo.is_potentially_hazardous_asteroid === false;
    });
    this.setState({ foundSafe: resultSafe, foundDangerous: null, foundSmalls: null, foundMediums: null, foundBigs: null });
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
        <Sorting
          className="SmallFilter"
          getSmallNeos={this.getSmallNeos}
          foundSmalls={this.state.foundSmalls}
          infoNeo={this.state.infoNeo}
          getMediumNeos={this.getMediumNeos}
          foundMediums={this.state.foundMediums}
          getBigNeos={this.getBigNeos}
          foundBigs={this.state.foundBigs}
          getDangerousNeos={this.getDangerousNeos}
          foundDangerous={this.state.foundDangerous}
          getSafeNeos={this.getSafeNeos}
          foundSafe={this.state.foundSafe}
        />
        <div>{this.state.arrayResults && <ListNeo arrayResults={this.state.arrayResults} />}</div>
      </div>
    );
  }
}

export default ParentFilters;
