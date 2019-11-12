import React, { Component } from 'react';
import axios from 'axios';
import Datepicker from './Datepicker';
import NameFilter from './NameFilter';
import SizeFilter from './SizeFilter';
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
      foundNeo: null,
      foundSmalls: null,
      foundMediums: null,
      foundBigs: null
    };

    this.getNeosByWeek = this.getNeosByWeek.bind(this);
    this.createArrayDate = this.createArrayDate.bind(this);
    this.handleNeoByName = this.handleNeoByName.bind(this);
    this.findNeoByName = this.findNeoByName.bind(this);
    this.getSmallNeos = this.getSmallNeos.bind(this);
    this.getMediumNeos = this.getMediumNeos.bind(this);
    this.getBigNeos = this.getBigNeos.bind(this);
  }

  componentDidUpdate() {
    if (this.state.arrayDate !== null) {
      this.getNeosByWeek();
      // this.getSmallNeos();
    }
  }
  // elements concernant le filtre date et creation du tableau global

  getNeosByWeek() {
    axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${
          this.state.arrayDate[0]
        }&end_date=$&api_key={ckBjfkOb7jdTYgZE0HyT1B9L5m0oe6lHQhSkLfkX`,
        this.state.arrayDate[6]
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
    const resultNeo = arrNeo.find(infoNeo => {
      return infoNeo.name === neoName;
    });
    this.setState({ foundNeo: resultNeo });
  }

  // elements concernant la recherche par taille:
  getSmallNeos() {
    const resultSmalls = arrNeo.filter(infoNeo => {
      return infoNeo.estimated_diameter.meters.estimated_diameter_min < 10;
    });
    this.setState({ foundSmalls: resultSmalls });
  }

  getMediumNeos() {
    const resultMediums = arrNeo.filter(infoNeo => {
      return (
        (infoNeo.estimated_diameter.meters.estimated_diameter_min > 10) &
        (infoNeo.estimated_diameter.meters.estimated_diameter_max < 150)
      );
    });
    this.setState({ foundMediums: resultMediums });
  }

  getBigNeos() {
    const resultBigs = arrNeo.filter(infoNeo => {
      return infoNeo.estimated_diameter.meters.estimated_diameter_max > 150;
    });
    this.setState({ foundBigs: resultBigs });
  }

  render() {
    return (
      <div className="AllFilter">
        <Datepicker
          className="DateFilter"
          handlerCreateArrayDate={this.createArrayDate}
          arrayDate={this.state.arrayDate}
        />
        <NameFilter
          className="NameFilter"
          handleNeoByName={this.handleNeoByName}
          handleSearchByName={this.handleSearchByName}
          findNeoByName={this.findNeoByName}
          searchedInputName={this.state.searchedName}
          foundNeo={this.state.foundNeo}
        />
        <SizeFilter
          className="SmallFilter"
          getSmallNeos={this.getSmallNeos}
          foundSmalls={this.state.foundSmalls}
          infoNeo={this.state.infoNeo}
          getMediumNeos={this.getMediumNeos}
          foundMediums={this.state.foundMediums}
          getBigNeos={this.getBigNeos}
          foundBigs={this.state.foundBigs}
        />
      </div>
    );
  }
}

export default ParentFilters;
