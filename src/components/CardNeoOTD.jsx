import React, { Component } from 'react';
import axios from 'axios';
import DisplayCardNeoOTD from './DisplayCardNeoOTD';

class CardNeoOTD extends Component {
  constructor(props) {
    super(props);
    this.state = { neo: null };
    this.today = new Date();
    this.date = `${this.today.getFullYear()}-${this.today.getMonth() + 1}-${this.today.getDate()}`;
    this.getObject = this.getObject.bind(this);
  }

  componentDidMount() {
    this.getObject();
  }

  getObject() {
    axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.date}&end_date=${this.date}&api_key=Jr2an55MZH7pzYVTcL1DvZazu0oEgJils4o4KdjI`
      )
      .then(response => response.data)
      .then(data => {
        this.setState({
          neo: data.near_earth_objects[`${this.date}`][0]
        });
      });
  }

  render() {
    const { neo } = this.state;
    return <div>{neo ? <DisplayCardNeoOTD neo={neo} /> : null}</div>;
  }
}

export default CardNeoOTD;
