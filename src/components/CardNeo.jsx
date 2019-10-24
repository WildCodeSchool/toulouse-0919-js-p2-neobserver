import React, { Component } from 'react';
import axios from 'axios';
import DisplayCardNeo from './DisplayCardNeo';

class CardNeo extends Component {
  constructor(props) {
    super(props);
    this.state = { neo: null };
    this.getObject = this.getObject.bind(this);
  }

  componentDidMount() {
    this.getObject();
  }

  getObject() {
    axios
      .get(
        'https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-10-21&end_date=2019-10-22&api_key=Jr2an55MZH7pzYVTcL1DvZazu0oEgJils4o4KdjI'
      )
      .then(response => response.data)
      .then(data => {
        this.setState({
          neo: data.near_earth_objects['2019-10-22'][0]
        });
      });
  }

  render() {
    const { neo } = this.state;
    return <div>{neo ? <DisplayCardNeo neo={neo} /> : null}</div>;
  }
}

export default CardNeo;
