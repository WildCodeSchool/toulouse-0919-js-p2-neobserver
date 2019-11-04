import React, { Component } from 'react';

class Datepicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrDate: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ arrDate: event.target.value });
  }

  getDate() {
    let userDate = date.now();

    let date = new Date(userDate);
    let newDate = new Date(date);

    newDate.setDate(newDate.getDate() + 6);

    let y = newDate.getFullYear();
    let mm = newDate.getMonth() + 1;
    let dd = newDate.getDate();

    let formattedDate = `${y}-${mm}-${dd}`;
    // envoyer cette value dans un element
  }
  render() {
    return (
      <div>
        <input
          className="starDate"
          type="date"
          id="start"
          name="trip-start"
          value="{this.arrDate}"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Datepicker;
