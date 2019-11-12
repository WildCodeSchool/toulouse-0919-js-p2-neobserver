import React, { Component } from 'react';
import axios from 'axios';
import DisplayCardNeo from './DisplayCardNeo';

class CardNeo extends Component {
  constructor(props) {
    super(props);
    this.state = { neo: null, arrayDate: null, arrayResults: null };
  }

  componentDidMount() {
    this.getObject();
  }

  getObject() {
    axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.state.arrayResults[0]}&end_date=${
          this.state.arrayResults[1]
        }&api_key=Jr2an55MZH7pzYVTcL1DvZazu0oEgJils4o4KdjI`
      )
      .then(response => response.data)
      .then(data => {
        this.setState({
          neo: data.near_earth_objects[`${this.arrayResults[0]}`]
        });
      });
  }

  render() {
    const { neo } = this.state;
    return <div>{neo ? <DisplayCardNeo neo={neo} /> : null}</div>;
  }
}
export default CardNeo;
